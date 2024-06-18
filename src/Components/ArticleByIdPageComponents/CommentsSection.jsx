import NextPageButton from "../NextPageButton"
import CommentsList from "./CommentsSectionComponents/CommentsList"
import CommentsSearch from "./CommentsSectionComponents/CommentsSearch"
import { useState } from "react"


const CommentsSection =()=>{

    const [page, setPage] = useState(1)

return (
    <section id="commentsSection">
        <h2>Comments</h2>
       <CommentsSearch/>
       <CommentsList />
  <NextPageButton page={page} setPage={setPage}/>
    </section>
)
}

export default CommentsSection