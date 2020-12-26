import * as React from 'react';
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import Firebase from 'firebase'
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const firebaseconfig = {
    apiKey: "AIzaSyAW5l824ZG_2Wky4JzVqwrY600KrXtj_uA",
    authDomain: "rnnews-a7156.firebaseapp.com",
    databaseURL: "https://rnnews-a7156-default-rtdb.firebaseio.com",
    projectId: "rnnews-a7156",
    storageBucket: "rnnews-a7156.appspot.com",
    messagingSenderId: "222163335673",
    appId: "1:222163335673:web:b6c29c9333db45794aa528"
};
if (!Firebase.apps.length) {
    Firebase.initializeApp(firebaseconfig);
}

export default () => {
    return { Firebase, auth, }
}