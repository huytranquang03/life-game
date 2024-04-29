import { View, Text, Image, Pressable, StyleSheet } from "react-native";

const ImageButton = ({ image, text, onPress }) => (
    <View style={styles.imageButtonContainer}>
        <Pressable onPress={onPress} style={styles.pressableArea}>
            <Image source={image} style={styles.image} resizeMode="contain" />
        </Pressable>
        <Text style={styles.buttonText}>{text}</Text>
    </View>
);

const styles = StyleSheet.create({
    imageButtonContainer: {
        width: 80,
        height: 80,
        margin: 5,
        borderRadius: 50,
        padding: 10,
        alignItems: "center",
        backgroundColor:'#5E17EB',
    },
    pressableArea: {
        width: 45, // Adjust according to your design
        height: 45, // Adjust according to your design
        marginBottom: 1,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    buttonText: {
        fontSize: 10,
        fontWeight: "bold",
        color:'white',
    },
});

export default ImageButton;
