
import {seedDatabase} from '../seed'

const config = {
        apiKey: "AIzaSyCE1_PI2Nd-mdHfTpvFSk3_Ym7aTYZEcIM",
        authDomain: "my-instagram-clone-91ebe.firebaseapp.com",
        projectId: "my-instagram-clone-91ebe",
        storageBucket: "my-instagram-clone-91ebe.appspot.com",
        messagingSenderId: "344090317981",
        appId: "1:344090317981:web:faec49fbcd62afc24c7074",
        measurementId: "G-S49S240V7Y"
}


const firebase = window.firebase.initializeApp(config)
window.firebase.analytics()
const {FieldValue} = window.firebase.firestore;




seedDatabase(firebase)
console.log("running")


export {firebase,FieldValue}



