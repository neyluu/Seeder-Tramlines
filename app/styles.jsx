import { StyleSheet } from 'react-native';
import colors from './colors';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerSeederWidth: {
      width: 200,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      gap: 15,
    },
    label: {
      fontSize: 30,
      textAlign: 'center',
      textAlignVertical: 'center',
  
      width: 250,
      height: 50,
      marginBottom: 5,
      backgroundColor: colors.green._500,
     
      borderRadius: 10,
      borderWidth: 3,
      borderColor: colors.green._700,
    },
    numberInputField: {
      fontSize: 20,
      color: 'black',
  
      width: 250,
      height: 50,
      marginBottom: 30,
      padding: 10,
      backgroundColor: colors.grey._700,
  
      borderRadius: 10,
      borderWidth: 3,
      borderColor: colors.grey._500,
    },
    smallButton: {
        width: 50,
        height: 50,

        backgroundColor: colors.green._500,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 10,
        borderWidth: 3,
        borderColor: colors.green._700,
    },
    smallButtonText: {
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
    }, 
    seederWidthValue: {
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
    },
  });
  