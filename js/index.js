window.onload=e=>{
    document.querySelector("video").muted=true;
    //document.querySelector("video").style.width=document.body.offsetHeight+"px"
document.querySelector("video").play()
.then(res=>{console.log(res)})
}