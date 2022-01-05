import React, {useState} from 'react'
import styles from './login.module.css'
import Logo from '../../assets/Logo.svg'
import Form from '../../components/Form'
import Input from '../../components/Input'

const Login = () => {

    const [password, setPassword] = useState("")
    const [staffId, setStaffId] = useState("")


    const handleSubmit = (e) =>{
        e.preventDefault()

    }

    return (
        <div className={`${styles.container}`}>
        <div className={`${styles.wrapper}`}>
             <div className={`${styles.row}`}>
                <div className={`${styles.content}`}>
                    <div className={`${styles.formContainer}`}>
                        <Form
                        submitButtonName={"Login"}
                        disabled={staffId && password}
                        handleSubmit={handleSubmit}
                        >
                        <Input
                         id="staffid"
                         name="Staff Id"
                         type="text"
                         placeholder="staff id"
                         value={staffId}
                         setValue={setStaffId}
                         error={""}
                        />
                        <Input
                        id="password"
                        name="Password"
                        type="password"
                        placeholder="password"
                        value={password}
                        setValue={setPassword}
                        error={""}
                        />
                        </Form>
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

export default Login
