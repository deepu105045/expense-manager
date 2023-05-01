export const CREATED_TIMESTAMP = 'createdTimestamp';
export const TRANSACTION_DATE ='transactionDate'
export const EXPENSE_COLLECTION ='expense';
export const DESC ='desc';
export const DISPLAY_NAME = 'displayName';
export const IS_LOGGEDIN = 'isLoggedIn'

export const getMonthBegining = (myDate) => {
    const date = myDate ? new Date(myDate) : new Date();
    let newDate = new Date(date.getFullYear(), date.getMonth(), 1);
    newDate.setHours(0, 0, 0, 0);
    return newDate;
}

export const getMonthEnd = (myDate) => {
    const date = myDate ? new Date(myDate) : new Date();
    let newDate = new Date(date.getFullYear(), date.getMonth()+1, 0);
    newDate.setHours(23, 59, 59, 999);
    return newDate;
}
