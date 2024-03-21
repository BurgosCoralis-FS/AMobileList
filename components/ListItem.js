import { Button, View } from 'react-native';

import styles from '../Appstyles';

export default function ListItem({ children, onPress, studentId }) {
    return (
        <View style={styles.listItem}>
            <Button title={children} color={'black'} onPress={() => onPress(studentId)} />
        </View>
    );
}