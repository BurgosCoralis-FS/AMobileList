import React, { useState } from "react"
import { Button, SafeAreaView, TextInput, View } from 'react-native'

import Header from '../components/Header'

import styles from "../Appstyles"

export default function Create({ navigation }) {
    const [values, setValues] = useState({
		name: '',
		class: ''
	})
    const [error, setError] = useState(null)

    const createStudent = async () => {
        try {
            await fetch(`https://crud-app-demo-64132ea5bbce.herokuapp.com/api/v1/students`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            .then(setValues({ name: '', class: '' }))
            .then(navigation.navigate('Home'))
        } catch(error) {
            setError(error.message || "Unexpected Error")
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createStudent()
    }

    const handleInputChanges = (key, value) => {
        setValues((values) => ({
            ...values,
            [key]: value
        }))
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Header>New Student</Header>
            </View>
            
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