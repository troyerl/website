import firebase from 'firebase'

var config = {
        apiKey: "AIzaSyA1pbddmS6kdFvq-xkUV2xktcynQ8nu3Vg",
        authDomain: "website-2b805.firebaseapp.com",
        databaseURL: "https://website-2b805.firebaseio.com",
        projectId: "website-2b805",
        storageBucket: "website-2b805.appspot.com",
        messagingSenderId: "1086170405957",
        appId: "1:1086170405957:web:8906fcc696b876b9"
    };
    firebase.initializeApp(config);
    firebase.firestore().settings({ timestampsInSnapshots: true });



export default firebase

