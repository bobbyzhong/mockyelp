import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "../components/ResultsDetail";

const ResultsList = ({ title, results }) => {
    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return <ResultsDetail result={item} />;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 7,
    },
    container: {
        marginBottom: 10,
    },
});

export default ResultsList;
