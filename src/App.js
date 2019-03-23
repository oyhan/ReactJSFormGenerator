import React, { Component, Fragment } from 'react';
import './App.css';
import { MuiThemeProvider, withStyles } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route

} from 'react-router-dom'
import { theme } from './Misc/theme';
import RTL from './Misc/RTL';

import { SnackbarProvider } from 'notistack';
import Notifier from './Misc/Helper/ShowSnack';
import GenericForm from './Misc/FormMaker/GenericForm';
import { LoginModel } from './4-Models/LoginModel';
import { PrivateRoute } from './Misc/privateRout';
import { AdminLogin } from './4-Models/AdminLogin';
import { NewPost } from './1-Pages/Post/NewPost';
import Layout from './1-Pages/Shared/Layout';
import HomeIndex from './1-Pages/Home/HomeIndex';
import { green } from '@material-ui/core/colors';


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
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});




class App extends Component {
  render() {
    return (

      <Router>
        <RTL>
          <SnackbarProvider maxSnack={3}>
            <MuiThemeProvider theme={theme}>
              <Fragment>
                <Notifier />

                <Layout>
                  <Route exact path="/" component={HomeIndex} />
                  <PrivateRoute exact path="/post/new" component={NewPost} />
                  <Route exact path="/student/login" render={() => <GenericForm model={LoginModel} />} />
                  <Route exact path="/admin" render={() => <GenericForm model={AdminLogin} />} />
                </Layout>

              </Fragment>
            </MuiThemeProvider>
          </SnackbarProvider>
        </RTL>
      </Router>

    );
  }
}
export default withStyles(styles)(App);
// export default App;

