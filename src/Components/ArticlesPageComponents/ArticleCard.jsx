import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ArticleCard =({article}) =>{

    return(
        <li className="articleCard">
            <h3>{article.title}</h3>
            <div className = "card_main">
            <div className="text card_main_item">
            <p>Author: {article.author}</p>
            <p> Posted on: {article.created_at.substring(0,10)}</p>
            </div>
            <div className="votes card_main_item">
             <p>Votes: {article.votes}</p>  
           <p>Comments: {article.comment_count}</p>
            </div>
            
            </div>
            <img className="article_image" src={article.article_img_url}/>
            <div className="readButton">
            <button> <Link to={`articles/${article.article_id}`}>Read article</Link></button>
        </div>

        </li>
    )
}

export default ArticleCard;