import React from './node_modules/react';
import { Link } from "./node_modules/react-router-dom";
import { makeStyles } from './node_modules/@material-ui/core/styles';
import AppBar from './node_modules/@material-ui/core/AppBar';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import Typography from './node_modules/@material-ui/core/Typography';
import IconButton from './node_modules/@material-ui/core/IconButton';
import MenuIcon from './node_modules/@material-ui/icons/Menu';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
  });

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Link to="/" style={{color:'white'}}>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Link>
                    
                    <Typography variant="h6" color="inherit">
                        Orators App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
        
    );
};

export default Header;