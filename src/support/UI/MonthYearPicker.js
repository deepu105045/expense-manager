import React, { useState } from 'react';
const MonthYearPicker=(props)=> {
  const [date, setDate] = useState(new Date());

  const handlePrevClick = () =>{
    setDate(prevDate => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
      props.onSelect(newDate)
      return newDate
    });
  }
 

  const handleNextClick = () => {
    setDate(prevDate => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
      props.onSelect(newDate)
      return newDate
    });
  }

  return (
    <div>
        <div className="list-group-item d-flex justify-content-between align-items-center">
          <button type="button" className="btn btn-secondary" onClick={handlePrevClick}>{'<'}</button>
          <button type="button" className="btn btn-secondary"> {date.toLocaleString('default', { month: 'long', year: 'numeric' })}</button>
          <button type="button" className="btn btn-secondary" onClick={handleNextClick}>{'>'}</button>
        </div>
    </div>
  );
}

export default MonthYearPicker;
