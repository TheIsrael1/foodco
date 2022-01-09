import React,{useState} from 'react'
import styles from './newEntryForm.module.css'
import Logo from '../../assets/Logo.svg'
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import Add from '../../assets/Add.svg'
import Select from '../Select'
import Input from '../Input'
import {Pastry} from '../../utils/Pastry'
import { RawMaterials } from '../../utils/Pastry'
import { usePastriesUpdate } from '../../context/pastryContext'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const NewEntryForm = () => {

    const[pastry, setPastry] = useState("")
    const[rawMaterial, setRawMaterial] = useState("")
    const[cost, setCost] = useState()
    const[rawMaterials, setRawMaterials] = useState([])
    const add = usePastriesUpdate()
    const navigate = useNavigate()


    const addRawMaterial = () =>{
        setRawMaterials(rawMaterials => [...rawMaterials, {name: rawMaterial, cost: cost}])
        setRawMaterial((rawMaterial)=> rawMaterial= "")
        setCost((cost)=> cost=0)
    }

    const addPastry = () =>{
        add({name_of_pastry: pastry,
            raw_materials: rawMaterials
        })
        navigate('/dailyinput/1')
        
    }
    // console.log(rawMaterials)
    // console.log("pastries", view)

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
                        <Select
                        items={Pastry}
                        onChange={(e)=>setPastry(e.target.value)}
                        placeholder={"pastry"}
                        value={pastry}
                        />
                        <div className={`${styles.subFormContainer}`}>
                        <h2>  Add Raw Materials Needed For Pastry</h2>
                        <hr className={`${styles.divider}`}/>
                        <div className={`${styles.subForm}`}>
                            <Select 
                            items={RawMaterials}
                            onChange={(e)=>setRawMaterial(e.target.value)}
                            placeholder={"raw material"}
                            value={rawMaterial}
                            />
                            <Input 
                            id="cost"
                            name="cost"
                            type="number"
                            placeholder="cost"
                            short={true}
                            value={cost}
                            setValue={setCost}
                            error={""}
                            />
                            <button 
                            className={`${styles.entryAreaHeaderBtn}`}
                            onClick={addRawMaterial}
                            disabled={!(rawMaterial && cost)}
                            >
                                Add
                            </button>
                        </div>
                        </div>
                        
                    </div>

                    <div className={`${styles.entryArea}`}>
                        <div className={`${styles.entryAreaHeader}`}>
                            <h2>
                                Raw Materials Entry
                            </h2>
                            <h2>
                                {rawMaterials.length ? "Cost" : ""}
                            </h2>
                        </div>
                        <hr className={`${styles.divider}`} />
                        <div className={`${styles.entryAreaBody}`}>
                            {rawMaterials.length ? 
                            rawMaterials.map((r,idx)=>(
                                <li key={idx} className={`${styles.entryItem}`}>
                                    <small>
                                    {r.name}
                                    </small>
                                    <small>
                                    ₦{r.cost}
                                    </small>
                                </li>
                            ))
                            
                            : "no entry yet"}
                        </div>
                    </div>
                </div>
                <div className={`${styles.bottom}`}>
                    <Link to="/dailyinput/1">
                    <div className={`${styles.backLink}`}>
                        <HiOutlineArrowNarrowLeft size={24} color='white' />
                    </div>
                    </Link>
                    <button className={`${styles.entryAreaHeaderBtn}`}
                    onClick={addPastry}
                    disabled={!(rawMaterials.length && pastry)}
                    >
                        Add Pastry
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
