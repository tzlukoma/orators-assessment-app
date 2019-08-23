import React from 'react';
import moment from 'moment';
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

// const useStyles = makeStyles(theme => ({
//     root: {
//       width: '100%',
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//     },
//   }));

const Assessments = (props) => {

    const unsortedassessments = props.assessments;
    const coaches = props.coaches;
    const assessments = unsortedassessments.sort((a,b)=> parseFloat(b.timestamp) - parseFloat(a.timestamp));
    const firstname = props.match.params.firstname
    const lastname = props.match.params.lastname

    const mergedList = join(coaches, assessments, "id", "coach_id", function(assessment, coach){
        return {
            id: assessment.id,
            coach: (coach !== undefined ? coach.first_name+' '+coach.last_name: null),
            comment: assessment.comment,
            timestamp: assessment.timestamp,
            projection_rating: assessment.projection_rating,
            tone_rating: assessment.tone_rating,
            poise_rating: assessment.poise_rating,
            focus_rating: assessment.focus_rating,
            presentation_rating: assessment.presentation_rating
        }
    })


    const listItems = mergedList.map((assessment) =>
        
            <ListItem key={assessment.id} divider>
                <ListItemText
                    primary={`Assessment for ${firstname} ${lastname}`}
                    secondary={
                        <React.Fragment>
                            <Typography
                                // component="span"
                                variant="body2"
                                gutterBottom
                                color="textPrimary"
                                style={{backgroundColor:"#F5F5F5", padding:10, margin:"10 0"}}
                            >
                                {`${assessment.comment} `} 
                            </Typography>
                            <Typography>
                            
                            </Typography>
                                <Table size="small">
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
                                            <TableCell align="right">{assessment.projection_rating}</TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                            Voice Tone / Variation
                                            </TableCell>
                                            <TableCell align="right">{assessment.tone_rating}</TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                            Poise / Posture
                                            </TableCell>
                                            <TableCell align="right">{assessment.poise_rating}</TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                            Focus / Coachability
                                            </TableCell>
                                            <TableCell align="right">{assessment.focus_rating}</TableCell>
                                        </TableRow>
                                        <TableRow >
                                            <TableCell component="th" scope="row">
                                            Presentation Style
                                            </TableCell>
                                            <TableCell align="right">{assessment.presentation_rating}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            <Typography variant="body2" style={{fontStyle:"italic"}}>
                                {`by ${assessment.coach} on ${moment.unix(assessment.timestamp).format("LLL")}`}
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

export default Assessments;