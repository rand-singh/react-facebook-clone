import React from 'react'
import './Feed.scss'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            <Post
                profilePic='https://randsingh.com/images/profilepic.jpg'
                message='Happy Easter!'
                timestamp='10 minutes ago'
                username='Rand Singh'
                image='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/easter-bunny-origins-1581358909.jpg?crop=1.00xw:0.752xh;0,0.0481xh&resize=1200:*'
            />
            <Post
                profilePic='https://www.cnet.com/a/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg'
                message='Wonderful day out!'
                timestamp='3 hours ago'
                username='Pricislla'
            />
            <Post />
        </div>
    )
}

export default Feed
