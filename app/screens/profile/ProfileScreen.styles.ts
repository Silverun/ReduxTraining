import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  userIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#cccccc',
  },
  profileContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  logoutButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
});
