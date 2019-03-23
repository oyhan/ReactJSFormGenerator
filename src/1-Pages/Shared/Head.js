import React from "react";
import { Fragment } from "react";
import { Toolbar, withStyles, Typography, IconButton, Button } from "@material-ui/core";
import { Search, ExitToApp, AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom"
import ShowSnack from "../../Misc/Helper/ShowSnack";
import { UserService } from "../../3-Services/UserService";

const style = (theme) => {

    return {
        toolbarMain: {
            borderBottom: `1px solid ${theme.palette.grey[300]}`,
          },
          toolbarTitle: {
            flex: 1,
          },
          toolbarSecondary: {
            justifyContent: 'space-between',
          },
    }
}

const handleClick = () => {

    ShowSnack.Info("hi");
}

const handleExit = () => {
    UserService.Logout();
    this.setState({
        auth: false
    })
}

const sections = [

    {
      title: "پست جدید",
      url: "/post/new"
    },
  
    {
      title: "معرفی دوره ها",
      url: "/"
    },
  
    {
      title: "شهریه",
      url: "/"
    },
    {
      title: "پرسنل",
      url: "/"
    },
    {
      title: 'اطلاعیه ها',
      url: "/"
    },
  
  ];
    const Head = (props) => {

        var { classes, auth, userName } = props;
        return (
            <Fragment>
                <Toolbar className={classes.toolbarMain}>
                    {/* <Button size="small">Subscribe</Button> */}
                    {
                        auth ?
                            <Typography color='textPrimary' >
                                {userName}
                            </Typography> :

                            ""
                    }
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Blog
          </Typography>
                    <IconButton onClick={handleClick}>
                        <Search />
                    </IconButton>
                    {auth ?
                        <IconButton onClick={handleExit}>
                            <ExitToApp />
                        </IconButton>
                        :
                        <Button component={Link} to="/student/login" data variant="outlined" size="small">
                            <AccountCircle />
                            ورود زبان آموزان
            </Button>}
                </Toolbar>
                <Toolbar variant="dense" className={classes.toolbarSecondary}>
                    {sections.map(section => (

                        <Typography color="inherit" noWrap key={section}>
                            <Button component={Link} to={section.url} data size="small">
                                {section.title}
                            </Button>
                        </Typography>
                    ))}
                </Toolbar>
            </Fragment>
        )

    }


export default withStyles(style)(Head)
