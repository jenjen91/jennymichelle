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
      <Typography variant="h2" gutterBottom>
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
