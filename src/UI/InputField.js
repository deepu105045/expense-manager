
const InputField = props =>{
    return(
        <div>
            <input 
                type={props.type} 
                className={props.className} 
                onChange ={props.onChange}
                value = {props.value}
            />
            {props.children}
        </div>
    )

}

export default InputField

