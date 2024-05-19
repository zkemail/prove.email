import React from 'react';
import Button from '@mui/material/Button';

const FilterButton = ({ label = 'Filter', active = false, onToggle }) => {
  const handleClick = () => {
    onToggle(!active);
  };

  return (
    <Button
      onClick={handleClick}
      className={`btn ${active ? 'btn-active' : ''}`}
      variant={active ? 'contained' : 'outlined'}
      color={active ? 'primary' : 'default'}
    >
      {label}
    </Button>
  );
};

export default FilterButton;
