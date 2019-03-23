

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
import Notifier , {ShowSnack} from '../../Misc/Helper/ShowSnack';
import { InputRenderer } from './InputRenderer';
import {Redirect} from "react-router-dom";
import { CircularProgress } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 700,
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
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class GenericForm extends React.Component {
  
      constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state= {};
      }

   handleSubmit(event)  {
     this.setState({loading:true})
    console.log("handleSubmit");
    console.log(this.props.model.handleSubmit);
    
    event.preventDefault();
    this.props.model.handleSubmit(event).then(
      (response) => {
        console.log(response);
        
      ShowSnack.Success(response.message);
      this.setState({redirect :response.redirect})
      return <Redirect  to={response.redirect}  />
  },
      error => {
        console.error(error)
      this.setState({redirect :"/"})
      ShowSnack.Error(error);
      })
      
      .finally(()=>{
        this.setState({loading:false})
      });
    
        
  }


  render(){
    const { classes ,formTitle ,icon  } =this.props;
    const {properties,submitButtonText,Title} = this.props.model;
    var {redirect,loading} = this.state;
    
    return (
      redirect ? <Redirect to={redirect}/>:
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
          
            {
              icon?  <Avatar className={classes.avatar}>
              {icon}
            </Avatar> :Title
            }
           
            <Typography variant="headline">{formTitle}</Typography>

            <form onSubmit={this.handleSubmit} method="post" className={classes.form}>
              {properties.map((p)=>{
                   return <InputRenderer key={p.Name} classes={classes} {...p}/>;
              })}
              
            
              <Button
                type="submit"
                fullWidth
                disabled={loading}
                variant="outlined"
                color="primary"
                className={classes.submit}
              >
                {!loading && submitButtonText==null? "ثبت" :submitButtonText}
                {loading && <CircularProgress size={24}  />}
              </Button>
              
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }


}

GenericForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GenericForm);