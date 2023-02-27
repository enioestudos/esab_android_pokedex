import {View, TouchableOpacity,Text, StyleSheet, Image} from 'react-native';
import { PokemonEntity } from '../../services/pokemons/types';
import * as pokemons from '../pokemons.json';

const Detail = ({navigation, route}) =>{

    const {id} = route.params;
    const pokemon = pokemons.results.filter(x => x.id === id);


    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.container}>
                <Text style={styles.name}>{pokemon[0].name}</Text>
                <View style={styles.shadow} />
                <Image source={require('../../../assets/' + pokemon[0].img)} style={styles.image} />
                <View style={{backgroundColor: pokemon[0].backgroundColor, ...styles.description}}>
                    <Text style={styles.descTitle}>Tipo</Text>
                    <Text style={styles.desc}>{pokemon[0].type}</Text>                               
                    <Text style={styles.descTitle}>Fraqueza</Text>
                    <Text style={styles.desc}>{pokemon[0].strenght}</Text>                               
                    <Image source={require('../../../assets/boll.png')} style={styles.imageBall} />
                </View>
            </View>
        </TouchableOpacity>
      );


}

const styles = StyleSheet.create({
    container: {
     textAlign: 'center',
     width: '90%'
    },
    name: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginTop: '10px'
    },
    image: {
        height: '300px',
        width: '300px',
        
    },
    shadow: {
        height: 120,
        width: 120,
        backgroundColor: "#fff",
        opacity: 0.2,
        position: "absolute",
        borderRadius: 60,
        bottom: -25,
        right: -25,
      },

      descTitle: { fontWeight: 'bold', marginTop: '5px'},
      desc: {marginTop: '5px'},

      description:{
        color: '#fff',
        margin: 5,
        padding: 1,
        borderRadius: 20,
        height: '50%'
      },

      imageBall: {
        position: "absolute",
        left: '30%',
        bottom: -50,
        height: 100,
        width: 100,
      },

});

export default Detail