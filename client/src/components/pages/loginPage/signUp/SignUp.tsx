import * as React from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    boxShadow: '5px 5px 5px 5px gray',
    color: 'rgb(242, 242, 242)',
    marginLeft: '14%',
    width: '70%',
    marginTop: '8%',
  },
  details: {
    display: 'flex',
    height: '600px',
  },
  cover: {
    background: 'rgb(40, 141, 83)',
    width: '50%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
  content: {
    color: 'black',
    width: '50%',
    background: 'rgb(224, 224, 224)'
  },
}));

interface SignUpProps {
  name: string;
  email: string;
  password: string;
  onChangeSignUpFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSignUpRequest: (
    name: string,
    email: string,
    password: string,
  ) => void;
}
const SignUpComponent: React.FC<SignUpProps> = ({
  name,
  email,
  password,
  onChangeSignUpFields,
  onSignUpRequest,
}) => {

  const classes = useStyles();

  return (
    <>
      <div>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardMedia
              className={classes.cover}
              image="../../../../public/YESTEMPLATE_LOGO_white.png"
              title="Live from space album cover"
            />
            <CardContent className={classes.content}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                  <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="name"
                          label="name"
                          name="name"
                          autoComplete="name"
                          value={name}
                          onChange={onChangeSignUpFields}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          value={email}
                          onChange={onChangeSignUpFields}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          value={password}
                          onChange={onChangeSignUpFields}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={
                        e => {
                          e.preventDefault();
                          onSignUpRequest(name, email, password);
                        }}
                    >
                      Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                      <Grid item>
                        <Link href="/" variant="body2">
                          Already have an account? Sign in
                    </Link>
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </Container>
            </CardContent>
          </div>
        </Card>
      </div>
    </>
  );
}

export default SignUpComponent;