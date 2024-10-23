import styles from './Select.module.css'

function Select({name,text,value,options,handleOnchange}){
    return(
        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>

            <select 
                id={name} 
                name={name} 
                onChange={handleOnchange} 
                value={value || ''}
            >

                <option>Seleciona uma opção</option>
                
                {options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}

            </select>
            
        </div>
    )

}
export default Select