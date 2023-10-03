class Ability {
    name;
    proeficiency;
    icon;
    constructor(name, proeficiency, icon) {
        this.name = name;
        this.proeficiency = proeficiency;
        this.icon = icon;
    }
}

function generateHTML(array, element) {
    array.forEach(ability => {
        const listItem = document.createElement("li")
        const name = document.createElement("h4")
        name.innerText = ability.name
    
        const content = document.createElement("div")
        content.className = "ability-content"
        
        const icon = document.createElement("i")
        icon.className = ability.icon
        
        const proeficiencyBar = document.createElement("div")
        proeficiencyBar.style.width = String(ability.proeficiency * 100) + "%"
        
        const proeficiency = document.createElement("span")
        proeficiency.innerText = String(ability.proeficiency * 100) + "%"


        listItem.appendChild(name)
        content.appendChild(icon)
        content.appendChild(proeficiencyBar)
        content.appendChild(proeficiency)
        listItem.appendChild(content)
        
        element.appendChild(listItem)
    });
}

const front = [
    new Ability("HTML5", 0.8, "devicon-html5-plain"),
    new Ability("CSS3", 0.6, "devicon-css3-plain"),
    new Ability("JavaScript", 0.5, "devicon-javascript-plain"),
]

const back = [
    new Ability("Java", 0.7, "devicon-java-plain"),
    new Ability("MySQL", 0.5, "devicon-mysql-plain"),
]

const other = [
    new Ability("Git", 0.7, "devicon-inkscape-plain"),
    new Ability("GIMP", 0.7, "devicon-gimp-plain"),
    new Ability("Inkscape", 0.45, "devicon-inkscape-plain"),
    new Ability("Figma", 0.4, "devicon-figma-plain"),
]

const frontList = document.getElementById("frontend-list");

generateHTML(front, frontList)

const backList = document.getElementById("backend-list");

generateHTML(back, backList)

const otherList = document.getElementById("other-list");

generateHTML(other, otherList)
