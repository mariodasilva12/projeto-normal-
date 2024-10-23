import styles from './Input.module.css'

function Input({text, name,placeholder,value,type, handleOnChange}){
    return(
    <div className={styles.form_control}>
        <label htmlFor={name}>{text}</label>
        <input 
            type={type}             
            id={name} 
            name={name}
            placeholder={placeholder} 
            value={value} 
            onChange={handleOnChange} 
        />
    </div>
    )
}

export default Input