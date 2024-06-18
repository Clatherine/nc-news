import { UserContext } from "../../UserContext";
import { useContext } from "react";
import { postComment } from "../../api";
import { useParams } from "react-router-dom";
import { useState } from "react";

const LeaveComment =()=>{
    const {article_id}=useParams()
    const mystery=useContext(UserContext)
    const [commentBody,setCommentBody] = useState('')
const [newComment, setNewComment] = useState('')

    const handleSubmit =(event)=>{
        event.preventDefault()
        console.log('form submitted')
        console.log(event.target)
    }

    const handleChange=()=>{
        setCommentBody(event.target.value)
    }

return <form  onSubmit={handleSubmit}>
<label id="comment_label"htmlFor="comment-body">Add comment: </label>
<textarea onChange={handleChange} id="comment-body" type="text" name="comment-body" value={commentBody}/>
<button>Submit</button>
</form>
}

export default LeaveComment;