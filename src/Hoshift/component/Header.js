import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../component/Header.css';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import logo from '../HO-LOGO-TRANSPARANT.png'
import mobileLogo from '../mobile-logo.png'

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center' }} onClick={handleDrawerToggle}>
            <Typography variant='h6' component={'div'} sx={{
                cursor: 'pointer',
                color: 'black',
                flexGrow: 1, 
                }}>
                <Link to='/'>
                <img src={mobileLogo}
                 alt="mobile-logo"
                 className='mobile-logo' />
                </Link>
            </Typography>
<hr />
            <ul className='mobile-navigation'>
                <li>
                    <Link to={'/overview'}>Overview</Link>
                </li>

                <li>
                    <Link to={'/support'}>Support</Link>
                </li>

                <li>
                    <Link to={'/guide'}>Guide</Link>
                </li>
<li>
<Button variant='contained' href='/FreeTrial' sx={{
    color:"white", backgroundColor:"#039be5"}} > Free Trial</Button></li>
            </ul>
        </Box>

    );
    return (
        <>
            <Box>
                <AppBar component={'nav'} sx={{ bgcolor: "lightgray" }}>
                    <Toolbar>
                        <IconButton edge="start" color='inherit' aria-label='open drawer' sx={{
                            mr: 2,
                            display: { sm: 'none' }
                        }} onClick={handleDrawerToggle}>
                            <Link to="/">
                                <MenuIcon sx={{color:'white'}}/>
                            </Link>
                        </IconButton>
                        <Typography variant='h6' component={'div'} sx={{
                            cursor: 'pointer',
                            color: 'white',
                            flexGrow: 1
                        }}>
                            <Link to={'/'} style={{color:"orange", textDecoration:'none'}}>
                                <img src={logo} alt="logo" className="nav-logo" />
                            </Link>
                        </Typography>
                        <Box sx={{
                            display: {
                                xs: 'none',
                                sm: 'block'
                            }
                        }}>
                            <ul className='navigation-menu'>
                                <li>
                                    <Link to={'/overview'}>Overview</Link>
                                </li>

                                <li>
                                    <Link to={'/support'}>Support</Link>
                                </li>

                                <li>
                                    <Link to={'/guide'}>Guide</Link>
                                </li>
                            </ul>
                        </Box>
              <Button variant='contained' href='/FreeTrial'>Free Trial</Button>
                    
                    </Toolbar>
                </AppBar>
                <Box component={'nav'}>
                    <Drawer variant="temporary"  
                  anchor={"left"}
                    open={mobileOpen} onClose={handleDrawerToggle}
                        sx={{ display: {  xs: 'block', sm: 'none'  }, 
                        "& .MuiDrawer-paper " :{
                            width:"30vh",
                            boxSizing:"border-box"
                        }
                        }}>
                        {drawer}
                    </Drawer>
                </Box>
                <Toolbar></Toolbar>
            </Box>
        </>
    );
};

export default Header;
