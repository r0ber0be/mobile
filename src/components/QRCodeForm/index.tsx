import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useState } from "react";

function QRCodeForm() {
  const [materia, setMateria] = useState('');
  const [professor, setProfessor] = useState('');
  const [dataSemestre, setDataSemestre] = useState('');
  const [horarioInicio, setHorarioInicio] = useState('');
  const [horarioFim, setHorarioFim] = useState('');

  interface Props {
    materia: string,
    professor: string,
    dataSemestre: string,
    horarioInicio: string,
    horarioFim: string
  }

  const [QRData, setQRData] = useState<Props>(
    {
      materia,
      professor,
      dataSemestre,
      horarioInicio,
      horarioFim
    }
  )
  
  function handleSubmit() {
    setQRData({
      materia,
      professor,
      dataSemestre,
      horarioInicio,
      horarioFim
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setMateria}
        placeholder="Nome da matéria"
      />
      <TextInput
        style={styles.input}
        onChangeText={setProfessor}
        placeholder="Nome do professor"
      />
      <TextInput
        style={styles.input}
        onChangeText={setDataSemestre}
        placeholder="Data"
      />
      <TextInput
        style={styles.input}
        onChangeText={setHorarioInicio}
        placeholder="Horário de inicio"
      />
      <TextInput
        style={styles.input}
        onChangeText={setHorarioFim}
        placeholder="Horário de termino"
      />

      <TouchableOpacity
        onPress={handleSubmit}
      >
        <Text>Gerar</Text>
      </TouchableOpacity>

      <QRCode
        value={
          JSON.stringify(QRData)
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  input: {
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: '#171626',
    borderWidth: 1,
    borderRadius: 8,
    width: '80%',
    padding: 5
  }
}) 

export default QRCodeForm;