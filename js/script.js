const categories=[
  { id: "regras-gerais",   label: "Regras Gerais do Condado", tag: "I" },
  { id: "discord",         label: "Discord",           tag: "II" },
  { id: "punição",         label: "Sistema de Punições",  tag: "III" },
  { id: "anti-rp",         label: "Anti-RP",           tag: "IV" },
  { id: "combat-logging",  label: "Combat Logging",    tag: "V" },
  { id: "rdm-hdm",         label: "RDM e HDM",         tag: "VI" },
  { id: "metagaming",      label: "Metagaming",        tag: "VII" },
  { id: "abuso-bug",       label: "Amor à Vida",      tag: "VIII" },
  { id: "forcar-rp",       label: "Forçar RP",         tag: "IX" },
  { id: "revenge-kill",    label: "Revenge Kill",      tag: "X" },
  { id: "dark-rp",         label: "Dark RP",           tag: "XI" },
  { id: "flaming",         label: "Flaming",           tag: "XII" },
  { id: "desova-corpo",    label: "Desova de Corpo",   tag: "XIII" },
  { id: "zona-segura",     label: "Zona Segura",       tag: "XIV" },
  { id: "powergaming",     label: "Powergaming",       tag: "XV" },
  { id: "fail-rp",         label: "Fail RP",           tag: "XVI" },
];
const rulesData={
  "regras-gerais": {
    title: "Regras Gerais",
    warrant: "SIGA AS LEIS E NÃO ENTREM EM ENCRENCA",
    sections: [
      {
        heading: "Conduta",
        items: [
          "Todos os players devem ficar atentos às regras, baseado em cada tipo de RP que estejam desenvolvendo.",
        ],
      },
      {
        heading: "REGRAS",
        items: [
          "Vender itens do jogo por dinheiro real, bem como participar de qualquer tipo de transação envolvendo valores fora do servidor. Qualquer jogador flagrado nessa prática estará sujeito a punições. O descumprimento desta regra resultará em banimento permanente do servidor, com perda definitiva da allowlist.",
          "Interferir de forma indevida em corpos desmaiados. Qualquer jogador que colocar a mão em um corpo desmaiado é OBRIGADO a levá-lo até um médico e garantir o atendimento. É proibido mover o corpo com a intenção de atrapalhar o resgate, esconder ou jogar em penhascos, rios ou qualquer outro local inadequado. O descumprimento dessas regras resultará em punições severas, podendo levar ao banimento sem aviso prévio. ",
          "É extremamente proibido agir sem amor a vida com o personagem.",
          "É extremamente proibido RDM e HDM.",
          "É proibido morrer e relembrar dos acontecimentos que geraram sua morte. Só será permitido relembrar algo caso não esteja envolvido na ação ou não tenha qualquer relação com o RP que ocorreu.",
          "Proibido realizar chamado para os médicos durante uma ação. Todos os médicos só têm permissão para trabalhar em uma ação após o término da mesma.",
          "Proibido matar, roubar ou sequestrar pessoas que estiverem trabalhando em empregos legais (a pessoa deve estar devidamente uniformizada para se enquadrar na regra).",
          "É extremamente proibido sair fora do RP, em qualquer hipótese. Você estando certo ou não mantenha sempre o RolePlay.",
          "É extremamente proibido jogar o corpo dentro da água, pois, impossibilita que o médico reanime o player.",
          "É extremamente proibido arrastar o corpo do player abatido no cavalo, passível de punição por flaming.",
        ],
      },
    ],
  },
  "discord": {
    title: "Discord",
    warrant: "DESORDEM PÚBLICA",
    sections: [
      {
        heading: "Comportamento",
        items: [
          "O Discord tem seus canais definidos, portanto, utilizar um chat que não seja relacionado ao assunto poderá resultar em penalidades.",
          "Caso você saia do Discord, você automaticamente terá sua WL removida. Caso ainda continue jogando no servidor, poderá receber ban permanente. Todo player ao retornar ao Discord, pode ter a sua WL novamente.",
          "O nome e sobrenome do seu personagem deve ser o mesmo que você colocou na WL.",
        ],
      },
      {
        heading: "Proibido",
        items: [
          "É proibido o uso de linguagem ofensiva, racista, homofóbica e xenofóbica, publicação de material calunioso, abusivo ou que invada a privacidade de  alguém.",
          "É proibido colocar cores nas mensagens do chat.",
          "É proibido enviar mensagens em excesso no chat (flood).",
          "É proibido a divulgação de outros servidores.",
          "É proibido promover desordem ou brigas.",
        ],
      },
    ],
  },
  "punição": {
    title: "Sistema de Punições",
    warrant: "!!!!!!!!",
    sections: [
      {
        heading: "Denúncias",
        items: [
          "Toda e qualquer denúncia só será aceita se preenchida de forma correta (através do canal #ticket) atendendo os requisitos solicitados (vídeos, descrição e informações dos players). Ficará encargo da staff decidir se as infrações previstas são leves, médias ou graves. Sendo assim, cabe aos mesmos decidirem tais punições.",
        ],
      },
      {
        heading: "Advertências",
        items: [
          "ADVERTÊNCIA-1: A primeira advertência que o player recebe. É aplicada em casos menos graves e tem o intuito de servir como um aviso. ",
          "ADVERTÊNCIA-2: É aplicada em players que já possuem uma ADVERTÊNCIA-1. Juntamente com a advertência poderá ser aplicado um banimento temporário de 24 horas.",
          "ADVERTÊNCIA-3: É aplicada em pessoas que já possuem uma ADVERTÊNCIA-2. Juntamente com a advertência poderá ser aplicado um banimento temporário de até 7 dias  (o tempo será definido pela staff de acordo com a gravidade da advertência).",
        ],
      },
      {
        heading: "Banimentos",
        items: [
          "Qualquer player está sujeito a receber um BANIMENTO PERMANENTE do servidor mesmo que não tenha nenhum histórico de advertência. O banimento permanente deve ser aplicado em players que possuírem 3 advertências ou poderá ser aplicado direto em casos mais graves.",
          "AS ADVERTÊNCIAS TEM DATA DE EXPIRAÇÃO, e podem ser retiradas após 30 dias.",
        ],
      },
      {
        heading: "Bugs e Programas Ilegais",
        items: [
          "É extremamente proibido a utilização de glitchs, bugs ou MOD menus. Sujeito a banimento permanente caso comprovado. Caso encontre algum bug reporte imediatamente a staff.",
          "É extremamente PROIBIDO o uso de programas externos como MOD MENU, QUALQUER PROGRAMA HACK, VPNS e MACROS para tirar vantagem sobre outro jogador. A utilização de qualquer bug, glitch, ou programas externo é passível de Banimento.",
        ],
      },
    ],
  },
  "anti-rp": {
    title: "Anti-RP",
    warrant: "PERTURBAÇÃO DA ORDEM",
    sections: [
      {
        heading: "Definição",
        items: [
          "É considerado Anti-RP qualquer atitude que tenha o intuito de prejudicar a história ou RP que está sendo desenvolvido.  Brincadeiras moderadas entre os cidadãos são permitidas, mas em situações de discussão, deve-se buscar ao máximo não perder a razão pois poderá resultar em punição mútua.",
        ],
      },
      {
        heading: "Exemplos e Punições",
        items: [
          "É extremamente proibido se passar por policiais ou funcionários do tribunal da cidade. Totalmente proibido utilizar vestimentas de qualquer tipo de polícia ou funcionário público. Os uniformes de cada profissão são encontrados no Discord.",
          "É extremamente proibido qualquer policial desviar armas da polícia para si ou para terceiros. Proibido pegar armas do baú ou blip de armas da polícia para guardar em baú próprio ou de terceiro, também é proibido vender e desviar armamentos, munições e itens provenientes da polícia. Caso faça, todos os envolvidos e cúmplices serão banidos permanentemente do servidor.",
          "Qualquer membro de organização criminosa, bando ou família fica proibido de pegar itens do baú da mesma sem a autorização do líder",
          "É proibido ficar AFK (away from keyboard) recebendo/farmando salário VIP ou de emprego legal (por exemplo médico ou policial).",
          "É extremamente proibido sair do RP por qualquer motivo, é considerado sair do RP o uso de palavras como: “estou gravando/está tudo gravado”, no sentido de denunciar alguém para a staff. Advertência, VDM, RDM, PWG, ADM, staff, ID e entre outras palavras que fujam do contexto e imersão do roleplay que está sendo desenvolvido no local tem que ser evitadas.",
          "É proibido o início de qualquer ação após anúncio de terremoto (RR) - aviso de que o servidor reiniciará.",
        ],
      },
    ],
  },
  "combat-logging": {
    title: "Combat Logging",
    warrant: "FUGA DA JUSTIÇA",
    sections: [
      {
        heading: "O que é Combat Logging",
        items: [
          "CL (Combat Logging) é o ato de desconectar do servidor para evitar uma situação desfavorável no RP.",
        ],
      },
      {
        heading: "Exemplos",
        items: [
          "Ser enquadrado pela polícia e sair para não ser preso.",
          "Ao morrer, dar quit para não ser looteado.",
        ],
      },
    ],
  },
  "rdm-hdm": {
    title: "RDM e HDM",
    warrant: "ASSASSINATO SEM CAUSA",
    sections: [
      {
        heading: "Random Deathmatch (RDM)",
        items: [
          "RDM é o ato de matar pelo simples desejo de matar, sem motivo algum ou sem que tenha sido gerado um RP que motivasse tal ato.",
        ],
      },
      {
        heading: "Horse Deathmatch (HDM)",
        items: [
          "HDM é o ato de utilizar um cavalo ou carroça como arma para matar alguém.",
        ],
      },
      {
        heading: "Punição",
        items: [
          "Caso mate pessoas ou atropele players sem motivo algum, apenas por diversão está sujeito a banimento permanente do servidor.",
        ],
      },


    ],
  },
  "metagaming": {
    title: "Metagaming",
    warrant: "TRAPAÇA E EMBOSCADA",
    sections: [
      {
        heading: "Definição",
        items: [
          "Metagaming é a utilização de informações descobertas por meios externos e fora do roleplay para usar dentro do jogo para dar vantagem ou benefício ao seu personagem.",
          "É extremamente proibido qualquer ato de metagaming no servidor.",
        ],
      },
      {
        heading: "Exemplos Comuns",
        items: [
          "Passar ou receber informações de chats, lives ou Discord.",
          "Ficar perseguindo criadores de conteúdo ou comentar sobre ações que um determinado personagem fez sem ter participado.",
          "Jogar em call privada no Discord, TeamSpeak ou qualquer outro meio a fins de passar ou receber informações.",
          "Reconhecer alguém que esteja utilizando máscara ou bandana e membros de organizações criminosas pela cor da roupa que usa.",
          "Associar qualquer pessoa a uma organização criminosa por meio da roupa que a mesma utiliza, seja ela personalizada ou não, tendo nome/sigla ou não.",
          "Lembrar de ações após ter morrido.",
          "Usar /alertpolice morto.",
        ],
      },
    ],
  },
  "abuso-bug": {
    title: "Amor à vida",
    warrant: "AMOR A SUA PROPRIA VIDA",
    sections: [
      {
        heading: "Amor à Vida?",
        items: [
          "É obrigatório ter amor a vida, você deve sempre simular a vida real com seu personagem. Não se deve tomar atitudes que não faria na vida real, sempre valorize a sua vida e a de outro em primeiro lugar.",
        ],
      },
    ],
  },
  "forcar-rp": {
    title: "Forçar RP",
    warrant: "COAÇÃO E AMEAÇA",
    sections: [
      {
        heading: "O que constitui Forçar RP",
        items: [
          "O seu RP tem liberdade até onde começa o RP de outra pessoa. Não é porque você está portando uma arma que a outra pessoa deverá fazer o que você quiser.",
        ],
      },
      {
        heading: "Exemplos",
        items: [
          "Abusar dos poderes de juiz da cidade, para fazer players lhe obedecerem.",
          "Atirar propositalmente na frente da polícia a fim de gerar ação.",
          "Caçar alguém apenas por usar uma cor ou estilo de roupa de uma família, bando ou facção criminosa.",
        ],
      },
    ],
  },
  "revenge-kill": {
    title: "Revenge Kill",
    warrant: "VINGANÇA PROIBIDA",
    sections: [
      {
        heading: "Revenge Kill",
        items: [
          "Revenge Kill é o ato de voltar para o mesmo local onde morreu com o intuito de se vingar ou dar continuidade a ação em que tenha morrido.",
          "Passivo de banimento permanente.",
        ],
      },
    ],
  },
  "dark-rp": {
    title: "Dark RP",
    warrant: "ATIVIDADE SOMBRIA",
    sections: [
      {
        heading: "Dark Rp",
        items: [
          "Dark RP é um roleplay onde existe assédio, estupro, racismo, xenofobia, homofobia e etc. É totalmente proibido a realização do mesmo independente do caso.",
          "Passivo de banimento permanente.",
        ],
      },
    ],
  },
  "flaming": {
    title: "Flaming",
    warrant: "PERTURBAÇÃO DA PAZ",
    sections: [
      {
        heading: "Definição",
        items: [
          "Flaming é o comportamento agressivo ou hostil direcionado a outros membros da comunidade.",
          "Inclui insultos, provocações persistentes e comentários depreciativos, tanto IC quanto OOC.",
        ],
      },
      {
        heading: "Punições",
        items: [
          "Advertência verbal para primeiras ocorrências leves.",
          "Mute temporário de 24h a 7 dias para casos moderados.",
          "Banimento temporário ou permanente para comportamento reincidente ou grave.",
        ],
      },
    ],
  },
  "desova-corpo": {
    title: "Desova de Corpo",
    warrant: "OCULTAÇÃO DE CADÁVER",
    sections: [
      {
        heading: "Regras",
        items: [
          "Será considerado Cop Baiting qualquer atitude que tenha a finalidade de enganar, trapacear ou emboscar alguém de forma desonesta e desonrosa visando apenas o benefício próprio, prejudicando o RP.",
          "Fazer chamados para trabalhos legais com intuito de assaltar, sequestrar ou matar.",
        ],
      },
    ],
  },
  "zona-segura": {
    title: "Zona Segura",
    warrant: "VIOLAÇÃO DE REFÚGIO",
    sections: [
      {
        heading: "Safe Zone",
        items: [
          "Correr para uma área safe durante uma ação ou com a intenção de se safar de uma ação.",
          "Vender qualquer tipo de contrabando ou levar qualquer atividade ilegal dentro da safe zone. Sujeito à invasão caso haja denúncia de NPC: força federal e investigativa pode invadir sem necessidade de mandado.",
          "Camperar pessoas que estão em safe zones.",
          "Agredir ou matar em uma safe zone: independente que seja brincadeira ou do motivo que desencadeou a atitude.",
          "Comércios no geral e seus clientes não podem ser assaltados ou abordados dentro da dependência do local, mesmo na zona vermelha, caso o abordado corra pra dentro da armaria a denúncia será considerada inválida.",
        ],
      },
    ],
  },
  "powergaming": {
    title: "Powergaming",
    warrant: "ABUSO DE PODER",
    sections: [
      {
        heading: "Definição",
        items: [
          "Power Gaming é a prática de abusar das mecânicas e bugs do jogo para se beneficiar ou adquirir vantagem sobre o adversário ou fazer manobras e atos impossíveis de serem feitos na vida real.",
          "É extremamente proibido todo e qualquer ato de Power Gaming  no servidor.",
        ],
      },
      {
        heading: "Exemplos",
        items: [
          "Uso de animações para acessar locais que não são possíveis normalmente ou abusar de binds para bugar animações.",
          "Fazer qualquer ação ou animação estando algemado.",
          "Derrubar ou enforcar alguém durante uma ação ou trocação de tiro.",
        ],
      },
    ],
  },
  "fail-rp": {
    title: "Fail RP",
    warrant: "DESONRA DO CÓDIGO",
    sections: [
      {
        heading: "O que é Fail RP",
        items: [
          "Fail RP é agir de forma inconsistente com a realidade do personagem ou do universo do servidor.",
          "Inclui comportamentos que quebram a imersão sem justificativa narrativa adequada.",
        ],
      },
      {
        heading: "Exemplos Comuns",
        items: [
          "Não valorizar a vida do seu personagem em situações de risco extremo.",
          "Agir como se soubesse que está em um jogo (quebrar a quarta parede).",
          "Utilizar glitches de movimento ou física do jogo de forma intencional.",
          "Não seguir ordens de personagens armados sem justificativa narrativa válida.",
        ],
      },
    ],
  },
};

let activeCategory='regras-gerais';

function renderCategories(){
 const list=document.getElementById('categoryList');
 const q=(document.getElementById('searchInput').value||'').toLowerCase();
 list.innerHTML='';
 categories.filter(c=>c.label.toLowerCase().includes(q)).forEach(c=>{
   const b=document.createElement('button');
   b.className='category-btn'+(c.id===activeCategory?' active':'');
   b.innerHTML=`
    <span class="chapter-number">${c.tag}</span>
    <span>${c.label}</span>
`;
   b.onclick=()=>{activeCategory=c.id;render();};
   list.appendChild(b);
 });
}
function render(){
 renderCategories();
 const r=rulesData[activeCategory];
 if(!r)return;
 document.getElementById('warrant').textContent=r.warrant;
 document.getElementById('ruleTitle').textContent=r.title;
 const cat=categories.find(c=>c.id===activeCategory);
 document.getElementById('chapter').textContent=`Cap. ${cat.tag} — Código de Leis da Cactus Roleplay`;
const c = document.getElementById("ruleContent");

c.innerHTML = "";

r.sections.forEach(section => {

    const card = document.createElement("div");
    card.className = "rule-card";

    const title = document.createElement("h3");
    title.innerHTML = `<span>⚖</span> ${section.heading}`;

    card.appendChild(title);

    const ul = document.createElement("ul");

    section.items.forEach(item => {

        const li = document.createElement("li");
        li.textContent = item;

        ul.appendChild(li);

    });

    card.appendChild(ul);

    c.appendChild(card);

});
}
document.addEventListener('DOMContentLoaded',()=>{
 document.getElementById('searchInput').addEventListener('input',renderCategories);
 render();renderRegulations();
});

document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', () => {
            const url = button.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });



