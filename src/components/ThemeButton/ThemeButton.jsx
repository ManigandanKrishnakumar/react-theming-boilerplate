import React from 'react';
import './ThemeButtonStyles.scss';

const ThemeButton = ({name, onClick, isSelected}) => {
  return(
    <div className={`theme-button-container ${isSelected ? 'selected' : null}`} onClick={() => onClick(name)}>
      <p className="name">{name}</p>
    </div>
  );
}

export default ThemeButton;