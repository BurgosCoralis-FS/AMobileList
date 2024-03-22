import React, { useEffect, useState } from "react"
import { Button, SafeAreaView, Text, TextInput, View } from 'react-native'

import styles from "../Appstyles"

import Header from '../components/Header'

export default function Student({ route, navigation }) {
    const id = route.params.studentId
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [values, setValues] = useState({
		name: '',
		class: ''
	})
    
    let ignore = false
	useEffect(() => {
		if(!ignore){
			getStudent()
		}

		return () => {
			ignore = true
		}
		}, [])

        const getStudent = async () => {
            setLoading(true)
            try {
                await fetch(`https://crud-app-demo-64132ea5bbce.herokuapp.com/api/v1/students/${id}`)
                        .then(res => res.json())
                        .then(data => {
                            setValues({
                                name: data.name,
                                class: data.class
                            })
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
                            .then(navigation.navigate('Home'))
                } catch(error) {
                    setError(error.message || "Unexpected Error")
                } finally {
                    setLoading(false)
                }
        }

        const updateStudent = async () => {
            try {
                await fetch(`https://crud-app-demo-64132ea5bbce.herokuapp.com/api/v1/students/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                })
                        .then(res => res.json())
            } catch(error) {
                setError(error.message || "Unexpected Error")
            } finally {
                setLoading(false)
            }
        }

        const handleInputChanges = (key, value) => {
            setValues((values) => ({
                ...values,
                [key]: value
            }))
        }

        const handleSubmit = () => {
            updateStudent()
        }

    return (
        <SafeAreaView>
            {values && (
                <View>
                    <Header>{values.name}</Header>
                    <Text style={styles.class}>Class: {values.class}</Text>
                    <Button title="Delete Student" onPress={deleteStudent} />
                </View>
            )}

            <View>
                <TextInput 
                value={values.name} 
                onChangeText={(text) => handleInputChanges('name', text)}
                placeholder='Name' 
                style={styles.input} />
            </View>

            <View>
                <TextInput 
                value={values.class} 
                onChangeText={(text) => handleInputChanges('class', text)}
                placeholder='Class' 
                style={styles.input} />
            </View>

            <View style={styles.button}>
                <Button title="Submit" onPress={handleSubmit} color='#fff' />
            </View>
        </SafeAreaView>
    )
}