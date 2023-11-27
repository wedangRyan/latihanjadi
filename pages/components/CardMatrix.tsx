import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/icons-material/Checkbox";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const CardMatrix = () => {
  const paperStyle = {
    padding: 30,
    height: "78vh",
    width: 400,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "30px 0" };
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    // akwkawkawkwak <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
    <Grid>
      <Paper elevation={10} sx={{ p: 5, px: 9 }}>
        <Grid>
          <Typography
            sx={{ fontSize: 22, fontWeight: "bold", borderBottom: 2 }}
            gutterBottom
          >
            MATRIX TURNOVER PAGE
          </Typography>
        </Grid>
        <div>
        <FormControl fullWidth sx={{mt: 5}}>
          <InputLabel>Select Matrix</InputLabel>
          <Select
            label="Normal select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value="Detail Account">Detail Account</MenuItem>
            <MenuItem value="Matrix Above">Matrix Above</MenuItem>
            <MenuItem value="Matrix Below">Matrix Below</MenuItem>
          </Select>
        </FormControl>
        </div>
        <TextField
          label="Wallet Address"
          style={btnstyle}
          placeholder="Wallet Address"
          variant="outlined"
          fullWidth
          required
        />
        <Button
          type="submit"
          color="success"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          START WITHOUT UPLINE ADDRESS
        </Button>
      </Paper>
    </Grid>
  );
};

export default CardMatrix;
