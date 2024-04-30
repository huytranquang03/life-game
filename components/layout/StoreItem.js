import React from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import IconImage from "../ui/IconImage";

function StoreItem({ data, onPress }) {
    const getColorByType = (itemType) => {
        switch (itemType) {
            case "Bike": return "#FFFBE2";
           	default: return "#FFFBE2"; 
        }
    };

    const getImagePath = (itemType) => {
        switch (itemType) {
            case "Bike": return require("../../icon/Family.png");
            case "Motorbike": return require("../../icon/hand.png");
            case "Car": return require("../../icon/Couple.png");
            case "Apartment": return require("../../icon/Plus.png");
            case "House": return require("../../icon/Plus.png");
            case "Gym subscription": return require("../../icon/Plus.png");
            case "Luxurious clothes": return require("../../icon/Plus.png");
          
            default: return require("../../icon/Fire.png"); // Default icon if none match
        }
    };

    function renderItem({ item }) {
        return (
            <Pressable
                onPress={() => onPress(item)}
                style={({ pressed }) => [
                    styles.item,
                    { backgroundColor: getColorByType(item.item) }, // Set background color based on item type
                    pressed && styles.pressed
                ]}
            >
                <View style={styles.itemContent}>
                    <View style={styles.leftContainer}>
                        <IconImage image={getImagePath(item.item)} />
                        <Text style={styles.storeText}>{item.item}</Text>
                    </View>
                    <Text style={styles.price}>${item.price}</Text>
                </View>
            </Pressable>
        );
    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}

const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 2,
        borderBottomColor: "black",
        width: "100%",
		borderRadius:10,
		borderWidth:1,
		marginBottom:2,
		marginTop:5,
    },
    itemContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        //paddingHorizontal: 5,
    },
    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "70%",
    },
    storeText: {
        marginLeft: 2,
        fontSize: 20,
        color: "#333333",
        fontWeight: "bold",
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4CAF50",
		marginRight:20,
    },
    pressed: {
        backgroundColor: "#f0f0f0",
        opacity: 0.5,
    },
});

export default StoreItem;
