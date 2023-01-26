import { Image, StyleSheet, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection:'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginTop: 12,
  },
  infoContainer: {
    width:'80%',
    flexDirection:'column',
    marginLeft: 20,
  },
  bgNotChecked: {
    backgroundColor: '#434543',
  },
  notChecked: {
    color: '#f2f3f2'
  },
  bgPresence: {
    backgroundColor: '#90ff90',
  },
  presence: {
    color: '#000000'
  },
  hours: {
    color: '#8d93a9',
  },
  profileCover: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: "hidden",
  }
})

export default Card;