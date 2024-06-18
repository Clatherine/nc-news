const ArticleDetails = ({ articleById , newVotes, setVotesErrorMessage}) => {
  
if(articleById.votes+newVotes>0){
  setVotesErrorMessage("")
}

  return (
    <section id="articleDetails">
      <div className="articleDiv" id="topDetails">
        <h2>{articleById.title}</h2>
        <p>
          By <span>{articleById.author}</span>
        </p>
        <p>
          Posted <span>{articleById.created_at.substring(0,10)}</span>
        </p>
      </div>
      <div className="articleDiv" id="img_text">
        <div className="articleDivInner" id="img_div"><img src={articleById.article_img_url} /></div>
        <div className="articleDivInner" id="p_div"><p>{articleById.body}</p></div>
      </div>
      <div id="votes"><p>Votes: &nbsp;
      <span>{articleById.votes+newVotes>=0? articleById.votes + newVotes: 0}</span></p>
      </div>
    </section>
  );
};
export default ArticleDetails;
