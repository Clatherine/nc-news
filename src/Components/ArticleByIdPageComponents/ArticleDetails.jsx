import { useState , useEffect} from "react";
import { getArticleById } from "../../api";
import { useParams } from "react-router-dom";
import Votes from "./Votes"

const ArticleDetails = () => {
  const [articleById, setArticleById] = useState({})
  const {article_id} = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [newVotes, setNewVotes] = useState(0)
  const [votesErrorMessage, setVotesErrorMessage]= useState("")

useEffect(()=>{
  setIsLoading(true)
 getArticleById(article_id).then(({article})=>{
 
       setIsLoading(false)
       setArticleById(article)
   })
}, [])

// if(articleById.votes+newVotes>0){
//  
// }

if (isLoading) {
  return <p id="loading">Article getting ready for you...</p>;
}

  return (
    <>
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
     <Votes currentVotes={articleById.votes} setNewVotes={setNewVotes} setVotesErrorMessage={setVotesErrorMessage} votesErrorMessage={votesErrorMessage} newVotes={newVotes}/>
     </>
  );
};
export default ArticleDetails;
