import { Platform, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#282c34',
        
    },
    largeHeading: {
        fontSize: 50,
        color: '#fff',
        fontWeight: '200'
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