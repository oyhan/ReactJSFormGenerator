import { formExtractor } from "../Misc/Helper/formExtracor";
import Notifier , {ShowSnack} from '../Misc/Helper/ShowSnack';
import { PostService } from "../3-Services/PostService";
import { URL } from "../Misc/Helper/UrlHelper";
import { PropType, PostPostion } from "./Types";



export class PostModel {

    static get Title() {
        
        return "پست جدید";
    } 

    static get properties() {

        return [
            { Name: "Title", Type: PropType.Text, DisplayName: "عنوان" },
            { Name: "Abstract", Type: PropType.TextArea, DisplayName :"خلاصه متن" ,value :"true" },
            { Name: "Position", Type: PropType.Select, DisplayName :"موقعیت مکانی" ,value :"true" , SelectItems:PostPostion },
            { Name: "Content", Type: PropType.RichText , DisplayName : " متن اصلی" },
        ];
    }
    
    
    static handleSubmit(event) {
        event.preventDefault();
        var postdata = formExtractor(event.target);
        console.log(postdata);
        return PostService.New(postdata, URL.SERVER + "api/posts/new").then((response)=>{
            console.log("response");
            console.log(response);
            
           return   Promise.resolve({redirect :"/" , message :"پست جدید با موفقیت ارسال شد"});
       },()=>  Promise.reject("خطا"));

            
    }

}
