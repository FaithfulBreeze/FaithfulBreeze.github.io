function setMenu(e){
    if(!mobileMenu.classList.toString().includes('active')){
        mobileMenu.classList.add('active')
        modal.classList.add('active-modal')
    }else{
        mobileMenu.classList.remove('active')
        modal.classList.remove('active-modal')
    }
}

let sliderFirstImage
let maximumIndex
let currentImage

async function loadIframes(){
    const data = await fetch('../data/iframe.json')
    const iframes = JSON.parse(await (await data.blob()).text())
    for(let frame of iframes){
        const iframe = document.createElement('iframe')
        iframe.src = frame.src
        slider.appendChild(iframe)
    }
    sliderFirstImage = slider.children[0]
    maximumIndex = slider.children.length - 1
    currentImage = 0
}

function prevImg(){
    if(currentImage < 0){
        currentImage += 100
        sliderFirstImage.style.marginLeft = `${currentImage}%`
    }
}

function nextImg(){
    if((-currentImage/100) < maximumIndex){
        currentImage -= 100
        sliderFirstImage.style.marginLeft = `${currentImage}%`
    }
}