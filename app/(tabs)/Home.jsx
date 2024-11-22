import React from 'react';
import { ImageBackground } from 'react-native';
import { Button, Center, VStack } from 'native-base';
import CustomButton from '../../shared/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../assets/images/home-pic.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <Center flex={1}>
        
          {/* Start Match Button */}
          
           <VStack space={4} width="80%" >
           <CustomButton
           onPress={() => navigation.navigate('CreateTeam')}
           > 
              New Match ▶
            </CustomButton>

          {/* Button 2 */}
          <Button
            size="lg"
            bg="#181928"
            borderRadius="xl"
            width="100%"
            
           
           
            _text={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}
          >
            Teams
          </Button>

          {/* Button 3 */}
          <Button
            size="lg"
            bg="#181928"
            borderRadius="xl"
            width="100%"
            
           
            _text={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}
          >
            Saved Matches
          </Button>
         
        </VStack>
      </Center>
    </ImageBackground>
  );
};

export default Home;
