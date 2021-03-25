import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, Image, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import AppHeader from '../screens/AppHeader'
import db from '../config'
import firebase from 'firebase'



export default class TransactionScreen extends React.Component{

    constructor(){
        super();
        this.state={
            title: '',
            author: '',
            storyText: '',
        }
    }

    
    

    submitStory = ()=>{
        console.log(db.collection("stories"))
          db.collection("stories").add({
              title: this.state.title,
              author: this.state.author,
              storyText: this.state.storyText,
          })
         alert("Your Story Has Been Submitted Successfully!")
          this.setState({
              title: '',
              author: '',
              storyText: ''
          })
      }

    render(){
        
        

       
            return(
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.container}>
                    <AppHeader/>
                    <View style= {{backgroundColor:'pink'}}>
                    

                    
                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                        style={styles.inputBox}
                        placeholder="Author Name"
                        onChangeText= {(text)=>{
                            this.setState({
                                author: text
                            })
                        }}
                        value={this.state.author}
                        
                        />

                        

                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                        style={styles.inputBox}
                        placeholder="Story Title"
                        
                        onChangeText= {(text)=>{
                            this.setState({
                                title: text
                            })
                        }}
                        value={this.state.title}
                        />

                        

                    </View>

                    <View style={styles.inputView}>
                        <TextInput
                        multiline
                        style={styles.vv}
                        placeholder="Your Story Goes Like...."
                        onChangeText= {(text)=>{
                            this.setState({
                                storyText: text
                            })
                        }}
                        value={this.state.storyText}
                        
                        />

                        

                    </View>

                    <View style={styles.inputView}>
                        <TouchableOpacity style={styles.ff} onPress={this.submitStory} >Submit</TouchableOpacity>

                        

                    </View>
                    
                </View>
                </KeyboardAvoidingView>
            )
        }
        
        
    }


const styles=StyleSheet.create({

    container:{
     flex:1,
     justifyContent:"center",
     alignItems: 'center'
    },

    displayText:{
        fontSize:15,
        textDecorationLine:'underline',

    },
    scannedButton:{
        backgroundColor:'green',
        padding:10,
        margin:10,

    },

    buttonText:{
        fontSize:20,
        textAlign:'center',
        marginTop:10,

    },

    inputView:{
        flexDirection:'row',
        margin:20,
        
    },

    inputBox:{
        width:350,
        height:40,
        borderWidth:1.5,
        fontSize:25,
        color:'pink'
    },
    scanButton:{
        backgroundColor:'green',
        width:50,
        borderWidth:1.5,
        borderLeftWidth:0
    },
    vv:{
        width:350,
        height:300,
        borderWidth:1.5,
        fontSize:25,
        color:'pink',
        
    },
    ff:{
        width: 110,
        height:60,
        backgroundColor: 'pink',
        color: 'black',
        fontWeight:'bold',
        fontSize:30,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf:'center',
        borderRadius:100,
        borderWidth:1.5
    }
})