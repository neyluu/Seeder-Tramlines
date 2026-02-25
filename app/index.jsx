import { Pressable, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

import styles from './styles.jsx';

export default function App() {
    const [seederWidth, onChangeNumber] = React.useState(''); //Entered seeder width
    const [tramlineWidth, setTramlineWidth] = useState(0);  //Entered tramline width
    const [tramlineCounter, setTramlineCounter] = useState(1); //Current tramline number
    const [tramlinesCount, setTramlinesCount] = useState(tramlineWidth / seederWidth) //Total tramlines count
    const [tramlineOnNumber, setTramlineOnNumber] = useState(1) //Number of tramline when it should be ON
    const [tramlineInfo, setTramlineInfo] = useState("Without tramline!") //Tramline information show under tramline counter
    const [tramlineInfoVisible, setTramlineInfoVisible] = useState(false); //Is tramline ON info visible
    const [isHalfSeederInfoVisible, setIsHalfSeederInfoVisible] = useState(false) //Visibility of information about starting seeding with half of the seeder
    const [isUserDataVisible, setIsUserDataVisible] = useState(false) //Visibility of user input data section
    const [isTramlineCounterVisible, setIsTramlineVisible] = useState(true) //Visibility of tramline counter screen
    
    const onSeederWidthChange = (text) => {
        if(text == undefined || text == '')
        {
            setTramlineWidth(0);  
            onChangeNumber('');
        }
        else
        {
            onChangeNumber(text)
            setTramlineWidth(parseFloat(text))
        }
    }

    const substractTramlineWidth = () => {
        if(seederWidth == '')
        {
            console.log("Seeder Width is empty!")
        }
        else
        {
            const newTramlineWidth = (parseFloat(tramlineWidth) - parseFloat(seederWidth)).toFixed(2)
            if(newTramlineWidth > 0)
            {
                setTramlineWidth(newTramlineWidth)
            }
            console.log("Substracting tramline width: " + tramlineWidth)
        }
    }
    const addTramlineWidth = () => {
        if(seederWidth == '')
        {
            console.log("Seeder Width is empty!")
        }
        else
        {
            const newTramlineWidth = (parseFloat(tramlineWidth) + parseFloat(seederWidth)).toFixed(2)
            if(newTramlineWidth < 100)
            {
                setTramlineWidth(newTramlineWidth)
            }
            console.log("Adding tramline width: " + tramlineWidth)
        }
    }
    
    const calculateTramlines = () => {
        const localSeederWidth = parseFloat(seederWidth);
        const localTramlineWidth = parseFloat(tramlineWidth);
    
        setTramlineCounter(1)
        setTramlineInfo("Without tramline!")
    
        if(! (!isNaN(localSeederWidth) && localSeederWidth > 0 && localTramlineWidth > 0))
        {
            console.log("Invalid seeder width or tramline width.")
            return
        }
    
        const localTramlinesCount = parseInt(localTramlineWidth / localSeederWidth)
        setTramlinesCount(localTramlinesCount)
    
        let newTramlineOnNumber = 1
        if (localTramlinesCount % 2 === 0) 
            {
            newTramlineOnNumber = Math.ceil(localTramlinesCount / 2) + 1
        } 
        else 
        {
            newTramlineOnNumber = Math.ceil(localTramlinesCount / 2)
        }
    
        setTramlineOnNumber(newTramlineOnNumber)
        console.log("Max tramlines: " + localTramlinesCount)
        console.log("ON: " + newTramlineOnNumber)
        
        if(localTramlinesCount % 2 == 0)
        {
            setIsHalfSeederInfoVisible(true)
        }
        else
        {
            setIsHalfSeederInfoVisible(false)
        }
    
        setIsTramlineVisible(true)
        setIsUserDataVisible(false)
    }
    
    const substractTramline = () => {
        const newTramlineCounter = tramlineCounter - 1;
        if (newTramlineCounter > 0) {
            setTramlineCounter(newTramlineCounter);
        }
    
        checkForTramline(newTramlineCounter > 0 ? newTramlineCounter : tramlineCounter);
    };
    
    const addTramline = () => {
        const newTramlineCounter = tramlineCounter + 1;
        if (newTramlineCounter <= tramlinesCount) {
            setTramlineCounter(newTramlineCounter);
        } else {
            setTramlineCounter(1);
        }
    
        checkForTramline(newTramlineCounter <= tramlinesCount ? newTramlineCounter : 1);
    };
    
    const checkForTramline = (counter) => {
        if (counter === tramlineOnNumber) {
            console.log("TRAMLINE ON!" + counter)
            setTramlineInfo("TRAMLINE ON!")
            setTramlineInfoVisible(true)
        } else {
            console.log("TRAMLINE OFF!" + counter)
            setTramlineInfo("Without tramline!")
            setTramlineInfoVisible(false)
        }
    }
    
    const returnToMain = () => {
        setIsTramlineVisible(false)
        setIsUserDataVisible(true)
    }    

    return (
        <View style={styles.container}>
        
            {isUserDataVisible && (
                <View style={styles.userDataContainer}>
                    <Text style={styles.label}>
                        Seeder width:
                    </Text>
                    
                    <TextInput 
                        style={styles.numberInputField}
                        onChangeText={onSeederWidthChange}
                        value={seederWidth}
                        placeholder='0'
                        placeholderTextColor={'#555'}
                        keyboardType='numeric'
                    />

                    <Text style={styles.label}>
                        Tramline width:
                    </Text>

                    <View style={styles.containerSeederWidth}>

                        <Pressable style={styles.smallButton} onPress={substractTramlineWidth}>
                            <Text style={styles.smallButtonText}>-</Text>
                        </Pressable>
                        <Text style={styles.seederWidthValue}>{tramlineWidth}</Text>
                        <Pressable style={styles.smallButton} onPress={addTramlineWidth}>
                            <Text style={styles.smallButtonText}>+</Text>
                        </Pressable>
                    </View>

                    <Pressable style={styles.calculateTramlines} onPress={calculateTramlines}>
                        <Text style={styles.calculateTramlinesText}>Calculate tramlines!</Text>
                    </Pressable>
                </View>
            )}

            {isTramlineCounterVisible && (
                <View style={styles.tramlineCounterContainer}>
                    <Pressable style={styles.backBtn} onPress={returnToMain}>
                        <Text style={styles.backBtnText}> {'<'} Back</Text>
                    </Pressable>

                    <View style={styles.tramlineContainer}>
                        <Text style={styles.label}>Tramline:</Text>
                        {isHalfSeederInfoVisible && (
                            <Text style={styles.tramlineCounterInfo}>You must start with half of the seeder!</Text>
                        )}
                    
                        <Text style={styles.tramlineCounter}>{tramlineCounter} / {tramlinesCount}</Text>
                        <Text style={[styles.tramlineCounterInfo, tramlineInfoVisible ? styles.textHighlighted : null]}>{tramlineInfo}</Text>
                        <View style={styles.containerSeederWidth}>
                            <Pressable style={[styles.smallButton, styles.enlargeButton]} onPress={substractTramline}>
                                <Text style={[styles.smallButtonText, styles.enlargeButtonText]}>-</Text>
                            </Pressable>
                            <Pressable style={[styles.smallButton, styles.enlargeButton]} onPress={addTramline}>
                                <Text style={[styles.smallButtonText, styles.enlargeButtonText]}>+</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.dummyContainer}></View>
                </View>
            )}
           
            {/* <StatusBar style="auto" /> */}
        </View>
    );
}