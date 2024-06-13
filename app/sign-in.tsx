import { UserPass } from "@/components/UserPass";
import { useSession } from "@/services/auth/ctx";
import { View } from "react-native";

export default function SignIn() {
    const { signIn } = useSession();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <UserPass />
        </View>
    );
}
