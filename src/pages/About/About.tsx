import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
  return (
    <div>
        <div className={styles.titleContainerHistory}>The History of Comics</div>

        <div className={styles.timelineContainer}>
            <div className={styles.timeline}>

                <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                        <span className={styles.markerText}>Begining</span>
                        <span className={styles.markerYear}>The end 19th century</span>
                    </div>

                    <div className={styles.timelineContent}>
                        <img src="src/assets/Yellow Kid.jpg" alt="Yellow Kid" className={styles.timelineImageLeft} />
                        <div className={styles.timelineTextRight}>
                            Comics, or graphic stories, have a long and rich history that begins in the late 19th century. The first comics appeared in newspapers and magazines as short humorous strips. One of the first known comic strips is The Yellow Kid, created by Richard Felton Outcault in 1895.
                        </div>
                    </div>

                </div>

                <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                        <span className={styles.markerText}>The Golden Age</span>
                        <span className={styles.markerYear}>The beginning 20th century</span>
                    </div>

                    <div className={styles.timelineContent}>
                        <div className={styles.timelineTextLeft}>
                            In the early 20th century, comic books began to develop as a genre in their own right. In 1938, National Allied Publications (later renamed DC Comics) published the first issue of Action Comics, which debuted Superman, created by Jerry Siegel and Joe Shuster. This event is considered the beginning of the Golden Age of Comics (1938-1950), when many iconic characters such as Batman, Captain America, and Wonder Woman appeared.
                        </div>
                        <img src="src/assets/Action Comics.webp" alt="Action Comics" className={styles.timelineImageRight} />
                    </div>
                </div>

                <div className={styles.timelineItem} id="season-8">
                    <div className={styles.timelineMarker}>
                        <span className={styles.markerText}>The Silver Age</span>
                        <span className={styles.markerYear}>The middle 20th century</span>
                    </div>

                    <div className={styles.timelineContent}>
                        <img src="src/assets/Hulk.webp" alt="Hulk" className={styles.timelineImageLeft} />
                        <div className={styles.timelineTextRight}>
                            The Silver Age of Comics (1956-1970) began with the introduction of new characters such as Spider-Man, the X-Men, and the Fantastic Four created by Stan Lee and other Marvel Comics writers. During this period, comics became more complex and multi-layered, addressing social and political themes.
                        </div>
                    </div>
                </div>

                <div className={styles.timelineItem} id="season-7">
                    <div className={styles.timelineMarker}>
                        <span className={styles.markerText}>The Bronze Age</span>
                        <span className={styles.markerYear}>The end 20th century - present</span>
                    </div>

                    <div className={styles.timelineContent}>
                        <div className={styles.timelineTextLeft}>
                            The Bronze Age (1970-1985) and the Modern Age (1985-present) brought even more variety and depth to the genre. Authors such as Alan Moore and Frank Miller created works that took comics to a new level of literary and artistic excellence.
                        </div>
                        <img src="src/assets/Moor.jpg" alt="The Guardians" className={styles.timelineImageRight} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;
