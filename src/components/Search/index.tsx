import {
    Text,
    ScrollView,
    View,
    Pressable,
    Image,
    TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function Search() {
    return (
        <View className="w-full h-16 bg-white flex flex-row items-center justify-start gap-2 rounded-2xl px-4 border border-slate-500">
            <Feather name="search" size={24} color="#64748b" />
            <TextInput className="w-full flex-1 h-full" placeholder="Procure sua comida"></TextInput>
        </View>
    );
}
