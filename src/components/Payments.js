import React, { useState , useContext, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import {StateListingContext} from '../components/StateListingProvide'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    table: {
    //   minWidth: 650,
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
    const [loginOpen , loginClose , regOpen , regClose,openBalanceUp, closeBalanceUp, openBalance ,openbuyGameUp, loggged, setloggged, person_token] = useContext(StateListingContext)

    const [orders, setorders] = useState([])
    const getOrders = async () => {
        try {
            console.log(person_token)
            const form = new FormData()
            form.append('token' ,  person_token)
            const resp = await axios.post('https://admin.oyunvar.az/api/kabinet/myorders' , form)
            setorders(resp.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getOrders()
    }, [])

    return (
        <div>
            Ödənişlər
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell  className={classes.tableCell} align="center">Ödənilən Miqdar</TableCell>
                        <TableCell  className={classes.tableCell} align="center">Statusu</TableCell>
                        <TableCell  className={classes.tableCell} align="center">Tarixi</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders.map( order => 
                            <TableRow>
                                <TableCell  className={classes.tableCell} align="center">{order.price} AZN</TableCell>
                                <TableCell  className={classes.tableCell} align="center">{(order.status === "pending" && "Gözləmədədir") || (order.status === "finished" && "Təsdiqlənmişdir") || (order.status === "declined" && "Rədd edilmişdir")}</TableCell>
                                <TableCell  className={classes.tableCell} align="center">{order.created_at.slice(0,10)}</TableCell>
                            </TableRow>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Payments
