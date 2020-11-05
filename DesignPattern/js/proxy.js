let myImage=(function(){
   var imgNode=document.createElement('img')
   document.body.appendChild(imgNode)
   let img=new Image;
   img.onload=function(){
       imgNode.src=img.src
   }

   return{
       setSrc:function(src){
           imgNode.src='file://....gif'
           img.src=src
       }
   }

})()

