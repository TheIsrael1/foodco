import React from 'react'
import styles from './form.module.css'

const Form = ({
    children,
    submitButtonName,
    disabled,
    handleSubmit
}) => {
    return (
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
            <form
            className={`${styles.form}`}
            onSubmit={handleSubmit}
            method="post"
            action=""
            >
            <div className={`${styles.inputSection}`}>{children}</div>

            <div className={`${styles.btnContainer}`}>
            <button
              disabled={!disabled}
              className={`${styles.btn}`}
              value="submit"
              type="submit"
            >
              {submitButtonName}
            </button>
          </div>

         
        </form>
            </div>
        </div>
    )
}

export default Form
