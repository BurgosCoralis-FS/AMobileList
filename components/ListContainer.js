import { FlatList, SafeAreaView, View } from 'react-native'
import ListItem from './ListItem'

export default function ListContainer({ data, onPress }) {
    const renderItem = ({ item }) => (
        <ListItem onPress={onPress} studentId={item._id}>{ item.name }</ListItem>
    )

    return (
        <SafeAreaView>
            <View>
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                />
            </View>
        </SafeAreaView>
    )
}