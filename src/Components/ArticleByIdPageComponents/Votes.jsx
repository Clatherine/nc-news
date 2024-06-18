import { patchVotes } from "../../api"
import { useParams} from "react-router-dom";
import { useState } from "react";

const Votes =({setNewVotes, votesErrorMessage, setVotesErrorMessage})=>{

    const { article_id } = useParams();

    const handleClickUp =(event)=>{
        setNewVotes((votes)=>{
            return votes+1
        })
        patchVotes(article_id, 1)
        .catch((err)=>{
            setNewVotes((votes)=>{
                return votes-1
            })
    
    })}

const handleClickDown=(event)=>{
setNewVotes((votes)=>{
    return votes-1
})
patchVotes(article_id, -1).then(()=>{
})
.catch((err)=>{
setVotesErrorMessage("Votes cannot go below 0!")
console.error(err)
    setNewVotes((votes)=>{
        return votes+1
    })
})
}

return(
    <section id="votesButtons">
    <button onClick={handleClickUp} id="upvote">Upvote</button>
    <button onClick={handleClickDown} id="downvote">Downvote</button>
    <p>{votesErrorMessage}</p>
    </section>
)
}

export default Votes;