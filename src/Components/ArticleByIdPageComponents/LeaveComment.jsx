import { UserContext } from "../../UserContext";
import { useContext, useEffect } from "react";
import { postComment } from "../../api";
import { useParams } from "react-router-dom";
import { useState } from "react";

const LeaveComment = ({ setCommentsList }) => {
  const { article_id } = useParams();
  const mystery = useContext(UserContext);
  const [commentBody, setCommentBody] = useState("");
  const[errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    const button = document.getElementById("comment-submit")
    button.disabled = true;
    postComment(article_id, mystery.user.username, commentBody).then((res) => {
       button.disabled=false
       if (!res.addedComment) {
        throw new Error('The response does not contain the expected "addedComment" property.');
      }
      setCommentBody("");
      setCommentsList((comments) => {
        return [res.addedComment, ...comments];
      });
    }).catch((err)=>{
        button.disbled=false;
        setErrorMessage('Sorry! There is a problem posting your comment, please try again later.')
    })
  };

  const handleChange = (event) => {
    setCommentBody(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label id="comment_label" htmlFor="comment-body">
        Add comment:{" "}
      </label>
      <textarea
        onChange={handleChange}
        id="comment-body"
        type="text"
        name="comment-body"
        value={commentBody}
        required
      />
       <div id="bottomOfForm">
        <p id="commentErrorMessage">{errorMessage}</p>
        <button id="comment-submit">Submit</button></div>
     
    </form>
  );
};

export default LeaveComment;
