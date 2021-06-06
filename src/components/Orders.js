import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      backgroundColor: '#292b39',
      color:'white',
      fontFamily:'Poppins'
    },
    tableCell: {
        color:'white !important',
        fontFamily:'Poppins !important'
    },
  });
  
function Orders() {
    const classes = useStyles();
    return (
        <div>
            Sifarişlər
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell  className={classes.tableCell}  align="center">Oyunun adı</TableCell>
                        <TableCell  className={classes.tableCell} align="center">Qiyməti</TableCell>
                        <TableCell  className={classes.tableCell} align="center">Statusu</TableCell>
                        <TableCell  className={classes.tableCell} align="center">Sifariş Tarixi</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell  className={classes.tableCell}align="center">Test</TableCell>
                            <TableCell  className={classes.tableCell}align="center">Test</TableCell>
                            <TableCell  className={classes.tableCell}align="center">Test</TableCell>
                            <TableCell  className={classes.tableCell}align="center">Test</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Orders
