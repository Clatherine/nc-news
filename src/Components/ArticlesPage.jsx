import ArticlesList from "./ArticlesPageComponents/ArticlesList";
import ArticlesSearch from "./ArticlesPageComponents/ArticlesSearch";
import { useState } from "react";
import NextPageButton from "./NextPageButton";
const ArticlesPage =()=>{

    const [topic, setTopic] = useState('')
    const [sort_by, setSort_by] = useState('')
    const [order, setOrder] = useState('')
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    return(
        <>
       <ArticlesSearch/>
        <ArticlesList/>
        <NextPageButton page={page} setPage={setPage}/>
        </>
    )
}


export default ArticlesPage;
