

//   return (
//     <Box flex={1} bg="#181928" >
//       {/* Profile Photo */}
//       <Center mt={5}>
//         <Avatar
//           size="xl"
//           source={{
//             uri: imageUri || 'https://via.placeholder.com/120', // Replace with the user's photo URL
//           }}
//         />
//         <Button mt={3} onPress={handleImageUpload} >
//           Upload Image
//         </Button>
//         <Text mt={2} fontSize="lg" fontWeight="bold" color="white">
//           {/* Add user's name here */}
//          {}
//         </Text>
//       </Center>






import React, { useState } from 'react';
import { Box, Center, VStack, Avatar, Text, Button, Divider, Pressable, Alert } from 'native-base';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {

  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState(null);

  // const handleDeleteAccount = () => {
  //   Alert.alert(
  //     'Delete Account',
  //     'Are you sure you want to delete your account?',
  //     [
  //       { text: 'Cancel', style: 'cancel' },
  //       { text: 'Delete', onPress: () => console.log('Account deleted') },
  //     ],
  //     { cancelable: true }
  //   )
  // };
  //   const handleImageUpload = () => {
//     launchImageLibrary(
//       {
//         mediaType: 'photo',
//         quality: 1,
//       },
//       (response) => {
//         if (response.didCancel) {
//           console.log('User cancelled image picker');
//         } else if (response.errorMessage) {
//           console.log('ImagePicker Error: ', response.errorMessage);
//         } else {
//           const selectedImageUri = response.assets[0].uri;
//           setImageUri(selectedImageUri); // Update state with the selected image URI
//         }
//       }
//     );
//   };


  return (
    <Box flex={1} bg="#181928" safeArea>
      {/* Header */}
      <Center mt="10" bgGradient="linear(to-r, #667eea, #764ba2)" p="8" borderBottomRadius="2xl">
        <Avatar
          size="2xl"
          source={{
            uri: 'https://example.com/your-image-url.jpg', // Replace with actual image URL
          }}
        />
        <Text mt="4" fontSize="lg" fontWeight="bold" color="white">
          {}
        </Text>
      </Center>

      {/* Body */}
      <VStack space={4} px="4" mt="8">
        <Pressable
          bg="#181928"
          justifyContent="flex-start"
          _text={{ color: 'white', fontWeight: 'medium' }}
          _pressed={{ bg: '#181928' }}
          onPress={() => navigation.navigate('AccountInformation')}
        >
          <Text fontSize="md" p={3} color="white">
            Account Information
          </Text>
        </Pressable>
        <Divider bg="#ddd" />
        <Pressable
          bg="#181928"
          justifyContent="flex-start"
          _text={{ color: 'white', fontWeight: 'medium' }}
          _pressed={{ bg: '#4A5568' }}
          onPress={() => navigation.navigate('EditPassword')}
        >
           <Text fontSize="md" p={3} color="white">
           Edit Password
         </Text>
        </Pressable>
        <Divider bg="#ddd" />
        <Pressable
          bg="#181928"
          justifyContent="flex-start"
          _text={{ color: 'white', fontWeight: 'medium' }}
          _pressed={{ bg: '#4A5568' }}
          
        >
          <Text fontSize="md" p={3} color="white">
         Delete Account
      </Text>
        </Pressable>
        <Divider bg="#ddd"/>
        <Pressable
          bg="#181928"
          justifyContent="flex-start"
          _text={{ color: 'white', fontWeight: 'medium' }}
          _pressed={{ bg: '#4A5568' }}
          >
      
         <Text fontSize="md" p={3} color="white">
           Log out
         </Text>
        </Pressable>
       
        <Divider bg="#ddd"/>
      </VStack>
    </Box>
  );
}
