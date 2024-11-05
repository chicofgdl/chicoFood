import { Text, View, ScrollView } from "react-native";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Search from "../components/Search";
import Section from "../components/Section";

import Constants from "expo-constants";
import Trending from "../components/Trending";
import Restaurants from "../components/Restaurants";
import RestaurantsList from "../components/RestaurantsList";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
    return (
        <ScrollView
            style={{ flex: 1 }}
            className="bg-slate-200"
            showsVerticalScrollIndicator={false}
        >
            <View
                className="w-full px-4"
                style={{ marginTop: statusBarHeight + 8 }}
            >
                <Header />

                <Banner />

                <Search />

                <Section
                    name="Comidas em alta"
                    label="Veja mais"
                    action={() => console.log("Clicou no veja mais")}
                    size="text-2xl"
                />

                <Trending />

                <Section
                    name="Famosos no chicoFood"
                    label="Veja todos"
                    action={() => console.log("Clicou no famosos")}
                    size="text-xl"
                />

                <Restaurants />
                <Section
                    name="Restaurantes"
                    label="Veja todos"
                    action={() => console.log("Clicou no Restaurantes")}
                    size="text-xl"
                />
                <RestaurantsList />
            </View>
        </ScrollView>
    );
}
