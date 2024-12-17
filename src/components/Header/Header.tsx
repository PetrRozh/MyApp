import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <button className={styles.buttonHeader} onClick={() => navigate('/')}>General</button>
                <button className={styles.buttonHeader} onClick={() => navigate('/about')}>History</button>
                <button className={styles.buttonHeader} onClick={() => navigate('/founders')}>Founders</button>
                <button className={styles.buttonHeader} onClick={() => navigate('/community')}>Community</button>
                <button className={styles.buttonHeader} onClick={() => navigate('/price')}>Subscription</button>
            </div>
        </header>
    );
}

export default Header;