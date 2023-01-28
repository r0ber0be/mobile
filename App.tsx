import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import Heading from './src/components/Heading';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        style='light'
        backgroundColor='transparent'
        translucent
      />
      
      <Heading name='Junior' />

      <Routes type='professor'/>
    </NavigationContainer>
  );
}

export default App;