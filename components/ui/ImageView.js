import React, { useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { UserContext } from "../../store/UserContext";

const ImageView = () => {
    const { age, currentStatus, statuses } = useContext(UserContext);

    function getImageSource() {
        if (age < 6) {
            return require('../../assets/images/infant.jpg');
        } else if (currentStatus === statuses.STUDENT) {
            return require('../../assets/images/student.jpg');
        } else if (currentStatus === statuses.UNISTUDENT) {
            return require('../../assets/images/uniStudent.jpg');
        } else if (currentStatus === statuses.UNEMPLOYED && age < 70) {
            return require('../../assets/images/unemployed.jpg');
        } else if (currentStatus === statuses.EMPLOYED && age < 70) {
            return require('../../assets/images/employed.jpg');
        } else if (age >= 70) {
            return require('../../assets/images/oldAge.jpg');
        }
    }

    const source = getImageSource();

    return (
        <View style={styles.imageContainer}>
            <Image source={source} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: 320,
        backgroundColor: "#F8FFE3",
        borderRadius: 10,
        borderBottomColor: 'black',
        borderColor: 'black',
        borderWidth: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'center',
    },
    image: {
        width: "99%",
        height: "99%",
        alignSelf: 'center',
    },
});

export default ImageView;
