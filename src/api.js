import axios from "axios";
import { useState, useEffect } from "react";

const articlesApi = axios.create({baseURL: "https://v2-nc-news-backend-project-northcoders.onrender.com"})

export const getArticles = () =>{
   return articlesApi.get("/api/articles")
   .then((res) =>{
    return res.data
   })
}

export const getComments =(article_id)=>{
   return articlesApi.get(`/api/articles/${article_id}/comments`)
   .then((res)=>{
      return res.data
   })
}