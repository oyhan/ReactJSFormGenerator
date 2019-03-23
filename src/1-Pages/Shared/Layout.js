import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';

import { green } from '@material-ui/core/colors';
import Head from './Head';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});





class Blog extends React.Component {



  render() {
    var { classes ,children} = this.props;

   
    // var { auth, userName } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>

          <Head />

          <main>



            {/* // React.cloneElement(children, {classes}) */}
            {children}


            {/* <HomeIndex social={social} archives={archives} {...this.state} {...this.props}/> */}


          </main>
        </div>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
        </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>);

  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
