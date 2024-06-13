import { useSession } from "@/services/auth/ctx";
import { Redirect, Stack } from "expo-router";
import { Text } from "react-native";

export default function AppLayout() {
    const { session, isLoading } = useSession();

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    if (!session) {
        return <Redirect href="/sign-in" />;
    }

    return <Stack />;
}
