import React from 'react'
import styles from './inputOne.module.css'
import Logo from '../../assets/Logo.svg'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import Add from '../../assets/Add.svg'
import { Link } from 'react-router-dom'
import { usePastries } from '../../context/pastryContext'

const InputOne = () => {

    const pastries = usePastries()

    console.log("pastries", pastries)

    return (
        <div className={`${styles.container}`}>
        <div className={`${styles.wrapper}`}>
             <div className={`${styles.row}`}>
                <div className={`${styles.content}`}>
                <div className={`${styles.contentWrapper}`}>
                    <div className={`${styles.header}`}>
                        <img src={Add} alt="add" />
                        <h1>
                            Input 1
                        </h1>
                    </div>
                    <div className={`${styles.entryArea}`}>
                        <div className={`${styles.entryAreaHeader}`}>
                            <h2 >
                                Pastry Entry
                            </h2>
                                <Link to="/dailyinput/1/new">
                                <button  className={`${styles.entryAreaHeaderBtn}`} >
                                    Add new Pastry
                                </button>
                                </Link>
                        </div>
                        <hr className={`${styles.divider}`} />
                        <div className={`${styles.entryAreaBody}`}>
                            {pastries.length ? pastries.map((p,idx)=>(
                                <li key={idx}> 
                                    <div>Pastry{`>>`} {p.name_of_pastry}
                                    <div>
                                    Raw Materials{`>>`} {" "}
                                    {p.raw_materials.map((m,id)=>(
                                        <small key={id}>{m.name}: {" "} ₦{m.cost}, {" "}</small>
                                        ))}
                                    </div>
                                    </div>
                                    <hr className={`${styles.divider}`}/>
                                </li>
                            )) : "No Pastry Added Yet"} 
                        </div>
                    </div>
                </div>
                <div className={`${styles.bottom}`}>
                    <Link to='/dailyinput'> 
                    <div className={`${styles.backLink}`}>
                        <HiOutlineArrowNarrowLeft size={24} color='white' />
                    </div>
                    </Link>
                    <button className={`${styles.entryAreaHeaderBtn}`}>
                        Submit
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

export default InputOne
