import { Link } from "react-router-dom";
import Moment from 'react-moment';


import { MdPublic }from 'react-icons/md';
import { Dots } from "../../svg";
import { useState } from "react";
import CommentMenu from "./CommentMenu";

export default function PostHeader({user}) {
    const [visibleComment,setVisibleComment] = useState(false);
  return (
    <div className="post_header">
        <div className="post_header_left">
            <Link to="/profile" className="post_header_profile">
                <img src={user?.picture} alt="" />
            </Link>
            <div className="post_header_col">
                <span>{user?.first_name} {user?.last_name}</span>
                <div className="post_header_public">
                <Moment fromNow className="post_header_moment" interval={30}>
                    {user?.createdAt}
                </Moment>
                <MdPublic color="#696969" size={15} />
                </div>
                
            </div>
        </div>
        <div className="post_header_right">
            <div className="post_header_right_circle hover1" onClick={()=> setVisibleComment(prev => !prev)}>
                 <Dots />
                 {visibleComment && <CommentMenu />}
            </div>
           
        </div>
    </div>
  )
}
