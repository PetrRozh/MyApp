import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <img src='./src/assets/spider_man.png' alt='Spider Man' className={styles.imageSpider} />
            <div className={styles.textContainerTitle}>
                <div className={styles.ultra}>Your Way</div>
                <div className={styles.ultra}>into The World</div>
                <div className={styles.ultra}>of Comics</div>
            </div>
            <div className={styles.textContainer}>
                <p>Discover the fascinating world of comics,</p>
                <p>where every page comes alive with vibrant</p>
                <p>illustrations and exciting stories!</p>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.specialButtonHome} onClick={() => navigate('/price')}>If you want more information</div>
            </div>
        </div>
    );
}

export default Home;
