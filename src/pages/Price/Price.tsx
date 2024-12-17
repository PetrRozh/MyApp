import styles from './Price.module.css';
import { SubsCard } from '../../components/SubsCard';

function Price() {
    return (
        <div>
            <div className={styles.titleContainer}>
                <div className={styles.ultra48}>Available Subscriptions</div>
            </div>
            <div className={styles.textContainerPrice}>You can join our closed community for a small fee and get lots of perks for doing so!</div>
            <div className={styles.cardContainer}>
                <SubsCard
                    subsName='cardStandart'
                    nameSubs='Standart Subs'
                    price='$ 10 per month'
                    positions1='&#9989; Private telegram channel access'
                    positions2='&#9989; Invitation to private fan meetings'
                    positions3='&#9989; Online art courses'
                    positions4='&#10060; An invitation to monthly comic-con conventions around the world.'
                    positions5='&#10060; Quarterly invitations to meet with authors of various comic books'
                />
                <SubsCard
                    subsName='cardPremium'
                    nameSubs='Premium Subs'
                    price='$ 50 per month'
                    positions1='&#9989; Private telegram channel access'
                    positions2='&#9989; Invitation to private fan meetings'
                    positions3='&#9989; Online art courses'
                    positions4='&#9989; An invitation to monthly comic-con conventions around the world.'
                    positions5='&#10060; Quarterly invitations to meet with authors of various comic books'
                />
                <SubsCard
                    subsName='cardExclusive'
                    nameSubs='Elite Subs'
                    price='$ 100 per month'
                    positions1='&#9989; Private telegram channel access'
                    positions2='&#9989; Invitation to private fan meetings'
                    positions3='&#9989; Online art courses'
                    positions4='&#9989; An invitation to monthly comic-con conventions around the world.'
                    positions5='&#9989; Quarterly invitations to meet with authors of various comic books'
                />
            </div>
        </div>
    );
}

export default Price;
