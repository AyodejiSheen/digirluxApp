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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { View, Text, ScrollView, StatusBar } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import BottomNav from './navigations/bottomNav';
import { CartScreen } from './screens/cartScreen';
import { HomeScreen } from './screens/homeScreen';
import { LoginScreen } from './screens/loginScreen';
import { OrderScreen } from './screens/orderScreen';
import { PaymentScreen } from './screens/paymentScreen';
import { PlaceOrder } from './screens/placeOrder';
import { ProfileScreen } from './screens/profileScreen';
import { RegisterSreen } from './screens/registerScreen';
import { ShippingScreen } from './screens/shippingScreen';
import { SingleProductScreen } from './screens/SingleProductScreen';




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

  const Stack = createNativeStackNavigator();


  return (
    <>
      <TailwindProvider>
        <NavigationContainer>
          <StatusBar />
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterSreen} />
              <Stack.Screen name="Order" component={OrderScreen} />
              <Stack.Screen name="Bottom" component={BottomNav} />
            </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </>
  );


}





