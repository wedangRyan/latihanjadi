import React, { useState } from 'react';
import { makeStyles }  from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    margin: '0 auto',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Slideshow() {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  const handleBack = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className={classes.root}>
      <Carousel
        activeIndex={index}
        onChange={(event, newIndex) => setIndex(newIndex)}
        style={{ width: '100%', height: 'auto' }}
      >
        <img src="path/to/image1.jpg" className={classes.img} alt="Slide 1" />
        <img src="path/to/image2.jpg" className={classes.img} alt="Slide 2" />
        <img src="path/to/image3.jpg" className={classes.img} alt="Slide 3" />
      </Carousel>
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleBack}
          disabled={index === 0}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleNext}
          disabled={index === 2}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
