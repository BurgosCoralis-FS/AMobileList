import React, { useCallback, useEffect, useState } from "react";
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import Header from '../components/Header';
import ListContainer from '../components/ListContainer';

export default function Home({ navigation }) {
    const [students, setStudents] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);

    let ignore = false;
    useEffect(() => {
        if(!ignore) {
            getStudents();
        }
        return () => {
            ignore = true;
        }
    }, []);

    const getStudents = async () => {
		setLoading(true)
		try {
			await fetch(`https://crud-app-demo-64132ea5bbce.herokuapp.com/api/v1/students`)
					.then(res => res.json())
					.then(data => {
						console.log({data})
						setStudents(data)
					})
		} catch(error) {
			setError(error.message || "Unexpected Error")
		} finally {
			setLoading(false)
		}
	}

    useFocusEffect(
        useCallback(() => {
            getStudents();
        }, [])
    )

    return (
        <View>
            <Header>Student List</Header>
            <ListContainer data={students} onPress={(studentId) => navigation.navigate('Student', { studentId })}/>
        </View>
    );
}