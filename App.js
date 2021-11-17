import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, TextInput, FlatList, Touchable } from 'react-native';

export default function App() {

  const [height,setHeight] = useState(0);
  const [weigth,SetWeigth] = useState(0);
  const [result,setResult] = useState(0);

  const CalcBmi = () => {
    const hightToCm = height/100;
    let bmi = weigth/Math.pow(hightToCm,2);
    bmi = bmi.toFixed(2);
    setResult(bmi)
  }
  
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#0099ff',width:'35%',margin:20,borderRadius:10,height:50,borderWidth:3,alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.textStyle}>{result}</Text>
      </View>
      <View style={styles.textBox}>
          <Text style={styles.textStyle}>Pleas text your height:</Text>
          <TextInput  
              style={styles.inputStyle} 
              value={height}
              onChangeText={text => setHeight(text)}
          />
          <Text style={styles.textStyle}>Pleas text your weigth:</Text>
          <TextInput  
              style={styles.inputStyle} 
              value={weigth}
              onChangeText={text => SetWeigth(text)}
          />
      </View>
      <TouchableOpacity onPress={CalcBmi}  style={styles.btnStyle}>
        <Text>Calc Bmi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffcc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox:{
    backgroundColor:'#0099ff',
    height:200,
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
  inputStyle:{
    backgroundColor:'#fff',
    width:'100%',
    height:30,
    borderRadius:10,
    marginTop:6,
    fontSize:20,
    paddingHorizontal:10,
    
  },
  textStyle:{
    fontFamily: 'impact',
    fontSize:20,
    margin:10
  },
  btnStyle:{
    backgroundColor:'#ff0cc9',
    margin:10,
    padding:10,
    borderRadius:10,
    borderWidth:3,
    shadowOpacity:5
  }
});
