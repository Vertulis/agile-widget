import styles from '../Modules/Home.module.css'
function Home(){
    return(
        <div className={styles.homeContainer}>
            <h1 className={styles.greeting}>Welcome to Agile Widget</h1>
        </div>
    );
}

export default Home