import AppBar from '../components/AppBar';
import BookGrid from '../components/BookGrid';

function Index({classes}) {
  return (
    <>
      <AppBar withSearch/>
      <BookGrid/>
    </>
  );
}


export default Index;