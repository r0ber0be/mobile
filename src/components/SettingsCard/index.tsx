import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

function SettingsCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conta</Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <View>
          <Text>Mensagens</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <View>
          <Text>Notificações</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <View>
          <Text>Localização</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <View>
          <Text>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SettingsCard;