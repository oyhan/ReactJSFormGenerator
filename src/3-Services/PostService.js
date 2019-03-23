import { authentication } from "./UserService";
import { Urls } from "../Misc/Helper/urls";
import { URL } from "../Misc/Helper/UrlHelper";



export const PostService = {

    New,
    Get,
    GetAll,


}

function New(post,url){
    const request = {
        method:"POST",
        headers : {
                'Content-Type': 'application/json'
        },
        body : post
    }

   return fetch(url,request).then(handleResponse,handleError)

}

function Get(url){
    const request = {
        method:"GET",
        headers : {...authentication(),
                'Content-Type': 'application/json'
        },
    }

   return fetch(URL.SERVER+url ,request).then(handleResponse,handleError);

}
function GetAll(){
    const request = {
        method:"GET",
        headers : {...authentication(),
                'Content-Type': 'application/json'
        },
    }

   return fetch(URL.SERVER+Urls.Post.GetAll,request).then(handleResponse,handleError);

}


function handleResponse(response) {
    console.log(response);
    return new Promise((resolve, reject) => {
        if (response.ok) {
            // return json if it was returned in the response
            var contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                console.log("in first if")
                response.json().then(json => resolve(json));
            } else {
                console.log("in second if");
                resolve();
            }
        } else {
            console.log("in elese errr");
            // return error message from response body
            response.text().then(text => reject(text));
        }
    });
}

function handleError(error) {
    return Promise.reject(error && error.message);
}