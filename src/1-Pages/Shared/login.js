import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { formExtractor } from '../../Misc/Helper/formExtracor';
import { PostService } from '../../3-Services/PostService';
import { URL } from '../../Misc/Helper/UrlHelper';
import ShowSnack from '../../Misc/Helper/ShowSnack';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function SignIn(props) {
  const { classes , config } = props;
    

  var handleSubmit = (event) => {

    event.preventDefault();
    var postdata = formExtractor(event.target);
    console.log(postdata);
    PostService.New(postdata, URL.SERVER+"api/student/login")

        .then((response) => {
            ShowSnack.Info("hi");
            // AppToaster.Succuss("پست با موفقیت ارسال شد");
        },
            error => {
            // ShowSnack.Success("error");
            // ShowSnack.Success("hi");

                console.log(`error ${error}`);
                // AppToaster.Danger(error);
            }).catch( (error)=>{
              // ShowSnack.Success("hi");
              console.log(`error ${error}`);

            });
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography variant="headline">ورود</Typography>
          <form onSubmit={handleSubmit} action={config.url} method="post" className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">ایمیل</InputLabel>
              <Input id="email" name="studentNumber" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">کلمه عبور</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.submit}
            >
              وارد شوید
            </Button>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);