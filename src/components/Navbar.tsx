import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
    return (<View style={styles.container}><Text style={styles.titleText}>Nutrition Manager</Text><Text style={styles.subtitleText}>for all your needs</Text></View>)
}

export default Navbar

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30,
        backgroundColor: "#006e90",
        height: "15%"
    },
    titleText: {
        fontSize: 30
    },
    subtitleText: {
        fontSize: 30
    }
})