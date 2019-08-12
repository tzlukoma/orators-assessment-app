import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



export function join(lookupTable, mainTable, lookupKey, mainKey, select) {
    var l = lookupTable.length,
        m = mainTable.length,
        lookupIndex = [],
        output = [];
    for (var i = 0; i < l; i++) { // loop through l items
        var row = lookupTable[i];
        lookupIndex[row[lookupKey]] = row; // create an index for lookup table
    }
    for (var j = 0; j < m; j++) { // loop through m items
        var y = mainTable[j];
        var x = lookupIndex[y[mainKey]]; // get corresponding row from lookupTable
        output.push(select(y, x)); // select only the columns you need
    }
    return output;
};

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const Evaluations = (props) => {
    const classes = useStyles();
    const unsortedevaluations = props.evaluations;
    const coaches = props.coaches;
    const evaluations = unsortedevaluations.sort((a,b)=> parseFloat(b.timestamp) - parseFloat(a.timestamp));
    const firstname = props.match.params.firstname
    const lastname = props.match.params.lastname

    const mergedList = join(coaches, evaluations, "id", "coach_id", function(evaluation, coach){
        return {
            id: evaluation.id,
            coach: (coach !== undefined ? coach.first_name+' '+coach.last_name: null),
            comment: evaluation.comment,
            timestamp: evaluation.timestamp,
            projection_rating: evaluation.projection_rating,
            tone_rating: evaluation.tone_rating,
            poise_rating: evaluation.poise_rating,
            focus_rating: evaluation.focus_rating,
            presentation_rating: evaluation.presentation_rating
        }
    })


    const listItems = mergedList.map((evaluation) =>
        
            <ListItem className={classes.root} key={evaluation.id} divider>
                <ListItemText
                    primary={`Evaluation for ${firstname} ${lastname}`}
                    secondary={
                        <React.Fragment>
                            <Typography
                                // component="span"
                                variant="body2"
                                gutterBottom
                                className={classes.inline}
                                color="textPrimary"
                                style={{backgroundColor:"#F5F5F5", padding:10, margin:"10 0"}}
                            >
                                {`${evaluation.comment} `} 
                            </Typography>
                            <Typography>
                            
                            </Typography>
                                <Table className={classes.table} size="small">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Learning Area</TableCell>
                                        <TableCell align="right">Rating</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                            Voice Projection
                                            </TableCell>
                                            <TableCell align="right">{evaluation.projection_rating}</TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                            Voice Tone / Variation
                                            </TableCell>
                                            <TableCell align="right">{evaluation.tone_rating}</TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                            Poise / Posture
                                            </TableCell>
                                            <TableCell align="right">{evaluation.poise_rating}</TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                            Focus / Coachability
                                            </TableCell>
                                            <TableCell align="right">{evaluation.focus_rating}</TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                            Presentation Style
                                            </TableCell>
                                            <TableCell align="right">{evaluation.presentation_rating}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            <Typography variant="body3" style={{fontStyle:"italic"}}>
                                {`by ${evaluation.coach} on ${moment.unix(evaluation.timestamp).format("LLL")}`}
                            </Typography>
                        </React.Fragment>
                    }
                >
                </ListItemText>
                    

            </ListItem> 
        
        
             
        
        
    )

    return (
        
        <div>
            <List>
                {listItems}
            </List>
        </div>
    );
};

export default Evaluations;