import { StyleSheet } from 'react-native';
import colors from './colors.js';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerSeederWidth: {
      width: 250,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
      gap: 15,
      marginBottom: 40,
    },
    label: {
      fontSize: 30,
      textAlign: 'center',
      textAlignVertical: 'center',
  
      width: 250,
      height: 50,
      marginBottom: 10,
      backgroundColor: colors.green._500,
     
      borderRadius: 10,
      borderWidth: 3,
      borderColor: colors.green._700,
    },
    numberInputField: {
      fontSize: 25,
      color: 'white',
  
      width: 250,
      height: 50,
      marginBottom: 30,
      padding: 5,
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
    enlargeButton: {
      width: 100,
      height: 100
    },
    enlargeButtonText: {
      fontSize: 60,
    },
    seederWidthValue: {
      fontSize: 30,
      textAlign: 'center',
      textAlignVertical: 'center',
      color: 'white',
    },
    tramlineCounter: {
      color: 'white',
      fontSize: 60,
    },
    tramlineCounterInfo: {
      color: 'white',
      fontSize: 20,
      marginBottom: 10,
    },
    calculateTramlines: {
      backgroundColor: '#ed8200',
      width: 250,
      height: 60,
      marginBottom: 40,
      borderRadius: 20,

      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    },
    calculateTramlinesText: {
      color: 'white',
      fontSize: 25,

      textAlign: 'center',
    },
    userDataContainer: {
      
    },
    tramlineCounterContainer: {
      width: '100%',
      height: '80%',

      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'stretch',
    },
    backBtn: {
      width: 100,
      height: '10%',
      // backgroundColor: 'red',
      marginBottom: 20,
    },
    backBtnText: {
      color: 'gray',
      fontSize: 20,

      textAlign: 'center',
    },
    tramlineContainer: {
      width: '100%',
      // backgroundColor: 'pink',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    dummyContainer: {
      height: '10%',
    },
    textHighlighted: {
      color: 'orange'
    }
  });
  
export default styles;