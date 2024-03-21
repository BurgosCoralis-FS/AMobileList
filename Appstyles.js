import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#282c34'
    },
    largeHeading: {
        fontSize: 50,
        color: '#fff',
        fontWeight: '200',
        textAlign: 'center'
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
    },
    listItem: {
        marginTop: '2%',
        borderRadius: '50%',
        padding: 10,
        ...Platform.select({
            android: {
                backgroundColor: '#c9b4ee'
            },
            ios: {
                backgroundColor: '#b4edd2'
            },
            default: {
                backgroundColor: '#b4bded'
            }
        })
    }
});

export default styles;