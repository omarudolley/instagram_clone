
// import {seedDatabase} from '../seed'

 


const config = {
        apiKey: process.env.REACT_APP_apiKey,
        authDomain: process.env.REACT_APP_authDomain,
        projectId: process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        messagingSenderId: process.env.REACT_APP_messagingSenderId,
        appId: process.env.REACT_APP_appId,
        measurementId: process.env.REACT_APP_measurementId
}



const firebase = window.firebase.initializeApp(config)
window.firebase.analytics()
const {FieldValue} = window.firebase.firestore;




//seedDatabase(firebase)



export {firebase,FieldValue}



