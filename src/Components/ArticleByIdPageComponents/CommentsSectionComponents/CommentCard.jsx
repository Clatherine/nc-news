
import { UserContext } from "../../../UserContext";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { deleteComment } from "../../../api";

const CommentCard =({comment, setCommentsList})=>{
const mystery = useContext(UserContext);
const [isUser, setIsUser] = useState(false)

useEffect(()=>{if(comment.author === mystery.user.username){
    setIsUser(true)
}
}, [])

const handleClick=()=>{
    const id=comment.comment_id
    const button = document.getElementById(id)
button.disabled=true;
deleteComment(comment.comment_id).then(()=>{
    setCommentsList((commentsList)=>{
const list = [...commentsList]
const updatedList = list.filter((comment)=>{
    if(comment.comment_id !==id){
        return comment
    }
})
return updatedList
    })
})
}

return(
<div id="commentCard">
<p id="comment_body">{comment.body}</p>
<div id="commentcardcontainer">
<div>
 <p>Posted by {comment.author} 
at {comment.created_at.slice(11,19)} on {comment.created_at.slice(0,10)}</p> 
</div>
<div><p>Votes: {comment.votes}</p></div>
</div>
<button className="delete_button" id={comment.comment_id} onClick={handleClick} style={{ visibility: isUser? 'visible' : 'hidden' }}>Delete</button>
</div>
)
}

export default CommentCard