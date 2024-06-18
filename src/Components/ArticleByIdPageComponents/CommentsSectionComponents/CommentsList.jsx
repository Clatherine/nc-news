import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import CommentCard from "./CommentCard";
import { getComments } from "../../../api";

const CommentsList =()=>{

    const [commentsList, setCommentsList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { article_id } = useParams();

    useEffect(()=>{
        setIsLoading(true)
        getComments(article_id).then((data)=>{
                setIsLoading(false)
                setCommentsList(data.comments)
            })
        }, [])

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