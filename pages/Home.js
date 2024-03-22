import React, { useCallback, useEffect, useState } from "react"
import { ActivityIndicator, Button, SafeAreaView, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import Header from '../components/Header'
import ListContainer from '../components/ListContainer'

import styles from "../Appstyles"

export default function Home({ navigation }) {
    const [students, setStudents] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    let ignore = false
    useEffect(() => {
        if(!ignore) {
            getStudents()
        }
        return () => {
            ignore = true
        }
    }, [])

    const getStudents = async () => {
		setLoading(true)
		try {
			await fetch(`https://crud-app-demo-64132ea5bbce.herokuapp.com/api/v1/students`)
					.then(res => res.json())
					.then(data => {
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
            getStudents()
        }, [])
    )

    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Header>Student List</Header>
            </View>
            
            <View >
                { loading ? 
                (<ActivityIndicator size="large" color="#995db5" style={styles.loading} />) 
                : (<ListContainer 
                data={students} 
                onPress={(studentId) =>
                    navigation.navigate('Student', { studentId })}/>)}
            </View>
            
            <View style={styles.button}>
                <Button 
                title="Add a student" 
                onPress={() => navigation.navigate('Create')}
                color='#fff' />
            </View>
        </SafeAreaView>
    )
}