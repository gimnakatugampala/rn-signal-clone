import React, { useState } from 'react'
import { StyleSheet, Text, View ,TextInput ,TouchableOpacity } from 'react-native'

import StartMeeting from '../components/StartMeeting'

export default function MeetingRoom() {

    const [name, setname] = useState()
    const [roomId, setroomId] = useState()

    return (
        <View style={styles.container}>
            <StartMeeting
            name={name}
            setname={setname}
            roomId={roomId}
            setroomId={setroomId}

             />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1c1c1c',
        flex:1
    },
  
})
