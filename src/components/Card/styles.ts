import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
});