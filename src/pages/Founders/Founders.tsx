import styles from './Founders.module.css';
import globalStyles from '/Users/mmarsianinn/Desktop/MyApp/src/global.module.css';

interface PeopleCard {
    name: string;
    role: string;
    image: string;
}

export const Dict_pepople = ({ name, role, image }: PeopleCard) => {
    return (
        <div className={styles.imageCard}>
            <div className={styles.imageContainer}>
                <img src={image} alt="Img" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={`${styles.names} ${globalStyles.ultra18}`}>{name}</div>
                <div className={`${styles.roles} ${globalStyles.ultra11}`}>{role}</div>
            </div>
        </div>
    );
};

function Founders() {
    return (
        <div>
            <div className={`${styles.titleContainerPeople} ${globalStyles.ultra48}`}>The Founding Fathers of Comics</div>
            <div className={styles.imageBox}>
                <Dict_pepople
                    name='John Romita Jr'
                    role="Iron Man's creator"
                    image='./src/assets/John Romita.webp'
                />
                <Dict_pepople
                    name='Brian Bolland'
                    role='Creator of Batman: The Killing Joke'
                    image='./src/assets/Brian Bolland.jpg'
                />
                <Dict_pepople
                    name='Will Eisner'
                    role='Creator of The Spirit'
                    image='./src/assets/Will Eisner.avif'
                />
                <Dict_pepople
                    name='Jim Steranko'
                    role='Creator of Giant Size Hulk'
                    image='./src/assets/Jim Steranko.avif'
                />
            </div>
        </div>
    );
}

export default Founders;
