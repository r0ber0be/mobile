import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

interface Prop {
  name: string,
}

function Heading({name}: Prop) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>UFC</Text>
      <Text style={styles.name}>{name}</Text> 
    </SafeAreaView>
  )
}

export default Heading;