
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import QRCodeForm from '../../components/QRCodeForm';
import Scanner from '../../components/Scanner';

interface Prop {
  type: string
}

function QRCode({type}: Prop) {
  return (
    <SafeAreaView>
      {
        type === "professor"
          ? <QRCodeForm />
          : <Scanner />
      }
    </SafeAreaView>
  )
}

export default QRCode;