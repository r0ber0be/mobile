
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QRCodeForm from '../../components/QRCodeForm';
import Scanner from '../../components/Scanner';

interface Prop {
  type: string
}

function QRCode({type}: Prop) {
  return (
    <SafeAreaView style={styles.container}>
      {
        type === "professor"
          ? <QRCodeForm />
          : <Scanner />
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default QRCode;