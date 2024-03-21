import React, { useEffect, useState } from "react";
import { FlatList } from 'react-native';
import ListItem from './ListItem';

import styles from '../Appstyles';

export default function ListContainer({ data }) {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getStudents = async () => {
            try {
                const res = await fetch(`https://crud-app-demo-64132ea5bbce.herokuapp.com/api/v1/students`);
                const data = await res.json();
                setStudents(data);
            } catch(error) {
                setError(error.message || 'Unexpected Error');
            };
        };
        getStudents();
    }, []);
    
    const renderItem = ({ item }) => (
        <ListItem>{ item.name }</ListItem>
    );

    return (
        <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={item => item._id} />
    );
}