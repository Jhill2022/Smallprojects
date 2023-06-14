import React from 'react';
import Contact from './Contact';

export default function ContactList({ contacts }) {
  const generateRandomImg = () => {
    const types = [
      'Adventurer',
      'Adventurer-Neutral',
      'Avataaars',
      'Avataaars-Neutral',
      'Big-Ears',
      'Big-Ears-Neutral',
      'Big-Smile',
      'Bottts',
      'Bottts-Neutral',
      'Croodles',
      'Croodles-Neutral',
      'Fun-Emoji',
      'Icons',
      'Identicon',
      'Initials',
      'Lorelei',
      'Lorelei-Neutral',
      'Micah',
      'Miniavs',
      'Notionists',
      'Notionists-Neutral',
      'Open-Peeps',
      'Personas',
      'Pixel-Art',
      'Pixel-Art-Neutral',
      'Shapes',
      'Thumbs',
    ];

    const randomTypes = types[Math.floor(Math.random() * types.length)];
    return randomTypes.toLowerCase();
  };
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            icon={`https://api.dicebear.com/6.x/${generateRandomImg()}/svg`}
            firstName={contact.first_name}
            lastName={contact.last_name}
            phoneNr={contact.phone}
          />
        );
      })}
    </ul>
  );
}
