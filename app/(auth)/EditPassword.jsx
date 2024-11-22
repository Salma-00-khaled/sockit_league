import React, { useEffect, useState } from 'react';
import { Box, VStack,   Text, HStack, } from 'native-base';

import BackButton from '../../components/BackButton';
import CustomButton from '../../shared/CustomButton';
import Input from '../../shared/Input';
import useShowToast from '../../customHooks/showToast';
import { getPasswordError } from "../../validations/signupValidation/getPasswordError";
import { validatePassword } from '../../shared/InputValidations';

export default function EditPassword({ navigation }) {
    const [password, setPassword] = useState("");
    const [Newpassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const showToast = useShowToast();

    useEffect(() => {
        const newErrors = {};
    
        const passwordError = getPasswordError(password);
        if (passwordError) newErrors.password = passwordError;
       
        setErrors(newErrors);
      }, [ password]);

      const handleSavechanges = async () => {

        if (!Newpassword || !confirmPassword || !password) {
            showToast("Error", "please fill all inputs!");
        }else if (Newpassword !== confirmPassword) {
            showToast("Error", "Passwords do not match!");
        
        }
         else {
          console.log(
            `  NewPassword: ${Newpassword},confirmPassword:${confirmPassword}`
          );
        }}


  return (
    <Box flex={1} bg="#1A202C" safeArea p="4">
      {/* Header */}
      
      <BackButton size={20} className="mt-6" color="black" />
      <HStack alignItems="center" mb="6">
        <Text fontSize="2xl" fontWeight="bold" color="white" ml="4">
          Edit your password
        </Text>
      </HStack>

      {/* Form */}
      <VStack space={4}>
        
      <Input
          placeholder="Current Password"
          value={password}
          onChangeText={(e)=>setPassword(e)}
          type="password"
          showPasswordToggle={true}
          isInvalid={!!errors.password}
          errorMessage={errors.password}
        />
        <Input
          placeholder="New Password"
          value={Newpassword}
          onChangeText={(e)=>setNewPassword(e)}
          type="password"
          showPasswordToggle={true}
          isInvalid={!!errors.password}
          errorMessage={errors.password}
        />
        <Input
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChangeText={(e)=>setConfirmPassword(e)}
          type="password"
          showPasswordToggle={true}
          isInvalid={!!errors.confirmPassword}
          errorMessage={errors.confirmPassword}
        />
        <CustomButton
        onPress={handleSavechanges} >
          Save changes
        </CustomButton>
      </VStack>
    </Box>
  );
      }