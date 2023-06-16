import React, { useEffect, useRef, useState } from 'react';
import Title from '../components/Title';
import ExpensesForm from './components/ExpensesForm';
import ExpensesList from './components/ExpensesList';
import { BudgetStyle } from './components/styles/BudgetStyle';
import { v4 as uuidV4 } from 'uuid';

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
  let edit;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (date !== '' && charge !== '' && amount > 0) {
      if (edit) {
        let tempExpense = expenses.map((item) => {
          return item.id === id ? { ...item, date, charge, amount } : item;
        });
        setExpenses(tempExpense);
      } else {
        const singleExpense = { id: uuidV4(), date, charge, amount };
        setExpenses([...expenses, singleExpense]);
      }
    }
  };
  return (
    <main className="container">
      <Title text={'Expenses Calculator'} />
      {/* Alert comp */}
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
              <h3 className="mb-1">Total expenses: $ </h3>
              {/* Calc economies */}
              <h3>Economies: $</h3>
            </div>
          </section>
        </aside>
        <section>
          <ExpensesList
            expenses={expenses}
            // handleDelete={handleDelete}
            // handleEdit={handleEdit}
          />
        </section>
      </section>
    </main>
  );
}
