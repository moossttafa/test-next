import { Fragment,useEffect } from 'react'
import { api } from '../component/apiURL'
import ArticleList from '../component/ArticleList'

export default function Home({articles}) {
  useEffect(() => {
    console.log(articles)
 
  }, [articles])
  console.log(articles)
  return (
    <div>  
      <ArticleList  articles={articles}/> 
    </div>
    )
  }
  export const getStaticProps = async () => {
    const res = await fetch(`${api}/posts?_limit=6`)
    const articles = await res.json()
    return{
      props : {
        articles:articles 
      }
    }
  }
  
 
