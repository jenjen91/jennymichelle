<<<<<<< HEAD
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { designdata } from '../data/design';

const styles = {
  card: {
    width: 400,
    margin: 12,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  media: {
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  }
};

class Design extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
      <Typography variant="h3" gutterBottom>
        Graphic design
      </Typography>
      <Typography variant="body1" gutterBottom>
      I am comfortable with Adobe Indesign and Photoshop.
      My approach to graphic design is focused on "what-is-practical" - influenced by my experience working at a print shop.
      </Typography>

        <div className={classes.container}>
        {designdata.map((data, index) => (
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={data.title}
                className={classes.media}
                image={data.img}
                title={data.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.title}
                </Typography>
                <Typography component="div">
                  <p>{data.text}</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        </div>
      </div>
    );
  }
}


Design.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Design);
=======
import * as React from 'react';
import Typography from '@mui/material/Typography'; // UPDATED IMPORT
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { designdata } from '../data/design';

const Content = ({data}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={data.img}
        title={data.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
const Design = () =>  (
  <div>
     <Container maxWidth="sm" sx={{textAlign: 'center'}}>
        <Typography variant="body1" gutterBottom>
        I am comfortable with Adobe Indesign and Photoshop.
        My approach to graphic design is focused on "what-is-practical" - influenced by my experience working at a print shop.
        </Typography>
      </Container>

        <div>
        <Timeline position="alternate">
          {designdata.map((data, index) => (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              {index % 2 === 0 ? (
                <TimelineContent>
                  <Content data={data} />
                </TimelineContent>
              ) : (
                <TimelineContent sx={{ display: 'flex', justifyContent: 'end' }}>
                  <Content data={data} />
                </TimelineContent>
              )}
            </TimelineItem>
          ))}
        </Timeline>
        </div>
      </div>
    );


export default Design;
>>>>>>> 274e2ea4d20355ea9ebdfcee11149c147aad2a0d
