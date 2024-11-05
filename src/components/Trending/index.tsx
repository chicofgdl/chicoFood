import { View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import CardHorizontalFood from "./Food";

export interface foodProps {
    id: string; 
    name: string; 
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restaurantId: string;
}

export default function Trending() {
    const [foods, setFoods] = useState<foodProps[]>([]);

    useEffect(() => {
        async function getFoods() {
            try {
                const response = await fetch("http://IPV4:3000/foods");
                const data = await response.json();
                console.log(data);
                setFoods(data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }
        getFoods();
    }, []);
    

    return (
        <View>
            <FlatList
                contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
                data={foods}
                renderItem={({ item }) => <CardHorizontalFood food={item} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}
