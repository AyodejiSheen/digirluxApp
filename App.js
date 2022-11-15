import { View, Text } from 'react-native';
import { LoginScreen } from './src/screens/loginScreen';

import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { RegisterSreen } from './src/screens/registerScreen';



export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });


  if (!fontsLoaded) {

    return null

  }


  return (
    <View className="flex-1 items-center justify-center" >
      <RegisterSreen />
    </View>
  );


}





