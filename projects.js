class Project {
    name;
    description;
    gitLink;
    img;
    constructor(name, description, gitLink, img) {
        this.name = name;
        this.description = description;
        this.gitLink = gitLink
        this.img = img;
    }
}

function generateHTML(array, element) {
    array.forEach(projectData => {
        const project = document.createElement("li")
        project.className = "project slide"

        const image = document.createElement("img")
        image.src = projectData.img
        
        
        const imageContainer = document.createElement("img-container")
        imageContainer.appendChild(image)
        project.appendChild(imageContainer)

        const content = document.createElement("div")
        content.className = "project__content"

        const name = document.createElement("span")
        name.className = "project__name"
        name.innerText = projectData.name
        content.appendChild(name)

        const description = document.createElement("p")
        description.className = "contentText project__description"
        description.innerText = projectData.description
        content.appendChild(description)

        const gitLink = document.createElement("a")
        gitLink.className = "linkButton"
        gitLink.href = projectData.gitLink
        gitLink.target = "_blank"

        const gitLink_text = document.createElement("span")
        gitLink_text.innerText = "Acesse"

        const gitIcon = document.createElement("i")
        gitIcon.className = "fa-brands fa-github"
        gitLink.appendChild(gitLink_text)
        gitLink.appendChild(gitIcon)
        content.appendChild(gitLink)
        project.appendChild(content)

        

        // <a href="" class="linkButton">
        // <span>Contato</span>
        // <i class="fa-regular fa-envelope"></i>
        // </a>

        const proeficiency = document.createElement("span")
        proeficiency.innerText = String(projectData.proeficiency * 100) + "%"
        
        element.appendChild(project)
    });
}

const projects = [
    new Project("CRUD de Cadastro de Amigos", "Um CRUD feito no modelo single-page application utilizando PHP e MySQL no backend.", "https://github.com/deyvidfernandes/etec-crud-cadastro-amigos", "resources/projeto-screenshot.png"),
    new Project("Placeholder", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, reiciendis", "https://github.com/", "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"),
    new Project("Placeholder", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, reiciendis", "https://github.com/", "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"),
]

const slidesContainer = document.getElementById("slides-container");

generateHTML(projects, slidesContainer)

const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});