import { useState } from "react";
import { useEffect } from "react";
import { getArticles } from "../../api";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ searchParams }) => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const topicQuery = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    if (topicQuery === "all") {
      const topic = null;
      getArticles(topic, sortByQuery, orderByQuery).then((data) => {
        console.log(data, "data");
        setIsLoading(false);
        setArticlesList(data.articles);
      });
    } else {
      getArticles(topicQuery, sortByQuery, orderByQuery)
        .then((data) => {
          setIsLoading(false);
          setArticlesList(data.articles);
        })
        .catch((err) => {
          setIsError(true);
        });
    }
  }, [topicQuery, sortByQuery, orderByQuery]);

  if (isError) {
    return (
      <section id="error">
        <p>
          Topic in URL does not exist! Please select a topic from the dropdown
          menu.
        </p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section id="loading">
        <p>Articles list is loading</p>
      </section>
    );
  }

  return (
    <section id="articlesListBox">
      <h2>Articles</h2>
      <ul id="articlesList">
        {articlesList.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </section>
  );
};

export default ArticlesList;
