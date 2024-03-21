import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Text, View } from 'react-native';

import styles from "../Appstyles";

import Header from '../components/Header';


export default function Student({ route, navigation }) {
    const id = route.params.studentId;
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [values, setValues] = useState({
		name: '',
		class: ''
	})
    
    let ignore = false;
	useEffect(() => {
		if(!ignore){
			getStudent();
		}

		return () => {
			ignore = true;
		}
		}, [])

        const getStudent = async () => {
            setLoading(true)
            try {
                await fetch(`https://crud-app-demo-64132ea5bbce.herokuapp.com/api/v1/students/${id}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log({data})
                            setStudent(data)
                        })
            } catch(error) {
                setError(error.message || "Unexpected Error")
            } finally {
                setLoading(false)
            }
        }

        const deleteStudent = async () => {
            try {
                await fetch(`https://crud-app-demo-64132ea5bbce.herokuapp.com/api/v1/students/${id}`, {
                    method: 'DELETE'
                })
                            .then(res => res.json())
                            .then(data => {
                                
                                navigation.navigate('Home')
                            })
                } catch(error) {
                    setError(error.message || "Unexpected Error")
                } finally {
                    setLoading(false)
                }
        }

    return (
        <SafeAreaView>
            {student && (
                <View>
                    <Header>{student.name}</Header>
                    <Text style={styles.class}>Class: {student.class}</Text>
                    <Button title="Delete Student" onPress={deleteStudent} />
                </View>
            )}
        </SafeAreaView>
    );
}