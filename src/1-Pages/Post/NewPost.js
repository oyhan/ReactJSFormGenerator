import React from "react";
import GenericForm from "../../Misc/FormMaker/GenericForm";
import { PostModel } from "../../4-Models/PostModel";
import { MailOutline } from "@material-ui/icons";


export class NewPost extends React.Component{


  render() {

    return(
      <GenericForm icon={<MailOutline/>} model={ PostModel}  />
    )
  }

}

