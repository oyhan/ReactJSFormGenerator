import React from "react"
import { Fragment } from "react";
import { MainFeaturedPost } from "../../2-Components/MainFeaturedPost";
import { SubFeaturedPost } from "../../2-Components/FeaturedPost";
import { CircularProgress, Grid, Typography, Divider, Paper, withStyles } from "@material-ui/core";
import { UserService } from "../../3-Services/UserService";
import { PostService } from "../../3-Services/PostService";
import { green } from "@material-ui/core/colors";

    const styles = (theme)=>{

        return {
            buttonProgress: {
                color: green[500],
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: -12,
                marginLeft: -12,
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
        }

    }





  const archives = [
    'March 2020',
    'February 2020',
    'January 2020',
    'December 2019',
    'November 2019',
    'October 2019',
    'September 2019',
    'August 2019',
    'July 2019',
    'June 2019',
    'May 2019',
    'April 2019',
  ];


  const social = ['GitHub', 'Twitter', 'Facebook'];


class HomeIndex extends React.Component {

    state = {
        auth: UserService.isAuthenticated,
        userName: UserService.isAuthenticated ? UserService.username : "",
        mainPost: [],
        featuredPosts: []
    }


    loadPosts() {
        var { mainPost, featuredPosts } = this.state;
        PostService.GetAll().then(
            response => {


                featuredPosts = response;
                this.setState({ featuredPosts });
                console.log("this.state");
                console.log(featuredPosts);
            }, error => {

            }

        )

        PostService.Get("api/posts/getmainpost").then(response => {
            mainPost = response
            if (!mainPost) mainPost = featuredPosts[0];
            this.setState({ mainPost });
        })
    }


    componentDidMount() {
        this.loadPosts();
    }


    render() {


        var { classes  } = this.props;
        console.log("classes");
        console.log(this.props);
        
        var {mainPost,featuredPosts}  = this.state;

        return (

            <Fragment>

                {/* Main featured post */}

                <MainFeaturedPost post={mainPost} {...this.props} />

                {/* End main featured post */}

                {/* Sub featured posts */}

                {
                    featuredPosts.length > 0 ?
                        <SubFeaturedPost {...this.props} featuredPosts={featuredPosts} />
                        : <CircularProgress className={classes.buttonProgress} size={24} />
                }



                {/* End sub featured posts */}

                <Grid container spacing={40} className={classes.mainGrid}>
                    {/* Main content */}
                    <Grid item xs={12} md={8}>
                        <Typography variant="h6" gutterBottom>
                            From the Firehose
  </Typography>
                        <Divider />
                        {/* {posts.map(post => (
      <Markdown className={classes.markdown} key={post.substring(0, 40)}>
        {post}
      </Markdown>
    ))} */}
                    </Grid>
                    {/* End main content */}
                    {/* Sidebar */}
                    <Grid item xs={12} md={4}>
                        <Paper elevation={0} className={classes.sidebarAboutBox}>
                            <Typography variant="h6" gutterBottom>
                                About
    </Typography>
                            <Typography>
                                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                                amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
    </Typography>
                        </Paper>
                        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                            Archives
  </Typography>
                        {archives.map(archive => (
                            <Typography key={archive}>{archive}</Typography>
                        ))}
                        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                            Social
  </Typography>
                        {social.map(network => (
                            <Typography key={network}>{network}</Typography>
                        ))}
                    </Grid>
                    {/* End sidebar */}
                </Grid>
            </Fragment>

        )
    }
}


export default withStyles(styles)(HomeIndex)

