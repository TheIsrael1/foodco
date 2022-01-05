import { FiEye, FiEyeOff } from "react-icons/fi"
import { RiErrorWarningLine } from "react-icons/ri"
import { useRef, useState } from "react"
import styles from "./input.module.css"

const Input = ({
  id,
  type,
  value,
  error,
  setValue,
  placeholder,
  name,
  required = true
}) => {
  
  const ref = useRef(null)
  const [passwordVisible, setpasswordVisible] = useState(
    type === "password" ? true : false
  )

  const passwordToggle = e => {
    e.preventDefault()
    setpasswordVisible(!passwordVisible)

    ref.current.type = passwordVisible ? "text" : "password"
  }

  return (
    <>
      <div className={`${styles.InputContainer}`}>
        <div
          className={`${styles.InputWrapper} ${
            type === "password" ? styles.InputWrapperWithPassword : ""
          } ${error ? styles.InputContainerError : ""} `}
        >
          <input
            id={id}
            ref={ref}
            className={`${styles.InputElement} ${error && styles.is_invalid}`}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={e => setValue(e.target.value)}
          />

          {/password/i.test(name) && (
            <div
              className={`${styles.ToggleVisibility}`}
              onClick={passwordToggle}
            >
              {passwordVisible ? <FiEyeOff /> : <FiEye />}
            </div>
          )}
        </div>

        {/* {error && (
          <span className={`${styles.InputError}`}>
            <RiErrorWarningLine className={`${styles.InputWarningIcon}`} />
            <div style={{ paddingLeft: "1rem" }}>{error}</div>
          </span>
        )} */}
      </div>
    </>
  )
}

export default Input
