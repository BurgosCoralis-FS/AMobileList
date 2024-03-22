import { Text, View } from 'react-native'
import { useFonts, CuteFont_400Regular } from '@expo-google-fonts/cute-font'

import styles from '../Appstyles'

// https://github.com/expo/google-fonts/tree/master/font-packages/cute-font

export default function Header({ children, level }) {
    let [fontsLoaded] = useFonts({ CuteFont_400Regular })
    const headingLevel = level ? level : 5
    if (fontsLoaded) {
        return (
            <View style={styles.header}>
                <Text accessibilityRole={`h${headingLevel}`} style={{
                    fontFamily: 'CuteFont_400Regular',
                    fontSize: 60, 
                    color: 'yellow'}}>
                        {children}
                    </Text>
            </View>
        )
    }
}