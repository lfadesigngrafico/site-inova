export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  categories: string[];
  content: string[];
  authorReview?: string;
  url?: string;
}

export const ALL_BLOG_POSTS: BlogPostItem[] = [
  {
    id: 'giardia-canina',
    slug: 'giardia-canina',
    title: 'Giárdia em cães: descubra os sintomas antes que o problema avance.',
    date: '2 de setembro de 2026',
    readTime: '4 min de leitura',
    excerpt:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos. Entenda como a giárdia em cães age no intestino, por que a reinfecção é tão comum e quais sinais pedem avaliação veterinária.',
    image:
      'https://inovaveterinaria.com.br/wp-content/uploads/2026/09/giardia-canina-inova-hospital-gs2-marketing-capa-redimensionado.png',
    categories: ['Cachorros', 'Cuidados Preventivos'],
    content: [
      'A giárdia em cães é uma das infecções intestinais mais frequentes e desafiadoras na clínica veterinária. Causada pelo protozoário Giardia duodenalis, ela se instala no intestino delgado do animal, prejudicando a absorção de nutrientes vitais.',
      'Os sintomas mais comuns incluem episódios recorrentes de diarreia pastosa ou líquida (muitas vezes com odor forte e coloração esverdeada ou acinzentada), vômitos ocasionais, perda de peso progressiva e apatia.',
      'A transmissão se dá por via fecal-oral, através da ingestão de água, alimentos ou contato com solo contaminado por cistos microscópicos resistentes eliminados nas fezes de outros animais.',
      'O diagnóstico precoce realizado através do exame coproparasitológico é crucial para iniciar o protocolo antiparasitário adequado. A higienização rigorosa do ambiente do pet com produtos à base de amônia quaternária é indispensável para evitar o ciclo de reinfecção familiar.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/giardia-canina/',
  },
  {
    id: 'especialidades-e-exames',
    slug: 'especialidades-e-exames',
    title: 'Especialidades veterinárias: quando procurar um especialista para seu pet',
    date: '26 de agosto de 2026',
    readTime: '5 min de leitura',
    excerpt:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h. Entenda o que são as especialidades veterinárias, quando o seu pet precisa de investigação aprofundada e quais exames sustentam o diagnóstico seguro.',
    image:
      'https://inovaveterinaria.com.br/wp-content/uploads/2026/08/especialidades-e-exames-inova-gs2-marketing-capa-2.png',
    categories: ['Especialidades', 'Exames', 'Aves', 'Gatos', 'Cachorros'],
    content: [
      'Assim como na medicina humana, a medicina veterinária evoluiu expressivamente com áreas especializadas que proporcionam diagnósticos mais precisos e tratamentos direcionados para patologias complexas.',
      'Especialidades como Cardiologia, Ortopedia, Dermatologia, Neurologia, Nefrologia, Oncologia e Oftalmologia contam com profissionais dedicados exclusivamente ao estudo dessas áreas.',
      'Quando sintomas persistem após uma consulta clínica geral — como claudicação contínua, alterações respiratórias ou cardíacas, convulsões ou lesões cutâneas crônicas —, o encaminhamento a um especialista é essencial.',
      'A Inova conta com estrutura completa para realização de exames complementares no próprio hospital, como ecocardiograma, ultrassonografia com doppler, raio-x digital e exames laboratoriais rápidos.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/especialidades-e-exames/',
  },
  {
    id: 'leishmaniose',
    slug: 'leishmaniose',
    title: 'Leishmaniose em cães: sintomas, transmissão e como proteger seu pet',
    date: '19 de agosto de 2026',
    readTime: '5 min de leitura',
    excerpt:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h. Saiba como identificar um cachorro com leishmaniose, entenda a transmissão e veja como proteger seu pet com prevenção eficaz.',
    image:
      'https://inovaveterinaria.com.br/wp-content/uploads/2023/04/leishmaniose-inova-gs2-marketing-capa.png',
    categories: ['Cachorros', 'Doenças Infecciosas'],
    content: [
      'A Leishmaniose Visceral Canina é uma zoonose grave e crônica causada pelo protozoário Leishmania infantum, transmitida principalmente pela picada da fêmea infectada do mosquito-palha (flebotomíneo).',
      'Os sinais clínicos são variados e incluem lesões dermatológicas como descamações ao redor dos olhos e orelhas, crescimento exagerado das unhas (onicogrifose), perda de peso, febre e alterações renais.',
      'O uso de coleiras repelentes à base de deltametrina, a vacinação profilática recomendada pelo veterinário e a higienização de quintais e jardins (eliminando matéria orgânica em decomposição) são as principais formas de proteção.',
      'Com o diagnóstico precoce e tratamentos modernos aprovados pelo Ministério da Saúde e MAPA, o animal portador pode alcançar controle clínico efetivo e excelente qualidade de vida.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/leishmaniose/',
  },
  {
    id: 'cinomose',
    slug: 'cinomose',
    title: 'Cinomose: guia completo para responsáveis de cães',
    date: '5 de agosto de 2026',
    readTime: '6 min de leitura',
    excerpt:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h. Uma das doenças infecciosas mais graves dos cães, a cinomose exige atenção imediata e vacinação em dia para proteger a saúde do seu cão.',
    image:
      'https://inovaveterinaria.com.br/wp-content/uploads/2023/06/reo-cinomose-gs2-marketing-inova-capa.png',
    categories: ['Cachorros', 'Doenças Infecciosas'],
    content: [
      'A cinomose é uma virose extremamente contagiosa que afeta cães de todas as idades, principalmente filhotes que ainda não completaram o protocolo vacinal inicial.',
      'O vírus acomete múltiplos sistemas do organismo: respiratório (secreção nasal e tosse), digestivo (diarreia e vômito) e neurológico (tremores musculares, espasmos involuntários e convulsões).',
      'O tratamento é de suporte e visa controlar infecções bacterianas secundárias, hidratar o paciente e atenuar danos neurológicos em internação 24h.',
      'A prevenção absoluta é a imunização correta através de vacinas polivalentes (V8 ou V10) aplicadas sob rigoroso controle de temperatura e avaliação prévia pelo médico veterinário.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/cinomose/',
  },
  {
    id: 'doenca-do-carrapato',
    slug: 'doenca-do-carrapato',
    title: 'Doença do carrapato: guia completo para responsáveis',
    date: '29 de julho de 2026',
    readTime: '5 min de leitura',
    excerpt:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h. A erliquiose e a babesiose são ameaças silenciosas transmitidas pelo carrapato marrom do cão. Entenda sintomas e tratamentos.',
    image:
      'https://inovaveterinaria.com.br/wp-content/uploads/2023/07/doenca-do-carrapato-inova-gs2-marketing-capa.png',
    categories: ['Cachorros', 'Parasitas'],
    content: [
      'A doença do carrapato é um termo genérico que engloba duas enfermidades comuns causadas por parasitas sanguíneos: a Erliquiose (bactéria Ehrlichia canis) e a Babesiose (protozoário Babesia canis).',
      'Ambas são transmitidas durante a fixação e alimentação do carrapato marrom (Rhipicephalus sanguineus). Os sinais incluem febre, petéquias (manchas vermelhas na pele ou gengiva), anemia severa e fraqueza.',
      'O diagnóstico é confirmado por hemograma completo e testes sorológicos ou PCR. O tratamento exige antibioticoterapia específica e acompanhamento periódico da contagem de plaquetas.',
      'A melhor profilaxia é o uso contínuo de antiparasitários modernos (comprimidos mastigáveis, coleiras ou pipetas tópicas) prescritos pelo veterinário.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/doenca-do-carrapato/',
  },
  {
    id: 'parvovirose',
    slug: 'parvovirose',
    title: 'Parvovirose: entenda o que é, como evitar e tratar',
    date: '22 de julho de 2026',
    readTime: '4 min de leitura',
    excerpt:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h. A parvovirose é altamente contagiosa e pode levar à desidratação rápida. Veja como identificar os primeiros sinais de urgência.',
    image:
      'https://inovaveterinaria.com.br/wp-content/uploads/2026/01/parvovirose-inova-hospital-veterinario-gs2-marketing-capa.png',
    categories: ['Cachorros', 'Emergências', 'Doenças Infecciosas'],
    content: [
      'O parvovírus canino ataca as células de rápida multiplicação das vilosidades intestinais e da medula óssea, causando destruição da mucosa digestiva.',
      'Caracteriza-se por diarreia com sangue vivo de odor fétido e característico, vômitos contínuos, febre alta e desidratação aguda, especialmente em filhotes de 6 semanas a 6 meses.',
      'Por se tratar de um quadro que evolui em poucas horas, a internação imediata em isolamento hospitalar 24h é mandatória para fluidoterapia venosa e antibióticos de amplo espectro.',
      'A vacinação completa é a única forma segura de proteger o filhote, que não deve passear na rua ou ter contato com cães não vacinados antes do término das doses.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/parvovirose/',
  },
  {
    id: 'doencas-infecciosas',
    slug: 'doencas-infecciosas',
    title: 'Doenças infecciosas em cães e gatos: guia completo para responsáveis',
    date: '15 de julho de 2026',
    readTime: '5 min de leitura',
    excerpt:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h. Doenças infecciosas podem ser prevenidas com protocolos vacinais individualizados e exames de rotina.',
    image:
      'https://inovaveterinaria.com.br/wp-content/uploads/2026/06/doencas-infecciosas-em-caes-e-gatos-inova-gs2-marketing-capa.jpg',
    categories: ['Cachorros', 'Gatos', 'Cuidados Preventivos'],
    content: [
      'Cães e gatos estão expostos a diversos agentes biológicos no dia a dia. Em felinos, vírus como FIV (Imunodeficiência Felina), FeLV (Leucemia Felina) e Rinotraqueíte exigem vigilância constante.',
      'Nos cães, além das viroses mais conhecidas, a Leptospirose é uma zoonose bacteriana transmitida pela urina de roedores que acomete fígado e rins.',
      'A consulta preventiva anual ou semestral permite atualizar a imunização, checar sorologias e instituir métodos de barreira adequados ao perfil de cada animal.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/doencas-infecciosas/',
  },
  {
    id: 'cavalier-king-charles-spaniel',
    slug: 'cavalier-king-charles-spaniel',
    title: 'Cavalier King Charles Spaniel: guia completo para tutores',
    date: '8 de julho de 2026',
    readTime: '4 min de leitura',
    excerpt:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h. O temperamento afetuoso, os cuidados com a saúde cardíaca e as principais particularidades dessa raça encantadora.',
    image:
      'https://inovaveterinaria.com.br/wp-content/uploads/2026/07/cavalier-king-charles-spaniel-inova-hospital-veterinario-gs2-marketing-capa-v2.png',
    categories: ['Cachorros', 'Raças'],
    content: [
      'O Cavalier King Charles Spaniel é conhecido por sua doçura, olhos expressivos e porte compacto, sendo um companheiro excepcional para lares de todos os portes.',
      'A raça possui predisposição genética conhecida para a Doença da Valva Mitral (endocardiose mitral), necessitando de ausculta cardíaca periódica desde jovem e ecocardiograma preventivo.',
      'Seus longos pelos sedosos demandam escovação regular, e suas orelhas caídas requerem limpeza e secagem criteriosa após o banho para evitar otites bacterianas ou fúngicas.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/cavalier-king-charles-spaniel/',
  },
  {
    id: 'sintomas-e-emergencias',
    slug: 'sintomas-e-emergencias',
    title: 'Sintomas em cachorro: quando ir para a emergência',
    date: '1 de julho de 2026',
    readTime: '5 min de leitura',
    excerpt:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h. Reconheça rapidamente os sinais que indicam risco à vida do animal e exigem pronto-socorro imediato.',
    image:
      'https://inovaveterinaria.com.br/wp-content/uploads/2026/05/sintomas-e-emergencias-veterinarias-inova-hospital-veterinario-gs2-marketing-capa-scaled.jpg',
    categories: ['Emergências', 'Cachorros', 'Gatos'],
    content: [
      'Em situações críticas, cada minuto conta. Dificuldade severa para respirar (língua arroxeada ou respiração ofegante contínua com esforço abdominal) é sinal de emergência respiratória absoluta.',
      'Inchaço súbito na barriga com tentativas infrutíferas de vomitar pode indicar Síndrome de Dilatação Vólvulo-Gástrica (torção gástrica), uma urgência cirúrgica de gravidade extrema.',
      'Outros sinais vitais de perigo incluem convulsões com duração superior a 2 minutos, perda repentina de consciência, sangramentos que não estancam e incapacidade de urinar.',
      'A Inova Hospital Veterinário mantém atendimento presencial 24 horas por dia, 7 dias por semana, com equipe de intensivistas sempre pronta para receber o pet.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/sintomas-e-emergencias/',
  },
  {
    id: 'cachorro-com-diarreia',
    slug: 'cachorro-com-diarreia',
    title: 'Cachorro com diarreia e sangue: entenda as causas mais comuns e o que fazer',
    date: '24 de junho de 2026',
    readTime: '4 min de leitura',
    excerpt:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h. Sangue nas fezes nunca deve ser ignorado. Conheça as principais causas infecciosas, alimentares e parasitárias.',
    image:
      'https://inovaveterinaria.com.br/wp-content/uploads/2026/06/cachorro-com-diarreia-inova-veterinaria-gs2-marketing-capa-scaled.jpg',
    categories: ['Cachorros', 'Emergências'],
    content: [
      'A presença de sangue nas fezes pode se manifestar de duas formas: hematoquezia (sangue vivo, indicando problema no intestino grosso, reto ou ânus) ou melena (fezes escuras e pastosas, indicando sangramento no trato digestivo superior).',
      'As causas variam desde ingestão de ossos e corpos estranhos perfurantes até gastroenterite hemorrágica, verminoses graves e viroses.',
      'Nunca medique o cão por conta própria com remédios de uso humano, pois substâncias comuns podem agravar ulcerações e causar intoxicação letal.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/cachorro-com-diarreia/',
  },
  {
    id: 'cachorro-sintomas-de-envenenamento',
    slug: 'cachorro-sintomas-de-envenenamento',
    title: 'Cachorro envenenado: sinais que exigem atendimento imediato',
    date: '17 de junho de 2026',
    readTime: '5 min de leitura',
    excerpt:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h. Salivação excessiva, tremores e pupilas dilatadas podem indicar intoxicação. Saiba como agir nos primeiros momentos.',
    image:
      'https://inovaveterinaria.com.br/wp-content/uploads/2025/03/cachorro-sintomas-de-envenenamento-inova-hospital-veterinario-gs2-marketing-capa-scaled.jpg',
    categories: ['Emergências', 'Cachorros'],
    content: [
      'A ingestão acidental de raticidas, inseticidas, medicamentos humanos, plantas tóxicas ou alimentos proibidos (como chocolate e uvas) pode desencadear intoxicação aguda.',
      'Os sintomas costumam surgir rapidamente: salivação abundante (sialorreia), pupilas contraídas ou dilatadas, tremores involuntários, vômitos repentinos e instabilidade ao caminhar.',
      'Não force o pet a ingerir leite, óleo ou água oxigenada sem orientação médica, pois isso pode agravar queimaduras esofágicas ou causar pneumonia por aspiração.',
      'Leve o animal imediatamente à emergência 24h e, se possível, leve a embalagem ou foto do produto ingerido para que a equipe utilize o antídoto correto.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/cachorro-sintomas-de-envenenamento/',
  },
  {
    id: 'convulsao-em-cachorro',
    slug: 'convulsao-em-cachorro',
    title: 'Convulsão em cachorros: como agir e quando agir',
    date: '10 de junho de 2026',
    readTime: '4 min de leitura',
    excerpt:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h. Presenciar uma crise convulsiva é assustador. Entenda como proteger o cão durante a crise e quando procurar a emergência.',
    image:
      'https://inovaveterinaria.com.br/wp-content/uploads/2022/06/convulsao-em-cachorro-inova-gs2-marketing-capa.png',
    categories: ['Emergências', 'Cachorros', 'Neurologia'],
    content: [
      'A crise convulsiva decorre de uma descarga elétrica anormal e súbita no cérebro. O animal perde a consciência, apresenta rigidez muscular, movimentos de pedalagem e pode salivar ou urinar involuntariamente.',
      'Mantenha a calma e afaste móveis ou objetos pontiagudos para evitar que o cão se machuque. Nunca coloque a mão dentro da boca do animal — cães não engolem a própria língua e podem morder por reflexo involuntário.',
      'Após o término da crise, o pet entrará no período pós-ictal, podendo parecer confuso ou temporariamente cego. Anote a duração da crise e busque avaliação neurológica imediata.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/convulsao-em-cachorro/',
  },
  {
    id: 'cachorro-corrida',
    slug: 'cachorro-de-corrida',
    title: 'Cachorro de corrida: raças, características e cuidados necessários',
    date: '27 de maio de 2025',
    readTime: '4 min de leitura',
    excerpt:
      'Cachorro de corrida é aquele que possui estrutura física e comportamento voltados para alta velocidade, resistência atlética e agilidade. Conheça as principais raças e cuidados.',
    image: '/images/blog/cachorro-corrida.jpg',
    categories: ['Cachorros', 'Raças', 'Cuidados'],
    content: [
      'Cães de corrida, como o Greyhound, Whippet, Galgo Espanhol e Saluki, destacam-se por sua anatomia aerodinâmica, coração potente e musculatura esguia e desenvolvida.',
      'No entanto, animais atletas necessitam de acompanhamento veterinário ortopédico e cardiológico rigoroso. A alimentação deve ser balanceada e rica em nutrientes específicos para proteger articulações e tendões.',
      'Além disso, é fundamental realizar aquecimento gradual, monitorar a temperatura corporal (especialmente em dias quentes) e manter as vacinas e exames preventivos sempre em dia.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/cachorro-de-corrida/',
  },
  {
    id: 'papilomatose-canina',
    slug: 'papilomatose-canina',
    title: 'Papilomatose canina: o que é, causas, prevenção e tratamento',
    date: '20 de maio de 2025',
    readTime: '5 min de leitura',
    excerpt:
      'A papilomatose canina é uma infecção viral contagiosa entre cães, causada pelo papilomavírus canino, que provoca o surgimento de verrugas características na mucosa bucal e pele.',
    image: '/images/blog/papilomatose-canina.jpg',
    categories: ['Cachorros', 'Doenças Infecciosas'],
    content: [
      'A papilomatose canina é provocada pelo papilomavírus canino (CPV-1), manifestando-se frequentemente na cavidade oral, lábios, gengivas e mucosas de filhotes e cães jovens.',
      'O contágio ocorre através do contato direto com outros pets infectados ou objetos compartilhados, como brinquedos e tigelas de água em parques ou creches.',
      'O diagnóstico deve ser feito por um médico veterinário. Em muitos casos, o sistema imunológico combate o vírus com o tempo, mas intervenções clínicas, cauterizações ou uso de imunoestimulantes podem ser necessários se houver desconforto para se alimentar.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/papilomatose-canina/',
  },
  {
    id: 'berne-em-cachorro',
    slug: 'berne-em-cachorro',
    title: 'Berne em cachorro: o que é, sintomas, tratamento e prevenção',
    date: '13 de maio de 2025',
    readTime: '4 min de leitura',
    excerpt:
      'A berne é uma infestação parasitária causada por larvas da mosca Dermatobia hominis, que se alojam sob a pele do pet e provocam dor e inflamação.',
    image: '/images/blog/berne-em-cachorro.jpg',
    categories: ['Cachorros', 'Parasitas'],
    content: [
      'A miíase forunculóide (popularmente chamada de berne) surge quando a larva da mosca se desenvolve no tecido subcutâneo do cão, formando um nódulo avermelhado com um orifício central por onde a larva respira.',
      'Os sinais incluem lambedura constante do local, inquietação, dor ao toque, secreção serossanguinolenta e inchaço visível.',
      'Nunca tente espremer a berne de forma caseira, pois a ruptura da larva pode causar choque anafilático ou infecções bacterianas graves. O procedimento de extração e a prescrição de antiparasitários orais ou tópicos devem ser conduzidos exclusivamente por um veterinário.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/berne-em-cachorro/',
  },
  {
    id: 'cachorro-com-olho-vermelho',
    slug: 'cachorro-com-olho-vermelho',
    title: 'Cachorro com olho vermelho: sinais de alerta que você deve observar',
    date: '3 de junho de 2026',
    readTime: '4 min de leitura',
    excerpt:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h. Olho vermelho pode indicar desde uma conjuntivite simples até glaucoma ou úlcera de córnea.',
    image:
      'https://inovaveterinaria.com.br/wp-content/uploads/2026/06/cachorro-com-olho-vermelho-inova-hospital-veterinario-capa.png',
    categories: ['Cachorros', 'Oftalmologia'],
    content: [
      'Alterações oculares em animais de estimação requerem cuidado imediato para preservar a visão. Olhos vermelhos, lacrimejamento excessivo ou piscadas frequentes (blefaroespasmo) são queixas comuns.',
      'O teste com colírio de fluoresceína é fundamental para identificar úlceras de córnea antes de aplicar qualquer medicação.',
      'Nunca utilize colírios contendo corticoides sem prescrição formal do médico veterinário, pois eles podem perfurar a córnea caso haja lesão ulcerada.',
    ],
    authorReview:
      'Conteúdo revisado pela equipe médica da Inova Hospital Veterinário 24h, composta por médicos-veterinários com formação em clínica geral, vacinação e cuidados preventivos.',
    url: 'https://inovaveterinaria.com.br/cachorro-com-olho-vermelho/',
  },
];
