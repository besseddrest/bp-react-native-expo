import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    Alert,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { useSession } from "@/services/auth/ctx";
import { router } from "expo-router";

export function UserPass() {
    const [username, setUsername] = useState("");
    const { signIn } = useSession();
    let password = "";

    return (
        <View style={styles.formLogin}>
            <Text>Account Login</Text>
            <TextInput
                style={styles.formInputText}
                placeholder="username or email"
                onChangeText={handleChangedUsername}
            />
            <TextInput
                style={styles.formInputText}
                placeholder="password"
                onChangeText={handleChangedPassword}
            />
            <TouchableOpacity
                style={styles.formSubmit}
                onPress={() => {
                    signIn();
                    router.replace("/");
                }}
            >
                <Text style={styles.formSubmitText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    formLogin: {
        flexDirection: "column",
        gap: 10,
    },
    formSubmit: {
        backgroundColor: "teal",
        borderRadius: 4,
        padding: 4,
    },
    formSubmitText: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },
    formInputText: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "grey",
        padding: 4,
    },
});

function handleChangedUsername(val: string) {
    console.log(val);
}

function handleChangedPassword(val: string) {
    console.log(val);
}
