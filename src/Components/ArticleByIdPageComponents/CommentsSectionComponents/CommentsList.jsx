import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import CommentCard from "./CommentCard";
import { getComments } from "../../../api";

const CommentsList =({commentsList, isLoading})=>{

   if(isLoading){
    return(
        <p>Comments incoming...</p>
    )
   }

    return(<section>
        {commentsList.map((comment)=>{
                return ( 
                <li key={comment.comment_id}>
                <CommentCard  comment={comment}/>
                </li>
            )
            })}
    </section>)
}

export default CommentsList