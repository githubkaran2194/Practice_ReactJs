import { Button } from '@mui/material'
import { FacebookOutlined, GMobiledata, Instagram } from '@mui/icons-material'
import { Typography, Grid, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer style={{ marginTop: "70px" }}>
            <Container>
                <Grid container spacing={12}>
                    {/* Column 1 */}
                    <Grid item xs={12} sm={4}>
                        <div>
                            <Typography variant="h6">
                                Contact Us
                            </Typography>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, unde voluptates dolor aspernatur tempora at? Blanditiis impedit optio at, similique officia sint minus. Tenetur nobis harum placeat eveniet, delectus qui.
                            </Typography>
<br/>
                            <TextField 
                                label="Enter Query Here"
                                fullWidth
                                margin='dense'
                                variant='standard'
                            />
                            <Button>Submit</Button>
                        </div>
                    </Grid>

                    {/* Column 2 */}
                    <Grid item xs={12} sm={4}>
                        <div>
                            <Typography variant="h6">
                                About us
                            </Typography>
                            <Typography variant="body2">
                                Copyright © 2021. All rights reserved by karan
                                <hr />
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quia iste sequi. Eligendi laboriosam at, similique mollitia accusamus veritatis. Repellendus culpa consequuntur ullam labore, error amet blanditiis illum quisquam dignissimos.
                            </Typography>
                        </div>
                    </Grid>

                    {/* Column 3 */}
                    <Grid item xs={12} sm={4}>
                        <div>
                            <Typography variant="h6">
                                Follow us on social media
                            </Typography>
                            <Typography variant="body2">
                                <a href="#" target="_blank" rel="noreferrer">
                                    <ul style={{
                                        listStyle:"none",
                                        display:"flex"
                                    }}>
                                        <li>
                                            <a href="#"><FacebookOutlined /></a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <GMobiledata />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Instagram />
                                            </a>
                                        </li>
                                    </ul>
                                </a>&nbsp;&nbsp;
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer