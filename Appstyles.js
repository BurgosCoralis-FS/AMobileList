import { Platform, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingColor: {
        ...Platform.select({
            android: {
                color: 'yellow'
            },
            ios: {
                color: 'red'
            },
            default: {
                color: 'blue'
            }
        })
    }
});

export default styles;