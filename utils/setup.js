import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

const projectId = '67c362d0-7dc1-49f8-9818-c462bf194a02';

export const registerForPushNotificationsAsync = async () => {
  try {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }

    const token = (await Notifications.getExpoPushTokenAsync({ projectId }))
      .data;
    await saveKeyToStorage('notificationPushToken', token);
    return token;
  } catch (error) {
    console.log({ error });
  }
};

export const getStoredKey = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Failed to get permission from storage:', error);
    return null;
  }
};

export const saveKeyToStorage = async (key, value) => {
  if (!value) return;

  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Failed to save permission to storage:', error);
  }
};

export const removeKeyFromStorage = async (key) => {
  if (!key) return;

  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Failed to remove item from storage:', error);
  }
};

export const checkAndRequestPermissions = async () => {
  const pushToken = await getStoredKey('notificationPushToken');
  if (!pushToken) {
    await registerForPushNotificationsAsync();
  }
};

export const getDeviceIpAddress = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ipAddress = data.ip;
    await saveKeyToStorage('ipAddress', ipAddress);
    return ipAddress;
  } catch (error) {
    console.error('Error getting public IP address:', error);
    return null;
  }
};

export const colors = [
  { name: 'Black', value: '#000000' },
  { name: 'Navy', value: '#000080' },
  { name: 'DarkBlue', value: '#00008B' },
  { name: 'MediumBlue', value: '#0000CD' },
  { name: 'Blue', value: '#0000FF' },
  { name: 'DarkGreen', value: '#006400' },
  { name: 'Green', value: '#008000' },
  { name: 'Teal', value: '#008080' },
  { name: 'DarkCyan', value: '#008B8B' },
  { name: 'DeepSkyBlue', value: '#00BFFF' },
  { name: 'DarkTurquoise', value: '#00CED1' },
  { name: 'MediumSpringGreen', value: '#00FA9A' },
  { name: 'Lime', value: '#00FF00' },
  { name: 'SpringGreen', value: '#00FF7F' },
  { name: 'Aqua', value: '#00FFFF' },
  { name: 'Cyan', value: '#00FFFF' },
  { name: 'MidnightBlue', value: '#191970' },
  { name: 'DodgerBlue', value: '#1E90FF' },
  { name: 'LightSeaGreen', value: '#20B2AA' },
  { name: 'ForestGreen', value: '#228B22' },
  { name: 'SeaGreen', value: '#2E8B57' },
  { name: 'DarkSlateGray', value: '#2F4F4F' },
  { name: 'DarkSlateGrey', value: '#2F4F4F' },
  { name: 'LimeGreen', value: '#32CD32' },
  { name: 'MediumSeaGreen', value: '#3CB371' },
  { name: 'Turquoise', value: '#40E0D0' },
  { name: 'RoyalBlue', value: '#4169E1' },
  { name: 'SteelBlue', value: '#4682B4' },
  { name: 'DarkSlateBlue', value: '#483D8B' },
  { name: 'MediumTurquoise', value: '#48D1CC' },
  { name: 'Indigo', value: '#4B0082' },
  { name: 'DarkOliveGreen', value: '#556B2F' },
  { name: 'CadetBlue', value: '#5F9EA0' },
  { name: 'CornflowerBlue', value: '#6495ED' },
  { name: 'RebeccaPurple', value: '#663399' },
  { name: 'MediumAquaMarine', value: '#66CDAA' },
  { name: 'DimGray', value: '#696969' },
  { name: 'DimGrey', value: '#696969' },
  { name: 'SlateBlue', value: '#6A5ACD' },
  { name: 'OliveDrab', value: '#6B8E23' },
  { name: 'SlateGray', value: '#708090' },
  { name: 'SlateGrey', value: '#708090' },
  { name: 'LightSlateGray', value: '#778899' },
  { name: 'LightSlateGrey', value: '#778899' },
  { name: 'MediumSlateBlue', value: '#7B68EE' },
  { name: 'LawnGreen', value: '#7CFC00' },
  { name: 'Chartreuse', value: '#7FFF00' },
  { name: 'Aquamarine', value: '#7FFFD4' },
  { name: 'Maroon', value: '#800000' },
  { name: 'Purple', value: '#800080' },
  { name: 'Olive', value: '#808000' },
  { name: 'Gray', value: '#808080' },
  { name: 'Grey', value: '#808080' },
  { name: 'SkyBlue', value: '#87CEEB' },
  { name: 'LightSkyBlue', value: '#87CEFA' },
  { name: 'BlueViolet', value: '#8A2BE2' },
  { name: 'DarkRed', value: '#8B0000' },
  { name: 'DarkMagenta', value: '#8B008B' },
  { name: 'SaddleBrown', value: '#8B4513' },
  { name: 'DarkSeaGreen', value: '#8FBC8F' },
  { name: 'LightGreen', value: '#90EE90' },
  { name: 'MediumPurple', value: '#9370DB' },
  { name: 'DarkViolet', value: '#9400D3' },
  { name: 'PaleGreen', value: '#98FB98' },
  { name: 'DarkOrchid', value: '#9932CC' },
  { name: 'YellowGreen', value: '#9ACD32' },
  { name: 'Sienna', value: '#A0522D' },
  { name: 'Brown', value: '#A52A2A' },
  { name: 'DarkGray', value: '#A9A9A9' },
  { name: 'DarkGrey', value: '#A9A9A9' },
  { name: 'LightBlue', value: '#ADD8E6' },
  { name: 'GreenYellow', value: '#ADFF2F' },
  { name: 'PaleTurquoise', value: '#AFEEEE' },
  { name: 'LightSteelBlue', value: '#B0C4DE' },
  { name: 'PowderBlue', value: '#B0E0E6' },
  { name: 'FireBrick', value: '#B22222' },
  { name: 'DarkGoldenRod', value: '#B8860B' },
  { name: 'MediumOrchid', value: '#BA55D3' },
  { name: 'RosyBrown', value: '#BC8F8F' },
  { name: 'DarkKhaki', value: '#BDB76B' },
  { name: 'Silver', value: '#C0C0C0' },
  { name: 'MediumVioletRed', value: '#C71585' },
  { name: 'IndianRed', value: '#CD5C5C' },
  { name: 'Peru', value: '#CD853F' },
  { name: 'Chocolate', value: '#D2691E' },
  { name: 'Tan', value: '#D2B48C' },
  { name: 'LightGray', value: '#D3D3D3' },
  { name: 'LightGrey', value: '#D3D3D3' },
  { name: 'Thistle', value: '#D8BFD8' },
  { name: 'Orchid', value: '#DA70D6' },
  { name: 'GoldenRod', value: '#DAA520' },
  { name: 'PaleVioletRed', value: '#DB7093' },
  { name: 'Crimson', value: '#DC143C' },
  { name: 'Gainsboro', value: '#DCDCDC' },
  { name: 'Plum', value: '#DDA0DD' },
  { name: 'BurlyWood', value: '#DEB887' },
  { name: 'LightCyan', value: '#E0FFFF' },
  { name: 'Lavender', value: '#E6E6FA' },
  { name: 'DarkSalmon', value: '#E9967A' },
  { name: 'Violet', value: '#EE82EE' },
  { name: 'PaleGoldenRod', value: '#EEE8AA' },
  { name: 'LightCoral', value: '#F08080' },
  { name: 'Khaki', value: '#F0E68C' },
  { name: 'AliceBlue', value: '#F0F8FF' },
  { name: 'HoneyDew', value: '#F0FFF0' },
  { name: 'Azure', value: '#F0FFFF' },
  { name: 'SandyBrown', value: '#F4A460' },
  { name: 'Wheat', value: '#F5DEB3' },
  { name: 'Beige', value: '#F5F5DC' },
  { name: 'WhiteSmoke', value: '#F5F5F5' },
  { name: 'MintCream', value: '#F5FFFA' },
  { name: 'GhostWhite', value: '#F8F8FF' },
  { name: 'Salmon', value: '#FA8072' },
  { name: 'AntiqueWhite', value: '#FAEBD7' },
  { name: 'Linen', value: '#FAF0E6' },
  { name: 'LightGoldenRodYellow', value: '#FAFAD2' },
  { name: 'OldLace', value: '#FDF5E6' },
  { name: 'Red', value: '#FF0000' },
  { name: 'Fuchsia', value: '#FF00FF' },
  { name: 'Magenta', value: '#FF00FF' },
  { name: 'DeepPink', value: '#FF1493' },
  { name: 'OrangeRed', value: '#FF4500' },
  { name: 'Tomato', value: '#FF6347' },
  { name: 'HotPink', value: '#FF69B4' },
  { name: 'Coral', value: '#FF7F50' },
  { name: 'DarkOrange', value: '#FF8C00' },
  { name: 'LightSalmon', value: '#FFA07A' },
  { name: 'Orange', value: '#FFA500' },
  { name: 'LightPink', value: '#FFB6C1' },
  { name: 'Pink', value: '#FFC0CB' },
  { name: 'Gold', value: '#FFD700' },
  { name: 'PeachPuff', value: '#FFDAB9' },
  { name: 'NavajoWhite', value: '#FFDEAD' },
  { name: 'Moccasin', value: '#FFE4B5' },
  { name: 'Bisque', value: '#FFE4C4' },
  { name: 'MistyRose', value: '#FFE4E1' },
  { name: 'BlanchedAlmond', value: '#FFEBCD' },
  { name: 'PapayaWhip', value: '#FFEFD5' },
  { name: 'LavenderBlush', value: '#FFF0F5' },
  { name: 'SeaShell', value: '#FFF5EE' },
  { name: 'Cornsilk', value: '#FFF8DC' },
  { name: 'LemonChiffon', value: '#FFFACD' },
  { name: 'FloralWhite', value: '#FFFAF0' },
  { name: 'Snow', value: '#FFFAFA' },
  { name: 'Yellow', value: '#FFFF00' },
  { name: 'LightYellow', value: '#FFFFE0' },
  { name: 'Ivory', value: '#FFFFF0' },
  { name: 'White', value: '#FFFFFF' },
];

export const cubanStates = [
  {
    stateName: 'Pinar del Río',
    areas: [
      {
        title: 'Consolación del Sur',
        place_id: 'ChIJf5UH3VurzIgRNp2TGBxRxok',
      },
      {
        title: 'Guane',
        place_id: 'ChIJDbZxAz_DNI8RFoUw-_bxYWQ',
      },
      {
        title: 'La Palma',
        place_id: 'ChIJp6rX2x-nzIgR1DWawIOReDQ',
      },
      {
        title: 'Los Palacios',
        place_id: 'ChIJ4XJqZf3JzIgRk7w-71TuL5g',
      },
      {
        title: 'Mantua',
        place_id: 'ChIJa0p-y5MnNY8R7dwiemir1iQ',
      },
      {
        title: 'Minas de Matahambre',
        place_id: 'ChIJGSME1uU1y4gRPA5e0cymlc0',
      },
      {
        title: 'Pinar del Río',
        place_id: 'ChIJ1zhQAvqrNI8RHGekflBTeFs',
      },
      {
        title: 'San Juan y Martínez',
        place_id: 'ChIJ0VGXHye6NI8R-Y4ngumOT24',
      },
      {
        title: 'San Luis',
        place_id: 'ChIJKdte7Li6NI8R49zJ5d_rK1Q',
      },
      {
        title: 'Sandino',
        place_id: 'ChIJ6cOQIwThNI8Re4gnJS9lvJA',
      },
      {
        title: 'Viñales',
        place_id: 'ChIJIfwSLgtRy4gRZ-rAdvh9f0U',
      },
    ],
    place_id: 'ChIJ1zhQAvqrNI8RHGekflBTeFs',
  },
  {
    stateName: 'Artemisa',
    areas: [
      {
        title: 'Alquízar',
        place_id: 'ChIJzZbm2JQ_zYgRZIue7w-3IOE',
      },
      {
        title: 'Artemisa',
        place_id: 'ChIJo0Lye5IizYgRiTvPWdKamgM',
      },
      {
        title: 'Bahía Honda',
        place_id: 'ChIJ6Y_gsX_pzIgRmNXMSb-VnNY',
      },
      {
        title: 'Bauta',
        place_id: 'ChIJLRH_tCRtzYgRSketJI77Vj0',
      },
      {
        title: 'Caimito',
        place_id: 'ChIJ40RW3w4TzYgR1S3b65nlayA',
      },
      {
        title: 'Guanajay',
        place_id: 'ChIJM0kc0y0RzYgRY9yOnwMZl-Y',
      },
      {
        title: 'Güira de Melena',
        place_id: 'ChIJzU3wYLhBzYgRFIY6d12Z0DA',
      },
      {
        title: 'Mariel',
        place_id: 'ChIJX1RERIkazYgRHm474ZxHXUQ',
      },
      {
        title: 'San Antonio de los Baños',
        place_id: 'ChIJU4bTe7drzYgRrooi6pb8seo',
      },
      {
        title: 'San Cristóbal',
        place_id: 'ChIJc0vRaRDbzIgRJco6Lj41qGc',
      },
    ],
    place_id: 'ChIJo0Lye5IizYgRiTvPWdKamgM',
  },
  {
    stateName: 'La Habana',
    areas: [
      {
        title: 'Arroyo Naranjo',
        place_id: 'ChIJE5Q1p0N7zYgRcN3ENjC2w2w',
      },
      {
        title: 'Boyeros',
        place_id: 'ChIJ9yNefOZvzYgRxdqLqaFowMc',
      },
      {
        title: 'Centro Habana',
        place_id: 'ChIJl4dpDMd5zYgR_gdYUUzdjCI',
      },
      {
        title: 'Cerro',
        place_id: 'ChIJU_Vi_QF6zYgRb5gg49jusLs',
      },
      {
        title: 'Cotorro',
        place_id: 'ChIJFeR-c_R8zYgR_ucBu97RA0Y',
      },
      {
        title: 'Diez de Octubre',
        place_id: 'ChIJSfyQVu15zYgR20fCegFGdgA',
      },
      {
        title: 'Guanabacoa',
        place_id: 'ChIJIbk2tJt-zYgRlrfIWusTvFs',
      },
      {
        title: 'Habana del Este',
        place_id: 'ChIJR7OnrjN_zYgRRrq648Duucc',
      },
      {
        title: 'Habana Vieja',
        place_id: 'ChIJWVKSMKN5zYgRPda3dswpIhQ',
      },
      {
        title: 'La Lisa',
        place_id: 'ChIJeYJFLfFxzYgRRsdfBPdprIQ',
      },
      {
        title: 'Marianao',
        place_id: 'ChIJbRt4DQBxzYgRp1qpYr2tCs0',
      },
      {
        title: 'Playa',
        place_id: 'ChIJp_XDYc9zzYgRk0lwLEoM9rc',
      },
      {
        title: 'Plaza de la Revolución',
        place_id: 'ChIJ57TtJFx3zYgRgAa6ssVzpmw',
      },
      {
        title: 'Regla',
        place_id: 'ChIJpwl4Ox55zYgR_8VrUZQvWSQ',
      },
      {
        title: 'San Miguel del Padrón',
        place_id: 'ChIJU2zK-uV7zYgRVgJh1EY81yQ',
      },
    ],
    place_id: 'ChIJ4QD2vUx3zYgRYA13Gn5NKU4',
  },
  {
    stateName: 'Mayabeque',
    areas: [
      {
        title: 'Batabanó',
        place_id: 'ChIJPexyKGpZzYgR0E0cxBXmDBo',
      },
      {
        title: 'Bejucal',
        place_id: 'ChIJW-VMdPRlzYgRtDaA_eyIpRI',
      },
      {
        title: 'Güines',
        place_id: 'ChIJxWm57Y6X0ogRDAzQplvGDFQ',
      },
      {
        title: 'Jaruco',
        place_id: 'ChIJQ_XhFA-P0ogROwp_9f8qjWU',
      },
      {
        title: 'Madruga',
        place_id: 'ChIJo5mVq8bs0ogRUdv9-S79Xi0',
      },
      {
        title: 'Melena del Sur',
        place_id: 'ChIJNTaidpWh0ogRWyQZYXbQQ5s',
      },
      {
        title: 'Nueva Paz',
        place_id: 'ChIJedp8n2nC0ogRrYkNFHRXrlQ',
      },
      {
        title: 'Quivicán',
        place_id: 'ChIJv53GD35dzYgROrwqVqS0lXI',
      },
      {
        title: 'San José de las Lajas',
        place_id: 'ChIJC1Gcseyc0ogRfFwoJMKPic4',
      },
      {
        title: 'San Nicolás',
        place_id: 'ChIJzbTcXyu-0ogRSvF6o1g6pWU',
      },
      {
        title: 'Santa Cruz del Norte',
        place_id: 'ChIJ51ggn2mK0ogRd0gmLJRNtlI',
      },
    ],
    place_id: 'ChIJCXq2s9mW0ogRhOifoEZHaZg',
  },
  {
    stateName: 'Matanzas',
    areas: [
      {
        title: 'Cárdenas',
        place_id: 'ChIJoy8zSn4L04gRVUZM_eWtHgA',
      },
      {
        title: 'Ciénaga de Zapata',
        place_id: 'ChIJ_RXwprTTLI8RWbA7rTi0ZfA',
      },
      {
        title: 'Colón',
        place_id: 'ChIJAWPm6d9d04gRMN40TwweDjM',
      },
      {
        title: 'Jagüey Grande',
        place_id: 'ChIJnTLXkU9I04gRT9s0IxTIuSU',
      },
      {
        title: 'Jovellanos',
        place_id: 'ChIJBQiQEOQU04gRfRTTMvfBPng',
      },
      {
        title: 'Limonar',
        place_id: 'ChIJDSbF4Egb04gRcwUHYI0rowk',
      },
      {
        title: 'Martí',
        place_id: 'ChIJlxv-QkB704gRxzEbYJp_6QA',
      },
      {
        title: 'Matanzas',
        place_id: 'ChIJU-DxkRf80ogRhs-66VSeXeI',
      },
      {
        title: 'Pedro Betancourt',
        place_id: 'ChIJlRxIeKM904gR01oBxw57C_c',
      },
      {
        title: 'Perico',
        place_id: 'ChIJ9T9dbjlo04gROfEsxm_HLp8',
      },
      {
        title: 'Unión de Reyes',
        place_id: 'ChIJfWU2i9cg04gRMTws-teh57w',
      },
    ],
    place_id: 'ChIJU-DxkRf80ogRhs-66VSeXeI',
  },
  {
    stateName: 'Villa Clara',
    areas: [
      {
        title: 'Camajuaní',
        place_id: 'ChIJY9kbURJI1YgR5h4O31JTi3M',
      },
      {
        title: 'Caibarién',
        place_id: 'ChIJEcz_XmNZ1YgR4iV7b-LvfIA',
      },
      {
        title: 'Cifuentes',
        place_id: 'ChIJ7_Wg26kh1YgRvJRNX60hV6s',
      },
      {
        title: 'Corralillo',
        place_id: 'ChIJ302TD96O1IgRIVfw7W6l1Ro',
      },
      {
        title: 'Encrucijada',
        place_id: 'ChIJVQLvyVk81YgRkEVkrxs9HGs',
      },
      {
        title: 'Manicaragua',
        place_id: 'ChIJMSXz8-3QKo8RRTw4IPi1fQY',
      },
      {
        title: 'Placetas',
        place_id: 'ChIJU5R8AWFL1YgR04Dkrn6061g',
      },
      {
        title: 'Quemado de Güines',
        place_id: 'ChIJP7KS_3Lm1IgRgVwH070YJSk',
      },
      {
        title: 'Ranchuelo',
        place_id: 'ChIJF_isx07U1IgR7KTKmpnvGwA',
      },
      {
        title: 'Remedios',
        place_id: 'ChIJNx9WU79a1YgRwfJJPFVhPcg',
      },
      {
        title: 'Sagua la Grande',
        place_id: 'ChIJifjfUccd1YgRbm8WL2YPr2c',
      },
      {
        title: 'Santa Clara',
        place_id: 'ChIJl_9U-Cos1YgRWtA2L4j-qbg',
      },
      {
        title: 'Santo Domingo',
        place_id: 'ChIJ5_e4lRTb1IgR82od8gyZRFE',
      },
    ],
    place_id: 'ChIJifjfUccd1YgR944ryeeultc',
  },
  {
    stateName: 'Cienfuegos',
    areas: [
      {
        title: 'Abreus',
        place_id: 'ChIJT3QXP0JMK48RjxAJ6pqyASU',
      },
      {
        title: 'Aguada de Pasajeros',
        place_id: 'ChIJuYPGfhlV04gRUAMXuCacSbU',
      },
      {
        title: 'Cienfuegos',
        place_id: 'ChIJRycjivc3K48Rdakih0-H6xY',
      },
      {
        title: 'Cruces',
        place_id: 'ChIJIzq9jaTS1IgR7g16JSlup6w',
      },
      {
        title: 'Cumanayagua',
        place_id: 'ChIJbWDNK0QvK48RgVIvxhNr5mw',
      },
      {
        title: 'Lajas',
        place_id: 'ChIJBbHQaubN1IgR5-X3q-pJgHY',
      },
      {
        title: 'Palmira',
        place_id: 'ChIJpX82eSE0K48RlPqQcF8Jy6s',
      },
      {
        title: 'Rodas',
        place_id: 'ChIJ_VeQbk2z1IgRM3GW53bVbI4',
      },
    ],
    place_id: 'ChIJRycjivc3K48Rdakih0-H6xY',
  },
  {
    stateName: 'Sancti Spíritus',
    areas: [
      {
        title: 'Cabaiguán',
        place_id: 'ChIJfaUKyI6lKo8R8hoRISM6nxc',
      },
      {
        title: 'Fomento',
        place_id: 'ChIJe-0UgfW3Ko8Rure5MYEKEE4',
      },
      {
        title: 'Jatibonico',
        place_id: 'ChIJMWc9zxZD1Y4RVLmRnwAbTOQ',
      },
      {
        title: 'La Sierpe',
        place_id: 'ChIJtTuiFUJ71Y4RkRB8u_oALsU',
      },
      {
        title: 'Sancti Spíritus',
        place_id: 'ChIJFSlgz6OhKo8RRwzWZbx1njk',
      },
      {
        title: 'Taguasco',
        place_id: 'ChIJW_I1CpVb1Y4RjAM_mmtVYLs',
      },
      {
        title: 'Trinidad',
        place_id: 'ChIJxeCp7ULkKo8RiVCxsgZ162c',
      },
      {
        title: 'Yaguajay',
        place_id: 'ChIJzydngqWtKokRwVujHV1Iy6Y',
      },
    ],
    place_id: 'ChIJFSlgz6OhKo8RRwzWZbx1njk',
  },
  {
    stateName: 'Ciego de Ávila',
    areas: [
      {
        title: 'Baraguá',
        place_id: 'ChIJg2M_mvLi1I4RKeCORHvX-q8',
      },
      {
        title: 'Bolivia',
        place_id: 'ChIJ_zMG4RHJ1I4RroAIdJ64Flc',
      },
      {
        title: 'Chambas',
        place_id: 'ChIJX3yE6XYz1Y4R4eereEPEjl8',
      },
      {
        title: 'Ciego de Ávila',
        place_id: 'ChIJ0TAxAPDe1I4R9Ti2Pb8kv-o',
      },
      {
        title: 'Ciro Redondo',
        place_id: 'ChIJS_H0pzQm1Y4RJ0XziDZS5DQ',
      },
      {
        title: 'Florencia',
        place_id: 'ChIJefA2A4A21Y4RV_kRZdMEUmI',
      },
      {
        title: 'Majagua',
        place_id: 'ChIJ230mKZ4_1Y4Ro-QU80IzpiY',
      },
      {
        title: 'Morón',
        place_id: 'ChIJbzZLEmbW1I4RprnYlauvs8g',
      },
      {
        title: 'Primero de Enero',
        place_id: 'ChIJMwZWRfXE1I4Rleihyhhyz_I',
      },
      {
        title: 'Venezuela',
        place_id: 'ChIJ-dulVtob1Y4RZkYfImRXTt8',
      },
    ],
    place_id: 'ChIJ0TAxAPDe1I4R9Ti2Pb8kv-o',
  },
  {
    stateName: 'Camagüey',
    areas: [
      {
        title: 'Camagüey',
        place_id: 'ChIJQ1kLN26A044RJ_UVfdIyejk',
      },
      {
        title: 'Carlos Manuel de Céspedes',
        place_id: 'ChIJNfsG6tuM1I4Rh5lbaVfVR6Q',
      },
      {
        title: 'Esmeralda',
        place_id: 'ChIJ8axiUqW81I4R_GJ8LpmL7ts',
      },
      {
        title: 'Florida',
        place_id: 'ChIJ53QF-fKL1I4REualsQTsPnk',
      },
      {
        title: 'Guáimaro',
        place_id: 'ChIJZewO1Au3044R9OAKtQMWpdg',
      },
      {
        title: 'Jimaguayú',
        place_id: 'ChIJoyeVGeaF044RYciOSzU6Rl8',
      },
      {
        title: 'Minas',
        place_id: 'ChIJ9Sk1T390044RkPco4Aw2RTo',
      },
      {
        title: 'Najasa',
        place_id: 'ChIJTy64F4eN044RVLSXWI26ePE',
      },
      {
        title: 'Nuevitas',
        place_id: 'ChIJSyX8UzcD044RAEstRXx6Iy8',
      },
      {
        title: 'Santa Cruz del Sur',
        place_id: 'ChIJl1-gYZ8B1I4RBTif0A8mWNM',
      },
      {
        title: 'Sibanicú',
        place_id: 'ChIJlZ6a1eSi044RiKN9MsxWo7A',
      },
      {
        title: 'Sierra de Cubitas',
        place_id: 'ChIJwejdVe9m044RcmNfKyOj2xg',
      },
      {
        title: 'Vertientes',
        place_id: 'ChIJN2tcunFl1I4RM0cxkfu37v0',
      },
    ],
    place_id: 'ChIJQ1kLN26A044RJ_UVfdIyejk',
  },
  {
    stateName: 'Las Tunas',
    areas: [
      {
        title: 'Amancio',
        place_id: 'ChIJlTovjeHn044R3YuGmayvjng',
      },
      {
        title: 'Colombia',
        place_id: 'ChIJ47WFAZvH044Rhq7kKTnz6Zc',
      },
      {
        title: 'Jesús Menéndez',
        place_id: 'ChIJJQeeD2R40o4Rbo1K99-0uf0',
      },
      {
        title: 'Jobabo',
        place_id: 'ChIJW3sPHfzL044Rpl4Ld5RWu6w',
      },
      {
        title: 'Las Tunas',
        place_id: 'ChIJieexl4Q40o4RtDwt60YwuFY',
      },
      {
        title: 'Majibacoa',
        place_id: 'ChIJNUY54U0W0o4RA_Jh0cl2BlE',
      },
      {
        title: 'Manatí',
        place_id: 'ChIJH7J8ucBY0o4RXCF8M2ZeA7Y',
      },
      {
        title: 'Puerto Padre',
        place_id: 'ChIJKY4Gjg570o4RRDYjBykTEvs',
      },
    ],
    place_id: 'ChIJieexl4Q40o4RtDwt60YwuFY',
  },
  {
    stateName: 'Holguín',
    areas: [
      {
        title: 'Antilla',
        place_id: 'ChIJAbewFNvKzY4RrXzvOwSiuOw',
      },
      {
        title: 'Báguanos',
        place_id: 'ChIJLcEMrQnDzY4RPuwjP6vgZZA',
      },
      {
        title: 'Banes',
        place_id: 'ChIJmaPF9VSzzY4R2Cgf-sqJh24',
      },
      {
        title: 'Calixto García',
        place_id: 'ChIJWzAWn2jtzY4RUeV8qrVWR-c',
      },
      {
        title: 'Cacocum',
        place_id: 'ChIJUQE57oXwzY4R8mnK5awtmug',
      },
      {
        title: 'Cueto',
        place_id: 'ChIJPWTtvlbazY4RM9sj7t-7aVk',
      },
      {
        title: 'Frank País',
        place_id: 'ChIJJfhRbEoXzI4R3BKHz-YPvks',
      },
      {
        title: 'Gibara',
        place_id: 'ChIJRyFLyUqYzY4RAR-tVAjQ2QU',
      },
      {
        title: 'Holguín',
        place_id: 'ChIJuV30UGjtzY4Rh_hJBlgh_TA',
      },
      {
        title: 'Mayarí',
        place_id: 'ChIJbdEqpmwtzI4R6kzY_0_DUnY',
      },
      {
        title: 'Moa',
        place_id: 'ChIJ3_Y2HAT3y44RffG-M8YoH5g',
      },
      {
        title: 'Rafael Freyre',
        place_id: 'ChIJ57hU2368zY4RL2ThnVvgCE0',
      },
      {
        title: 'Sagua de Tánamo',
        place_id: 'ChIJcdKBf8UbzI4RsoQ55jxn65M',
      },
      {
        title: 'Urbano Noris',
        place_id: 'ChIJAwcWDD7jzY4RFRtGBTbNbEo',
      },
    ],
    place_id: 'ChIJuV30UGjtzY4Rh_hJBlgh_TA',
  },
  {
    stateName: 'Granma',
    areas: [
      {
        title: 'Bartolomé Masó',
        place_id: 'ChIJhXuSIkq80Y4RL1Nh1Of_Miw',
      },
      {
        title: 'Bayamo',
        place_id: 'ChIJo3r2Cf3v0Y4Rb98bikT2dFE',
      },
      {
        title: 'Buey Arriba',
        place_id: 'ChIJ_52N4JDB0Y4R0rKxCT-XmEQ',
      },
      {
        title: 'Campechuela',
        place_id: 'ChIJVRTKw1AL0Y4R7Gi9-RMyaYg',
      },
      {
        title: 'Cauto Cristo',
        place_id: 'ChIJuw856hwA0o4Rwa791f5JQJs',
      },
      {
        title: 'Guisa',
        place_id: 'ChIJDR4aRGfh0Y4RtMhknnDQ-_A',
      },
      {
        title: 'Jiguaní',
        place_id: 'ChIJQ3SxIcsCzo4Ry7iEwByxI_A',
      },
      {
        title: 'Manzanillo',
        place_id: 'ChIJO6s-CA6c0Y4RLlwG05Y3_EY',
      },
      {
        title: 'Media Luna',
        place_id: 'ChIJ40y0pG4R0Y4RS13BTI_KOW8',
      },
      {
        title: 'Niquero',
        place_id: 'ChIJxe4F65Ii0Y4R9g55Wz6ahE8',
      },
      {
        title: 'Pilón',
        place_id: 'ChIJex2gU1kC0Y4RhYgZpt4DKCM',
      },
      {
        title: 'Río Cauto',
        place_id: 'ChIJcXmtbCeK0Y4R7M7P5hbk0lk',
      },
      {
        title: 'Yara',
        place_id: 'ChIJT_hUb_CW0Y4RdiuvaJX5yOA',
      },
    ],
    place_id: 'ChIJESEgfP_v0Y4RtFu5aKPaDvI',
  },
  {
    stateName: 'Santiago de Cuba',
    areas: [
      {
        title: 'Contramaestre',
        place_id: 'ChIJqbigi4wQzo4R9U_5Jnpydmw',
      },
      {
        title: 'Guamá',
        place_id: 'ChIJHc0umFHX0Y4RIZd8n6G2CTE',
      },
      {
        title: 'Mella',
        place_id: 'ChIJRekEqnxwzo4Rf5VHNi95Oa4',
      },
      {
        title: 'Palma Soriano',
        place_id: 'ChIJKV844ZNlzo4RumeORie8bQM',
      },
      {
        title: 'San Luis',
        place_id: 'ChIJvY06Sf5mzo4R5sabdQhekUk',
      },
      {
        title: 'Segundo Frente',
        place_id: 'ChIJ40SAHiydzo4RqpFxuXJ3JvM',
      },
      {
        title: 'Songo-La Maya',
        place_id: 'ChIJK1ACr4CKzo4RDLCWCbYWNtM',
      },
      {
        title: 'Santiago de Cuba',
        place_id: 'ChIJa2WSkedbzo4ROBoLRuxbGec',
      },
      {
        title: 'Tercer Frente',
        place_id: 'ChIJUWo027Aizo4RZk2E8GhQClc',
      },
    ],
    place_id: 'ChIJa2WSkedbzo4ROBoLRuxbGec',
  },
  {
    stateName: 'Guantánamo',
    areas: [
      {
        title: 'Baracoa',
        place_id: 'ChIJ6SH-rIBhyY4RvorRBNS4Cqw',
      },
      {
        title: 'Caimanera',
        place_id: 'ChIJS8zfXQPGzo4Rs_GtUVTtF3o',
      },
      {
        title: 'El Salvador',
        place_id: 'ChIJx3NDP727zo4R4qVPuIFkGMA',
      },
      {
        title: 'Guantánamo',
        place_id: 'ChIJTSYoPDHOzo4RseZSPirbXeo',
      },
      {
        title: 'Imías',
        place_id: 'ChIJa5YQrVZAyY4RBCL97EcEWus',
      },
      {
        title: 'Maisí',
        place_id: 'ChIJs-lTHciDyY4Rq1kawRgTFVQ',
      },
      {
        title: 'Manuel Tames',
        place_id: 'ChIJsQbdMLJMyY4RS4hoCvxfXvQ',
      },
      {
        title: 'Niceto Pérez',
        place_id: 'ChIJoxmWs2KVzo4RCRcAXEH0I9s',
      },
      {
        title: 'San Antonio del Sur',
        place_id: 'ChIJc5J7rjxIyY4RE4hyuV6bIb4',
      },
      {
        title: 'Yateras',
        place_id: 'ChIJt7u9TDRUyY4RQCTs2BZt0qU',
      },
    ],
    place_id: 'ChIJWbQ0dg65zo4RjXGeOrqW3Vo',
  },
  {
    stateName: 'Isla de la Juventud',
    areas: [
      {
        title: 'Isla de la Juventud',
        place_id: 'ChIJy7y6aZVVMo8RRpZSJEwY0gU',
      },
    ],
    place_id: 'ChIJy7y6aZVVMo8RRpZSJEwY0gU',
  },
];
