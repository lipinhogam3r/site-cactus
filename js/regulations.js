const regulations = [

{
    id:"cavalaria",
    icon:"👮",
    title:"Cavalaria",
    description:"Normas da Cavalaria."
},

{
    id:"medicos",
    icon:"🩺",
    title:"Corpo Médico",
    description:"Normas do Corpo Médico."
},

{
    id:"empresas",
    icon:"💰",
    title:"Legal",
    description:"Normas para comerciantes e empregados."
},

{
    id:"ilegal",
    icon:"🏴",
    title:"Ilegal",
    description:"Normas para organizações ilegais."
},

{
    id:"nativo",
    icon:"🏹",
    title:"Nativos",
    description:"Normas culturais nativas."
},

{
    id:"nordic",
    icon:"⚔",
    title:"Nórdicos",
    description:"Normas culturais nórdicas."
},

{
    id:"sobrenatural",
    icon:"🔮",
    title:"Sobrenatural",
    description:"Normas do sobrenatural."
}

];

const grid = document.getElementById("regulationsGrid");

regulations.forEach(reg=>{

    grid.innerHTML+=`

    <div class="regulation-card">

        <h3>${reg.icon} ${reg.title}</h3>

        <p>${reg.description}</p>

        <a href="regulamento.html?id=${reg.id}" class="read-btn">

            Ler Normas →

        </a>

    </div>

    `;

});
