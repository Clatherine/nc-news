import { UserContext } from "../../UserContext";
import { useContext, useEffect } from "react";
import { postComment } from "../../api";
import { useParams } from "react-router-dom";
import { useState } from "react";

const LeaveComment = ({ setCommentsList }) => {
  const { article_id } = useParams();
  const mystery = useContext(UserContext);
  const [commentBody, setCommentBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, mystery.user.username, commentBody).then((res) => {
      console.log(res, "res");
      setCommentBody("");
      setCommentsList((comments) => {
        return [res.addedComment, ...comments];
      });
    });
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
      <button>Submit</button>
    </form>
  );
};

export default LeaveComment;
