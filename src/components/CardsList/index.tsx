import { FlatList, ListRenderItemInfo, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { listAllDisciplines } from '../../services/Disciplines/api';
import Card, { DisciplineProps } from '../Card';
import { styles } from './styles';

function CardsList() {
  const [disciplines, setDisciplines] = useState<DisciplineProps>();
  useEffect(() => {
    listAllDisciplines()
      .then((res) => {
        console.log(res.data)
        setDisciplines(res.data)
      }).catch((error) => {
        console.log(error)
      })
  }, []);

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