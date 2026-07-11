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

    fundacao:{

        title:"Condado Cactus",

        description:"Onde tudo começou.",

        content:`
        No ano de 1890, o território conhecido como Cactus deixaria para trás seu passado de
abandono. Onde antes existiam apenas ruínas, desertos repletos de cactos e caminhos sem
lei, a civilização começou a florescer. A chegada de novos moradores trouxe oportunidades,
comércios e profissões, transformando a região em um promissor condado do Velho Oeste.

A grande mudança aconteceu quando a Cavalaria estabeleceu sua presença, impondo leis,
criando instituições e levando a ordem às ruas. Com isso os crimes não desapareceram;
apenas passaram a acontecer nas sombras. Bandos de foras da lei surgiram em diferentes
regiões do território, disputando entre si o controle das terras e enfrentando constantemente
as autoridades.

O progresso também alcançou a medicina. Médicos vindos de diversas partes trouxeram
conhecimento, equipamentos e ergueram hospitais, oferecendo novos tratamentos à
população. Ainda assim, algumas culturas continuaram fiéis às antigas práticas espirituais e
medicinais. Dentre eles homens e mulheres conhecedoras de ervas, rituais e curas ancestrais
passaram a ser chamadas de bruxos pela população. Perseguidos pelo medo e pela
intolerância, as práticas passaram a ser feitas às escondidas de quem não conheciam os
chamados dos ancestrais para evitar julgamentos e punições.

Enquanto para alguns a noite era feita para dormir, para outros era o momento de encontros e
mistérios longe dos olhos daqueles que os perseguiam, suas verdadeiras faces eram
mantidas em segredo, evitando assim as mais severas punições.

Com o crescimento da economia, fazendeiros encontraram em Cactus terras ideais para a
criação de animais e o cultivo de plantações. Pouco tempo depois, a modernização trouxe
ferrovias, máquinas movidas a petróleo, fábricas e novas rotas comerciais, acelerando ainda
mais o desenvolvimento do condado.

Entretanto, esse avanço teve um alto custo. Muitas aldeias indígenas foram destruídas para
dar lugar à expansão das cidades e das indústrias.

Expulsos de seus territórios, diversos povos foram obrigados a buscar novos refúgios,
carregando consigo a crença de que a terra nunca pertence ao homem; é o homem que
pertence à terra. Mesmo diante da perseguição, mantiveram acesa e vivas suas tradições,
rituais, costumes e suas próprias leis.

A pressão constante dos governantes e o poder militar da Cavalaria colocaram essas
comunidades à beira da extinção. Para proteger o que ainda restava de seu povo e de sua
cultura, algumas nações indígenas firmaram alianças entre si tornando-as mais fortes.

Os nórdicos passaram a compreender o verdadeiro significado da guerra. Cada batalha
colocava à prova não apenas sua força, mas também sua honra e determinação. Como
grandes guerreiros, carregavam em seus corações o espírito indomável de seus ancestrais,
enfrentando qualquer adversidade sem temer a morte, pois acreditavam que a coragem em
combate era o caminho para a glória eterna.

Assim, Cactus tornou-se uma terra de contrastes, onde a ordem e o caos coexistem, a
tradição enfrenta o progresso e a sobrevivência depende das escolhas de cada indivíduo.
Entre cidades em expansão, territórios indígenas, bandos de foras da lei, guerreiros nórdicos,
médicos, comerciantes e praticantes do oculto, cada habitante escreve sua própria história.
Em Cactus, nenhuma lenda nasce pronta: ela é construída pelas decisões, alianças, conflitos
e legados deixados por aqueles que ousam desafiar o destino. Afinal, no Velho Oeste, não é
o passado que define um homem, mas as marcas que ele deixa na terra por onde passa.

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

function parseLore(text) {

    const lines = text.trim().split("\n");

    let html = "";
    let paragraph = [];

    function closeParagraph() {
        if (paragraph.length) {
            html += `<p>${paragraph.join(" ")}</p>`;
            paragraph = [];
        }
    }

    for (const line of lines) {

        const l = line.trim();

        // Linha em branco = novo parágrafo
        if (l === "") {
            closeParagraph();
            continue;
        }

        // Título
        if (l.startsWith("# ")) {
            closeParagraph();
            html += `<h2>${l.substring(2)}</h2>`;
            continue;
        }

        // Separador
        if (l === "---") {
            closeParagraph();
            html += "<hr>";
            continue;
        }

        paragraph.push(l);
    }

    closeParagraph();

    return html;
}
