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
import { writingsData } from '../data/writing';

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
      <CardActions>
        {data.href ? (
          <Button size="small" color="primary" component="a" href={data.href} target="_blank">
            Visit {data.linkName}
          </Button>
        ) : '' }    
        </CardActions>
    </Card>
  )
}
const Writings = () =>  (
  <div>
     <Container maxWidth="sm" sx={{textAlign: 'center'}}>
        <Typography variant="body1" gutterBottom>
        </Typography>
      </Container>

        <div>
        <Timeline position="alternate">
          {writingsData.map((data, index) => (
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


export default Writings;
