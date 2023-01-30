import moment from 'moment';
import 'moment/locale/pt-br';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CardsList from '../../components/CardsList';
import { styles } from './styles';

function Home() {
  const dayOfWeek = moment().format('dddd');
  const dayOfMonth = moment().format('Do');
  const month = moment().format('MMMM');
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.data}>{dayOfWeek}, {dayOfMonth} de {month}</Text>
      <CardsList />
    </SafeAreaView>
  )
}

export default Home;