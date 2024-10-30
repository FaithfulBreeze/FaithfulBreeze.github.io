function setMenu(e){
    if(!mobileMenu.classList.toString().includes('active')){
        mobileMenu.classList.add('active')
        modal.classList.add('active-modal')
    }else{
        mobileMenu.classList.remove('active')
        modal.classList.remove('active-modal')
    }
}

async function loadCards(){
    const data = await fetch('../data/projects.json')
    let projects = await data.json()
    for(let project of projects){
        const cardContainer = document.createElement('li')
        const cardTitle = document.createElement('h2')
        const cardImage = document.createElement('img')
        const cardDetails = document.createElement('p')
        const repositoryLink = document.createElement('a')
        const projectLink = document.createElement('a')
        const detailsDiv = document.createElement('div')

        cardTitle.innerHTML = project.title
        cardImage.src = project.img
        cardDetails.innerText = project.details
        repositoryLink.href = project.repo
        repositoryLink.target = "_blank"
        repositoryLink.innerHTML = "--- Github Repository ---"
        projectLink.href = project.src
        projectLink.target = "_blank"
        projectLink.innerHTML = project.src == false ? "--- Not deployed yet ---" : "--- Project Deploy ---"
        
        cardContainer.appendChild(cardTitle)
        cardContainer.appendChild(cardImage)
        detailsDiv.appendChild(cardDetails)
        detailsDiv.appendChild(projectLink)
        detailsDiv.appendChild(repositoryLink)
        cardContainer.appendChild(detailsDiv)
        cards.appendChild(cardContainer)
    }
}
