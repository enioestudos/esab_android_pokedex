import React, { useEffect, useState } from 'react';
import {Image, StyleSheet, View, TouchableOpacity,Text, FlatList, ScrollView} from 'react-native';

import * as pokemons from '../pokemons.json';


const Home = ({navigation}) => {

    const [isLoading, setLoading] = useState(false);

    return (
        <View >
           <Text style={{textAlign:'center', fontSize:'25px', fontWeight:'bold', marginTop:'10px'}}>Pokedex - ESAB</Text>
           <Text style={{textAlign:'center', paddingBottom:'20px'}}>Escolha seu Personagem</Text>

            {isLoading ? <Text>Loading...</Text> :
            (
                <FlatList
                    contentContainerStyle={styles.container}
                    data={pokemons.results}
                    keyExtractor={({ id }) => id.toString()}
                    renderItem={
                        ({ item }) =>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Detail', {
                                    'id': item.id 
                                })
                            }
                        >
                            <View style={{backgroundColor: item.backgroundColor, ...styles.card}}>
                                <Text style={styles.name}>{item.name?.toUpperCase()}</Text>
                                <Text style={styles.descTitle}>Tipo        Fraqueza</Text>
                                <Text style={styles.desc}>{item.type}        {item.strenght}</Text>
                                <View style={styles.shadow} />
                                <Image source={require('../../../assets/' + item.img)} style={styles.image} />
                            </View>
                           
                        </TouchableOpacity>
                    }
                />
            )}
        </View>
    );

}



const styles = StyleSheet.create({
    card: {      
      height: '100px',
      width: '100%',
      margin: '10px',
      borderRadius: 15,
      padding: 10
    },
    descTitle: { fontWeight: 'bold', marginTop: '5px'},
    desc: {marginTop: '5px'},
    image: {
      position: "absolute",
      right: -15,
      top: -15,
      height: 130,
      width: 130,
    },
    name: {
      fontWeight: "bold",
      color: "#fff",
      fontSize: 16,
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
    container: {
        padding: 5,
        width: '90%',
        margin: 'auto',
  
    }
  });


export default Home