const ArticleDetails = ({ articleById }) => {
  return (
    <section id="articleDetails">
      <div className="articleDiv" id="topDetails">
        <h2>{articleById.title}</h2>
        <p>
          By <span>{articleById.author}</span>
        </p>
        <p>
          Posted <span>{articleById.created_at}</span>
        </p>
      </div>
      <div className="articleDiv" id="img_text">
        <div className="articleDivInner" id="img_div"><img src={articleById.article_img_url} /></div>
        <div className="articleDivInner" id="p_div"><p>{articleById.body}</p></div>
      </div>
      <div id="votes">Votes: {articleById.votes}</div>
    </section>
  );
};
export default ArticleDetails;
