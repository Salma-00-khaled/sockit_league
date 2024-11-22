import React, { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  StyleSheet,
  Image,
  Modal,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Center,
  VStack,
  useDisclose,
  Actionsheet,
  Avatar,
  Icon,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons for the upload icon

function UploadImage({ setUploadedImage, uploadedImage }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclose();

  useEffect(() => {
    const getCameraPermissionAsync = async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission Denied',
          'Sorry, we need camera permissions to make this work!',
        );
      }
    };
    getCameraPermissionAsync();
  }, []);

  const pickImage = useCallback(
    async (fromCamera = false) => {
      const result = fromCamera
        ? await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          })
        : await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });

      if (!result.canceled && result.assets) {
        const { uri } = result.assets[0];

        setUploadedImage(uri);
        onClose();
      }
    },
    [setUploadedImage, onClose],
  );

  const previewImage = () => {
    setModalVisible(true);
    onClose();
  };

  return (
    <Center>
      <Box>
        <TouchableWithoutFeedback onPress={onOpen}>
          {uploadedImage ? (
            <Image
              source={{ uri: uploadedImage }}
              style={styles.image}
              resizeMode='cover'
            />
          ) : (
            <Avatar size={'lg'} bg='gray.200'>
              <Icon
                as={MaterialIcons}
                name='cloud-upload'
                size='lg'
                color='gray.500'
              />
            </Avatar>
          )}
        </TouchableWithoutFeedback>

        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <VStack space={2} w='100%' px={4}>
              {uploadedImage && (
                <Button
                  onPress={previewImage}
                  variant='ghost'
                  w='100%'
                  justifyContent='flex-start'
                >
                  Preview Image
                </Button>
              )}
              <Button
                onPress={() => pickImage(false)}
                variant='ghost'
                w='100%'
                justifyContent='flex-start'
              >
                Choose from gallery
              </Button>
              <Button
                onPress={() => pickImage(true)}
                variant='ghost'
                w='100%'
                justifyContent='flex-start'
              >
                Take image
              </Button>
            </VStack>
          </Actionsheet.Content>
        </Actionsheet>

        <Modal
          visible={modalVisible}
          transparent={true}
          animationType='slide'
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Image
              source={{ uri: uploadedImage }}
              style={styles.fullImage}
              resizeMode='contain'
            />
            <Button onPress={() => setModalVisible(false)} mt={4}>
              Close
            </Button>
          </View>
        </Modal>
      </Box>
    </Center>
  );
}

UploadImage.propTypes = {
  setUploadedImage: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  fullImage: {
    width: '90%',
    height: '70%',
  },
});

// Add PropTypes validation
UploadImage.propTypes = {
  setUploadedImage: PropTypes.func.isRequired,
  uploadedImage: PropTypes.string, // Add validation for `uploadedImage`
};

// Default props (optional)
UploadImage.defaultProps = {
  uploadedImage: null, // Default to `null` if not provided
};
export default UploadImage;
