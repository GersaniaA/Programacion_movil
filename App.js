import Gatitos from './COMPONENTES/Gatitos';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>Galería Gatitos</Text>
      <ScrollView>
      <Gatitos
        nombre= 'Gatito Blanco'
        imagen= {require('./IMAGENES/OIP.jpg')}
      ></Gatitos>
      <Gatitos
        nombre= 'Gatitos Naranjas'
        imagen= {require('./IMAGENES/OIP (1).jpg')}
      ></Gatitos>
      <Gatitos
        nombre= 'Gatitos cafe dormidos'
        imagen= {require('./IMAGENES/descarga (2).jpg')}
      ></Gatitos>
      <Gatitos
        nombre= 'Gatito cafe rayado'
        imagen= {require('./IMAGENES/descarga (3).jpg')}
      ></Gatitos>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gato:{
    marginTop:10,
    borderRadius:5,
    width:300,
    height:300,
  },
  tituloText:{
    marginTop:50,
    fontSize:25,
    fontWeight: 'bold',
  },
  texto:{
  fontSize: 18,
  color: 'blue', 
  marginVertical: 10,
  textAlign: 'center',
},
});
