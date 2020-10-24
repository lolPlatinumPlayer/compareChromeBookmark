import strBookmark from "./resource/PC机书签-20-10-24.js";
import domBookmarkToJson from "./domBookmarkToJson.js";

// addEventListener('load',function (){
    document.body.innerHTML=strBookmark
    domBookmarkToJson()
// })