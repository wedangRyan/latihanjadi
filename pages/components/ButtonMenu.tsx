import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import styles from ".//Button.module.css";

function ButtonMenu() {
    return (
        <div>
            <div className={styles.menu}>
                      <Button variant="contained"
                      aria-label="outlined primary button group"
                      color="success"
                      size="small" className={styles.btn}>SALES COMPENSATION</Button>
                      <Button variant="contained"
                      aria-label="outlined primary button group"
                      color="success"
                      size="small" className={styles.btn}>REGISTER</Button>
                      <Button variant="contained"
                      aria-label="outlined primary button group"
                      color="success"
                      size="small" className={styles.btn}>SWAP</Button>
                      <Button variant="contained"
                      aria-label="outlined primary button group"
                      color="success"
                      size="small" className={styles.btn}>CONNECT WALLET</Button>
                  </div>
        </div>
    );
}

export default ButtonMenu;
