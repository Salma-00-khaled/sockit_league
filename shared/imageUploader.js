import API from '../API';

const uploadImage = async (path, uri, clearFolder = false) => {
  try {
    console.log('Uploading image to path:', path);
    const formData = new FormData();
    formData.append('image', {
      uri,
      type: 'image/jpeg',
      name: `${Date.now()}.jpg`,
    });

    const response = await API.post(
      `/image/${path}/upload?clearFolder=${clearFolder}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    if (response.status >= 200 && response.status < 300) {
      console.log('Image uploaded successfully:', response.data);
      return { success: true, data: response.data };
    }

    console.log('Image upload failed:', response.statusText);
    return { success: false, error: response.statusText };
  } catch (error) {
    console.log('Error uploading image:', error.message);
    return { success: false, error: error.message };
  }
};

export default uploadImage;
