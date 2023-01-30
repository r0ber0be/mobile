import { FlatList, ListRenderItemInfo, Text } from 'react-native';
import Card, { DisciplineProps } from '../Card';
import { styles } from './styles';

function CardsList() {
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

  function renderItem({ item }: ListRenderItemInfo<DisciplineProps>) {
    return <Card data={item} />
  }

  return (
    <FlatList
      data={disciplines}
      keyExtractor={ item => item.id }
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentList}
      ListEmptyComponent={<Text>Não há nenhuma matéria registrada.</Text>}
    />
  );
}

export default CardsList;