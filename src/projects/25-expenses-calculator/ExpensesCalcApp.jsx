import React, { useEffect, useRef, useState } from 'react';
import Title from '../components/Title';
import ExpensesForm from './components/ExpensesForm';
import ExpensesList from './components/ExpensesList';
import { BudgetStyle } from './components/styles/BudgetStyle';
import { v4 as uuidV4 } from 'uuid';
import Alert from './components/Alert';

const initialExpense = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : [];

export default function ExpensesCalcApp() {
  const [expenses, setExpenses] = useState(initialExpense);
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [charge, setCharge] = useState('');
  const [budget, setBudget] = useState('');
  const [id, setId] = useState(0);
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState({ show: false });

  let inputBudget = useRef(null);

  useEffect(() => {
    inputBudget.current.value === '' && inputBudget.current.focus();
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const changeBudget = (e) => {
    setBudget(inputBudget.current.value);
  };
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date !== '' && charge !== '' && amount > 0) {
      if (edit) {
        let tempExpense = expenses.map((item) => {
          return item.id === id ? { ...item, date, charge, amount } : item;
        });
        setExpenses(tempExpense);
        setEdit(false);
        handleAlert({type:"success",text:"Expense Edited"})
      } else {
        const singleExpense = { id: uuidV4(), date, charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({type:"success",text:"Expense added"})
      }
      setCharge('');
      setAmount('');
    } else {
      handleAlert({type:"danger",text:"Please complete all fields"})
    }
  };

  const clearAllExpenses = () => {
    setExpenses([]);
    handleAlert({type:"danger",text:"All expenses deleted"})
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete expense?')) {
      let filteredExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(filteredExpenses);
      handleAlert({type:"danger",text:"Expense deleted"})
    }
  };
  const handleEdit = (id) => {
    let editedExpense = expenses.find((expense) => expense.id === id);
    let { charge, amount } = editedExpense;
    setCharge(charge);
    setAmount(amount);
    setId(id);
    setEdit(true);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({show: true, type, text})
    setTimeout(() => {
      setAlert({show:false})
    }, 3000)
  };
  return (
    <main className="container">
      <Title text={'Expenses Calculator'} />
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: '25px',
          margin: '1rem',
        }}
      >
        <aside>
          <ExpensesForm
            date={date}
            charge={charge}
            amount={amount}
            handleDate={handleDate}
            handleCharge={handleCharge}
            handleSubmit={handleSubmit}
            handleAmount={handleAmount}
            edit={edit}
          />

          <section className="card mt-2 bg-primary text-light text-right">
            <div className="card-body">
              <BudgetStyle>
                <h3>Budget : $</h3>
                <input
                  type="number"
                  value={budget}
                  onChange={changeBudget}
                  ref={inputBudget}
                />
              </BudgetStyle>
              <h3 className="mb-1">
                Total expenses: $
                {expenses.reduce((total, expense) => {
                  return (total += parseInt(expense.amount, 10));
                }, 0)}{' '}
              </h3>
              {/* Calc economies */}
              <h3>Economies: ${calcEconomies(budget, expenses)}</h3>
            </div>
          </section>
        </aside>
        <section>
          <ExpensesList
            expenses={expenses}
            handleEdit={handleEdit}
            handleClearAllExpenses={clearAllExpenses}
            handleDelete={handleDelete}
          />
        </section>
      </section>
    </main>
  );
}

function calcEconomies(budget, expenses) {
  return (
    budget -
    expenses.reduce((total, expense) => {
      return (total += parseInt(expense.amount, 10));
    }, 0)
  );
}
