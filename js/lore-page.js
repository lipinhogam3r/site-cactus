const lores = {

    nativos:{

        title:"Povos Nativos",

        description:"Conheça a história dos primeiros habitantes do Condado.",

        content: `
# Antes da Colonização

Muito antes da chegada do homem branco, estas terras pertenciam às tribos que viviam em perfeita harmonia com a natureza.

Os rios eram considerados sagrados e as montanhas serviam como locais de oração e encontro entre os anciãos.

---

# A Chegada dos Colonizadores

Com o passar dos anos, exploradores começaram a cruzar as fronteiras em busca de ouro e novas terras.

O primeiro contato foi pacífico, mas logo os conflitos começaram.

---

# A Guerra

A disputa pelas terras transformou o Condado em um campo de batalha.

Muitas aldeias desapareceram, enquanto outras decidiram resistir até o fim.

---

# O Presente

Hoje, alguns descendentes ainda preservam os costumes de seus ancestrais, mantendo viva a cultura indígena dentro do Condado.
`

    },



    pinkerton:{

        title:"Pinkerton",

        description:"A origem da agência.",

        content:`

        Aqui você escreve toda a história da Pinkerton...

        Pode ser quantos parágrafos quiser.

        Sem limite.

        `

    }

};

const id = new URLSearchParams(location.search).get("id");

const lore = lores[id];

document.getElementById("pageTitle").textContent = lore.title;

document.getElementById("pageDescription").textContent = lore.description;

const container = document.getElementById("loreContent");

container.innerHTML = `
    <div class="lore-book">
        ${parseLore(lore.content)}
    </div>
`;

function parseLore(text){

    return text

        .replace(/^# (.*)$/gm,"<h2>$1</h2>")

        .replace(/^---$/gm,"<hr>")

        .replace(/\n\n/g,"</p><p>")

        .replace(/^/,"<p>")

        .concat("</p>");

}

document.getElementById("loreContent").innerHTML =

parseLore(lore.content);