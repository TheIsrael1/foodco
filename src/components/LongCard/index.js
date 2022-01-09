import React from 'react'
import styles from './longCard.module.css'

const LongCard = ({
    icon,
    date,
    lastEdited
}) => {
    return (
        <div className={`${styles.cardCon}`}>
        <div className={`${styles.cardRow}`}>
            <div className={`${styles.cardIcon}`}>
                {icon}
            </div>
            <div className={`${styles.cardText}`}>
                <h1 className={`${styles.cardTitle}`}>
                    Wednesday, 22nd December
                </h1>
                <p className={`${styles.cardDescription}`}>
                Last Edited By Author On 22nd December, 14:30pm By Author
                </p>
            </div>
        </div>
    </div>
    )
}

export default LongCard
