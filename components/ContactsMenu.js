import React from 'react'
import { StyleSheet, Text, View ,Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'


const contactsMenuButtons = [
    {
        type:'starred',
        name:'Starred'
    },
    {
        type:'contact',
        name:'Jessy The',
        photo: 'https://source.unsplash.com/random'
    },
    {
        type:'contact',
        name:'John Doe',
        photo: 'https://source.unsplash.com/random'
    },
    {
        type:'contact',
        name:'Sam Smith',
        photo: 'https://source.unsplash.com/random'
    },
]

export default function ContactsMenu() {
    return (
        <View style={styles.container}>
            
            {/* Contacts Container */}

            {contactsMenuButtons.map((contact,index) => (

            <View style={styles.row} key={index}>
                {/* Image */}
                {
                contact.type == 'starred' ? (
                    <View style={styles.starredIcon}>
                    <AntDesign name="star" size={30} color='#efefef' />
                     </View>

                ) : (
                    <Image source={{uri:contact.photo}} style={styles.image} />
                )
            }
              
                {/* Text */}
                <Text style={styles.text}>
                    {contact.name}
                </Text>
            </View>
            ))}

        </View>
    )
}

const styles = StyleSheet.create({
    container:{

    },
    text:{
        color:'white',
        paddingLeft:15,
        fontSize:18

    },
    row:{
        flexDirection:'row',
        marginTop:20,
        alignItems:'center'

    },
    starredIcon:{
        backgroundColor:'#333',
        width:55,
        height:55,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    image:{
        width:55,
        height:55,
        borderRadius:20
    }
})
