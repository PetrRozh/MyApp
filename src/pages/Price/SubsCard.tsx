import styles from './price.module.css';
import globalStyles from '/Users/mmarsianinn/Desktop/MyApp/src/global.module.css';

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
            <div className={`${globalStyles['ultra24']} ${styles.nameCard}`}>{nameSubs}</div>
            <div className={`${globalStyles['ultra18']} ${styles.priceCard}`}>{price}</div>
            <div className={`${globalStyles['atma18']} ${styles.textCardContainer}`}>{positions1}</div>
            <div className={`${globalStyles['atma18']} ${styles.textCardContainer}`}>{positions2}</div>
            <div className={`${globalStyles['atma18']} ${styles.textCardContainer}`}>{positions3}</div>
            <div className={`${globalStyles['atma18']} ${styles.textCardContainer}`}>{positions4}</div>
            <div className={`${globalStyles['atma18']} ${styles.textCardContainer}`}>{positions5}</div>
            <div className={styles.exploreContainer}></div>
        </div>
    );
};
