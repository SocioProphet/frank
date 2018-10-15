import firebase from '@firebase/app';
require('@firebase/firestore');

var config = {
    apiKey: "AIzaSyBGqOnsCcXpf9q8zvF5Nf_y575dB-0mAEs",
    authDomain: "frank-bbf4e.firebaseapp.com",
    databaseURL: "https://frank-bbf4e.firebaseio.com",
    projectId: "frank-bbf4e",
    storageBucket: "frank-bbf4e.appspot.com",
    messagingSenderId: "187411023250"
};

var fire = firebase.initializeApp(config);

export default fire;