import React from 'react'
import styles from './newEntryForm.module.css'
import Logo from '../../assets/Logo.svg'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import Add from '../../assets/Add.svg'

const NewEntryForm = () => {
    return (
        <div className={`${styles.container}`}>
        <div className={`${styles.wrapper}`}>
             <div className={`${styles.row}`}>
                <div className={`${styles.content}`}>
                <div className={`${styles.contentWrapper}`}>
                    <div className={`${styles.header}`}>
                        <img src={Add} alt="add" />
                        <h1>
                            Add new Pastry
                        </h1>
                    </div>

                    <div className={`${styles.formContainer}`}>

                    </div>

                    <div className={`${styles.entryArea}`}>
                        <div className={`${styles.entryAreaHeader}`}>
                            <h2 entryAreaHeader>
                                Raw Materials
                            </h2>
                        </div>
                        <hr className={`${styles.divider}`} />
                        <div className={`${styles.entryAreaBody}`}>
                            No entry yet
                        </div>
                    </div>
                </div>
                <div className={`${styles.bottom}`}>
                    <div className={`${styles.backLink}`}>
                        <HiOutlineArrowNarrowLeft size={24} color='white' />
                    </div>
                    <button className={`${styles.entryAreaHeaderBtn}`}>
                        Add
                    </button>
                </div>
                </div>
                <div className={`${styles.logoContainer}`}>
                    <img className={`${styles.logo}`} src={Logo} alt="logo" />
                </div>
             </div>
            
        </div>   
     </div>
    )
}

export default NewEntryForm
