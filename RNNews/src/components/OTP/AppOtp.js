import { Body, Container, Content, Header, Input, Item, Label, Title } from 'native-base';
import React from 'react'
import { View, Button, Text } from 'react-native'
import firebaseSetup from './Firebase'


const Home = () => {
    const {Firebase, auth } = firebaseSetup();
    const [confirm, setConfirm] = React.useState(null);
    const [code, setCode] = React.useState('');

    const signInWithPhoneNumber = async (phoneNumber) => {
        const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
        setConfirm(confirmation);
    }

    const login = async (email, password) => {
        try {
            Firebase.database().ref('Chat').push("1234") 
        } catch (error) {
            
        }
        // try {
        //     const go = await auth().signInWithEmailAndPassword(email,password);
        //     alert(JSON.stringify(go))
        // } catch (error) {
        //     alert(error);
        // }
    }

    const register = async (email, password) => {
        
        try {
            alert("register")
            await auth().createUserWithEmailAndPassword(email,password);
        } catch (error) {
           alert(error);
        }
    }

    const confirmCode = async () => {
        alert(code)
        try {
            await confirm.confirm(code);
            alert('User Sign In SuccessFully')
        } catch (error) {
            alert(JSON.stringify(error))
        }
    }

    if (!confirm) {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>React Native firebase Phone Authentication</Title>
                    </Body>
                </Header>
                <Content contentContainerStyle={{
                    flex: 1, justifyContent: "center", alignItems: "center"
                }}>
                    <Button onPress={() => signInWithPhoneNumber('+91 9574053598')} title="Phone Number Sign In" />
                    <Button onPress={() => login("abc@gmail.com","ABC@abc")} title="Gmail and Password Sign In" />
                    {/* <Button onPress={() => Firebase.database().ref('Chat').push("1234")} /> */}
                </Content>
            </Container>
        )
    }

    return (
        <Container>
            <Header>
                <Body>
                    <Title>OTP Screen</Title>
                </Body>
            </Header>
            <Content contentContainerStyle={{
                flex: 1, justifyContent: "center", alignItems: "center"
            }}>
                <Item inlineLabel>
                    <Label>ENTER OTP</Label>
                    <Input value={code} onChangeText={(text) => setCode(text)}></Input>
                <Button onPress={() => confirmCode()} title="Confirm OTP Code" />
                </Item>
            </Content>
        </Container>
    )

}

export default class Demo extends React.Component {

    render() {
        return (
            <Home />
        )
    }
}

