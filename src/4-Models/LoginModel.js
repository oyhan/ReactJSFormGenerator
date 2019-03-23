import { formExtractor } from "../Misc/Helper/formExtracor";
import Notifier , {ShowSnack} from '../Misc/Helper/ShowSnack';
import { PostService } from "../3-Services/PostService";
import { URL } from "../Misc/Helper/UrlHelper";
import { PropType } from "./Types";
import { UserService } from "../3-Services/UserService";



export class LoginModel {

    static get properties() {

        return [
            { Name: "StudentNumber", Type: PropType.Text, DisplayName: "شماره زبان آموزی" },
            { Name: "Password", Type: PropType.Password , DisplayName : "کلمه عبور" },
        ];
    }
    
    
    static handleSubmit(event) {
        event.preventDefault();

        var postdata = formExtractor(event.target);

        return PostService.New(postdata, URL.SERVER + "api/student/login")
         .then((response)=>{
             console.log("response");
             console.log(response);
             
            UserService.singin(response);
            return   Promise.resolve({redirect :"/" , message :"عملیات ورود با موفقیت انجام شد"});
        },()=>  Promise.reject("ok"))
         

            
    
};

}
