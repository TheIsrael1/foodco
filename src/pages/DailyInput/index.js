import React from 'react'
import styles from './dailyInput.module.css'
import Logo from '../../assets/Logo.svg'
import TopImg from '../../assets/topIcon.svg'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import Card from '../../components/Card'
import Add from '../../assets/Add.svg'
import { Link } from 'react-router-dom'

const DailyInput = () => {
    return (
        <div className={`${styles.container}`}>
        <div className={`${styles.wrapper}`}>
             <div className={`${styles.row}`}>
                <div className={`${styles.content}`}>
                    <div className={`${styles.dashboard}`}>
                        <img className={`${styles.topImg}`} src={TopImg} alt="img"/>
                        <div className={`${styles.menuCon}`}>
                            <Link to="1">
                            <Card
                            title={`Input 1`} 
                            description={`Please Make Your First Input for Today`} 
                            icon={<img src={Add} alt='add'></img>}
                            />
                            </Link>
                            <Link to='2'>
                            <Card 
                            title={`Input 2`} 
                            description={`Please Make Your Second Input for Today`} 
                            icon={<img src={Add} alt='chart'></img>}
                            />
                            </Link>
                            <Card 
                            title={`Edit My Input`}
                            description={`Edit Input Error, Please Note That InputCannot Be Edited After 24 Hours`}
                            icon={<img src={Add} alt='folder'></img>}
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

export default DailyInput
