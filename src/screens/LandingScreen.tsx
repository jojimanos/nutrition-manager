import React, { useState } from "react";
import { Pressable, SafeAreaView, Text, View, TextInput } from "react-native";
import { StyleSheet } from "react-native-web";
import Navbar from "../components/Navbar";
import BottomNavigationBar from "../components/BottomNavigatioBar";

type LandingScreenProps = {

}

const LandingScreen: React.FC<LandingScreenProps> = () => {

    const [food, setFood] = useState("")
    const [protein, setProtein] = useState("")
    const [foodType, setFoodType] = useState("Survey (FNDDS)")

    async function getNutritionalValue(food: string) {
        const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.API_KEY}&query=${food}&dataType=${foodType}`,
        );
        const item = await response.json();
        setProtein(JSON.stringify(item.foods[0].foodNutrients[0].value))
        console.log(item.foods);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Navbar />
            <View style={styles.appBody}>
                <TextInput style={styles.input} onChangeText={setFood} value={food} placeholder="search for food" />
                <Pressable style={styles.button} onPress={() => { getNutritionalValue(food) }}><Text style={styles.buttonText}>Press Here</Text></Pressable>
                <View style={styles.proteinTagContainer}><Text style={styles.proteinTextTag}>{`Protein: ${protein} gr`}</Text></View>
            </View>
            <BottomNavigationBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    appBody: {
        flex: 1,
        // alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer: {
        alignItems: "center"
    },
    container: {
        marginTop: 25,
        height: "100%",
    },
    button: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        width: "auto",
        backgroundColor: "#adcad6",
        alignSelf: "center",
    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 20
    },
    proteinTagContainer: {
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 5
    }, 
    proteinTextTag: {
        fontSize: 30
    }
});

export default LandingScreen