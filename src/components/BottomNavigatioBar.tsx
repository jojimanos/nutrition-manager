import React from "react";
import { StyleSheet, View } from "react-native";

type BottomNavigationBarProps = {

}

const BottomNavigationBar: React.FC<BottomNavigationBarProps> = () => {
    return (<View style={styles.container}>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f18f01",
        height: "10%",
    }
})

export default BottomNavigationBar