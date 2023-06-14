import React from 'react';
import { MdDelete } from 'react-icons/md';

export default function ExpensesList({ clearItems, expense= [] }) {
  return (
    <>
      <ul className="list">{/* <ExpenseItem/> */}</ul>
      {expense.length > 0 && (
        <button className="btn btn-danger" onClick={clearItems}>
          <MdDelete /> Clear all expenses
        </button>
      )}
    </>
  );
}
