import React, {useState, useEffect} from 'react'
import styles from './inputTwo.module.css'
import Logo from '../../assets/Logo.svg'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import Add from '../../assets/Add.svg'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import { useOutlets } from '../../context/OutletContext'
import { useInput2, useInput2Update } from '../../context/OutletContext'

const InputTwo = () => {

    const[totalPastriesProd,setTotalPastriesProd] = useState()
    const[totalPastriesSold,setTotalPastriesSold] = useState()

    const saveInputs = useInput2Update();
    const getInputs = useInput2();
    console.log(getInputs)

    const outlets = useOutlets()


    useEffect(() => {
        setTotalPastriesProd(getInputs.length ? getInputs[0][0]: "");
        setTotalPastriesSold(getInputs.length ? getInputs[0][1]: "");

      }, []);
    
      useEffect(() => {
          saveInputs([totalPastriesProd,totalPastriesSold])
      }, [totalPastriesProd,totalPastriesSold]);

    return (
        <div className={`${styles.container}`}>
        <div className={`${styles.wrapper}`}>
             <div className={`${styles.row}`}>
                <div className={`${styles.content}`}>
                <div className={`${styles.contentWrapper}`}>
                    <div className={`${styles.header}`}>
                        <img src={Add} alt="add" />
                        <h1>
                            Input 2
                        </h1>
                    </div>
                    <div className={`${styles.entryArea}`}>
                        <Input 
                        id="total_pastries_produced"
                        name="total_pastries_produced"
                        type="number"
                        placeholder="Total Pastries Produced"
                        // short={true}
                        value={totalPastriesProd}
                        setValue={setTotalPastriesProd}
                        error={""}
                        />
                        <Input 
                        id="total_pastries_sold"
                        name="total_pastries_sold"
                        type="number"
                        placeholder="Total Pastries Sold"
                        // short={true}
                        value={totalPastriesSold}
                        setValue={setTotalPastriesSold}
                        />
                        <div className={`${styles.entryAreaHeader}`}>   
                            <h2 >
                                Outlet Entry
                            </h2>   
                            <Link to="new">
                            <button  className={`${styles.entryAreaHeaderBtn}`}
                            disabled={!(totalPastriesProd && totalPastriesSold)}
                            
                            >
                                Add new Outlet
                            </button>
                            </Link>
                        </div>
                        <hr className={`${styles.divider}`} />
                        <div className={`${styles.entryAreaBody}`}>
                            {outlets.length ? outlets.map((o,idx)=>(
                                <li key={idx}> 
                                    <div>
                                    <div>
                                    Outlet {`>>`} {o.outlet}
                                    </div>
                                    <div>
                                    Cost of distribution {`>>`} {o.cost_of_distribution}
                                    </div>
                                    <div>
                                    Pastries Supplied {`>>`} {" "}
                                    {o.pastries.map((p,id)=>(
                                        <small key={id}>{p.name}: {" "} {p.amount}, {" "}</small>
                                        ))}
                                    </div>
                                    </div>
                                    <hr className={`${styles.divider}`}/>
                                </li>
                            )) : "No Outlet Added Yet"} 
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
                        {/* on submit clear sessionStorage */}
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

export default InputTwo
