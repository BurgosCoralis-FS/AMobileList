import React, { useEffect, useState } from "react";
import { View } from 'react-native';

import Header from '../components/Header';
import ListContainer from '../components/ListContainer';

export default function Home({ navigation }) {
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

    return (
        <View>
            <Header>Student List</Header>
            <ListContainer data={students} onPress={(studentId) => navigation.navigate('Student', { studentId })}/>
        </View>
    );
}