import React from "react"
import { formExtractor } from "../Misc/Helper/formExtracor";
import Notifier , {ShowSnack} from '../Misc/Helper/ShowSnack';
import { PostService } from "../3-Services/PostService";
import { URL } from "../Misc/Helper/UrlHelper";
import { PropType } from "./Types";
import { UserService } from "../3-Services/UserService";



export class AdminLogin{

    static get properties() {

        return [
            { Name: "Username", Type: PropType.Text, DisplayName: "نام کاربری" },
            { Name: "Password", Type: PropType.Password , DisplayName : "کلمه عبور" },
        ];
    }
    
    
    static handleSubmit(event) {
        event.preventDefault();
        // let { from } = this.props.location.state || { from: { pathname: "/" } };

        var postdata = formExtractor(event.target);
        postdata = JSON.parse(postdata);
        console.log(postdata.Username);
        
        if (postdata["Username"] ==="ali" && postdata["Password"] ==='123'){
            console.log("ok");
            
            UserService.singin({Name:"admin",isAuthenticated :true});
        return Promise.resolve({message : 'admin loged in !' , redirect : "/"})

        }
        return Promise.reject("error")
        // return PostService.New(postdata, URL.SERVER + "api/student/login")
        //  .then((response)=>{
        //      console.log("response");
        //      console.log(response);
             
        //     UserService.singin(response);
        //     return   Promise.resolve({redirect :"/" , message :"عملیات ورود با موفقیت انجام شد"});
        // },()=>  Promise.reject("ok"))
         

            
    
};

}
