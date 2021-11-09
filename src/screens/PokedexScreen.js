import React, {useState, useEffect} from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPokemonsApi } from '../api/pokemon';

export default function PokedexScreen() {
  useEffect(() => {
    (async ()=>{
      await loadPokemons();
    })()
  }, [])
  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <SafeAreaView>
      <Text>Pokedex</Text>
    </SafeAreaView>
  )
}
