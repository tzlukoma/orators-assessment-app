import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '../../components/Header/node_modules/@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const OratorListItems = (props) => {

    console.log(props)

    const classes = useStyles();
    const unsortedorators = props.orators;
    const orators = unsortedorators.sort((a,b)=> ((a.last_name+a.first_name) > (b.last_name+b.first_name)) ? 1: (((b.last_name+b.first_name) > (a.last_name+a.first_name))? -1:0));
    
    const listItems = orators.map((orator) =>
        
            <ListItem className={classes.root} key={orator.id} divider>
                <Link to={`/orator_view/${orator.id}/${orator.last_name}/${orator.first_name}${props.isCoach ? '/yes':'/no'}`}> 
                    <ListItemAvatar>
                        <Avatar src={`https://i2.wp.com/ui-avatars.com/api//${orator.first_name}+${orator.last_name}/128?ssl=1`} alt={`${orator.first_name} ${orator.last_name}'s avatar`}/>
                    </ListItemAvatar>
                </Link>
                <ListItemText primary={`${orator.first_name} ${orator.last_name}`} secondary={`${orator.age} years old`} />
            </ListItem> 
        
        // 
    )

    return (
        <div>
            <List>
                {listItems}
            </List>
        </div>
    );
};

export default OratorListItems;