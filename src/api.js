import axios from "axios";

const articlesApi = axios.create({baseURL: "https://v2-nc-news-backend-project-northcoders.onrender.com"})

export const getArticles = (topic) =>{
   return articlesApi.get("/api/articles", {
      params: {
         topic: topic
      }
   })
   .then((res) =>{
    return res.data
   })
   .catch((err)=>{
      throw err
   })

}

export const getArticleById =(article_id)=>{
   return articlesApi.get(`/api/articles/${article_id}`)
   .then((res)=>{
      return res.data
   })
}

export const getComments =(article_id)=>{
   return articlesApi.get(`/api/articles/${article_id}/comments`)
   .then((res)=>{
      return res.data
   })
}

export const patchVotes=(article_id, newVotes)=>{
   return articlesApi.patch(`/api/articles/${article_id}`, {inc_votes: newVotes})
   .catch((err)=>{
   throw err})
   }

export const postComment =(article_id, username, body)=>{

   return articlesApi.post(`/api/articles/${article_id}/comments`, {username: username, body: body}).then((res)=>{
      if (!res.data) {
         throw new Error('Invalid response structure');
       }
      return res.data
   })
   .catch((err)=>{
      console.error(err)
      throw err
   })
}

export const deleteComment = (comment_id)=>{
   return articlesApi.delete(`/api/cmments/${comment_id}`)
   .catch((err)=>{
      console.error(err)
      throw err
   })
}

export const getTopics = ()=>{
   return articlesApi.get("/api/topics").then((res)=>{
return res.data
   })
   .catch((err)=>{
      throw err
   })
}