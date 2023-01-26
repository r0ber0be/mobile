import React, {useState} from 'react';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { Button, ScrollView, Text, TextInput, TouchableHighlight, View } from 'react-native';
import FlatListBasics from './src/basics/FlatListBasics';
import SectionListBasics from './src/basics/SectionListBasics';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import Heading from './src/components/Heading';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height:40}}
        placeholder="Type here to translate"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
    </View>
  )
}

type CatProps = {
  name: string
}

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(true);
  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}
      </Text>
      <TouchableHighlight
        onPress={() => {
          setIsHungry(false);
        }}
        underlayColor='white'
        disabled={!isHungry}>
          {isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      </TouchableHighlight>
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Press Me"
      />
    </View>
  )
}


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