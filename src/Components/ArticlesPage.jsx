import ArticlesList from "./ArticlesPageComponents/ArticlesList";
import ArticlesSearch from "./ArticlesPageComponents/ArticlesSearch";
import { useState } from "react";
import NextPageButton from "./NextPageButton";
import { useParams, useSearchParams } from "react-router-dom";

const ArticlesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  return (
    <>
      <ArticlesSearch
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <ArticlesList searchParams={searchParams} />
      {/* <NextPageButton page={page} setPage={setPage} /> */}
    </>
  );
};

export default ArticlesPage;
