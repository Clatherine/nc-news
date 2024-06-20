import ArticlesList from "./ArticlesPageComponents/ArticlesList";
import ArticlesSearch from "./ArticlesPageComponents/ArticlesSearch";
import { useState } from "react";
import NextPageButton from "./NextPageButton";
import { useParams, useSearchParams } from "react-router-dom";

const ArticlesPage =()=>{
    // const {topic} =useParams()
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTopic, setSearchTopic] = useState('')
    // const [sort_by, setSort_by] = useState('')
    // const [order, setOrder] = useState('')
    // const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    return(
        <>
       <ArticlesSearch setSearchTopic={setSearchTopic} setSearchParams={setSearchParams}/>
        <ArticlesList  searchTopic= {searchTopic} searchParams={searchParams}/>
        <NextPageButton page={page} setPage={setPage}/>
        </>
    )
}


export default ArticlesPage;
