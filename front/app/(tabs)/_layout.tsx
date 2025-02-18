import { Tabs } from "expo-router";
import { Image } from "react-native";

const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: "#154962", height: 62, flexDirection: 'row', alignItems: 'center' }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Image source={require('../../src/assets/iconesTabBar/homeFocada.png')} />
                        }
                        else {
                            return <Image source={require('../../src/assets/iconesTabBar/homeDesfocada.png')} />
                        }
                    }
                }}
            />
            <Tabs.Screen
                name="paginaDePesquisa"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Image source={require('../../src/assets/iconesTabBar/lupaFocada.png')} />
                        }
                        else {
                            return <Image source={require('../../src/assets/iconesTabBar/lupaDesfocada.png')} />
                        }
                    }
                }}
            />
            <Tabs.Screen
                name="paginaCompreNovamente"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Image source={require('../../src/assets/iconesTabBar/comprasFocada.png')} />
                        }
                        else {
                            return <Image source={require('../../src/assets/iconesTabBar/comprasDesfocada.png')} />
                        }
                    }
                }}
            />
            <Tabs.Screen
                name="paginaAlterarFoto"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Image source={require('../../src/assets/iconesTabBar/perfilFocada.png')} />
                        }
                        else {
                            return <Image source={require('../../src/assets/iconesTabBar/perfilDesfocada.png')} />
                        }
                    }
                }}
            />
        </Tabs>
    )
}

export default Layout