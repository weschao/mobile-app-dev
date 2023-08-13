import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AsyncStorageExample from './components/AsyncStorageExample'; 
import AnimatedStyleUpdateExample from './components/AnimatedStyleUpdateExample'; 
import CameraExample from './components/CameraExample'; 
import DeviceMotionExample from './components/DeviceMotionExample'; 
import ImagePickerExample from './components/ImagePickerExample'; 
import LocationExample from './components/LocationExample'; 
import MapViewExample from './components/MapViewExample'; 
import NotificationExample from './components/NotificationExample'; 
import SvgExample from './components/SvgExample'; 


export default function App() {
  return (
    <View style={styles.container}>
        <AsyncStorageExample />
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    //alignItems: 'center',
  },
});

