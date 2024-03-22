import { Platform, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: 20
    },
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
    },
    class: {
        fontSize: 40,
        textAlign: 'center'
    },
    loading: {
        marginTop: '50%'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        padding: 10,
        borderRadius: '50%',
        backgroundColor: '#282c34'
    }
})

export default styles