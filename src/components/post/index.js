import Comment from './Comment';
import LikeCommentShare from './LikeCommentShare';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import ShareEmoji from './ShareEmoji';
import './style.css';

export default function Post({user,posts,profile_post}) {
  
  return (
    <div className={`posts_wrap ${profile_post ? 'posts_wrap post_profile_wrap':''}`} >
       {
       posts &&   posts?.map((post,i)=> (
         post 
         ?   <div className='post' key={i} style={{widows:`${profile_post ? '100%':''}`}}>
               <PostHeader user={user}  />
               {post.image ?  <PostImage img="../../../images/postBackgrounds/1.jpg" /> : <PostImage bg={post?.background} />}
               <ShareEmoji />
               <LikeCommentShare postId={post._id} user={user} post={post} />
               <Comment user={user} postId={post._id} />
             </div>
             : <div className='no_post'>
              <span>Gönderi bulunamadı</span> </div>
        ))
       }
    </div>
  )
}
