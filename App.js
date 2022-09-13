import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';



const birthday = {uri: './assets/birthday.jpg'}


export default function App() {
  return (
    

    <ImageBackground style={styles.container} source={require('./assets/birthday.jpg')}>
      <View>
        <Text style={styles.happy}>Happy</Text>
        <Text style={styles.birthday}>Birthday</Text>
        <Text style={styles.to}>To</Text>
        <Text style={styles.amu}>Amukelani Mandy</Text>
        <Text style={styles.milani}>Milani</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  happy: {
    color: '#aa00ff',
    fontStyle: 'bold',
    fontFamily: 'monotype corsiva',
    fontSize: 50,
  },
  birthday: {
    color: '#ee33ff',
    fontSize: 26,
    fontFamily: 'monotype corsiva',
  },
  to: {
    color: '#ff77ff',
    fontFamily: 'monotype corsiva',
    fontSize: 16,
  },
  amu: {
    color: '#ffaaff',
    fontSize: 40,
    fontFamily: 'impact',
  },
  milani: {
    color: '#ffaaff',
    fontSize: 40,
    fontFamily: 'impact',
  },
});
