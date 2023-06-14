import React from 'react';
import Title from '../components/Title';
import ExpensesForm from './components/ExpensesForm';
import ExpensesList from './components/ExpensesList';

export default function ExpensesCalcApp() {
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
          <ExpensesForm />
          <section className='card mt-2 bt-primary text-light'>
            <div className="card-body">
                {/* <BudgetStyle> */}
                <h3>Budget : $</h3>
                <input type="number" value="" />
                {/* </BudgetStyle> */}
                <h3 className="mb-1">Total expenses: $ </h3>
                 {/* Calc economies */}
                 <h3>Economies: $</h3>
            </div>
          </section>
        </aside>
      </section>
      <section><ExpensesList/></section>
    </main>
  );
}
