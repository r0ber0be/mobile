import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#171626',
  },
  logo: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: 1
  },
  name: {
    color: '#FFF',
    fontWeight: '600',
    letterSpacing: 0.5
  }
});