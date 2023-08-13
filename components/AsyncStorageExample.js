import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let STORAGE_KEY = '@user_input';
let NO_DATA = 'no data stored; try saving some';

export default function App() {
    const [tempData, setTempData] = useState(null);
    const [permData, setPermData] = useState(null);
    useEffect(() => {
        readData();
    }, []);
    
    const onChangeText = value => setTempData(value);
    
    const onSubmitEditing = () => {
        if (!tempData) return;
        
        saveData(tempData);
        setTempData('');
    };
    
    const storeData = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, tempData);
        } catch (e) {
            alert('Async save failed' + e);
        }
    };
    
    const readData = async () => {
        try {
            const value = await AsyncStorage.getItem(STORAGE_KEY);
            
            if (value !== null) {
                setPermData(value);
            }
        } catch (e) {
            alert('Failed to fetch the input from storage');
        }
    };
    

    let tempDisplay = NO_DATA;
    if (tempData) {
        tempDisplay = tempData;
    }
    
    let permDisplay = NO_DATA;
    if (permData) {
        permDisplay = permData;
    }
    
    return (
        <View style={styles.container}>
        <Text style={styles.paragraph}>Temporary storage with useState:</Text>
        <Text style={styles.paragraph}>{tempDisplay}</Text>
        <Text style={styles.paragraph}>Permanent storage with AsyncStorage:</Text>
        <Text style={styles.paragraph}>{permDisplay}</Text>

        <TextInput style={[styles.input] } 
        placeholder="Enter"
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}/>
        <Button title="Save" onPress={storeData}/>
        </View>
        );
    }
    
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
        },
        paragraph: {
            fontSize: 18,
            margin:10,
            textAlign: 'left',
        },
        input: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            flexDirection: 'row'
        }
    });
    