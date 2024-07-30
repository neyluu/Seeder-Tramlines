import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerHorizontal: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 15,
    },
    label: {
      fontSize: 30,
      textAlign: 'center',
      textAlignVertical: 'center',
  
      width: 250,
      height: 50,
      marginBottom: 5,
      backgroundColor: "#2c6b49",
     
      borderRadius: 10,
      borderWidth: 3,
      borderColor: '#1e3b2c',
    },
    numberInputField: {
      fontSize: 20,
      color: 'black',
  
      width: 250,
      height: 50,
      marginBottom: 30,
      padding: 10,
      backgroundColor: '#222',
  
      borderRadius: 10,
      borderWidth: 3,
      borderColor: '#444',
    }
  });
  