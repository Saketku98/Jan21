let image__Container=document.getElementsByClassName("image__Container")[0]
let k
let loadImages=(initlizer,n)=>{
    for(let i=initlizer;i<=n;i++){
        
        let EachImage__Container=document.createElement("div");
        EachImage__Container.className="EachImage__Container";
        let newImage=document.createElement("img")
        newImage.src=`https://picsum.photos/1000/600?random=${i}`
        image__Container.appendChild(EachImage__Container)
        EachImage__Container.appendChild(newImage)
    }
    k=n+1
    imgclick()
}
loadImages(1,8)
window.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
    loadImages(k,k+k);
    
    }
    
})

function imgclick(){
let eachImg=document.querySelectorAll(".EachImage__Container > img");
let canclePreviewBtn=document.querySelectorAll(".preview > span");

    eachImg.forEach((img)=>{
        
        img.addEventListener('click',()=>{
            document.getElementById('previewImg').src=img.src;
            document.getElementsByClassName('previewContainer')[0].classList.remove('d-none')
            document.getElementsByClassName('gallery')[0].classList.add('opa')
        })
    })
    canclePreviewBtn.forEach((cancleBtn)=>{
        cancleBtn.addEventListener('click',()=>{
            document.getElementsByClassName('previewContainer')[0].classList.add('d-none')
            document.getElementsByClassName('gallery')[0].classList.remove('opa')
        })
    })
    document.getElementsByClassName('previewContainer')[0].addEventListener('click',()=>{
        document.getElementsByClassName('previewContainer')[0].classList.add('d-none')
        document.getElementsByClassName('gallery')[0].classList.remove('opa')
    },false)
    
}