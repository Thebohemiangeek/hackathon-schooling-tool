import {
  Grid,
  IconButton,
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CameraIcon from "@material-ui/icons/CameraAltRounded";

const useStyles = makeStyles({
  root: {
    padding: 15,
  },
  card: {
    maxWidth: 345,
  },
  gridItem: {
    padding: 10,
  },
});

export default function ClassRoomScene() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={4} className={classes.gridItem}>
        <ClassRoomCard />
      </Grid>
      <Grid item xs={4} className={classes.gridItem}>
        <ClassRoomCard />
      </Grid>
      <Grid item xs={4} className={classes.gridItem}>
        <ClassRoomCard />
      </Grid>
    </Grid>
  );
}

export const ClassRoomCard: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Klassenzimmer 224
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <ListItem button>
              <ListItemIcon>
                <Avatar>H</Avatar>
              </ListItemIcon>
              <ListItemText
                primary="Mathe-Unterricht"
                secondary="8:00 - 10:00"
              />
            </ListItem>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Zimmer beitreten
        </Button>
      </CardActions>
    </Card>
  );
};
