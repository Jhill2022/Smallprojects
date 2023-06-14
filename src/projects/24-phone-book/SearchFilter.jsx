import React from 'react';
import Button from '../components/Button';
import { FaAddressBook, FaArrowsAltV } from 'react-icons/fa';

export default function ({handleToggleContacts, handleSortContacts, handleSearchChange}) {
  return (
    <section className="text-center">
      <Button btnClass={''} icon={<FaAddressBook />} text="" onClick={handleToggleContacts} />{' '}
      <input
        className="mb-2 mx-1"
        style={{ padding: '.3rem .5rem' }}
        type="text"
        placeholder="Search by first name"
      onChange={(e) => handleSearchChange(e.target.value)}/>
      <Button icon={<FaArrowsAltV />} text="" onClick={handleSortContacts}/>
    </section>
  );
}
