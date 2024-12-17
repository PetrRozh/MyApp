import styles from '../pages/Price/Price.module.css';

interface TicketCardProps {
    subsName: string;
    nameSubs: string;
    price: string;
    positions1: string;
    positions2: string;
    positions3: string;
    positions4: string;
    positions5: string;
    }


export const SubsCard = ({ subsName, nameSubs, price, positions1, positions2, positions3, positions4, positions5 }: TicketCardProps) => {
    return (
        <div className={styles[subsName]}>
            <div className={`${styles['ultra24']} ${styles.nameCard}`}>{nameSubs}</div>
            <div className={`${styles['ultra18']} ${styles.priceCard}`}>{price}</div>
            <div className={`${styles['atma18']} ${styles.textCardContainer}`}>{positions1}</div>
            <div className={`${styles['atma18']} ${styles.textCardContainer}`}>{positions2}</div>
            <div className={`${styles['atma18']} ${styles.textCardContainer}`}>{positions3}</div>
            <div className={`${styles['atma18']} ${styles.textCardContainer}`}>{positions4}</div>
            <div className={`${styles['atma18']} ${styles.textCardContainer}`}>{positions5}</div>
            <div className={styles.exploreContainer}></div>
        </div>
    );
};
