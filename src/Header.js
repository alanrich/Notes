import React from 'react'

const Header = ({ darkModeHandler, darkMode }) => {
  return(
    <div className='header'>
      <h1>Notes</h1>
      <button
        className='save'
        onClick={()=> darkModeHandler((color) => !color)}>
        {darkMode === true ? 'Light Mode' : 'Dark Mode'}
       </button>
    </div>
  );
}

export default Header;
