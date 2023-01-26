import { FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import moment from 'moment';
import 'moment/locale/pt-br';
import Card from '../../components/Card';

function Home() {
  const disciplines = [
    {
      id: '1',
      name: 'Matemática Discreta',
      hours: '13:30 - 15:30',
      isChecked: false,
      cover: require('../../assets/profile.jpg')
    },
    {
      id: '2',
      name: 'Projeto e Análise de Algoritmos',
      hours: '13:30 - 15:30',
      isChecked: true,
      cover: require('../../assets/profile1.jpg')
    },
    {
      id: '3',
      name: 'Matemática Discreta',
      hours: '13:30 - 15:30',
      isChecked: true,
      cover: require('../../assets/profile2.jpeg')
    },
    {
      id: '4',
      name: 'Projeto e Análise de Algoritmos',
      hours: '13:30 - 15:30',
      isChecked: true,
      cover: require('../../assets/profile3.jpeg')
    },
    {
      id: '5',
      name: 'Matemática Discreta',
      hours: '13:30 - 15:30',
      isChecked: false,
      cover: require('../../assets/profile4.jpeg')
    },
    {
      id: '6',
      name: 'Projeto e Análise de Algoritmos',
      hours: '13:30 - 15:30',
      isChecked: true,
      cover: require('../../assets/profile5.jpg')
    },
    {
      id: '7',
      name: 'Matemática Discreta',
      hours: '13:30 - 15:30',
      isChecked: false,
      cover: require('../../assets/profile6.jpg')
    },
  ]
  
  const dayOfWeek = moment().format('dddd');
  const dayOfMonth = moment().format('Do');
  const month = moment().format('MMMM');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.data}>{dayOfWeek}, {dayOfMonth} de {month}</Text>
      <FlatList
        data={disciplines}
        keyExtractor={ item => item.id }
        renderItem={({ item }) => (
          <Card data={item}/>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        ListEmptyComponent={<Text>Não há nenhuma matéria registrada.</Text>}
      />
    </SafeAreaView>
  )
}

export default Home;