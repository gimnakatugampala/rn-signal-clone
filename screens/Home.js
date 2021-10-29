import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView } from 'react-native'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MenuButtons from '../components/MenuButtons'
import ContactsMenu from '../components/ContactsMenu'

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{height:'100%'}}>
            <Header />
            <SearchBar />
            <MenuButtons navigation={navigation} />
            <ContactsMenu />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#1c1c1c',
        padding:15
    }
})
