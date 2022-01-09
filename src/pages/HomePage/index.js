import React from 'react'
import styles from './homepage.module.css'
import Logo from '../../assets/Logo.svg'
import TopImg from '../../assets/topIcon.svg'
import {BsSearch} from 'react-icons/bs'
import Card from '../../components/Card'
import Add from '../../assets/Add.svg'
import Chart from '../../assets/Chart.svg'
import Folder from '../../assets/Folder.svg'
import Profile from '../../assets/Profile.svg'
import { Link } from 'react-router-dom'


const HomePage = () => {
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
                            <Link to='/dailyinput'>
                            <Card 
                            title={`Input Today`} 
                            description={`Input Your Daily Data & Report i.e Raw Materials e.t.c.`} 
                            icon={<img src={Add} alt='add'></img>}
                            />
                            </Link>
                            <Card 
                            title={`Dashbaord`} 
                            description={`View Metrics, Insights & Comparison Based On Your Input & Reports`} 
                            icon={<img src={Chart} alt='chart'></img>}
                            />
                            <Link to="/myreports">
                            <Card 
                            title={`My Reports`}
                            description={`Look At Your Reports Based On Input Provided Daily & Download In a PDF Format`}
                            icon={<img src={Folder} alt='folder'></img>}
                            />
                            </Link>
                            <Card 
                            title={`My Profile`}
                            description={`Personal Biodata, Preferences & Application Settings`}
                            icon={<img src={Profile} alt='profile'></img>}
                            />
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
