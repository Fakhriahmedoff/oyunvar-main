import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import { deepOrange, deepPurple, purple } from '@material-ui/core/colors';
const useStylesSS = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    colorP:{
        color: 'black !important',
        backgroundColor: deepPurple[500],
    },
    colorW:{
        color: 'white !important',
    }
  }));
  

function Notifications() {
    const classes = useStylesSS();
    const [dense, setDense] = React.useState(true);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <div className={classes.root}>
            Bildirişlər
          <Grid item xs={12} md={6}>
            <div className={classes.demo}>
              <List dense={dense}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar className={classes.colorP}>
                        <NotificationsNoneOutlinedIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Bildirişlər"
                    />
                  </ListItem>
              </List>
            </div>
          </Grid>
      </div>
    )
}

export default Notifications
