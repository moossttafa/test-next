import Link from 'next/link'
 import articleStyle from '../../styles/Article.module.css'


const ArticleItems = ({article}) => {
  return (
    <div>
      <Link href="/article/[id]" as={`/article/${article.id}`} >
        <a className={articleStyle.card}>
          <h3>{article.title} &rarr; </h3>
          <p>{article.body}</p>
          <button>Ok</button>
        </a>
      </Link>
    </div>
  )
}

export default ArticleItems