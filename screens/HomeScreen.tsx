import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

type Props = {};

const HomeScreen: any = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`h-full`}>
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
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          styles={{
            container: { flex: 0 },
            textInput: { fontSize: 10 },
            height: 120,
          }}
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: "",
            language: "en", // language of the results
            types: "(cities)", // default: 'geocode'
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
