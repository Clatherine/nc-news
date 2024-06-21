import { useState, useEffect } from "react";
import { getTopics } from "../../api";
import { useSearchParams } from "react-router-dom";

const ArticlesSearch = ({ setSearchParams, searchParams }) => {
  const [topics, setTopics] = useState([]);
  const newParams = new URLSearchParams(searchParams);

  useEffect(() => {
    getTopics().then((data) => {
      setTopics(data.topics);
    });
  }, []);

  const setSort = (event) => {
    if (event.target.value === "date") {
      newParams.set("sort_by", "created_at");
    } else {
      newParams.set("sort_by", event.target.value);
    }
    setSearchParams(newParams);
  };

  const setOrder = (event) => {
    newParams.set("order", event.target.value);
    setSearchParams(newParams);
  };

  const setTopic = (event) => {
    newParams.set("topic", event.target.value);
    setSearchParams(newParams);
  };

  return (
    <section id="articlesSearch">
      <div>
        <form className="form">
          <div>
            <label>Select topic</label>
          </div>
          <div>
            <select
              onChange={setTopic}
              className="dropdown"
              id="topic_dropdown"
            >
              <option value="all">All</option>
              {topics.map((topic) => {
                return (
                  <option value={topic.slug} key={topic.slug}>
                    {topic.slug[0].toUpperCase() + topic.slug.slice(1)}
                  </option>
                );
              })}
            </select>
          </div>
        </form>
      </div>
      <div>
        <form className="form" id="sort_form">
          <div id="sort_by">
            <div>
              <label>Sort articles by: </label>
            </div>
            <div>
              <select
                onChange={setSort}
                className="dropdown"
                id="sort_by_dropdown"
              >
                <option value="date">Date</option>
                <option value="comment_count">Comment count</option>
                <option value="votes">Votes</option>
              </select>
            </div>
          </div>
          <div id="order">
            <div>
              <label>Order: </label>
            </div>
            <div>
              <select
                onChange={setOrder}
                className="dropdown"
                id="order_dropdown"
              >
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ArticlesSearch;
