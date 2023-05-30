import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Pressable,
    SafeAreaView,
    TextInput,
} from "react-native";
import Header from "./header";
import { Flat_Figure, Triangle, Rectangle, Trapezoid, Circle } from "./classes";
import { useState } from "react";

export default function App() {
    const [arr, setArr] = useState<Flat_Figure[]>([]);

    const [triangle, setTriangle] = useState(0);
    const [rectangle, setRectangle] = useState(0);
    const [trapezoid, setTrapezoid] = useState(0);
    const [circle, setCircle] = useState(0);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#82EEFD" }}>
            <ScrollView>
                <Header />
                <Text style={styles.text}>Кількість трикутників</Text>
                <TextInput
                    style={styles.input}
                    value={triangle.toString()}
                    onChangeText={(text) =>
                        setTriangle(parseInt(text) ? parseInt(text) : 0)
                    }
                />
                <Text style={styles.text}>Кількість прямокутників</Text>
                <TextInput
                    style={styles.input}
                    value={rectangle.toString()}
                    onChangeText={(text) =>
                        setRectangle(parseInt(text) ? parseInt(text) : 0)
                    }
                />
                <Text style={styles.text}>Кількість трапецій</Text>
                <TextInput
                    style={styles.input}
                    value={trapezoid.toString()}
                    onChangeText={(text) =>
                        setTrapezoid(parseInt(text) ? parseInt(text) : 0)
                    }
                />
                <Text style={styles.text}>Кількість Кіл</Text>
                <TextInput
                    style={styles.input}
                    value={circle.toString()}
                    onChangeText={(text) =>
                        setCircle(parseInt(text) ? parseInt(text) : 0)
                    }
                />
                <Pressable
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? "orange" : "red",
                        },
                        {
                            width: 200,
                            height: 50,
                            alignSelf: "center",
                            justifyContent: "center",
                            borderRadius: 12,
                        },
                    ]}
                    onPress={() => {
                        if (
                            triangle === 0 ||
                            rectangle === 0 ||
                            trapezoid === 0 ||
                            circle === 0
                        ) {
                            alert("Input error");
                            return;
                        }
                        for (let i = 0; i <= triangle; i++) {
                            const triangle1 = new Triangle(2 + i, 3 + i, 4 + i);
                            setArr((prev) => [...prev, triangle1]);
                        }
                        for (let i = 0; i <= rectangle; i++) {
                            const rectangle1 = new Rectangle(5 + i, 7 + i);
                            setArr((prev) => [...prev, rectangle1]);
                        }
                        for (let i = 0; i <= trapezoid; i++) {
                            const trapezoid1 = new Trapezoid(
                                10 + i,
                                10 + i,
                                5 + i,
                                7 + i,
                                7 + i
                            );
                            setArr((prev) => [...prev, trapezoid1]);
                        }
                        for (let i = 0; i <= circle; i++) {
                            const circle1 = new Circle(9 + i);
                            setArr((prev) => [...prev, circle1]);
                        }
                    }}
                >
                    <Text style={styles.text}>Calculate</Text>
                </Pressable>
                {arr.map((elem: any, index: number) => {
                    if (elem instanceof Triangle) {
                        return (
                            <View key={index} style={{ paddingTop: 20 }}>
                                <Text style={styles.text}>A = {elem.a}</Text>
                                <Text style={styles.text}>B = {elem.b}</Text>
                                <Text style={styles.text}>C = {elem.c}</Text>
                                <Text style={styles.text}>
                                    Периметр = {elem.calculate_perimeter()}
                                </Text>
                                <Text style={styles.text}>
                                    Площа = {elem.calculate_the_area()}
                                </Text>
                            </View>
                        );
                    }
                    if (elem instanceof Rectangle) {
                        return (
                            <View key={index} style={{ paddingTop: 20 }}>
                                <Text style={styles.text}>
                                    width = {elem.width}
                                </Text>
                                <Text style={styles.text}>
                                    length = {elem.length}
                                </Text>
                                <Text style={styles.text}>
                                    Периметр = {elem.calculate_perimeter()}
                                </Text>
                                <Text style={styles.text}>
                                    Площа = {elem.calculate_the_area()}
                                </Text>
                            </View>
                        );
                    }
                    if (elem instanceof Trapezoid) {
                        return (
                            <View key={index} style={{ paddingTop: 20 }}>
                                <Text style={styles.text}>
                                    base1 = {elem.base1}
                                </Text>
                                <Text style={styles.text}>
                                    base2 = {elem.base2}
                                </Text>
                                <Text style={styles.text}>
                                    height = {elem.height}
                                </Text>
                                <Text style={styles.text}>
                                    side1 = {elem.side1}
                                </Text>
                                <Text style={styles.text}>
                                    side2 = {elem.side2}
                                </Text>
                                <Text style={styles.text}>
                                    Периметр = {elem.calculate_perimeter()}
                                </Text>
                                <Text style={styles.text}>
                                    Площа = {elem.calculate_the_area()}
                                </Text>
                            </View>
                        );
                    }
                    if (elem instanceof Circle) {
                        return (
                            <View key={index} style={{ paddingTop: 20 }}>
                                <Text style={styles.text}>
                                    radius = {elem.radius}
                                </Text>
                                <Text style={styles.text}>
                                    Периметр = {elem.calculate_perimeter()}
                                </Text>
                                <Text style={styles.text}>
                                    Площа = {elem.calculate_the_area()}
                                </Text>
                            </View>
                        );
                    }
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        margin: 15,
        fontSize: 20,
        padding: 5,
        width: 100,
        alignSelf: "center",
    },
    text: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "black",
        alignSelf: "center",
    },
});