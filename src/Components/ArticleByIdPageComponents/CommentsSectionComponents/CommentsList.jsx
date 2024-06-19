import CommentCard from "./CommentCard";

const CommentsList =({commentsList, isLoading, setCommentsList})=>{

   if(isLoading){
    return(
        <p>Comments incoming...</p>
    )
   }

    return(<section>
        {commentsList.map((comment)=>{
                return ( 
                <li key={comment.comment_id}>
                <CommentCard  setCommentsList={setCommentsList} comment={comment}/>
                </li>
            )
            })}
    </section>)
}

export default CommentsList