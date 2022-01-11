import React,{useState} from 'react'
import styles from './newEntryFormTwo.module.css'
import Logo from '../../assets/Logo.svg'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import Add from '../../assets/Add.svg'
import Select from '../Select'
import Input from '../Input'
import {Outlet} from '../../utils/Outlet'
import {Pastry} from '../../utils/Pastry'
import { Link } from 'react-router-dom'
import { useOutletsUpdate } from '../../context/OutletContext'
import { useNavigate } from 'react-router-dom'

const NewEntryFormTwo = () => {

    const[outlet, setOutlet] = useState("")
    const[pastry, setPastry] = useState("")
    const[amount, setAmount] = useState("")
    const[distributionCost, setDistributionCost] = useState()
    const[pastriesSupplied, setPastriesSupplied] = useState([])

    const updateOutlets = useOutletsUpdate();
    const navigate = useNavigate();

    const addPastry = () =>{
        setPastriesSupplied((pastriesSupplied) => [...pastriesSupplied, {name: pastry, amount: amount}])
        setPastry((pastry)=> pastry= "")
        setAmount((amount)=> amount= "")
    }

    const addOutlet = () =>{
        updateOutlets({
            outlet: outlet,
            pastries: pastriesSupplied,
            cost_of_distribution: distributionCost
        })

        navigate('/dailyinput/2')

    }

    return (
        <div className={`${styles.container}`}>
        <div className={`${styles.wrapper}`}>
             <div className={`${styles.row}`}>
                <div className={`${styles.content}`}>
                <div className={`${styles.contentWrapper}`}>
                    <div className={`${styles.header}`}>
                        <img src={Add} alt="add" />
                        <h1>
                            Add new Outlet
                        </h1>
                    </div>

                    <div className={`${styles.formContainer}`}>
                            <Select 
                            items={Outlet}
                            onChange={(e)=>setOutlet(e.target.value)}
                            placeholder={"outlet"}
                            value={outlet}
                            long={true}
                            />
                            <Input 
                            id="distributionCost"
                            name="distributionCost"
                            type="number"
                            placeholder="cost of distribution"
                            // short={true}
                            value={distributionCost}
                            setValue={setDistributionCost}
                            error={""}
                            />
                        <div className={`${styles.subFormContainer}`}>
                        <h2>  Add Pastries Supplied to this Outlet</h2>
                        <hr className={`${styles.divider}`}/>
                        <div className={`${styles.subForm}`}>
                            <Select 
                            items={Pastry}
                            onChange={(e)=>setPastry(e.target.value)}
                            placeholder={"pastry"}
                            value={pastry}
                            />
                            <Input 
                            id="amount"
                            name="amount"
                            type="number"
                            placeholder="amount"
                            short={true}
                            value={amount}
                            setValue={setAmount}
                            error={""}
                            />
                            <button 
                            className={`${styles.entryAreaHeaderBtn}`}
                            onClick={addPastry}
                            disabled={!(pastriesSupplied && amount)}
                            >
                                Add
                            </button>
                        </div>
                        </div>
                        
                    </div>

                    <div className={`${styles.entryArea}`}>
                        <div className={`${styles.entryAreaHeader}`}>
                            <h2>
                             Pastries
                            </h2>
                            <h2>
                                {pastriesSupplied.length ? "amount" : ""}
                            </h2>
                        </div>
                        <hr className={`${styles.divider}`} />
                        <div className={`${styles.entryAreaBody}`}>
                            {pastriesSupplied.length ? 
                            pastriesSupplied.map((p,idx)=>(
                                <li key={idx} className={`${styles.entryItem}`}>
                                    <small>
                                    {p.name}
                                    </small>
                                    <small>
                                    {p.amount}
                                    </small>
                                </li>
                            ))
                            
                            : "no entry yet"}
                        </div>
                    </div>
                </div>
                <div className={`${styles.bottom}`}>
                    <Link to="/dailyinput/2">
                    <div className={`${styles.backLink}`}>
                        <HiOutlineArrowNarrowLeft size={24} color='white' />
                    </div>
                    </Link>
                    <button className={`${styles.entryAreaHeaderBtn}`}
                    onClick={addOutlet}
                    disabled={!pastriesSupplied.length}
                    >
                        Add Outlet
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

export default NewEntryFormTwo
