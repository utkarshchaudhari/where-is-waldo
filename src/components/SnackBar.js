import React from 'react';

function SnackBar({ message }) {
  return (
    <div
      className="snackbar"
      style={{
        backgroundColor: message === 'Keep Looking!' ? '#ff0000' : '#008000',
      }}
    >
      {message}
    </div>
  );
}

export default SnackBar;
