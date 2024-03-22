import { FlatList, SafeAreaView, View } from 'react-native'
import ListItem from './ListItem'

export default function ListContainer({ data, onPress, onCheckboxChange, isChecked }) {
    const renderItem = ({ item }) => (
        <ListItem 
        onPress={onPress} 
        movieId={item._id}
        isChecked={item.completed}
        onCheckboxChange={onCheckboxChange}>
            { item.title }
        </ListItem>
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