import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Text, Button, View, ScrollView, TouchableOpacity } from "react-native";
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { useTailwind } from 'tailwind-rn';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ScrollingContainer from './components/ScrollingContainer';

function HomeScreen({ navigation }) {
    const tailwind = useTailwind();
    return (
        <ScrollingContainer>
            <View style={tailwind('p-6 rounded-xl w-full bg-lime-700 mb-4')}>
                <View style={tailwind('flex flex-row justify-between')}>
                    <View style={tailwind('flex flex-col')}>
                        <Text style={tailwind('text-white font-extrabold text-lg')}>Legendary Run Golf Course</Text>
                        <Text style={tailwind('text-white')}>Saturday, May 14</Text>
                    </View>
                    <Text style={tailwind('text-white font-extrabold text-lg')}>+22</Text>
                </View>
            </View>
            <Text style={tailwind('text-slate-900 font-extrabold text-xl')}>Golfer Stats</Text>
            <ScrollView horizontal={true} style={tailwind('p-6 flex flex-row')}>
                <View style={tailwind('mr-4 h-40 p-6 w-40 bg-lime-200 rounded-xl')}>
                    <Text>Sam Mathis</Text>
                    <Text>🏌️ Wed, May 4</Text>
                    <Text style={tailwind('font-extrabold text-lg')}>+22</Text>
                </View>
                <View style={tailwind('mr-4 p-6 h-40 w-40 bg-lime-300 rounded-xl')}>
                    <Text>Nick Nance</Text>
                    <Text>🏌️ Wed, May 4</Text>
                    <Text style={tailwind('font-extrabold text-lg')}>+22</Text>
                </View>
                <View style={tailwind('mr-4 p-6 h-40 w-40 bg-lime-200 rounded-xl')}>
                    <Text>Mj Garmone</Text>
                    <Text>🏌️ Wed, May 4</Text>
                    <Text style={tailwind('font-extrabold text-lg')}>+22</Text>
                </View>
                <View style={tailwind('mr-4 p-6 h-40 w-40 bg-lime-300 rounded-xl')}>
                    <Text>Danny Magyrics</Text>
                    <Text>🏌️ Wed, May 4</Text>
                    <Text style={tailwind('font-extrabold text-lg')}>+22</Text>
                </View>
                <View style={tailwind('mr-4 p-6 h-40 w-40 bg-lime-200 rounded-xl')}>
                    <Text>Brady Rath</Text>
                    <Text>🏌️ Wed, May 4</Text>
                    <Text style={tailwind('font-extrabold text-lg')}>+22</Text>
                </View>
                <View style={tailwind('mr-4 p-6 h-40 w-40 bg-lime-300 rounded-xl')}>
                    <Text>Lee Aldridge</Text>
                    <Text>🏌️ Wed, May 4</Text>
                    <Text style={tailwind('font-extrabold text-lg')}>+22</Text>
                </View>
                <View style={tailwind('mr-4 p-6 h-40 w-40 bg-lime-200 rounded-xl')}>
                    <Text>Daniel Denti</Text>
                    <Text>🏌️ Wed, May 4</Text>
                    <Text style={tailwind('font-extrabold text-lg')}>+22</Text>
                </View>
            </ScrollView>
            <Text style={tailwind('text-slate-900 font-extrabold text-xl')}>Leaderboards</Text>
            <View style={tailwind('mb-6 p-6 h-60 bg-slate-200 rounded-xl w-full')}>
            </View>
            <ScrollView horizontal={true} style={tailwind('p-6 flex flex-row')}>
                <View style={tailwind('mr-4 h-40 p-6 w-40 bg-blue-200 rounded-xl')}>
                    <Text>Test</Text>
                </View>
                <View style={tailwind('mr-4 p-6 h-40 w-40 bg-blue-200 rounded-xl')}>
                    <Text>Test</Text>
                </View>
                <View style={tailwind('mr-4 p-6 h-40 w-40 bg-blue-200 rounded-xl')}>
                    <Text>Test</Text>
                </View>
                <View style={tailwind('mr-4 p-6 h-40 w-40 bg-blue-200 rounded-xl')}>
                    <Text>Test</Text>
                </View>
                <View style={tailwind('mr-4 p-6 h-40 w-40 bg-blue-200 rounded-xl')}>
                    <Text>Test</Text>
                </View>
                <View style={tailwind('mr-4 p-6 h-40 w-40 bg-blue-200 rounded-xl')}>
                    <Text>Test</Text>
                </View>
                <View style={tailwind('mr-4 p-6 h-40 w-40 bg-blue-200 rounded-xl')}>
                    <Text>Test</Text>
                </View>
            </ScrollView>
        </ScrollingContainer>
    );
}

function GolferGroupsScreen({ navigation }) {
    const tailwind = useTailwind();
    return (
        <ScrollingContainer>
            <View style={tailwind('mb-6 p-6 h-60 bg-slate-200 rounded-xl w-full')}>
                <Text>Group 1</Text>
            </View>
            <View style={tailwind('mb-6 p-6 h-60 bg-slate-200 rounded-xl w-full')}>
                <Text>Group 2</Text>
            </View>
            <View style={tailwind('mb-6 p-6 h-60 bg-slate-200 rounded-xl w-full')}>
                <Text>Group 2</Text>
            </View>
            <Button title="Make a new Group" />
        </ScrollingContainer>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <TailwindProvider utilities={utilities}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} options={{
                        headerTitle: 'Test',
                        headerRight: () => <TouchableOpacity><FontAwesome5 name="golf-ball" size={25} color="#60A5FA" onPress={() => console.log("Hi")} style={{marginRight: 20}}/></TouchableOpacity>
                    }}/>
                    <Drawer.Screen name="Golfer Groups" component={GolferGroupsScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </TailwindProvider>
    );
}
