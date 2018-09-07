import {connect} from 'react-redux';

import {withStyles} from '@material-ui/core/styles/index';
import Grid from '@material-ui/core/Grid';

import BookCard from '../components/BookCard';

const books = [{
  id: 0,
  isbn: 0,
  title: "Guerre et Paix",
  author: "Léon Tolstoï",
  descr: "War and Peace is a novel by the Russian author Leo Tolstoy. It is regarded as a central work of world literature and one of Tolstoy's finest literary achievements.",
  imgLocation: "/static/images/guerre_et_paix.jpg"
}, {
  id: 1,
  isbn: 1,
  title: "Les Caves Du Vatican",
  author: "André Gide",
  descr: "Les Caves du Vatican by André Gide is a rare manuscript, the original residing in some of the great libraries of the world.",
  imgLocation: "/static/images/les_caves_du_vatican.jpg"
}, {
  id: 2,
  isbn: 2,
  title: "Lettres à un jeune poète",
  author: "Rainer-Maria Rilke",
  descr: "Letters to a Young Poet is a collection of ten letters written by Bohemian-Austrian poet Rainer Maria Rilke to Franz Xaver Kappus, a 19-year-old officer cadet at the Theresian Military Academy in Wiener Neustadt.",
  imgLocation: "/static/images/lettres_a_un_jeune_poete.jpg"
}, {
  id: 3,
  isbn: 3,
  title: "Dune",
  author: "Frank Herbert",
  descr: "Dune is a 1965 science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine.",
  imgLocation: "/static/images/dune.jpg"
}, {
  id: 4,
  isbn: 4,
  title: "Le Rouge et le Noir",
  author: "Stendhal",
  descr: "Le Rouge et le Noir, is a historical psychological novel in two volumes by Stendhal, published in 1830.",
  imgLocation: "/static/images/le_rouge_et_le_noir.jpg"
}, {
  id: 5,
  isbn: 5,
  title: "Les Frères Karamazov",
  author: "Fiodor Dostoïevski",
  descr: "The Brothers Karamazov, also translated as The Karamazov Brothers, is the final novel by the Russian author Fyodor Dostoevsky.",
  imgLocation: "/static/images/les_freres_karamazov.jpg"
}];

const styles = {
  grid: {
    padding: "15px",
  },
  item: {
    padding: "10px"
  }
};

function BookGrid({classes, searchTerm}) {
  let fb = books.filter(book => `${book.title}${book.descr}${book.author}${book.isbn}`.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <Grid className={classes.grid} container justify="space-around" alignContent="space-between">
      {
        fb.map(book => (
          <Grid className={classes.item} item key={book.id} xs={12} md={6} xl={4}>
            <BookCard book={book}/>
          </Grid>)
        )
      }
    </Grid>);
}

const mapStateToProps = state => ({searchTerm: state.searchTerm});

export default withStyles(styles)(connect(mapStateToProps)(BookGrid));