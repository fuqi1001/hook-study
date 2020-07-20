import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {

  static contextType =  LanguageContext; // First Option

  render() {
    const text = this.context === 'english' ? 'Name' : 'Naam';
    return (
      <div className='ui field'>
        <label>{text}</label>
        <input />
      </div>
    );
  }
}
// Button.contextType = LanguageContext; // Second Option

export default Field;