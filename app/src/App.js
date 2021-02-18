import './App.css';
import Main from './components/Main';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( ( theme ) => ( {

} ) );

function App () {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Main />
    </main>

  );
}

export default App;
