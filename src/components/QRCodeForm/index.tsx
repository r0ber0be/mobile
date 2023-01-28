import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useState } from "react";
import { styles } from "./styles";

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
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={styles.container}
    >
      <Text style={styles.advice}>Preencha os campos abaixo para gerar uma nova presença</Text>
      
      <View style={styles.inputContainer}>
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
          style={styles.button}
        >
          <Text>Gerar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.code}>
        <QRCode
          value={
            JSON.stringify(QRData)
          }
        />
      </View>
    </ScrollView>
  )
}

export default QRCodeForm;