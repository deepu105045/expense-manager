
const CalendarInput = props =>{
    return(
        <div>
            <input type="date" 
                className={props.className} 
                onChange ={props.onChange} 
                value={props.value}
            />
            {props.children}
        </div>
    )

}

export default CalendarInput

