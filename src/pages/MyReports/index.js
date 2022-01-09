import React from 'react'
import styles from './myReports.module.css'
import Logo from '../../assets/Logo.svg'
import TopImg from '../../assets/topIcon.svg'
import {BsSearch} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import LongCard from '../../components/LongCard'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import Folder from '../../assets/Folder.svg'

const MyReports = () => {
    return (
        <div className={`${styles.container}`}>
        <div className={`${styles.wrapper}`}>
             <div className={`${styles.row}`}>
                <div className={`${styles.content}`}>
                    <div className={`${styles.dashboard}`}>
                            <img className={`${styles.topImg}`} src={TopImg} alt="img"/>
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
                        <LongCard
                        icon={<img src={Folder} alt='add'></img>}
                        />
                        <LongCard
                        icon={<img src={Folder} alt='add'></img>}
                        />
                        <LongCard
                        icon={<img src={Folder} alt='add'></img>}
                        />
                        </div>
                    </div>
                </div>
                <div className={`${styles.logoContainer}`}>
                    <img className={`${styles.logo}`} src={Logo} alt="logo" />
                </div>
             </div>
             <Link to='/home'> 
                    <div className={`${styles.backLink}`}>
                        <HiOutlineArrowNarrowLeft size={24} color='white' />
                    </div>
                    </Link>
        </div>   
     </div>
    )
}

export default MyReports
