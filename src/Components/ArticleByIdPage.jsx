
import ArticleDetails from "./ArticleByIdPageComponents/ArticleDetails";
import CommentsSection from "./ArticleByIdPageComponents/CommentsSection";
import { useState } from "react";

const ArticleByIdPage =()=>{
    const [isError, setIsError] = useState(false)

    return (
        <section id="articleByIdPage">
        <ArticleDetails isError={isError} setIsError={setIsError}/>
        <CommentsSection isError={isError}/>
        </section>
    )
}


export default ArticleByIdPage