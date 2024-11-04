import styles from '../Modules/ArticleCard.module.css'
function ArticleCard({article}){

    return(
        <a className={styles.articleCard} href={article.link} target="_blank" rel="noopener noreferrer">
            <img className={styles.articleImage} src={article.image_url}/>
            <div style={{padding: '0px 5px 10px 5px'}}>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className={styles.articleDescription}>{article.description}</p>
                <p className={styles.articlePublished}>{article.pubDate}</p>     
            </div>
        </a>
    )
}

export default ArticleCard