import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const SCREEN_HEIGHT= Dimensions.get('screen').height; // HAMNE SCREEN KI HIGHT LI HAI. or styles main di hai is se ye har screen ki alag height lega.

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
   <View style={styles.mainContainer}>

     {/* Header View */}
      <View style={styles.headerContainer}>
       <MaterialIcons name="menu" size={24} color="green" />
       <Text style={styles.headerLogo}>BYKEA</Text>
       <MaterialIcons name="add-call" size={24} color="green" />
      </View>

     {/* Banner Image View */}
      <View style={styles.bannerImgContainer}>
       <Image 
       style={styles.bannerImg}
       source={{
        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQzwjbXzb6hQYGnitjGce_YfI0YY6e6yTzg&s"
        }}/>
      </View>

      {/* Info View */}
      <View style={styles.infoContainer}>
       <MaterialIcons name="attach-money" size={24} color="grey" />
       <Text style={{borderColor:"grey", borderLeftWidth:1}}></Text>
       <MaterialIcons name="message" size={24} color="grey" />
      </View>

      {/* Bottom Boxes View */}
      <View style={styles.bottomBoxesContainer}>
        <View style={styles.boxRow}>
          <Card title={"Carpool"} icon={"directions-car-filled"} iconColor={"#00D5F0"} bgColor={"#CDF9FF"}/> {/* icon name from expo vector icons website */}
          <Card title={"Ride"} icon={"directions-bike"} iconColor={"green"} bgColor={"#D1FED3"}/>
        </View>

        <View style={styles.boxRow}>
          <Card title={"Delivery"} icon={"card-giftcard"} iconColor={"#FFBF00"} bgColor={"#FFF1C6"}/>
          <Card title={"Mobiles"} icon={"phone-iphone"} iconColor={"#9C27B0"} bgColor={"#F8D4FE"}/>
        </View>

        <View style={styles.boxRow}>
          <Card title={"Shops"} icon={"shopping-bag"} iconColor={"#2196F3"} bgColor={"#D0EAFE"}/>
          <Card title={"Carpool"} icon={"access-time-filled"} iconColor={"#F1D902"} bgColor={"#FDF8CD"}/>
        </View>
      </View>

    </View>
  );
}
 
const Card = ({bgColor, icon, iconColor, title}:{bgColor: string, icon: any, iconColor: string, title: string})=>{
  return(
    <View style={[styles.box, {backgroundColor: bgColor}]}>
      <Text style={{textAlign:"right", fontWeight: '600'}}>{title}</Text>
      <MaterialIcons name={icon} size={70} color={iconColor} />
    </View>
  )
}
// Summary of Card: isme jo properties a rhi hain wo hamne uper Card ke component main di hain or iske agy iski types batai hain.

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
  },
  headerContainer:{
    height:50,
    paddingHorizontal: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerLogo:{
    fontWeight: 'bold',
    fontSize: 21,
    color: 'green',
    letterSpacing: 1
  },
  bannerImgContainer:{
   height: SCREEN_HEIGHT / 3.7,
   backgroundColor: '#E3E3E3',
   paddingHorizontal: 16,
   paddingTop: 10
  },
  bannerImg:{
    height: '86%',
    borderRadius: 12
  },
  infoContainer:{
   height: 40,
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
   marginHorizontal: 20,
   marginTop: -15,
   borderRadius: 12,
   backgroundColor: '#fff',
   shadowColor: "#000",
   shadowOffset: {
   	width: 0,
   	height: 1,
   },
   shadowOpacity: 0.20,
   shadowRadius: 1.41,
   elevation: 2,
  },
  bottomBoxesContainer:{
   flex: 1,
   margin: 20,
   gap: 15
  },
  boxRow:{
    flex:1,
    flexDirection: 'row',
    gap: 15,
  },
  box:{
    backgroundColor: 'blue',
    flex: 1,
    borderRadius: 12,
    padding: 10,
    justifyContent: 'space-between'
  }
});