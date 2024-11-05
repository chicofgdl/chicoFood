import React from "react";
import { Text, View, Pressable, Image } from "react-native";
import PagerView from "react-native-pager-view";

export default function Banner() {
    return (
        <View className="w-full h-36 md:h-60 rounded-2xl mt-5 mb-4 ">
            <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
                <Pressable className="w-full h-36 md:h-60 rounded-2xl" key="1">
                    <Image
                        source={ require("../../assets/comida_chinesa.jpg") }
                        className="w-full h-36 md:h-60 rounded-2xl"
                    />
                </Pressable>
                <Pressable className="w-full h-36 md:h-60 rounded-2xl" key="2">
                    <Image
                        source={ require("../../assets/frango_parmegiana.webp") }
                        className="w-full h-36 md:h-60 rounded-2xl"
                    />
                </Pressable>
                <Pressable className="w-full h-36 md:h-60 rounded-2xl" key="3">
                    <Image
                        source={ require("../../assets/hamburguer.jpg") }
                        className="w-full h-36 md:h-60 rounded-2xl"
                    />
                </Pressable>
            </PagerView>
        </View>
    )
}