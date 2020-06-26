
import React,{useEffect,useState} from 'react';
import { Button,View, Text,StyleSheet,ScrollView,Image,TextInput,label,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

// import loginComponents from './Components/LoginComponents';
// import RegisterComponents from './Components/RegisterComponents';
// import DashBordComponents from './Components/DashBordComponents';
// import LoadComponents from './Components/LoadComponents';
// import LoginScreen from './Src/Auth/LoginScreen';
// import LoginScreen2 from './Src/Auth/LoginScreen2';
// import IndexFood from './src/FoodDelivery/IndexFood';
// import Address from './src/FoodDelivery/src/Address';
// import Cart from './src/FoodDelivery/src/Cart';
// import Food from './src/FoodDelivery/src/Food';
import Profile from './src/FoodDelivery/src/Profile';

// import Chat from './Src/Chat3/ChatComponent';
// import ChatLogin from './Src/Chat3/LoginComponent';

import { SafeAreaView } from 'react-native-safe-area-context';
// import { ScrollView } from 'react-native-gesture-handler';

// import {Customheader} from './Src/CustomHeader';


function Customheader({title,isHome, navigation}){
  return (
    <View style ={{flexDirection: 'row', height:50}}>
      {
        isHome?
        <TouchableOpacity onPress={()=> navigation.openDrawer()}>
        {/* <Image style={{ width:30, height: 30, marginLeft: 5, marginTop : 5}}
          source = {require ('./Src/Images/open-menu.png')}
          resizeMode="contain"
        /> */}
        </TouchableOpacity>
        :
        <TouchableOpacity style ={{flexDirection: 'row' , alignItems:'center'}}
        onPress={()=>navigation.goBack()}
        >
        {/* <Image style={{ width:25, height: 25, marginLeft: 5, marginTop : 5}}
          source = {require ('./Src/Images/back.png')}
          resizeMode="contain"
        /> */}
        <Text>Back</Text>
        </TouchableOpacity>
      }
     
      <View style ={{flex:1.5 , justifyContent:'center' }}>
        <Text style ={{textAlign:'center'}}>{title}</Text>
      </View>
      <View style ={{flex:0.2 , justifyContent:'center'}}>
        <Text style ={{textAlign:'center'}}></Text>
      </View>
    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex:1}}>
      <Customheader title="Home" isHome={true} navigation={navigation}/>

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
     
      <TouchableOpacity>
        <Text style={{fontSize:18,marginLeft:18,marginTop:20 }}
      onPress={()=>navigation.navigate("HomeDetails")}
      >Home Details</Text>
      </TouchableOpacity>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      {/* <Button
        title="Food Index"
        onPress={() => navigation.navigate('IndexFood')}
      /> */}
       <Button
        title="Food Index"
        onPress={() => navigation.navigate('Profile')}
      />

     {/* <Button
        title="CHAT"
        onPress={() => navigation.navigate('Chat')}
      />

     <Button
        title="ChatLogin"
        onPress={() => navigation.navigate('ChatLogin')}
      /> */}

    </View>
    </SafeAreaView>
  );
}

function HomeDetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex:1}}>
    <Customheader title="Home Details Screen" navigation={navigation} />
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Details Screen</Text>
    </View>
    </SafeAreaView>
  
  );
}

function DetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex:1}}>
    <Customheader title="Detail Screen" isHome={true} navigation={navigation}/>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
    title="Details Top Screen"
    onPress={() => navigation.navigate('DetailsTop')}
      />
    </View>
    </SafeAreaView>
  
  );
}

function TopScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex:1}}>
    <Customheader title="Detail Top Screen" navigation={navigation}/>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Deail Top Screen</Text>
    </View>
    </SafeAreaView>
  );
}

function CustomDrawerContent(props){
  return (
    <SafeAreaView style = {{flex:1 , backgroundColor:'green'}}>
      <view style ={{height:150, alignItems:'center',justifyContent:'center'}}>
          {/* <Image style={{ width:80, height: 80, marginLeft: 5, marginTop : 5, borderRadius:60}}
          source = {require ('./Src/Images/user.png')}
          resizeMode="contain"
      /> */}
      </view>
      <ScrollView>
        <TouchableOpacity style={{marginTop:20 }}
        onPress={() => navigation.navigate ('Tabs')}
        >
          <Text style={{fontSize:18,marginLeft:18,marginTop:20 }}
            onPress={()=>props.navigation.navigate("Tabs")}
            >Menu Tab
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginTop:20 }}
        onPress={() => navigation.navigate ('Login')}
        >
          <Text style={{fontSize:18,marginLeft:18,marginTop:20 }}
            onPress={()=>props.navigation.navigate("Login")}
            >Menu Login
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      // initialRouteName="Feed"
      // activeColor="#e91e63"
      // labelStyle={{ fontSize: 12 }}
      // style={{ backgroundColor: 'tomato' }}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // if (route.name === 'Home') {
          //   iconName = focused ? require ('./Src/Images/Home.png') : require ('./Src/Images/HomeBlack.png') ;
          // } 
          // else if (route.name === 'Detail') {
          //   iconName = focused ? require ('./Src/Images/settings.png') : require ('./Src/Images/settingsblack.png');
          // }
          // else if (route.name === 'top') {
          //   iconName = focused ? require ('./Src/Images/user.png') : require ('./Src/Images/message.png');
          // }

          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={size} color={color} />;
          return <Image source={iconName} style ={{width:20, height:20}} 
          size={size} color={color} resizeMode="contain" />;
          
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
       {/* <Tab.Screen  name="home" component={HomeScreen}  options={{tabBarLabel: 'home',}}  /> */}
        <Tab.Screen  name="Home"  component={HomeStack}   options={{tabBarLabel: 'Home',}} />
        <Tab.Screen  name="Detail" component={DetailsStack}  options={{ tabBarLabel: 'Detail',}}/>

      <Tab.Screen  name="top" component={TopScreen}  options={{  tabBarLabel: 'top',
        }}
      />

      {/* <Tab.Screen name="LoginScreen"  component={LoginScreen2} options={{  tabBarLabel: 'Login',
        }}
      /> */}
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator  drawerContentOptions={{
      activeTintColor: '#e91e63',
      itemStyle: { marginVertical: 1 },
    }} 
    initialRouteName="Tabs"  
    DraweContent={ props => CustomDrawerContent(props)}>
      <Drawer.Screen name="Tabs" component={MyTabs} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="DetailScreen" component={DetailsScreen} />
      <Drawer.Screen name="TopScreen" component={TopScreen} />
      {/* <Drawer.Screen name="Login" component={loginComponents} /> */}
    </Drawer.Navigator>
  )
}

const Stack = createStackNavigator();
// const App = createStackNavigator({
//   drawerComponent: { screen: drawerComponent },
// });
const navOptionhandler=()=>(
  {
     headerShown:false
  }
)


const stackHome = createStackNavigator();
function HomeStack() {
  return (
    <stackHome.Navigator initialRouteName="Home" headerMode="Home" >
        <stackHome.Screen name="Home" component={HomeScreen} options={navOptionhandler} />
        <stackHome.Screen name="HomeDetails" component={HomeDetailsScreen} options={navOptionhandler} />
    </stackHome.Navigator>
    );
  }

const stackDetails = createStackNavigator();
function DetailsStack() {
  return (
    <stackDetails.Navigator initialRouteName="Details">
        <stackDetails.Screen name="Details" component={DetailsScreen} options={navOptionhandler} />
        <stackDetails.Screen name="DetailsTop" component={TopScreen} options={navOptionhandler} />
    </stackDetails.Navigator>
    );
  }

const StackApp = createStackNavigator();

const App=  () => {
const [isloggedin,setLogged] = useState(null)

console.log('running1');

const loginDetect = async () => {
  console.log('running3');
  try {
    const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        setLogged(true)
        console.log('token-not-null',token);
      }
      else{
        setLogged(false)
        console.log('token-null',token);
      }
    } 
    catch (error) {
         console.log('error-',error);
       }

}
useEffect(async ()=>
{
  console.log('running2');
  loginDetect()
},[])

  return (
    <NavigationContainer>
      {/* <Stack.Navigator headerMode="none">{
        isloggedin==null?
        (<Stack.Screen name="Login" component={loginComponents} />)
        :isloggedin == true ? 
        ( 
        <Stack.Screen name="DashBord" component={DashBordComponents} />,
        <Stack.Screen name="Home" component={HomeScreen} />
        )
        :(<>
         <Stack.Screen name="DashBord" component={DashBordComponents} />
         <Stack.Screen name="Register" component={RegisterComponents} /> 
        </>)
      }
      </Stack.Navigator> */}
      
      <StackApp.Navigator headerMode="HomeScreen" >
      
        <StackApp.Screen name="drawer" component={MyDrawer} />
        <StackApp.Screen name="Home" component={HomeScreen} />
        {/* <StackApp.Screen name="Login" component={loginComponents} />
        <StackApp.Screen name="Register" component={RegisterComponents} /> */}


        {/* <StackApp.Screen name="IndexFood" component={IndexFood} />
        <StackApp.Screen name="Address" component={Address} />
        <StackApp.Screen name="Cart" component={Cart} />
        <StackApp.Screen name="Food" component={Food} /> */}
        <StackApp.Screen name="Profile" component={Profile} />

        {/* <StackApp.Screen name="Chat" component={Chat} />
        <StackApp.Screen name="ChatLogin" component={ChatLogin} /> */}
        
         {/* <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="To" component={TopScreen} />
        
        <Stack.Screen name="DashBord" component={DashBordComponents} />
        <Stack.Screen name="Load" component={LoadComponents} /> */}
        {/* <Stack.Screen name="ButtomTabComponent" component={ButtomTabComponent} options={{ headerShown: false }} /> */}
      </StackApp.Navigator>

     {/* <MyDrawer /> */}

     {/* <MyTabs /> */}

    </NavigationContainer>
  );
}

export default App;


