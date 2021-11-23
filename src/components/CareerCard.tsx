import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import { Theme } from "@mui/material/styles";
import { WithStyles } from '@mui/styles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";
import { CareerItems } from "../types";

const styles = (theme: Theme) =>
  createStyles({
    chip: {
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    chipsContainer: {
      display: "flex",
      flexWrap: "wrap"
    }
  });

interface Props extends WithStyles<typeof styles>, CareerItems {}

const CareerCard = ({
  headline,
  skills,
  positions,
  details,
  links,
  classes
}: Props) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom={true}>
        {headline}
      </Typography>
      <Typography variant="subtitle2">Position</Typography>
      <Typography gutterBottom={true}>{positions.join(", ")}</Typography>
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
      {links.length === 0 ? null : (
        <Typography variant="subtitle2" gutterBottom={true}>
          Links
        </Typography>
      )}
      {links.map((link, i) => (
        <Typography>
          <Link href={link}>{link}</Link>
        </Typography>
      ))}
    </CardContent>
  </Card>
);

export default withStyles(styles)(CareerCard);
