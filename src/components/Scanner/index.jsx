import { useFocusEffect } from '@react-navigation/native';
import { Text, Pressable, StyleSheet } from 'react-native';
import { useCallback, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { SafeAreaView } from 'react-native-safe-area-context';

function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      };

      getBarCodeScannerPermissions();
    }, []),
  );

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and ${data} has been scanned!`);
  }

  if(hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }

  if(hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <BarCodeScanner
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        type={BarCodeScanner.Constants.Type.back}
        style={styles.camera}
        onBarCodeScanned={
          scanned ? undefined : handleBarCodeScanned
        }
      />
      {scanned 
        ? <Pressable style={styles.button} onPress={() => setScanned(false)}>
            <Text style={styles.text}>Tap to scan again</Text>
          </Pressable>
        : null
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171626',
  },
  camera: {
    borderRadius: 8,
    height: '100%',
    width: '100%',
  },
  button: {
    width: '80%',
    backgroundColor: 'green',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  text: {
    color: '#FFF',
  }
});

export default Scanner;