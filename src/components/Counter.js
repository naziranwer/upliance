// import React, { useState } from 'react';
// import { Button, Typography } from '@mui/material';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     setCount(count - 1);
//   };

//   const handleReset = () => {
//     setCount(0);
//   };

//   return (
//     <div>
//       <div
//         style={{
//           height: `${count * 10}px`,
//           backgroundColor: '#007bff',
//           transition: 'height 0.5s ease-in-out',
//         }}
//       />
//       <Typography variant="h4">Count: {count}</Typography>
//       <Button variant="contained" onClick={handleIncrement}>
//         Increment
//       </Button>
//       <Button variant="contained" onClick={handleDecrement}>
//         Decrement
//       </Button>
//       <Button variant="contained" onClick={handleReset}>
//         Reset
//       </Button>
//     </div>
//   );
// };

// export default Counter;


import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Box
        style={{
          height: `${count * 10}px`,
          backgroundColor: '#007bff',
          transition: 'height 0.5s ease-in-out',
          marginBottom: '20px',
        }}
      />
      <Typography variant="h4">Count: {count}</Typography>
      <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Button variant="contained" onClick={handleIncrement}>
          Increment
        </Button>
        <Button variant="contained" onClick={handleDecrement}>
          Decrement
        </Button>
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>
      </Box>
    </div>
  );
};

export default Counter;

