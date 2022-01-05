import React from 'react'
import styles from './homepage.module.css'
import Logo from '../../assets/Logo.svg'
import TopImg from '../../assets/topIcon.svg'
import {BsSearch} from 'react-icons/bs'

const HomePage = () => {
    return (
        <div className={`${styles.container}`}>
        <div className={`${styles.wrapper}`}>
             <div className={`${styles.row}`}>
                <div className={`${styles.content}`}>
                    <div className={`${styles.dashboard}`}>
                        <div className={`${styles.topImgCon}`}>
                            <img className={`${styles.topImg}`} src={TopImg} alt="img"/>
                        </div>
                        <div className={`${styles.searchBarCon}`}>
                        <div className={`${styles.searchBarWrapper}`}> 
                            <input className={`${styles.input}`}
                            type="text"
                            placeholder= "search for something"
                            // value={search}
                            // onChange={e => setSearch(e.target.value)}
                            />
                            <div className={`${styles.searchButton}`}>
                                <BsSearch style={{color: "white", fontSize: "24px"}} />
                            </div>
                        </div>
                        </div>
                        <div className={`${styles.menuCon}`}>
                            
                        </div>
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

export default HomePage
