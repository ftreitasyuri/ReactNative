import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles.js";

export default function Button(){
    return(
        <TouchableOpacity
            style={styles.button}
        >
            <Text
               style={
                styles.buttonText
            }
            >
                Converter
            </Text>
        </TouchableOpacity>
    )
}