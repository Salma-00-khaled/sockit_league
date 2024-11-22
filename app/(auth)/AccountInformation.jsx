import React, { useState } from 'react';
import { Box, VStack,   Text, HStack, } from 'native-base';

import BackButton from '../../components/BackButton';
import CustomButton from '../../shared/CustomButton';
import Input from '../../shared/Input';

export default function AccountInfoScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  return (
    <Box flex={1} bg="#1A202C" safeArea p="4">
      {/* Header */}
      
      <BackButton size={20} className="mt-6" color="black" />
      <HStack alignItems="center" mb="6">
        <Text fontSize="2xl" fontWeight="bold" color="white" ml="4">
          Account information
        </Text>
      </HStack>

      {/* Form */}
      <VStack space={4}>
        <Text color="white" fontSize="md" fontWeight="medium">
          Name
        </Text>
        <Input
          placeholder="Username"
          value={name}
          onChangeText={(e)=>setName(e)}
          isInvalid={!!errors.username}
          errorMessage={errors.username}
        />
        <Text color="white" fontSize="md" fontWeight="medium">
          E-mail address
        </Text>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(e)=>setEmail(e)}
          isInvalid={!!errors.email}
          errorMessage={errors.email}
        />
        <CustomButton >
          Save changes
        </CustomButton>
      </VStack>
    </Box>
  );
}
