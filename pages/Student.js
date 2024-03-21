import React, { useEffect, useState } from "react";
import { Text, View } from 'react-native';

import Header from '../components/Header';


export default function Student({ route }) {
    const id = route.params;
    const [student, setStudent] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getStudent = async () => {
            try {
                const res = await fetch(`https://crud-app-demo-64132ea5bbce.herokuapp.com/api/v1/students/${id.studentId}`);
                const data = await res.json();
                setStudent(data);
            } catch(error) {
                setError(error.message || 'Unexpected Error');
            }
        };
        getStudent();
    }, []);
    return (
        <View>
            {student && (
                <View>
                    <Header>{student.name}</Header>
                    <Text>{student.class}</Text>
                </View>
            )}
            
        </View>
    );
}