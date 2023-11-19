import { IMessage } from "minimal-chatbot";


const messages: IMessage[] = [
  {
    id: "about",
    body: "O Connect Vestibulinho é uma plataforma que visa informar os potenciais alunos",
    sender: "bot",
    options: [
      {
        body: "Sobre a Windowally",
        nextMessageId: "services"
      },
      {
        body: "Sobre você",
        nextMessageId: "aboutBot"
      },
      {
        body: "Obrigado",
        nextMessageId: "thanks"
      },

    ]
  },
  {
    id: "other",
    body: "Claro, o que você deseja saber?",
    sender: "bot",
    options: [
      {
        body: "Sobre os Blogs",
        nextMessageId: "blog"
      },
      {
        body: "Sobre o cronograma",
        nextMessageId: "crono"
      },
      {
        body: "Sobre as provas",
        nextMessageId: "prova"
      },
      {
        body: "Sobre os cursos",
        nextMessageId: "curso"
      },
      {
        body: "Sobre a galeria",
        nextMessageId: "galeria"
      },
    ]
  },
  {
    id: "blog",
    body: "Em Blog, você confere o que a ETEC posta de uma forma divertida",
    sender: "bot",
    options: [
      {
        body: "Sobre o cronograma",
        nextMessageId: "crono"
      },
      {
        body: "Sobre as provas",
        nextMessageId: "prova"
      },
      {
        body: "Sobre os cursos",
        nextMessageId: "curso"
      },
      {
        body: "Sobre a galeria",
        nextMessageId: "galeria"
      },
      {
        body: "Obrigado",
        nextMessageId: 'thanks'
      },
    ]
  },
  {
    id: "crono",
    body: "Em Cronograma, você pode conferir as datas relacionadas ao Vestibulinho, fica ligado!",
    sender: "bot",
    options: [
      {
        body: "Sobre os Blogs",
        nextMessageId: "blog"
      },
      {
        body: "Sobre as provas",
        nextMessageId: "prova"
      },
      {
        body: "Sobre os cursos",
        nextMessageId: "curso"
      },
      {
        body: "Sobre a galeria",
        nextMessageId: "galeria"
      },
      {
        body: "Obrigado",
        nextMessageId: 'thanks'
      },
    ]
  },
  {
    id: "prova",
    body: "Em Provas, você pode conferir as provas anteriores pra se preparar pro Vestibulinho",
    sender: "bot",
    options: [
      {
        body: "Sobre os Blogs",
        nextMessageId: "blog"
      },
      {
        body: "Sobre o cronograma",
        nextMessageId: "crno"
      },
      {
        body: "Sobre os cursos",
        nextMessageId: "curso"
      },
      {
        body: "Sobre a galeria",
        nextMessageId: "galeria"
      },
      {
        body: "Obrigado",
        nextMessageId: 'thanks'
      },
    ]
  },
  {
    id: "curso",
    body: "Em Cursos, você pode aprender mais sobre cada curso",
    sender: "bot",
    options: [
      {
        body: "Sobre os Blogs",
        nextMessageId: "blog"
      },
      {
        body: "Sobre o cronograma",
        nextMessageId: "crono"
      },
      {
        body: "Sobre as provas",
        nextMessageId: "prova"
      },
      {
        body: "Sobre a galeria",
        nextMessageId: "galeria"
      },
      {
        body: "Obrigado",
        nextMessageId: 'thanks'
      },
    ]
  },
  {
    id: "galeria",
    body: "Em Galeria, você fica por dentro do que tem de melhor na ETEC",
    sender: "bot",
    options: [
      {
        body: "Sobre os Blogs",
        nextMessageId: "blog"
      },
      {
        body: "Sobre o cronograma",
        nextMessageId: "crono"
      },
      {
        body: "Sobre as provas",
        nextMessageId: "prova"
      },
      {
        body: "Sobre os cursos",
        nextMessageId: "curso"
      },
      {
        body: "Obrigado",
        nextMessageId: 'thanks'
      },
    ]
  },
  {
    id: "team",
    body: <p>A Equipe Windowally é formada por alunos capacitados com o objetivo de divulgar a ETEC Adolpho Berezin</p>,
    sender: "bot",
    options: [
      {
        body: "Sobre você",
        nextMessageId: "about"
      },
      {
        body: "Sobre você",
        nextMessageId: "aboutBot"
      },
      {
        body: "Obrigado",
        nextMessageId: "thanks"
      },
    ]
  },
  {
    id: "aboutBot",
    body: "Eu sou o Adolphinho, o robô criado pela Windowally para ajudar",
    sender: "bot",
    options: [
      {
        body: "Obrigado",
        nextMessageId: "thanks"
      }
    ]
  },

  {
    id: "thanks",
    body: "Espero ter respondido todas as suas dúvidas",
    sender: "bot"
  }
]

export const firstMessage: IMessage = {
  id: "introduction",
  body: "Olá, como posso ajudar?",
  sender: "bot",
  options: [
    {
      body: "Sobre o site",
      nextMessageId: "about"
    },
    {
      body: "Sobre a Windowally",
      nextMessageId: "team"
    },
    {
      body: "Sobre você",
      nextMessageId: "aboutBot"
    },
    {
      body: "Outro",
      nextMessageId: "other"
    },
  ]
}


export default messages;
