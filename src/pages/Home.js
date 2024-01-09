import * as React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {GitHub, LinkedIn, Instagram, Book} from '@mui/icons-material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'; 
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'; // Grid version 1

const pages = [
    {title: 'LinkedIn', href: '/https://www.linkedin.com/in/jennymichelle', icon: <GitHub />},
    {title: 'GitHub', href: 'https://github.com/jenjen91', icon: <LinkedIn />},
    {title: 'Goodreads', href: 'https://www.goodreads.com/user/show/65197875-jenny-michelle', icon: <Book />},
    {title: 'Instagram', href: 'https://www.instagram.com/jennymichelle91/', icon: <Instagram />},
]

const Home = () =>  (        
    <Grid container spacing={2}  sx={{marginTop: '24px'}} direction="row" justifyContent="center" alignItems="center">
        <Grid xs={3} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="end">
            <Stack spacing={2} sx={{textAlign: 'center'}} display="flex">
                <Container maxWidth="sm">
                    <Typography variant="body1" gutterBottom>
                        
                    </Typography>
                </Container>
                <Box sx={{
                    display: 'flex',
                    '& > *': {
                    m: 1,
                    },
                }}
                >
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="contained"
                        disableElevation={true}
                    >
                    {pages.map((page, index) => (
                        <Button key={index} 
                            color="secondary"
                            startIcon={page.icon}
                            href={page.href} 
                            target="_blank"
                            sx={{margin: '12px'}}
                            >{page.title}
                        </Button>
                    ))}
                    </ButtonGroup>
                </Box>
            </Stack>
        </Grid>
        <Grid xs={5} >
            <img src="/images/babyme.jpg" alt="baby me" style={{width: '100%', height: '225px', objectFit: 'cover'}} />
        </Grid>
    </Grid>
      );
  
  
  export default Home;
  