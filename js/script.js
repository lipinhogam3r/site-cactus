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
  { id: "casas",         label: "Regras de Casas",           tag: "XVI" },
  { id: "personagem",         label: "Criação de Personagem",           tag: "XVII" },
  { id: "duelo",         label: "Regras de Duelo",           tag: "XVIII" },
  { id: "acoes",         label: "Regras de Ações",           tag: "XIX" },
  { id: "crianca",         label: "Regras de RP de Criança",           tag: "XX" },
  { id: "forca",         label: "Forca e PD",           tag: "XXI" },
  { id: "laco",         label: "Regra de Laço",           tag: "XXII" },
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
          "É proibida a comercialização de itens, propriedades ou qualquer recurso do servidor por dinheiro real, assim como qualquer negociação envolvendo valores externos ao jogo. Jogadores envolvidos nessa prática estarão sujeitos a banimento permanente e à remoção definitiva da Allowlist.",
          "Não é permitido interferir de forma inadequada em jogadores desacordados. Caso um jogador interaja com um corpo desmaiado, ele deverá garantir que a pessoa receba atendimento médico. É proibido esconder corpos, dificultar o resgate, mover jogadores para locais inacessíveis ou jogá-los em rios, penhascos ou outros lugares impróprios. O descumprimento poderá resultar em punições severas, incluindo banimento.",
          "Todo jogador deve respeitar o princípio de Amor à Vida, agindo de maneira coerente com a preservação da vida do personagem.",
          "É totalmente proibida a prática de RDM (Random Deathmatch) e HDM (Horse Deathmatch).",
          "Após a morte do personagem, é proibido utilizar informações ou acontecimentos relacionados à situação que causou sua morte. O jogador só poderá lembrar de fatos caso não tenha participado da ação ou não possua ligação com o ocorrido.",
          "Durante ações em andamento, não é permitido utilizar chamados médicos para solicitar atendimento. Médicos só poderão intervir após o encerramento da ação.",
          "É proibido matar, roubar ou sequestrar jogadores que estejam realizando trabalhos legais, desde que estejam devidamente caracterizados com o uniforme ou identificação da profissão.",
          "É obrigatório permanecer dentro do Roleplay em qualquer situação. Mesmo quando houver conflitos ou discordâncias, o jogador deverá continuar interpretando seu personagem e evitar qualquer atitude fora do contexto.",
          "Não é permitido jogar corpos dentro da água ou em locais que impeçam o atendimento médico e a continuidade do RP.",
          "É proibido arrastar jogadores abatidos utilizando cavalos ou qualquer outra forma inadequada. Essa atitude poderá ser considerada Flaming e estará sujeita a punições.",
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
          "Cada canal do Discord possui uma finalidade específica. Enviar mensagens em canais que não correspondam ao assunto tratado poderá resultar em punições.",
          "Ao sair do Discord oficial do servidor, sua Whitelist (WL) será removida automaticamente. Permanecer jogando após a remoção da WL poderá resultar em banimento permanente. Caso retorne ao Discord, será possível recuperar sua WL.",
          "O nome e o sobrenome utilizados pelo seu personagem devem ser exatamente os mesmos informados durante o processo da Whitelist (WL).",
        ],
      },
      {
        heading: "Proibido",
        items: [
          "Não será tolerado o uso de linguagem ofensiva, preconceituosa, racista, homofóbica, xenofóbica ou qualquer conteúdo que difame, ameace, assedie ou viole a privacidade de outros membros.",
          "Não é permitido utilizar cores nas mensagens enviadas no chat.",
          "O envio repetitivo ou excessivo de mensagens (flood) é proibido.",
          "A divulgação de outros servidores, comunidades ou projetos não é permitida.",
          "É proibido incentivar, provocar ou participar de discussões, confusões ou brigas que prejudiquem o ambiente da comunidade.",
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
          "Toda denúncia deverá ser enviada corretamente por meio do canal #ticket, contendo todas as informações solicitadas, como vídeos, descrição detalhada do ocorrido e identificação dos jogadores envolvidos. Denúncias incompletas poderão ser recusadas. Após a análise do caso, caberá à equipe administrativa determinar a gravidade da infração (leve, média ou grave) e aplicar a punição que considerar adequada.",
        ],
      },
      {
        heading: "Advertências",
        items: [
          "ADVERTÊNCIA 1: Primeira penalidade aplicada ao jogador. Destina-se a infrações de menor gravidade e tem como objetivo orientar e alertar para que a conduta não se repita.",
          "ADVERTÊNCIA 2: Aplicada ao jogador que já possui uma Advertência 1. Além do registro da advertência, poderá ser aplicado um banimento temporário de até 24 horas.",
          "ADVERTÊNCIA 3: Aplicada ao jogador que já recebeu uma Advertência 2. Além da advertência, poderá ser aplicado um banimento temporário de até 7 dias, sendo a duração definida pela equipe administrativa conforme a gravidade da infração."
        ]
      },
      {
        heading: "Banimentos",
        items: [
          "Todo jogador está sujeito ao banimento permanente, independentemente de possuir ou não advertências anteriores. Essa punição poderá ser aplicada automaticamente ao atingir 3 advertências ou de forma imediata em infrações consideradas graves pela equipe administrativa.",
          "As advertências possuem prazo de validade e serão removidas automaticamente após 30 dias, desde que o jogador não cometa novas infrações durante esse período.",
        ],
      },
      {
        heading: "Bugs e Programas Ilegais",
        items: [
          "É terminantemente proibido explorar bugs, glitches ou qualquer falha do jogo para obter vantagens. Caso seja identificado o uso dessas práticas, o jogador estará sujeito ao banimento permanente. Se encontrar qualquer erro ou falha no servidor, informe imediatamente a equipe administrativa.",
          "O uso de programas externos que concedam vantagens indevidas, como mod menus, hacks, VPNs, macros ou qualquer outro software semelhante, é estritamente proibido. A utilização desses recursos, bem como o abuso de bugs ou glitches, poderá resultar em banimento permanente."
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
          "É considerado Anti-RP qualquer comportamento que prejudique, interrompa ou comprometa o desenvolvimento natural da história e da interpretação dos personagens. Interações e brincadeiras moderadas entre os cidadãos são permitidas, desde que façam sentido dentro do contexto do RP. Em situações de conflito ou discussão, todos os envolvidos devem manter a coerência e evitar atitudes desrespeitosas ou exageradas, pois ambas as partes poderão ser responsabilizadas e punidas, caso necessário."
        ],
      },
      {
        heading: "Exemplos e Punições",
        items: [
          "É proibido se passar por policiais, membros do tribunal ou qualquer outro funcionário público. Da mesma forma, não é permitido utilizar uniformes ou vestimentas exclusivas dessas funções sem fazer parte da respectiva profissão. Os uniformes oficiais de cada cargo estão disponíveis no Discord.",
          "Policiais não podem, em hipótese alguma, desviar armamentos, munições ou qualquer item pertencente à corporação para uso próprio ou de terceiros. Também é proibido retirar equipamentos dos baús ou pontos de armamento da polícia para armazená-los em locais particulares, comercializá-los ou repassá-los a outras pessoas. O descumprimento desta regra poderá resultar em banimento permanente de todos os envolvidos e cúmplices.",
          "Integrantes de organizações criminosas, bandos ou famílias não podem retirar itens do baú da organização sem a autorização do líder ou responsável.",
          "Não é permitido permanecer AFK (Away From Keyboard) para receber salários de empregos legais ou benefícios VIP de forma automática.",
          "Sair do contexto do Roleplay durante uma ação é estritamente proibido. Expressões como (estou gravando), (está tudo gravado), (vou chamar a staff), bem como termos como ADM, staff, ID, RDM, VDM, PG, PWG e qualquer outra referência externa ao RP devem ser evitadas, pois quebram a imersão e poderão resultar em punição.",
          "Após o anúncio de terremoto (RR), que indica o reinício do servidor, fica proibido iniciar novas ações de Roleplay. Caso já exista uma ação em andamento, ela deverá ser encerrada de forma coerente antes da reinicialização."
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
          "Combat Logging (CL) é a prática de desconectar do servidor com o objetivo de evitar as consequências de uma ação de Roleplay, escapar de uma abordagem, confronto, prisão ou qualquer outra situação desfavorável. Essa conduta é considerada uma quebra de RP e está sujeita às punições previstas no regulamento."
        ],
      },
      {
        heading: "Exemplos",
        items: [
          "Desconectar do servidor após ser abordado ou durante uma ação policial para evitar a prisão.",
          "Sair do servidor após a morte do personagem com o objetivo de impedir que seus itens sejam saqueados (loot).",
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
          "RDM (Random Deathmatch) é o ato de matar outro jogador sem qualquer justificativa dentro do Roleplay, sem o desenvolvimento de uma situação que motive a ação ou apenas pelo desejo de causar dano. Toda agressão ou homicídio deve possuir um contexto válido e coerente com a história que está sendo desenvolvida.",
        ]
      },
      {
        heading: "Horse Deathmatch (HDM)",
        items: [
          "HDM (Horse Deathmatch) é o ato de utilizar um cavalo, carroça ou qualquer outro meio de transporte como arma para atropelar, ferir ou matar outro jogador sem uma justificativa válida dentro do Roleplay."
        ],
      },
      {
        heading: "Punição",
        items: [
          "Matar ou atropelar outros jogadores sem qualquer justificativa dentro do Roleplay, apenas por diversão ou para causar prejuízo, é uma infração grave e poderá resultar em banimento permanente do servidor."
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
          "Metagaming (MG) é o uso de informações obtidas fora do contexto do Roleplay para beneficiar seu personagem dentro do jogo. Isso inclui qualquer conhecimento adquirido por meios externos, como chamadas de voz, transmissões, mensagens, Discord ou qualquer outra fonte que não tenha sido descoberta de forma natural durante o RP.",
          "A prática de Metagaming é estritamente proibida e poderá resultar nas punições previstas pelo regulamento do servidor."
        ],
      },
      {
        heading: "Exemplos Comuns",
        items: [
          "Compartilhar ou receber informações por meio de chats, transmissões (lives), Discord ou qualquer outro meio externo ao Roleplay.",
          "Perseguir criadores de conteúdo ou comentar sobre acontecimentos envolvendo um personagem sem que seu personagem tenha participado ou tomado conhecimento da situação dentro do RP.",
          "Permanecer em chamadas de voz privadas (Discord, TeamSpeak ou similares) para trocar informações que concedam vantagens durante o Roleplay.",
          "Identificar um personagem mascarado ou com o rosto coberto, ou reconhecer membros de organizações criminosas apenas pela roupa, máscara, bandana ou aparência.",
          "Relacionar um jogador a uma organização criminosa apenas pelas vestimentas que utiliza, sejam elas personalizadas ou não, independentemente de conterem nome, símbolo ou sigla.",
          "Recordar acontecimentos anteriores à morte do personagem, utilizando informações que deveriam ter sido esquecidas em razão da perda de memória do RP.",
          "Utilizar o comando /alertpolice enquanto estiver morto ou incapacitado.",
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
          "Amor à Vida é um dos princípios fundamentais do Roleplay. Todo jogador deve agir como se a vida do seu personagem fosse real, priorizando sua própria segurança e a dos demais. Evite atitudes impulsivas ou irreais que coloquem a vida do personagem em risco sem uma justificativa plausível. Em qualquer situação, suas decisões devem refletir o instinto de sobrevivência e manter a coerência com a realidade."
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
          "O seu Roleplay termina onde começa o do outro jogador. A presença de uma arma ou qualquer outro meio de intimidação não obriga automaticamente outra pessoa a obedecer às suas ordens. Cada jogador deve agir de forma coerente com a situação, preservando a interpretação do seu personagem e respeitando o desenvolvimento do RP de todos os envolvidos."
        ],
      },
      {
        heading: "Exemplos",
        items: [
          "Abusar da autoridade ou dos poderes concedidos ao cargo de juiz para obrigar outros jogadores a obedecerem às suas vontades.",
          "Efetuar disparos intencionalmente na presença da polícia com o único objetivo de provocar ou iniciar uma ação policial.",
          "Perseguir, abordar ou atacar um jogador apenas pela cor das roupas, pelo estilo de vestimenta ou por supostamente estar associado a uma família, bando ou organização criminosa, sem que exista uma justificativa válida dentro do Roleplay."
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
          "Revenge Kill (RK) é o ato de retornar ao local onde seu personagem morreu com o objetivo de buscar vingança ou continuar a ação da qual participou antes da morte. Após morrer, o personagem não deve utilizar lembranças do ocorrido para retaliar os envolvidos ou dar sequência ao conflito.",
          "A prática de Revenge Kill é considerada uma infração grave e poderá resultar em banimento permanente do servidor."
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
          "Dark RP consiste em situações de Roleplay que envolvem temas extremos e sensíveis, como assédio, estupro, racismo, xenofobia, homofobia ou qualquer outro tipo de conteúdo abusivo e discriminatório.",
          "A realização de qualquer tipo de Dark RP é estritamente proibida, independentemente da situação ou justificativa apresentada. Essa conduta é considerada uma infração grave e poderá resultar em banimento permanente do servidor."
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
          "Flaming é a prática de adotar uma postura agressiva, ofensiva ou hostil contra outros jogadores da comunidade.",
          "Essa conduta inclui insultos, provocações excessivas, ataques pessoais e comentários depreciativos, tanto dentro do personagem (IC) quanto fora do personagem (OOC). Qualquer atitude que tenha como objetivo gerar conflitos desnecessários ou prejudicar a convivência entre os jogadores poderá resultar em punição."
        ],
      },
      {
        heading: "Punições",
        items: [
          "Advertência verbal: Aplicada em casos leves ou na primeira ocorrência, com o objetivo de orientar o jogador sobre a conduta inadequada.",
          "Mute temporário: Poderá ser aplicado em situações de maior gravidade, com suspensão do acesso ao chat por um período de 24 horas até 7 dias, conforme a análise da equipe administrativa.",
          "Banimento temporário ou permanente: Destinado a casos graves ou jogadores reincidentes que continuam descumprindo as regras da comunidade."
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
          "Cop Baiting é caracterizado por qualquer ação realizada com o objetivo de provocar, enganar ou atrair outros jogadores para uma situação de forma desleal, buscando apenas benefício próprio e prejudicando o desenvolvimento do Roleplay.",
          "Realizar chamados para profissões legais, como médicos ou outros serviços, com a intenção de criar uma armadilha para assaltar, sequestrar ou matar o jogador que atender ao chamado."
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
          "Utilizar uma área segura (Safe Zone) durante uma ação em andamento, ou correr até ela com o objetivo de escapar das consequências de uma situação de Roleplay, é proibido.",
          "É proibida a realização de atividades ilegais dentro de Safe Zones, incluindo venda de contrabando ou qualquer outro tipo de comércio ilícito. Caso existam denúncias ou evidências envolvendo essas práticas, forças de investigação ou autoridades poderão realizar uma ação no local, sem necessidade de autorização prévia.",
          "Não é permitido permanecer aguardando jogadores em Safe Zones com o objetivo de abordá-los, atacar ou iniciar ações contra eles.",
          "Qualquer agressão física, disparo ou morte dentro de uma Safe Zone é proibida, independentemente de ser uma brincadeira ou da situação que tenha motivado o ato.",
          "Estabelecimentos comerciais e seus clientes não podem ser assaltados ou abordados dentro das dependências do local, mesmo em áreas consideradas de risco. Caso um jogador fuja para dentro de uma armaria ou comércio durante uma abordagem, a denúncia será considerada inválida."
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
          "Power Gaming (PG) é a utilização abusiva das mecânicas do jogo, falhas, bugs ou qualquer recurso do servidor para obter vantagem indevida sobre outros jogadores. Também é considerado Power Gaming realizar ações ou movimentos que seriam impossíveis ou irreais dentro de uma situação da vida real.",
          "Qualquer prática de Power Gaming é estritamente proibida no servidor e estará sujeita às punições previstas no regulamento."
        ],
      },
      {
        heading: "Exemplos",
        items: [
          "Utilizar animações, falhas ou combinações de comandos (binds) para acessar locais que não seriam alcançados normalmente ou para explorar bugs de animação.",
          "Realizar qualquer tipo de ação, interação ou animação enquanto estiver algemado ou impossibilitado de agir.",
          "Derrubar, enforcar ou realizar ações semelhantes contra outro jogador durante uma situação de confronto ou troca de tiros, utilizando mecânicas de forma irreal para obter vantagem."
        ],
      },
    ],
  },
  "casas": {
    title: "Regras de Casas",
    warrant: "Lar doce Lar",
    sections: [
      {
        heading: "Regras",
        items: [
          "As casas disponíveis para compra podem ser encontradas pelo mapa ou na Imobiliária Oficial do Condado. Ao adquirir uma propriedade, o jogador se torna o proprietário e pode fornecer cópias da chave para outros jogadores. É importante lembrar que qualquer pessoa com acesso à chave poderá utilizar o baú e o cofre da residência, sendo de total responsabilidade do proprietário a segurança dos seus bens.",
          "Para manter uma propriedade registrada em seu nome, o proprietário deverá realizar o pagamento da taxa semanal através do campo Livro de Imposto Fiscal. A cobrança será realizada todos os domingos. Caso a propriedade seja perdida por falta de pagamento, os itens armazenados no baú e no cofre permanecerão no local e passarão a pertencer ao próximo comprador.",
          "Casas adquiridas pela Imobiliária Oficial do Condado não podem ser revendidas sem autorização do setor jurídico e da própria imobiliária oficial. Os valores definidos pela imobiliária oficial são exclusivos e não podem ser reproduzidos por imobiliárias não oficiais.",
          "Para revender uma casa adquirida por imobiliárias não oficiais, o proprietário deverá colocá-la à venda e retirar o valor permitido no blip do jurídico, correspondente a 50% do valor original da propriedade. Jogadores que venderem casas por valores superiores ao permitido estarão sujeitos a advertência e terão o valor obtido de forma irregular removido.",
        ],
      },
    ],
  },
  "personagem": {
    title: "Criação de Personagem",
    warrant: "",
    sections: [
      {
        heading: "Regras",
        items: [
         "É proibido utilizar nomes ou sobrenomes que façam referência a marcas, tenham duplo sentido, conteúdo sexual, caráter preconceituoso ou que não estejam de acordo com a ambientação do servidor. O nome do personagem deve ser coerente com a época do Velho Oeste. O descumprimento dessa regra poderá resultar em punições ou até banimento permanente.",
         "É totalmente proibida a criação de personagens inspirados em figuras históricas conhecidas por atos negativos ou crimes contra a humanidade, como Adolf Hitler, Josef Stalin, Saddam Hussein, Osama Bin Laden, entre outros. Criar, interpretar ou realizar qualquer RP que associe seu personagem, direta ou indiretamente, a essas figuras resultará em banimento permanente do servidor.",
         "Evite criar personagens com características ofensivas, inadequadas ou feitas com a intenção de causar problemas na comunidade. Personagens criados com intuito de trollagem ou que prejudiquem a experiência dos demais jogadores poderão resultar em banimento permanente sem aviso prévio."
        ]
      }
    ],
  },
  "duelo": {
    title: "Regras de Duelo",
    warrant: "",
    sections: [
      {
        heading: "Regras",
        items: [
          "Um jogador poderá solicitar um duelo contra outro personagem como forma de resolver situações específicas dentro do Roleplay, desde que exista uma justificativa coerente para o confronto.",
          "Quando um jogador precisar fazer com que outro personagem esqueça determinada história, ação ou acontecimento dentro do RP.",
          "Quando houver uma solicitação de PD (permadeath) de outro personagem e ambos decidirem resolver a situação por meio de um duelo.",
          "Quando for necessário remover um integrante de um bando ou família e o duelo for utilizado para definir o encerramento da participação desse personagem na história.",
          "Caso o jogador desafiado vença o duelo, o resultado deverá ser respeitado. O perdedor não poderá solicitar um novo duelo, perseguir o vencedor ou tentar continuar a mesma situação de RP como forma de vingança.",
          "Duelos devem possuir uma motivação válida dentro da história do servidor. Realizar duelos apenas por diversão, PvP ou sem contexto de Roleplay será considerado quebra de regra e poderá resultar em punição.",
        ]
      }
    ],
  },
  "acoes": {
    title: "Regras de Ações",
    warrant: "",
    sections: [
      {
        heading: "Regras",
        items: [
          "Os assaltos só poderão ser realizados dentro do horário permitido, das 20h00 às 06h00 (horário do jogo). Também é proibido realizar assaltos contra jogadores que estejam exercendo trabalhos legais.",
          "Em situações que envolvam negociação, os oficiais só deverão se deslocar até o local após o chamado realizado pelos criminosos. A negociação deverá ser iniciada somente após a chegada das autoridades.",
          "É proibido roubar ou saquear itens utilizados para atividades de farm de qualquer jogador, esteja ele vivo ou morto. Apenas produtos finais obtidos através dessas atividades poderão ser saqueados.",
          "Não é permitido realizar roubos ou furtos dentro de Safe Zones, independentemente da situação.",
          "O uso do comando /calldoctor durante ações para chamar o médico NPC é totalmente proibido, pois interfere no desenvolvimento do Roleplay.",
          "É proibido utilizar Rolling Block ou Elephant Rifle em situações de PvP dentro do servidor."
        ]
      },
      {
        heading: "Ações de Rua",
        items: [
          "O limite máximo para ações de rua é de 10 jogadores contra a quantidade de oficiais disponíveis no momento.",
          "É proibido assaltar, sequestrar ou abordar trabalhadores enquanto estiverem exercendo suas funções em seus locais de trabalho, como mineradores, treinadores de cavalos, fazendeiros e funcionários próximos às suas empresas.",
          "Não existe restrição de armamento para ações de rua, desde que sejam respeitadas as demais regras do servidor.",
          "Antes de iniciar uma ação de rua, os envolvidos deverão verificar a presença de oficiais disponíveis utilizando o comando /status.",
          "Jogadores utilizando máscaras não poderão ser identificados após a ação por suas roupas, aparência ou voz.",
          "Após aceitar uma abordagem, levantar as mãos, se render ou permitir uma revista, o jogador não poderá mais reagir, fugir ou mudar sua atitude durante aquela ação.",
          "Caso a vítima decida reagir ou fugir durante um assalto, ela deve estar ciente de que sua vida estará em risco, podendo o assaltante tomar medidas contra o personagem dentro do contexto do RP.",
          "Se a vítima colaborar com o desenvolvimento do Roleplay e seguir as ordens do assaltante, ela não poderá ser executada nem deixada em uma situação onde sua morte seja inevitável.",
          "Tenha atenção com fazendas e mansões. Não é permitido assaltar fazendeiros dentro ou nas proximidades de suas propriedades.",
          "É proibido matar animais de fazenda ou animais de estimação durante ações, exceto em casos envolvendo pets agressivos.",
          "O furto de cavalos, carroças ou barcos é considerado uma ação de rua. Caso seu personagem seja vítima desse tipo de situação, será necessário aguardar no mínimo 15 minutos antes de solicitar resgate ou utilizar o chamado do cavalo novamente."
        ]
      }
    ]
  },
  "crianca": {
    title: "Regras de RP de Criança",
    warrant: "",
    sections: [
      {
        heading: "Regras",
        items: [
          "Para realizar RP de criança, o jogador deverá passar por uma entrevista com a equipe administrativa para avaliar e aprovar a criação do personagem.",
          "A criança deverá obrigatoriamente frequentar a escola. As informações e regras relacionadas ao ambiente escolar estarão disponíveis no Discord do Condado.",
          "É proibido utilizar armas de fogo em locais públicos. O uso de armas de fogo será permitido apenas durante atividades de caça e sempre com a presença de um responsável. Armas brancas, como laço, arco, flecha comum e faca, poderão ser utilizadas normalmente dentro do contexto do RP.",
          "Crianças podem circular livremente durante o período do dia, respeitando as demais regras do servidor.",
          "É proibido qualquer tipo de roubo, sequestro ou prática de Dark RP envolvendo crianças, incluindo piadas ofensivas, xingamentos ou situações inadequadas.",
          "Crianças não podem possuir relacionamentos amorosos com outros jogadores, participar de atividades criminosas, matar, roubar, agredir ou ameaçar outros personagens.",
          "É proibida a participação de crianças em atividades ilegais.",
          "Crianças poderão exercer trabalhos legais somente com autorização por escrito da direção da escola.",
          "Todo personagem criança deve possuir um responsável legal. A equipe administrativa fornecerá um prazo de até 3 semanas para que seja encontrado um responsável adequado.",
          "O processo de adoção deverá ser realizado através do Judiciário do Condado.",
          "Caso a criança acumule 3 advertências gerais do Condado, perderá o direito de continuar realizando RP de criança.",
          "O personagem criança também perderá esse direito caso acumule 10 faltas escolares sem justificativa.",
        ]
      }
    ]
  },
  "laco": {
    title:"Regras de Laço",
    warrant:"",
    sections: [
      {

                heading:"Regras",

                items:[

                    "O uso do laço sem uma justificativa dentro do roleplay é estritamente proibido.",
                    "Embora seja um item disponível para todos os jogadores por fazer parte das mecânicas do RedM, ele deve ser utilizado apenas quando fizer sentido na situação vivida pelo personagem. Sempre procure usar o laço de forma coerente e que contribua para o desenvolvimento do RP, evitando seu uso apenas para obter vantagem ou atrapalhar outros jogadores."
                   
                ]
            }
    ]
  },
  "forca": {
    warrant:"",
    sections: [
       {

                heading:"Regras",

                items:[

                    "Se um líder de moonshine, chefe de bando ou responsável por qualquer atividade ilegal for investigado, tiver provas suficientes reunidas pelos Pinkertons e a punição for autorizada pela Staff, ele poderá ser condenado à forca.",
                    "O personagem executado perderá sua vida de forma permanente (CK), sendo necessário criar um novo personagem. Além disso, todos os bens conquistados com recursos obtidos dentro do servidor serão removidos, como dinheiro em banco, caixa da fazenda, armas, cavalos e demais patrimônios. Bens adquiridos por meio de doações ao servidor, como fazendas, moonshines, heranças, cavalos e carroças exclusivos, não serão afetados.",
                    "Após a execução, não será permitido criar outro personagem utilizando o mesmo nome nem retornar à mesma posição ou função exercida anteriormente dentro da família, fazenda, organização ou bando.",
                   
                ]
            },
    ]
  }
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



