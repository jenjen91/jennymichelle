import * as React from 'react';
import Typography from '@mui/material/Typography'; 
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
import GitHubButton from 'react-github-btn'

import { programmingdata } from '../data/programming';

const Content = ({data}) => {
  return (
    <Card maxWidth="md">
      <CardMedia
        sx={{ height: 140 }}
        image={data.img}
        title={data.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.title}
        </Typography>
        <Typography component="div">
          {data.framework ? (<p><b>Framework or platform:</b> {data.framework}</p>) : ''}
          {data.language ? (<p><b>Language:</b> {data.language}</p>) : ''}
          {data.viewlibrary ? (<p><b>View Library:</b> {data.viewlibrary}</p>) : ''}
          {data.database ? (<p><b>Database:</b> {data.database}</p>) : ''}
          {data.deploy ? (<p><b>Deployed via:</b> {data.deploy}</p>) : ''}
        </Typography>
      </CardContent>
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
  )
}
const Development = () =>  (
  <div>
    <Container maxWidth="sm" sx={{textAlign: 'center'}}>
      <Typography variant="body1" gutterBottom>
        I've created websites since 2007. I started with Wordpress, but ended up using JavaScript frameworks such as Meteor, Express, and Gatsby.
        I've also made a few websites with Python frameworks such as Django.
     </Typography>
    <GitHubButton href="https://github.com/jenjen91" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Follow @jenjen91 on GitHub">Follow @jenjen91</GitHubButton>
     </Container>

        <div>
        <Timeline position="alternate">
          {programmingdata.map((data, index) => (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              {index % 2 === 0 ? (
                <TimelineContent sx={{ display: 'flex', justifyContent: 'start', flexGrow: 1}}>
                  <Content data={data} />
                </TimelineContent>
              ) : (
                <TimelineContent sx={{ display: 'flex', justifyContent: 'end', flexGrow: 1}}>
                  <Content data={data} />
                </TimelineContent>
              )}
            </TimelineItem>
          ))}
        </Timeline>
        </div>
      </div>
    );


export default Development;
