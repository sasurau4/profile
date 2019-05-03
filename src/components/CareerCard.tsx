import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { CareerItems } from '../types';

const styles = (theme: Theme) =>
  createStyles({
    chip: {
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    chipsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  });

interface Props extends WithStyles<typeof styles>, CareerItems {}

const CareerCard = ({
  headline,
  skills,
  positions,
  details,
  classes,
}: Props) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom={true}>
        {headline}
      </Typography>
      <Typography variant="subtitle2">Position</Typography>
      <Typography gutterBottom={true}>{positions.join(', ')}</Typography>
      <Typography variant="subtitle2">Skills</Typography>
      <div className={classes.chipsContainer}>
        {skills.map((item, i) => (
          <Chip
            label={item}
            key={i}
            color="primary"
            variant="outlined"
            className={classes.chip}
          />
        ))}
      </div>
      <Typography variant="subtitle2" gutterBottom={true}>
        Details
      </Typography>
      {details.map((detail, i) => (
        <Typography key={i} gutterBottom={true}>
          {detail}
        </Typography>
      ))}
    </CardContent>
  </Card>
);

export default withStyles(styles)(CareerCard);
