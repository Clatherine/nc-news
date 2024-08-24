import { patchVotes } from "../../api"
import { useParams} from "react-router-dom";
import { useState } from "react";

const Votes =({setNewVotes, votesErrorMessage, setVotesErrorMessage, currentVotes, newVotes})=>{

    const { article_id } = useParams();

    const handleClickUp =(event)=>{
        setNewVotes((votes)=>{
            return votes+1
        })
        setVotesErrorMessage("")
        patchVotes(article_id, 1).then(()=>{
        })
        .catch((err)=>{
            setNewVotes((votes)=>{
                return votes-1
            })
    
    })}

const handleClickDown=(event)=>{
setNewVotes((votes)=>{
    return votes-1
})
if(currentVotes+newVotes<=0){
    setVotesErrorMessage("Votes cannot go below 0!")
    setTimeout(setVotesErrorMessage, 2500, "")
    setNewVotes((votes)=>{
        return votes+1
    })
}
else{
    console.log(currentVotes+newVotes)
patchVotes(article_id, -1)}
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