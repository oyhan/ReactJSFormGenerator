import React from "react"
import { Paper, Grid, Typography } from "@material-ui/core";



export const MainFeaturedPost=(props)=>{


 var {classes,post} = props;




return(
 <Paper className={classes.mainFeaturedPost}>
 <Grid container>
   <Grid item md={6}>
     <div className={classes.mainFeaturedPostContent}>
       <Typography component="h1" variant="h3" color="inherit" gutterBottom>
         {post.Title}
       </Typography>
       <Typography variant="h5" color="inherit" paragraph>
         {post.Abstract}
       </Typography>
     </div>
   </Grid>
 </Grid>
</Paper>
)}