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
import { programmingdata } from '../data/programming';

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

class Programming extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
      <Typography variant="h3" gutterBottom>
        Programming
      </Typography>
      <Typography variant="body1" gutterBottom>
        I've created websites since 2007. I started with Wordpress, but ended up using JavaScript frameworks such as Meteor, Express, and Gatsby.
        I've also made a few websites with Python frameworks such as Django.
      </Typography>

        <div className={classes.container}>
        {programmingdata.map((data, index) => (
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
                  <p>Built with:</p>
                  {data.framework ? (<p><b>Framework or platform:</b> {data.framework}</p>) : ''}
                  {data.language ? (<p><b>Language:</b> {data.language}</p>) : ''}
                  {data.viewlibrary ? (<p><b>View Library:</b> {data.viewlibrary}</p>) : ''}
                  {data.database ? (<p><b>Database:</b> {data.database}</p>) : ''}
                  {data.deploy ? (<p><b>Deployed via:</b> {data.deploy}</p>) : ''}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>

            {data.href ? (
              <Button size="small" color="primary" component="a" href={data.href} target="_blank">
                Visit
              </Button>
            ) : '' }
            {data.github ? (
              <Button size="small" color="primary" component="a" href={data.github} target="_blank">
                View on GitHub
              </Button>
            ) : '' }
            </CardActions>
          </Card>
        ))}
        </div>
      </div>
    );
  }
}


Programming.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Programming);
