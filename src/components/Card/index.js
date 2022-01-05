import React from 'react'
import styles from './card.module.css'

const Card = ({
    title,
    description,
    icon
}) => {
    return (
        <div className={`${styles.cardCon}`}>
            <div className={`${styles.cardRow}`}>
                <div className={`${styles.cardIcon}`}>
                    {icon}
                </div>
                <div className={`${styles.cardText}`}>
                    <h1 className={`${styles.cardTitle}`}>
                        {title}
                    </h1>
                    <p className={`${styles.cardDescription}`}>
                       {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card
