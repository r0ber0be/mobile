import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../pages/Home';
import QRCode from '../pages/QRCode';
import Settings from '../pages/Settings';

const Tab = createBottomTabNavigator();

interface Prop {
  type: string
}

function Routes({type} : Prop) {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#171626',
          borderTopWidth: 0,  
        }
      }}  
    >
      <Tab.Screen 
        name='Home'
        component={Home} 
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return focused
              ? <Ionicons name='home' size={size} color={color} />
              : <Ionicons name='home-outline' size={size} color={color} />
          }
        }}
      />

      <Tab.Screen 
        name='QRCode'
        children={() => <QRCode type={type} />}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name="qrcode-scan" size={size} color={color} />
          }
        }}
      />

      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return focused 
              ? <Ionicons name="ios-settings" size={size} color={color} />
              : <Ionicons name="ios-settings-outline" size={size} color={color} />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default Routes;