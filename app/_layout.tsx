import { SessionProvider } from "@/services/auth/ctx";
import { Slot, Stack } from "expo-router";
import { StrictMode } from "react";
import { StyleSheet, Text } from "react-native";

export default function Root() {
    return (
        <SessionProvider>
            <Slot />
            {/* <Stack>
                <Text style={styles.siteTitle}>LegaShare</Text>
                <Stack.Screen name="index" />
            </Stack> */}
        </SessionProvider>
    );
}
