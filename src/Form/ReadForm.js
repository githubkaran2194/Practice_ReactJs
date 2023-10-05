import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ReadForm = (props) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>FirstName</TableCell>
                            <TableCell >LastName</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell >Password</TableCell>
                            <TableCell >Confirm password</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {props.user.fName}
                            </TableCell>
                            <TableCell >
                                {props.user.lName}
                            </TableCell>
                            <TableCell >
                                {props.user.email}
                            </TableCell>
                            <TableCell >
                                {props.user.confirmPassword}
                            </TableCell>
                            <TableCell >
                                {props.user.password}
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ReadForm