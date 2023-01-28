import { View, Text, Image } from 'react-native';
import { styles } from './styles';

function Profile() {
  return (
    <View>
      <View style={styles.coverContainer}>
        <Image source={require('../../assets/profile1.jpg')} style={styles.cover} />
      </View>

      <View style={styles.contentContainer}>
        <Image source={require('../../assets/profile2.jpeg')} style={styles.profileCover} />
        <View style={styles.emailContainer}>
          <Text style={styles.email}>aluno@ufc.com.br</Text>
        </View>
      </View>
    </View>
  )
}

export default Profile;