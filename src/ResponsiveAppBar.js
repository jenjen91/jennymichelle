import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { pages } from './pages/pages';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

const ResponsiveAppBar = ({ handleDrawer, open }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page, index) => (
                    <NavLink
                      to={page.path}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                      key={index}
                    >
                      {({ isActive, isPending, isTransitioning }) => (
                        <MenuItem key={index}>
                          <Typography textAlign="center" color={isActive ? 'secondary' : 'disabled'}>
                            {page.title}
                          </Typography>
                        </MenuItem>
                      )}
                    </NavLink>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ display: 'flex', flexGrow: 1 }}>
                <Avatar alt="Jenny Michelle" sx={{ marginRight: 12 }} src="/images/animated cv pic.gif" />
                <NavLink
                  to="/"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {({ isActive, isPending }) => (
                    <Typography
                      variant="h5"
                      noWrap
                      component="span"
                      color={isActive ? 'secondary' : 'default'}
                      sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'flex' },
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        textDecoration: 'none',
                      }}
                    >
                      Jenny Michelle
                    </Typography>
                  )}
                </NavLink>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page, index) => (
                  <NavLink
                    to={page.path}
                    style={{ textDecoration: 'none', marginRight: '12px' }}
                    key={index}
                  >
                    {({ isActive, isPending, isTransitioning }) => (
                      <Button
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                        variant={isActive ? 'contained' : 'outlined'}
                        color="secondary"
                      >
                        {page.title}
                      </Button>
                    )}
                  </NavLink>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
};

ResponsiveAppBar.propTypes = {
  handleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

export default ResponsiveAppBar;