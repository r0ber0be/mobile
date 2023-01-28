import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  emailContainer: {
    flexDirection: 'column',
  },
  email: {
    fontWeight: '500',
  },
  profileCover: {
    width: 120,
    height: 120,
    marginTop: -60,
    borderWidth: 5,
    borderRadius: 60,
    borderColor: '#171626',
    overflow: "hidden",
  },
  coverContainer: {
    borderBottomWidth: 5,
    borderBottomColor: '#171626',
  },
  cover: {
    height: 160,
    overflow: 'hidden'
  }
})
