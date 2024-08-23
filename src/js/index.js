function setMenu(e){
    if(!mobileMenu.classList.toString().includes('active')){
        mobileMenu.classList.add('active')
        modal.classList.add('active-modal')
    }else{
        mobileMenu.classList.remove('active')
        modal.classList.remove('active-modal')
    }
}