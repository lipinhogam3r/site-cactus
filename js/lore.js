const lores=[

{

id:"fundacao",

icon:"🌵",

title:"Fundação do Condado",

description:"Lore do Condado"

},

{

id:"nativos",

icon:"🏹",

title:"Povos Nativos",

description:"À resisténcia"

},

{

id:"cavalaria",

icon:"⭐",

title:"A Cavalaria",

description:"A lei do Velho Oeste."

},

{

id:"ilegal",

icon:"🏴",

title:"O Ilegal",

description:"O nascimento dos fora da lei"

},

{

id:"nordicos",

icon:"⚔",

title:"Povos Nórdicos",

description:"O nascimento dos fora da lei."

},

{

id:"sobrenatural",

icon:"🔮",

title:"Sobrenatural",

description:"O nascimento dos fora da lei."

}

];

const grid=document.getElementById("loreGrid");

lores.forEach(lore=>{

grid.innerHTML+=`

<div class="lore-card">

<div class="lore-icon">${lore.icon}</div>

<h2>${lore.title}</h2>

<p>${lore.description}</p>

<a href="lore-page.html?id=${lore.id}">

Ler História →

</a>

</div>

`;

});