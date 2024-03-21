import { Text, View } from 'react-native';

import styles from '../Appstyles';

export default function Header({ children, level }) {
    const headingLevel = level ? level : 5
    return (
        <View style={styles.header}>
        <Text accessibilityRole={`h${headingLevel}`} style={styles.largeHeading}>{children}</Text>
        </View>
    );
}