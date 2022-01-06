import React from 'react'
import styles from './modal.module.css'
// import { Link } from 'react-router-dom'
import Success from '../../assets/success.svg'

const Modal = ({
    title
}) => {
    return (

        <div className={`${styles.modalContainer}`}>

        <div className={`${styles.modalOverlay}`}>
        <div className={`${styles.modal}`}>
            
            <div className={`${styles.modalContent}`}>
                <h1 className={`${styles.modalHeader}`}>{title}</h1>
                <img className={`${styles.modalIcon}`} src={Success} alt="success"/>         
                <div className={`${styles.modalButtonCon}`}>
                    <button className={`${styles.modalButton}`}>
                        Done
                    </button>
                </div>
            </div>
            
        </div>
        </div>

        </div>
    )
}

export default Modal
