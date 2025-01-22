function main(m,n){
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isNaN(m) || isNaN(n)){
                return reject()
            }
            for(let i=m;i<=n;i++){
                console.log(i);
            }
            return resolve()
        },5000)
    })
    .then(() => console.log("Promise is resolved"))
    .catch(() => console.log("error occur"))
}
main(1, 10)
//BOM-browser object model-to contact to bom we have to go through window
//DOM-document object model-inside dom we are having root element which is document,inside document all html code will be stored in tree kind of structure.
//html divided into 2 parts one is head and another is body.inside head we are having meta tag & title tag.inside body tag all the tags are present
