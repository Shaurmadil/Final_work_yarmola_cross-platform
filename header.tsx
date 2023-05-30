import { Text, View } from "react-native";
import React from "react";

const Header = () => {
    return (
        <View
            style={{
                backgroundColor: "#82EEFD",
                alignItems: "center",
            }}
        >
            <Text style={{ fontSize: 20, color: "black", fontWeight: "700",}}></Text>
            <Text style={{ backgroundColor: 'yellow', fontSize: 20, color: "black", fontWeight: "700",}}>Виконав Ярмола М.О. Кн-32</Text>
            <Text style={{ fontSize: 20, color: "black", fontWeight: "700",}}>----------------------------------</Text>
        </View>
    );
};

export default Header;
