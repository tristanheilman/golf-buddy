import { View, ScrollView } from "react-native";
import { useTailwind } from 'tailwind-rn';

export default function ScrollingContainer({ children }) {
    const tailwind = useTailwind();

    return (
        <View style={tailwind('w-full flex items-center bg-white')}>
            <ScrollView style={tailwind('h-full w-full')}>
                <View style={tailwind('p-6')}>
                    {children}
                </View>
            </ScrollView>
        </View>
    );
}
