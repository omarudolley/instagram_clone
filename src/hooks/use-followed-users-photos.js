import {useContext,useEffect,useState} from 'react' 
import UserContext from '../context/user'
import {getUserFollowedPhotos,getUserByUserId} from '../services/firebase'


export default function useFollowedUsersPhotos(){


    const [photos,setPhotos]= useState(null);
    
    const {
        user: { uid: userId = '' }
    } = useContext(UserContext);


    useEffect(() => {
        async function getTimelinePhotos() {
            const followingUserIds = await getUserByUserId(userId);
            

            if (followingUserIds && followingUserIds[0].following.length > 0) {
                
               const  followedUserPhotos = await getUserFollowedPhotos(userId,followingUserIds[0].following)

              console.log(followedUserPhotos)

                followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
                setPhotos(followedUserPhotos);
            }
         }
        
        getTimelinePhotos();
    }, [userId]);

    return {photos}
}