import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import Item from "./Item";

export interface restaurantProps {
    id: string;
    name: string;
    image: string;
}

export default function RestaurantsList() {
    const [restaurants, setRestaurants] = useState<restaurantProps[]>([]);

    useEffect(() => {
        async function getRestaurants() {
            try {
                const response = await fetch(
                    "http://IPV4:3000/restaurants"
                );
                const data = await response.json();
                setRestaurants(data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }
        getRestaurants();
    }, []);

    return (
        <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
            {restaurants.map((item) => (
                <Item item={item} key={item.id} />
            ))}
        </View>
    );
}
