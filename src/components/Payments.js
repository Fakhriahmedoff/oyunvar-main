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
function Payments() {
    const classes = useStyles();
    return (
        <div>
            Ödənişlər
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell  className={classes.tableCell}  align="center">Oyunun adı</TableCell>
                        <TableCell  className={classes.tableCell} align="center">Statusu</TableCell>
                        <TableCell  className={classes.tableCell} align="center">Tarixi</TableCell>
                        <TableCell  className={classes.tableCell} align="center">Məbləğ</TableCell>
                        <TableCell  className={classes.tableCell} align="center">Oyun Hesabı</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell  className={classes.tableCell}  align="center">Oyunun adı</TableCell>
                            <TableCell  className={classes.tableCell} align="center">Statusu</TableCell>
                            <TableCell  className={classes.tableCell} align="center">Tarixi</TableCell>
                            <TableCell  className={classes.tableCell} align="center">Məbləğ</TableCell>
                            <TableCell  className={classes.tableCell} align="center">Oyun Hesabı</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Payments
