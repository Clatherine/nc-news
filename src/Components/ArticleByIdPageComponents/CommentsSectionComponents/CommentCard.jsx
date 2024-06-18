const CommentCard =({comment})=>{
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
</div>
)
}

export default CommentCard