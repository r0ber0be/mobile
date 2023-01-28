import { Image, StyleSheet, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface DisciplineProps {
  id: string,
  name: string,
  hours: string,
  isChecked: boolean,
  cover: ImageSourcePropType;
}

interface Props {
  data: DisciplineProps;
}

function Card({ data }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.5} 
      style={[styles.container, data.isChecked ? styles.bgPresence : styles.bgNotChecked]} 
      onPress={() => alert(`Hello, this is ${data.id} and ${data.isChecked}`)}
      onLongPress={() => alert(`${data.id}, o status da sua presença é ${data.isChecked}`)}
    >
      <Image source={data.cover} style={styles.profileCover} />
      
      <View style={styles.infoContainer}>
        <Text style={data.isChecked ? styles.presence : styles.notChecked}>
          {data.name}
        </Text>

        <Text style={styles.hours}>
          {data.hours}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card;