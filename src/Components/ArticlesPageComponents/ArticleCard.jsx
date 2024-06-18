import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ArticleCard =({article}) =>{


    return(
        <div className="articleCard">
            <h3>{article.title}</h3>
            <div className = "card_main">
            <div className="text">
            <p>Author: {article.author}</p>
            <p> Posted on: {article.created_at.substring(0,10)}</p>
            </div>
            <div className="votes">
                Votes: {article.votes}
            </div>
            
            </div>
            <img className="article_image" src={article.article_img_url}/>
            <div className="readButton">
            <button> <Link to={`/${article.article_id}`}>Read article</Link></button>
        </div>

        </div>
    )
}

export default ArticleCard;