import {getFirstTagChildFromDom} from './util.js'

export default function domBookmarkToJson(){
    const domBookmark=getFirstTagChildFromDom('dl',document.body)
    console.log(domBookmark,'domBookmark');
}