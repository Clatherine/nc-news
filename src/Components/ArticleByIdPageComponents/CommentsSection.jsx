import NextPageButton from "../NextPageButton"
import CommentsList from "./CommentsSectionComponents/CommentsList"
import CommentsSearch from "./CommentsSectionComponents/CommentsSearch"
import { useEffect, useState } from "react"
import LeaveComment from "./LeaveComment"
import { useParams } from "react-router-dom"
import { getComments } from "../../api"


const CommentsSection =()=>{
    const [commentsList, setCommentsList] = useState([])
    const {article_id} = useParams()
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setIsLoading(true)
        getComments(article_id).then((data)=>{
                setIsLoading(false)
                setCommentsList(data.comments)
            })
        }, [])

return (
    <section id="commentsSection">
        <LeaveComment setCommentsList={setCommentsList}/>
        <h2>Comments</h2>
       <CommentsSearch/>
       <CommentsList commentsList={commentsList} isLoading={isLoading} setCommentsList={setCommentsList}/>
  <NextPageButton page={page} setPage={setPage}/>
    </section>
)
}

export default CommentsSection