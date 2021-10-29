import React, { useState ,useEffect } from 'react'
import { StyleSheet, Text, View ,TextInput ,TouchableOpacity } from 'react-native'
import { io } from 'socket.io-client'

import StartMeeting from '../components/StartMeeting'

let socket;

export default function MeetingRoom() {

    const [name, setname] = useState()
    const [roomId, setroomId] = useState()


    const joinRoom = () =>{
        socket.emit('join-room',{roomId:roomId,userName:name})
    }

    useEffect(() => {
         socket = io('http://localhost:3001')
        socket.on('connection',() => console.log('connected'))
    },[])


    return (
        <View style={styles.container}>
            <StartMeeting
            name={name}
            setname={setname}
            roomId={roomId}
            setroomId={setroomId}
            joinRoom={joinRoom}
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
