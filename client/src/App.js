import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

function App() {
   const classes = useStyles();
  return (
    <div className="App">
      <h1>Convert CSV to JSON</h1>
        <Container >
            <form>
              <Grid
                container
                direction="column-reverse"
                justify="space-between"
                alignItems="stretch"  
              >
                  <Button variant="contained" color="primary">
                    Convert To Json
                  </Button>
                   <TextareaAutosize
                    rowsMax={100}
                     aria-label="maximum height"
                    placeholder="Paste YOUR CSV"
                   />
                  
              </Grid>
            </form>
        </Container>
    </div>
  );
}

export default App;
