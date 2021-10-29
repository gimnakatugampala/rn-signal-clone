import React from 'react'
import { StyleSheet, Text, View ,TextInput ,TouchableOpacity } from 'react-native'

export default function StartMeeting({name,setname,roomId,setroomId}) {
    return (
                <View style={styles.startMeetingContainer}>
                <View style={styles.info}> 

                <TextInput 
                 style={styles.textInput}
                 value={name}
                 placeholder="Enter name"
                 placeholderTextColor="#767476"
                 onChangeText={text => setname(text)}
                />
                </View>

                <View style={styles.info}> 
                <TextInput 
                 style={styles.textInput}
                 value={roomId}
                 placeholder="Enter room id"
                 placeholderTextColor="#767476"
                 onChangeText={text => setroomId(text)}
                />
                </View>

                <View style={{alignItems:'center'}}>
                    <TouchableOpacity
                    onPress={() => {}}
                    style={styles.startMeetingButton}
                    >
                    <Text style={{color:'white',fontWeight:'bold'}}>Start A Meeting</Text>

                    </TouchableOpacity>
                </View>

                </View>
           
    
    )
}

const styles = StyleSheet.create({
    info:{
        width:'100%',
        backgroundColor:'#373538',
        height:50,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#484648',
        padding:12,
        justifyContent:'center'
    },
    textInput:{
        color:'white',
        fontSize:18
    },
    startMeetingButton:{
        width:350,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0470Dc',
        height:50,
        borderRadius:15
    }
})
