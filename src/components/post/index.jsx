import React, {useRef} from 'react'
import Actions from './actions'
import Image from './image'
import Comments from './comments'
import Header from './header'
import Footer from './footer'




export default function Post({content}){

    const commentInput = useRef(null)
    const handleFocus = ()=> commentInput.current.focus()
    return (
    <div className="rounded col-span-4 border bg-white mb-16">
        <Header username={content.username} src={content.imageSrc}/>
        <Image src={content.imageSrc} caption={content.caption}/>
        <Actions
            docId={content.docId}
            totalLikes={content.likes.length}
            likedPhoto={content.userLikedPhoto}
            handleFocus={handleFocus}
            />
        <Footer username={content.username} caption={content.caption}/>
        <Comments
         docId={content.docId}
         comments={content.comments}
         posted={content.dateCreated}
         commentInput={commentInput}/>
    </div>
    )
}
