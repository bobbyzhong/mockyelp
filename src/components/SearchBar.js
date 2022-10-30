import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={(newTerm) => onTermChange(newTerm)}
                style={styles.inputStyle}
                placeholder="Search"
                onEndEditing={() => {
                    onTermSubmit();
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#dcdcdc",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginTop: 10,
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: "center",
        marginHorizontal: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 16,
    },
});

export default SearchBar;
