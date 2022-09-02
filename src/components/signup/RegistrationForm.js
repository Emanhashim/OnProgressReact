import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/system';

export default function Register() {

    const paperStyle={padding:'50px, 20px', width:600, margin:'20px, auto'}
    
    return (
    
    <Container>
        <Paper elevation={3} style={paperStyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     <TextField id="standard-basic" label="Name" variant="standard" />
     <TextField id="standard-basic" label="Phone" variant="standard" />
     
    </Box>
    </Paper>
    </Container>
  );
}
