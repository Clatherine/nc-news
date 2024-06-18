import { patchVotes } from "../../api"
import { useParams} from "react-router-dom";


const Votes =({setNewVotes})=>{

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
patchVotes(article_id, -1)
.catch((err)=>{
    setNewVotes((votes)=>{
        return votes+1
    })
})
}

return(
    <section id="votesButtons">
    <button onClick={handleClickUp} id="upvote">Upvote</button>
    <button onClick={handleClickDown} id="downvote">Downvote</button>
    </section>
)
}

export default Votes;