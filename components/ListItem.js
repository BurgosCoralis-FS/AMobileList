import { Button, View } from 'react-native';

export default function ListItem({ children }) {
    return (
        <View>
            <Button title={children} />
        </View>
    );
}