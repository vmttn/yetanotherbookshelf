import {withStyles} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    display: "flex",
    alignItems: "center",
    height: "100%"
  },
  image: {
    height: "auto",
    width: "auto",
    maxHeight: "100%",
    minWidth: "30%"
  },
  title: {
    marginBottom: 16,
  },
  author: {
    marginBottom: 12,
  },
};

function BookCard({classes}) {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.image}
        component="img"
        image="/static/images/guerre_et_paix.jpg"
        title="Guerre et Paix"
      />
      <CardContent>
        <Typography className={classes.title} variant="title">
          Guerre et Paix
        </Typography>
        <Typography className={classes.author} variant="subheading" color="textSecondary">
          Léon Tolstoï
        </Typography>
        <Typography>
          War and Peace is a novel by the Russian author Leo Tolstoy.
          It is regarded as a central work of world literature
          and one of Tolstoy's finest literary achievements
        </Typography>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(BookCard);