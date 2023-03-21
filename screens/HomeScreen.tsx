import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
type Props = {};

const HomeScreen: any = (props: Props) => {
  return (
    <SafeAreaView style={tw`bg-red h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
        <GooglePlacesAutocomplete
      
          placeholder={"Where From"}
          nearbyPlacesAPI={"GooglePlacesSearch"}
          debounce={400} 
          minLength={2}
          enablePoweredByContainer={false}
          styles={{container:{flex:0},textInput:{fontSize:10},height: 120}}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: 'AIzaSyBGoDIKfAyelyJ-7Fy-1q21_MRS_Bf8s94',
            language: 'en', // language of the results
            types: '(cities)' // default: 'geocode'
          }}       />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
