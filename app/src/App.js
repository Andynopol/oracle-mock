import './App.css';
import Main from './components/Main';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( ( theme ) => ( {
  main: {
    [ theme.breakpoints.up( 'md' ) ]: {
      minHeight: '100vh'
    },
    minHeight: '600px',

    width: '100%',
  }
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
