import { useState, useEffect } from "react";
import { getTopics } from "../../api";
import {  useNavigate, useSearchParams } from "react-router-dom";

const ArticlesSearch = ({setSearchTopic, setSearchParams})=>{
const [topics, setTopics] = useState([])

useEffect(()=>{
    getTopics().then((data)=>{
        setTopics(data.topics)
})}, [])

    const handleChange =(event)=>{
        if(event.target.value==='all'){
            setSearchTopic("")
            setSearchParams({'topic': event.target.value})
            
        }
        else{
        setSearchTopic(event.target.value);
        setSearchParams({'topic': event.target.value})
}
}
      
return(
    <section id="articlesSearch">
        <form>
            <label>Select topic</label><select onChange={handleChange} id="topic_dropdown">
                <option value="all">All</option>
            {topics.map((topic) => {
          return (
            <option value={topic.slug} key={topic.slug}>
              {topic.slug[0].toUpperCase()+topic.slug.slice(1)} 
            </option>
          );
        })}
            </select>
            </form>
            
            </section>
)
}

export default ArticlesSearch