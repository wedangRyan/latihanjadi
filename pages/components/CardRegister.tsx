import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/icons-material/Checkbox';
import { Box } from '@mui/system';

const Login=()=>{

    const paperStyle={padding :30,height:'78vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'20px 0'}
    return(

        // akwkawkawkwak <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
        <Grid>
            <Paper elevation={10}  sx={{p: 5}}>
                <Grid>
                <Typography sx={{ fontSize: 22, fontWeight: 'bold', borderBottom: 2, }}  gutterBottom>
          REGISTER
        </Typography>
                </Grid>
                <TextField label='Upline Address' style={btnstyle} placeholder='Upline Address' variant="outlined" fullWidth required/>
                <Button type='submit' color='success' variant="contained" style={btnstyle} fullWidth>SIGN NOW</Button>
                <Button type='submit' color='error' variant="contained" style={btnstyle} fullWidth>START WITHOUT UPLINE ADDRESS</Button>
            </Paper>
        </Grid>
    )
}

export default Login