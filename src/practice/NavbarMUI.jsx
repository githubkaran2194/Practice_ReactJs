import { AppBar, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Drawer, IconButton, Link, List, ListItem, Menu, Modal, TextField, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { Close, IcecreamOutlined, PictureInPictureTwoTone } from "@mui/icons-material";
import { AccountCircleOutlined } from "@mui/icons-material";
import '../practice/Nav.css'


function NavbarMUI() {
    const [open, setOpen]=useState(true);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openModel, setOpenModel] = useState(false)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username === 'karan' && password === 'chavan') {
            // onLogin(username);
        } else {
            alert('Invalid username or password');
        }
        console.log('Username:', username);
        console.log('Password:', password);
    };

    useEffect(() => {
    setTimeout(() => {
        setOpen(!open)
    }, 4000);
    return (
        clearInterval()
    )
    }, [])
    
    return (
        <>
            <Box>
                <AppBar>
                    <Toolbar>
                        <Typography sx={{
                            fontSize: "22px",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            color: "goldenrod",
                            flexGrow: 1,
                            display: {
                                xs: "none",
                                sm: "block"
                            }
                        }}>material UI</Typography>
                        <IconButton
                            onClick={() => setDrawerOpen(true)}
                            sx={{
                                display: {
                                    xs: "block",
                                    sm: "none"
                                }
                            }}>
                            <MenuIcon color="inherit" />
                        </IconButton>
                        <Button variant="contained" color="secondary"
                            sx={{
                                marginLeft: "auto",
                                width: "auto",
                                display: {
                                    xs: "block",
                                    sm: "none"
                                }
                            }}
                            onClick={() => setOpenModel(true)}
                        ><AccountCircleOutlined /></Button>
                        <Box sx={{
                            display: {
                                xs: "none",
                                sm: "block"
                            }
                        }}>
                            <ul style={{ listStyle: 'none' }} className="long-nav">
                                <li><a href='#aboutus'><Typography color="white">About
                                    Us</Typography></a></li>
                                <li><a href='#services'><Typography color="white">Our Services</Typography></a></li>
                                <li><a href='#contactUs'><Typography color="white">Contact us</Typography></a></li>
                                <Button variant="contained" color="secondary"
                                    onClick={() => setOpenModel(true)}
                                    startIcon={<AccountCircleOutlined />}>Login</Button>

                            </ul>
                            {/* login form */}

                            <Dialog open={openModel}
                                onClose={() => setOpenModel(!openModel)}>
                                <form style={{ padding: "20px" }}>
                                    <Container maxWidth="sm">
                                        <Typography variant="h4" align="center" gutterBottom>
                                            Login
                                        </Typography>
                                        <form>
                                            <TextField
                                                label="Username"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                            <TextField
                                                label="Password"
                                                type="password"
                                                variant="outlined"
                                                fullWidth
                                                margin="normal"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                                onClick={handleLogin}
                                            >
                                                Login
                                            </Button>
                                        </form>
                                    </Container>

                                </form>
                                <p id="register"><b>Don't have an account?</b>&nbsp;<br />
                                    <span><u><a href="">
                                        <i style={{ cursor: "pointer" }}>Register Here!</i>
                                    </a></u></span></p>
                            </Dialog>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* drawer */}

            <Drawer
                anchor={'left'}
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                variant='temporary'
                sx={{
                    "& .MuiDrawer-paper": {
                        backgroundColor: "grey !important ",
                        borderRightColor: 'black',
                        boxSizing: "border-box",
                        width: "200px"
                    }
                }}>
                <IconButton sx={{
                    marginLeft: "auto",
                }} >
                    <Button variant="contained" onClick={() => setDrawerOpen(false)}><Close /></Button>
                </IconButton>
                <div className="logo">
                    <b> Side Menu</b>
                </div>
                <ul style={{ listStyle: 'none' }} className="nav">
                    <li><a href='#aboutus'>  <Typography sx={{
                        '&:hover': {
                            color: "powderblue",
                        },
                    }} color="white">AboutUs</Typography></a></li>
                    <li><a href='#services'> <Typography sx={{
                        '&:hover': {
                            color: "powderblue",
                        },
                    }} color="white">Our Services</Typography></a></li>
                    <li><a href='#contactUs'><Typography sx={{
                        '&:hover': {
                            color: "powderblue",
                        },
                    }} color="white">Contact us</Typography></a></li>
                </ul>
            </Drawer>


            {/* pop op Ad*/}
            <Dialog open={open}>
                <DialogTitle>Free Trial</DialogTitle>
                <DialogContent>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae repellendus repellat itaque quisquam deserunt distinctio! Voluptas vel placeat laudantium atque culpa recusandae numquam, incidunt ut quaerat sit omnis cum mollitia?</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)}><Close/></Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default NavbarMUI;