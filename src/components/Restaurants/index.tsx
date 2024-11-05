import { View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import RestaurantItem from "./RestaurantItem";

export interface restaurantProps {
    id: string;
    name: string;
    image: string;
}

export default function Restaurants() {

    const [restaurants, setRestaurants] = useState<restaurantProps[]>([]);

    useEffect(() => {
        async function getRestaurants() {
            try {
                const response = await fetch("http://IPV4:3000/restaurants");
                const data = await response.json();
                setRestaurants(data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        }
        getRestaurants();
    }, []);

    return (
        <FlatList
                contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
                data={restaurants}
                renderItem={({ item }) => <RestaurantItem item={item} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
    );
}