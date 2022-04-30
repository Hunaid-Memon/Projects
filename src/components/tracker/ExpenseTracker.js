import React, { useState } from 'react'

const ExpenseTracker = () => {

    const [desc, setDesc] = useState('');
    const [value, setValue] = useState('');
    const [isEditItem, setIsEditItem] = useState(null);
    const [toggleSubmit, setToggleSubmit] = useState(false)

    const [transactions, setTransactions] = useState([
        {id: 1, description: 'Income', amount: 200},
        {id: 2, description: 'Utilities', amount: -100}
    ])
    

    const transactionAmount = transactions.map(transaction => transaction.amount);

    const income = transactionAmount.filter(transaction => transaction > 0)
                    .reduce((acc, transaction) => (acc += transaction ), 0)

    const expense = Math.abs(transactionAmount.filter(transaction => transaction < 0)
                    .reduce((acc, transaction) => (acc += transaction ), 0).toFixed(2))

    const updatedTransaction = (desc, value) => {

        if(!desc && !value) {
            alert('Plz Enter form')
        }
        else if (desc && value && toggleSubmit) {
            setTransactions(
                transactions.map(transaction => {
                    if(transaction.id === isEditItem) {
                       console.log('update',transaction.id);
                       return {...transaction, description: desc, amount: +value }
                    }

                    return transaction;
                })
            )
            setToggleSubmit(true);
            setDesc('');
            setValue('');
            setIsEditItem(null)
        }
        else {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000) + 1,
                description: desc,
                amount: +value
            }
            setTransactions([...transactions, newTransaction])
            setDesc('')
            setValue('')
        }

      
    }

    const submitData = (e) => {
        e.preventDefault()
        updatedTransaction(desc, value)
    }

    const deleteData = (id) => {
        const deletedData = transactions.filter(transaction => {
            return transaction.id !== id
        })
        setTransactions(deletedData)
    }

    const editData = (id) => {
        let editedItem = transactions.find(transaction => {
            return transaction.id === id;
        })
        setDesc(editedItem.description);
        setValue(editedItem.amount);
        setIsEditItem(id);
        setToggleSubmit(true)
    }   

    

    return (
        <>
          <h2>Expense Tracker App</h2>
          <div>
              <div>
                  <div>
                      <h2>Balance <span>${income-expense}</span> </h2>
                  </div>
                  <div>
                      <div>{expense} <span>Credit</span></div>
                      <div>{income} <span>Debit</span></div>
                  </div>
                  <div>
                     {
                         transactions.map(transaction => {
                             return (
                                <div key={transaction.id} >
                                        {transaction.description} {' '} 
                                        <span>{transaction.amount}</span>
                                     <button  onClick={() => deleteData(transaction.id)} >X</button> 
                                     <button onClick={() => editData(transaction.id)} >I</button> 
                                </div>
                             )
                         })
                     }
                  </div>
                 <div>
                     <form onSubmit={submitData} >
                         <div>
                             <input type="text" value={desc} placeholder='Enter Description' onChange={(e) => setDesc(e.target.value)} />
                         </div>
                         <div>
                             <input type="text" value={value} placeholder='Enter Amount' onChange={(e) => setValue(e.target.value)} />
                         </div>
                         <input type="submit" value="Submit"/>
                     </form>
                 </div>
              </div>
          </div>  
        </>
    )
}

export default ExpenseTracker;
