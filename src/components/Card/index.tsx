import { Image, StyleSheet, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export interface DisciplineProps {
  id: string,
  startTime: string,
  endTime: string,
  isChecked: Boolean,
  cover?: ImageSourcePropType,
  className: string,
  numberOfStudents: BigInt,
  acceptPresenceByCard: Boolean,
  acceptPresenceByQRCode: Boolean,
  professor: string,
}

interface Props {
  data: DisciplineProps;
}

function Card({ data: {id, professor, startTime, endTime, isChecked, cover, className} }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.5} 
      style={[styles.container, isChecked === true ? styles.bgPresence : styles.bgNotChecked]} 
      onPress={() => alert(`Hello, this is ${id} and ${isChecked===true}`)}
      onLongPress={() => alert(`${id}, o status da sua presença é ${isChecked===true}`)}
    >
      <Image source={cover} style={styles.profileCover} />
      
      <View style={styles.infoContainer}>
        <Text style={isChecked ? styles.presence : styles.notChecked}>
          {className} {professor}
        </Text>

        <Text style={styles.hours}>
          {startTime} - {endTime}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Card;