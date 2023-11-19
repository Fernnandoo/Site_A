interface CursoData {
    id: number
    title: string
    content: string[]
    cursoImage: string
    turno: string
    duracao: string
    conteudo: {
        '1° ano ou semestre': string[]
        '2° ano ou semestre': string[]
        '3° ano ou semestre': string[]
        '4° ano ou semestre'?: string[]
    }
}

const cursoData: CursoData[] = [
    {
        id: 1,
        title: "Técnico em Informática",
        content: [`O curso de Técnico em Informática é uma opção popular para estudantes que
        desejam adquirir habilidades práticas relacionadas à informática. Na ETEC, esse curso
        é ministrado com um foco prático e abrange uma variedade de tópicos relacionados a
        criação de sites, banco de dados, a manutenção de computadores, redes e muito mais.`],
        cursoImage: "https://img.freepik.com/fotos-gratis/plano-de-fundo-de-programacao-com-pessoa-trabalhando-com-codigos-no-computador_23-2150010115.jpg?w=740&t=st=1695278356~exp=1695278956~hmac=34f4d7be4ecd4da857dae86b0bf5fc0a9278f4647be416e384e4bd1c43347147",
        turno: "noite",
        duracao: "3 semestres",
        conteudo: {
            '1° ano ou semestre': [
                "Linguagem, Trabalho e Tecnologia",
                "Suporte ao Usuário",
                "Operação e Configuração de Aplicativos I",
                "Gestão de Sistemas Operacionais I",
                "Sistemas de Tecnologia de Informação e Comunicação",
                "Instalação e Manutenção de Computadores",
                "Programação de Computadores I",
                "Modelagem de Banco de Dados"
            ],
            '2° ano ou semestre': [
                "Suporte em Informática",
                "Operação e Configuração de Aplicativos II",
                "Gestão de Sistemas Operacionais II",
                "Redes de Comunicação de Dados I",
                "Programação de Computadores II",
                "Suporte a Banco de Dados",
                "Planejamento do Trabalho de Conclusão de Curso (TCC) em Informática"
            ],
            '3° ano ou semestre': [
                "Inglês Instrumental",
                "Gestão de Sistemas Operacionais III",
                "Segurança Digital",
                "Redes de Comunicação de Dados II 4",
                "Desenvolvimento de Sistemas Embarcados",
                "Computação em Nuvem e Mídias Sociais",
                "Ética e Cidadania Organizacional",
                "Desenvolvimento do Trabalho de Conclusão de Curso (TCC) em Informática"
            ],
        }
    },
    {
        id: 2,
        title: "Ensino Médio com habilitação técnica em Desenvolvimento de Sistemas",
        content: [`Durante os três anos do curso, os alunos são expostos às disciplinas do Ensino Médio
        Regular, ao mesmo tempo em que se aprofundam nas matérias técnicas relacionadas
        ao Desenvolvimento de Sistemas. Esta formação visa capacitar os estudantes para
        atuarem no desenvolvimento de software, abrangendo uma variedade de linguagens,
        paradigmas e técnicas de programação, incluindo a gestão de bancos de dados e
        redes. Além disso, a habilitação técnica em desenvolvimento de sistema, não poderia
        deixar de lado os amantes de design, trazendo consigo os fundamentos e práticas do
        design digital!
        `],
        cursoImage: "https://img.freepik.com/fotos-gratis/imagem-de-close-up-de-programador-trabalhando-em-sua-mesa-no-escritorio_1098-18707.jpg?w=740&t=st=1695278250~exp=1695278850~hmac=3a3926c8309980ab08483e9c32321a3b65b4951aec3cad7cc72d4df37e966dc2",
        turno: "tarde",
        duracao: "3 anos",
        conteudo: {
            "1° ano ou semestre": [
                "Programação Web I",
                "Análise e Projeto de Sistemas",
                "Design Digital",
                "Fundamentos da Informática",
                "Técnicas de Programação e Algoritmos",
                "Banco de Dados I"
            ],
            "2° ano ou semestre": [
                "Programação Web II",
                "Banco de Dados II",
                "Desenvolvimento de Sistemas",
                "Ética e Cidadania Organizacional",
                "Programação de Aplicativos Mobile I"
            ],
            "3° ano ou semestre": [
                "Programação Web III",
                "Programação de Aplicativos Mobile II",
                "Internet, Protocolos e Segurança de Sistemas da Informação",
                "Planejamento e Desenvolvimento do Trabalho de Conclusão de Curso (TCC) em Desenvolvimento de Sistemas",
                "Qualidade e Teste de Software",
                "Sistemas Embarcados"
            ],
        }
    },
    {
        id: 3,
        title: "Técnico em Edificações",
        content: [`O Técnico em edificações será uma peça fundamental para o desenvolvimento das
        cidades. Desde o início de uma obra até sua finalização, o profissional deverá estar
        antenado em cada parte da obra, observando, instruindo e participando para que tudo
        saia como planejado e dentro das normas.
        `],
        cursoImage: "https://img.freepik.com/fotos-gratis/homem-com-os-bracos-cruzados-em-utensilios-domesticos_23-2148923093.jpg?w=826&t=st=1695278769~exp=1695279369~hmac=fa511dbc195fed0dcd14ddd2c7d82f07f7944e6c9127d23c4857495972628d0d",
        turno: "noite",
        duracao: "3 semestres",
        conteudo: {
            '1° ano ou semestre': [
                "Estudos de Viabilidade e Planejamento Técnico e Econômico na Construção Civil I",
                "Desenho Básico Aplicado à Edificações",
                "Tecnologia dos Materiais de Construção Civil I",
                "Técnicas e Práticas Construtivas I",
                "Linguagem, Trabalho e Tecnologia",
                "Estudos de Solos e Fundações",
                "Informática Aplicada à Construção Civil I",
                "Instalações Prediais – Hidráulica"
            ],
            '2° ano ou semestre': [
                "Estudos de Viabilidade e Planejamento Técnico e Econômico na Construção Civil II",
                "Elaboração e Desenvolvimento de Projetos Técnicos I",
                "Tecnologia dos Materiais de Construção Civil II",
                "Técnicas e Práticas Construtivas II",
                "Planejamento do Trabalho de Conclusão de Curso (TCC) em Edificações",
                "Topografia Aplicada à Construção Civil",
                "Informática Aplicada à Construção Civil II",
                "Instalações Prediais - Elétricas e Especiais I"
            ],
            '3° ano ou semestre': [
                "Controle de Obras na Construção Civil",
                "Elaboração e Desenvolvimento de Projetos Técnicos II",
                "Tecnologia dos Materiais de Construção Civil III",
                "Técnicas e Práticas Construtivas III",
                "Desenvolvimento do Trabalho de Conclusão de Curso (TCC) em Edificações",
                "Ética e Cidadania Organizacional",
                "Estruturas na Construção Civil",
                "Instalações Prediais - Elétricas e Especiais II",
                "Inglês Instrumental"
            ],
        }
    },
    {
        id: 4,
        title: "Técnico em Enfermagem",
        content: [`Um técnico de enfermagem desempenha um papel crucial na equipe de saúde,
        oferecendo assistência direta aos pacientes em diversos ambientes, como hospitais,
        clínicas, asilos e consultórios médicos. Suas responsabilidades abrangem uma
        variedade de tarefas essenciais para garantir o bem-estar dos pacientes e o bom
        funcionamento das unidades de saúde. Esses profissionais auxiliam nos procedimentos
        médicos, preparando instrumentos e materiais, administrando medicamentos sob a
        supervisão de enfermeiros ou médicos, além de realizar curativos e inserção de
        sondas, quando necessário.
        `],
        cursoImage: "https://img.freepik.com/fotos-gratis/enfermeira-negra-em-seu-espaco-de-trabalho_52683-100580.jpg?w=740&t=st=1695278964~exp=1695279564~hmac=41ded7f81ec2ab32823a0ca800ce5c67da5e91656cb7f6dc83742f7df62ac8dd",
        turno: "manhã & tarde",
        duracao: "4 semestres",
        conteudo: {
            '1° ano ou semestre': [
                "Semiotécnica em Enfermagem",
                "Fundamentos de Enfermagem",
                "Saúde Coletiva I",
                "Proteção e Prevenção em Enfermagem",
                "Enfermagem em Clínica Médica e Cirúrgica I",
                "Enfermagem em Centro Cirúrgico",
                "Assistência à Saúde da Mulher e da Criança I"
            ],
            '2° ano ou semestre': [
                "Procedimentos de Enfermagem",
                "Saúde Coletiva II",
                "Ações de Enfermagem em Saúde Coletiva",
                "Enfermagem em Clínica Médica e Cirúrgica II",
                "Enfermagem em Centro Cirúrgico e Central de Material",
                "– Assistência à Saúde da Mulher e da Criança II",
                "Enfermagem Gerontológica e Geriátrica",
                "Ações de Enfermagem no Cuidado ao Idoso",
                "Primeiros Socorros",
                "Ética e Gestão em Enfermagem",
                "Linguagem, Trabalho e Tecnologia"
            ],
            '3° ano ou semestre': [
                "Saúde e Segurança Ocupacional",
                "Vigilância em Saúde",
                "Enfermagem em UTI e Unidades Especializadas",
                "Enfermagem em Saúde Mental",
                "Enfermagem em Urgência e Emergência",
                "Gestão em Saúde",
                "Aplicativos Informatizados na Enfermagem",
                "Planejamento do Trabalho de Conclusão de Curso (TCC) em Enfermagem"
            ],
            '4° ano ou semestre': [
                "Ações de Saúde e Segurança Ocupacional",
                "Ações de Enfermagem de Vigilância em Saúde",
                "Assistência de Enfermagem em UTI e Unidades Especializadas",
                "Assistência de Enfermagem em Saúde Mental",
                "Assistência de Enfermagem em Urgência e Emergência",
                "Enfermagem Domiciliária",
                "Enfermagem em Oncologia",
                "Relações Humanas no Trabalho",
                "Desenvolvimento do Trabalho de Conclusão de Curso (TCC) em Enfermagem"
            ],
        }
    },
    {
        id: 5,
        title: "Técnico em Administração",
        content: [`O técnico em administração é o profissional responsável por auxiliar na administração
        de empresas como um todo, executando diversas tarefas administrativas. Ele é versátil
        e pode atuar em áreas como comunicação, marketing, gestão de pessoas,
        planejamento, vendas, logística e muitas outras`],
        cursoImage: "https://img.freepik.com/fotos-gratis/o-inspetor-financeiro-e-o-secretario-fazem-relatorio-calculam-ou-verificam-o-saldo-documento-de-verificacao-do-inspetor-do-servico-de-receita-federal-conceito-de-auditoria_1423-126.jpg?w=740&t=st=1695279208~exp=1695279808~hmac=c7d528dbbbfecf40c3fed57d4cc81f79eeef8fc74c31ed51a9070ed6850e4169",
        turno: "noite",
        duracao: "3 semestres",
        conteudo: {
            '1° ano ou semestre': [
                "Linguagem, Trabalho e Tecnologia",
                "Planejamento Empresarial",
                "Planejamento e Organização de Rotinas Administrativas",
                "Estudos e Desenvolvimento das Ações de Marketing",
                "Cálculos Financeiros e Estatísticos",
                "Ética e Cidadania Organizacional",
                "Aplicativos Informatizados",
                "Estudos de Economia e Mercado",
                "Planejamento e Organização de Rotinas de Departamento Pessoal"
            ],
            '2° ano ou semestre': [
                "Planejamento de Marketing Institucional",
                "Legislação Empresarial",
                "Administração de Recursos Humanos",
                "Custos, Processos e Operações Contábeis",
                "Planejamento dos Processos Comerciais",
                "Desenvolvimento de Modelos de Negócios",
                "Planejamento do Trabalho de Conclusão de Curso (TCC) em Administração"
            ],
            '3° ano ou semestre': [
                "Administração Financeira e Orçamentária",
                "Processos Logísticos Empresariais",
                "Administração da Produção e Serviços",
                "Tecnologia da Informação Aplicada a Administração",
                "Estudos da Administração Pública",
                "Estudos de Comércio Internacional",
                "Inglês Instrumental",
                "Desenvolvimento do Trabalho de Conclusão de Curso (TCC) em Administração"
            ],
        }
    },
    {
        id: 6,
        title: "Ensino Médio com habilitação técnica em Administração",
        content: [`O estudante neste curso integrado irá desenvolver as habilidades necessárias para
        exercer sua função nas mais diversas organizações, em setores como: compras,
        produção, vendas e Recursos Humanos. Independente da área que o estudante o
        seguir estará capacitado para a administração de: clientes, funcionários,
        empreendimentos, finanças e outras. Além disso, o conteúdo técnico está alinhado com
        os componentes curriculares do ensino médio, então ele também vai aprender este
        conteúdo nas atividades práticas`],
        cursoImage: "https://img.freepik.com/fotos-gratis/resultados-do-local-de-trabalho-relatorio-de-relatorio-profissional-durante_1418-61.jpg?w=740&t=st=1695279419~exp=1695280019~hmac=fbd3f3d41c6b2572e1964ec934352cbaaa95aef8cb515cdea28a5fe32e1495e2",
        turno: "tarde",
        duracao: "3 anos",
        conteudo: {
            '1° ano ou semestre': [
                "Desenvolvimento das Ações de Marketing e dos Processos Comerciais",
                "Legislação Empresarial",
                "Planejamento e Organização de Rotinas Administrativas",
                "Projeto Integrador I"
            ],
            '2° ano ou semestre': [
                "Projeto Integrador II",
                "Aplicativos informatizados",
                "Custos, Processos e Operações contábeis",
                "Planejamento e Organização de Rotinas de Departamento Pessoal"
            ],
            '3° ano ou semestre': [
                "Administração da Produção e Serviços",
                "Administração de Recursos Humanos",
                "Administração Financeira e Orçamentária",
                "Desenvolvimento de Modelos de Negócios",
                "Estudos da Administração Pública",
                "Estudos de Economia, Mercado e de Comércio Internacional",
                "Ética e Cidadania organizacional",
                "Planejamento e Desenvolvimento do Trabalho de Conclusão de Curso (TCC) em Administração",
                "Processos Logísticos Empresariais",
                "Tecnologia da Informação em Administração"
            ],
        }
    },
    {
        id: 7,
        title: "Técnico em Turismo",
        content: [`O foco do curso é apresentar técnicas para o aluno aprender a recepcionar e entreter
        turistas e visitantes. As principais disciplinas são relacionadas a recreação,
        atendimento durante a hospedagem, organização de eventos, criação de roteiros
        turísticos e guiamento de turistas no estado de São Paulo. O estudante terá mais
        conhecimento sobre história e geografia para informar a origem de atrações turísticas e
        os aspectos gerais das regiões visitadas. Também aprenderá técnicas de comunicação
        oral e escrita, além de inglês e espanhol, pois, trata-se de um curso em que a
        comunicação é essencial`],
        cursoImage: "https://img.freepik.com/fotos-gratis/mulher-de-conteudo-usando-papel-mapa-e-smartphone-ao-ar-livre_1262-18824.jpg?t=st=1695279603~exp=1695280203~hmac=846d3c61091621d53ae519396821e9f36be8d64590b175e80a40873229c76096",
        turno: "noite",
        duracao: "3 semestres",
        conteudo: {
            '1° ano ou semestre': [
                "Linguagem, Trabalho e Tecnologia",
                "Ética e Cidadania Organizacional",
                "Aplicativos Informatizados",
                "Fundamentos do Turismo",
                "Atendimento em Serviços de Hospitalidade",
                "Geografia e Mobilidade Aplicadas ao Turismo Regional",
                "Organização de Atividades Recreativas"
            ],
            '2° ano ou semestre': [
                "História Aplicada ao Turismo Regiona",
                "Técnicas de Agenciamento",
                "Meios de Hospedagem",
                "Eventos e Turismo Regional",
                "Gastronomia Regional",
                "Espanhol Instrumental I",
                "Planejamento do Trabalho de Conclusão de Curso (TCC) em Turismo Receptivo",
                "Inglês Instrumental"
            ],
            '3° ano ou semestre': [
                "Gestão Empreendedora em Turismo",
                "Manifestações Culturais no Estado de São Paulo",
                "Turismo e Meio Ambiente",
                "Teoria e Técnica Profissional do Guia de Turismo Regional",
                "Espanhol Instrumental II",
                "Segurança e Primeiros Socorros",
                "Desenvolvimento do Trabalho de Conclusão de Curso (TCC) em Turismo Receptivo",
                "Criatividade, Inovação e Tecnologia em Turismo Receptivo",
                "Roteirização Turística"
            ],
        }
    },
    {
        id: 8,
        title: "Ensino Médio com ênfase em ciências humanas e sociais aplicadas",
        content: [`Durante os três anos do Ensino Médio, serão inclusas as disciplinas técnicas relacionadas às
        Ciências Humanas e Sociais, onde os estudantes terão a oportunidade de compreender e
        analisar as complexidades da experiência humana, cultura, comportamento, entre outros
        diversos assuntos. Contudo, este curso oferece uma preparação ao estudante para uma
        variedade de carreiras, tais como, jornalismo, educação, gestão cultural, etc. sendo uma ótima
        opção para aqueles que pretendem seguir nesse ramo.`],
        cursoImage: "https://img.freepik.com/fotos-gratis/conceito-de-midia-de-negocios-de-espaco-de-trabalho_53876-139674.jpg?w=740&t=st=1695279865~exp=1695280465~hmac=61056b0cc46b72c0713fa685d0d9d6a460af2f80c8465bc96f2028e7350cb221",
        turno: "manhã",
        duracao: "3 anos",
        conteudo: {
            '1° ano ou semestre': [
                "Língua Estrangeira Moderna – Inglês e Comunicação Profissional",
                "Língua Portuguesa, Literatura e Comunicação Profissional",
                "Arte",
                "Educação Física",
                "Matemática",
                "Filosofia",
                "Sociologia",
                "Geografia",
                "História"
            ],
            '2° ano ou semestre': [
                "Língua Estrangeira Moderna – Inglês e Comunicação Profissional",
                "Língua Portuguesa, Literatura e Comunicação Profissional",
                "Educação Física",
                "Matemática",
                "Física",
                "Química",
                "Biologia",
                "Geografia",
                "História"
            ],
            '3° ano ou semestre': [
                "Língua Estrangeira Moderna – Inglês e Comunicação Profissional",
                "Língua Portuguesa, Literatura e Comunicação Profissional",
                "Língua Estrangeira Moderna – Espanhol",
                "Matemática",
                "Física",
                "Química",
                "Biologia",
            ],
        }
    },
    {
        id: 9,
        title: "Ensino Médio com ênfase em matemática e suas técnologias",
        content: [`O Ensino Médio com ênfase em Matemática e suas tecnológicas tem como principal objetivo
        fornecer uma formação mais aprofundada em Matemática aos alunos que serão ingressados.
        Além disso, neste curso, utiliza-se a tecnologia como ferramenta de aprendizagem e inclui
        tópicos avançados, como cálculo, geometria analítica, estatísticas, probabilidade, entre outros. `],
        cursoImage: "https://img.freepik.com/vetores-gratis/mao-desenhada-formulas-cientificas-na-lousa_23-2148496321.jpg?w=740&t=st=1695279968~exp=1695280568~hmac=8ee5977f09840f0f61e7faf1630c1cca43c0afc64a7eb4159183071c9ab759ed",
        turno: "manhã",
        duracao: "3 anos",
        conteudo: {
            '1° ano ou semestre': [
                "Língua Inglesa",
                "Língua Portuguesa",
                "Arte",
                "Educação Física",
                "Matemática",
                "Física",
                "Química",
                "Filosofia",
                "Sociologia"
            ],
            '2° ano ou semestre': [
                "Língua Inglesa",
                "Língua Portuguesa",
                "Educação Física",
                "Matemática",
                "Física",
                "Química",
                "Geografia",
                "História",
            ],
            '3° ano ou semestre': [
                "Língua Inglesa",
                "Língua Portuguesa",
                "Língua Espanhola",
                "Matemática",
                "Biologia",
                "Geografia",
                "História"
            ]
        }
    }
]

export default cursoData;
