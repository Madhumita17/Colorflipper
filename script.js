const btn=document.getElementById("btn")
const colortext=document.getElementById("color")
const wrap=document.getElementById("wrap")

const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',function(){
    let hexColor='#'
    for(let i=1;i<=6;i++){
        hexColor=hexColor+=ranhexval()
    }
wrap.style.backgroundColor=hexColor
colortext.innerHTML=hexColor
})
function ranhexval(){
    let randomindex=Math.floor(Math.random()*16)
    return hex[randomindex]
}