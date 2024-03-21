import { View } from 'react-native';

import Header from '../components/Header';
import ListContainer from '../components/ListContainer';

export default function Home() {
    return (
        <View>
            <Header>Student List</Header>
            <ListContainer />
        </View>
    );
}