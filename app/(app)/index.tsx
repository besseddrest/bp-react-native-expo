import { useSession } from "@/services/auth/ctx";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
    const { signOut } = useSession();

    return (
        <View style={styles.indexView}>
            <Text
                onPress={() => {
                    signOut();
                }}
            >
                Sign Out
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    indexView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
