
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { Engine, Car, Wheel, Transmission, V6, MercedesBenz } from "./classes";
export default function App() {
    const mercedesV6 = new V6(300, 3.5);
    const wheel = new Wheel(20);
    const transmission = new Transmission();

    const SClass223 = new MercedesBenz(mercedesV6, transmission, [
        wheel,
        wheel,
        wheel,
        wheel,
    ]);

    return (
        <ScrollView style={{ backgroundColor: "blue", flex: 1 }}>
            <View style={{ marginTop: 50 }}>
                <Text style={{ backgroundColor: 'red',fontSize: 20, alignSelf: 'center', marginTop: 10}}>Автомобіль S-Class 223</Text>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#EEDC82" : "yellow",
                        },
                        {
                            width: 200,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 12,
                            alignSelf: "center",
                            marginTop: 20,
                        },
                    ]}
                    onPress={() => {
                        SClass223.startCar();
                    }}
                >
                    <Text style={styles.text}>Запустити машину</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#EEDC82" : "yellow",
                        },
                        {
                            width: 200,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 12,
                            alignSelf: "center",
                            marginTop: 20,
                        },
                    ]}
                    onPress={() => {
                        SClass223.stopCar();
                    }}
                >
                    <Text style={styles.text}>Зупинити машину</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#EEDC82" : "yellow",
                        },
                        {
                            width: 200,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 12,
                            alignSelf: "center",
                            marginTop: 20,
                        },
                    ]}
                    onPress={() => {
                        SClass223.accelerate();
                    }}
                >
                    <Text style={styles.text}>Додати швидкість</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#EEDC82" : "yellow",
                        },
                        {
                            width: 200,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 12,
                            alignSelf: "center",
                            marginTop: 20,
                        },
                    ]}
                    onPress={() => {
                        SClass223.decelerate();
                    }}
                >
                    <Text style={styles.text}>Зменшити швидкість</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#EEDC82" : "yellow",
                        },
                        {
                            width: 200,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 12,
                            alignSelf: "center",
                            marginTop: 20,
                        },
                    ]}
                    onPress={() => {
                        SClass223.changeTransmissionMode("all wheels drive");
                    }}
                >
                    <Text style={styles.text}>Повний привід</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#EEDC82" : "yellow",
                        },
                        {
                            width: 200,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 12,
                            alignSelf: "center",
                            marginTop: 20,
                        },
                    ]}
                    onPress={() => {
                        SClass223.changeTransmissionMode("backWheel");
                    }}
                >
                    <Text style={styles.text}>Задній привід</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#EEDC82" : "yellow",
                        },
                        {
                            width: 200,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 12,
                            alignSelf: "center",
                            marginTop: 20,
                        },
                    ]}
                    onPress={() => {
                        SClass223.turnCar("left");
                    }}
                >
                    <Text style={styles.text}>Повернути наліво</Text>
                </Pressable>
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "#EEDC82" : "yellow",
                        },
                        {
                            width: 200,
                            height: 40,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 12,
                            alignSelf: "center",
                            marginTop: 20,
                        },
                    ]}
                    onPress={() => {
                        SClass223.turnCar("right");
                    }}
                >
                    <Text style={styles.text}>Повернути направо</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        alignSelf: "center",
    },
    button: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "yellow",
        alignSelf: "center",
    },
    dropdown: {
        borderColor: "#82ccdd",
        borderWidth: 4,
        borderRadius: 12,
        height: 50,
    },
    placeholderStyles: {
        color: "grey",
    },
    dropdown1: {
        marginHorizontal: 10,
        marginBottom: 15,
        width: 200,
        zIndex: 20,
    },
    dropdown2: {
        marginHorizontal: 10,
        marginBottom: 15,
        width: 200,
        zIndex: 10,
    },
});
