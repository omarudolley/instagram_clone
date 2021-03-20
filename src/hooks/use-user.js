import {useState,useEffect,useContext} from 'react' 
import userContext from '../context/user'
import {getUserObjByUserId} from '../services/firebase'


export default function useUser(){
    const [activeUser,setActiveUser] = userState({})
    const {user} = userContext(UserContext)
    useEffect(()=>{
        async function getUserObjByUserId(){
            const [response] = await getUserByUserId(user.uid)
            setActiveUser({...response});
        }
        if (user && user.id){
            getUserObjByUserId();
        }
    },[user])

    return {user:activeUser}
}