interface IProva {
  year: string
  edition: {
    semester: string
    prova: string
    gabarito: string
  }[]
}

const provasData: IProva[] = [
  {
    year: '2023',
    edition: [
      {
        semester: '1',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/202311698/Prova.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/202311698/Gabarito.pdf"
      },
      {
        semester: '2',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/202323718/Prova.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/202323718/Gabarito.pdf"
      },
    ]
  },
  {
    year: '2022',
    edition: [
      {
        semester: '2',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/2022027483/Prova.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/2022027483/Gabarito.pdf"
      },
    ]
  },
  {
    year: '2020',
    edition: [
      {
        semester: '1',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/202017430/Prova_1modulo.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/202017430/Gabarito_1modulo-retificado.pdf"
      },
    ]
  },
  {
    year: '2019',
    edition: [
      {
        semester: '1',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201917532/Prova_1modulo.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201917532/Gabarito_1modulo.pdf"
      },
      {
        semester: '2',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201927134/Prova_1modulo.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201927134/Gabarito_1modulo.pdf"
      },

    ]
  },
  {
    year: '2018',
    edition: [
      {
        semester: '1',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201816012/Prova_1modulo.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201816012/Gabarito_1modulo.pdf"
      },
      {
        semester: '2',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201826901/Prova_1modulo.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201826901/Gabarito_1modulo.pdf"
      },

    ]
  },
  {
    year: '2017',
    edition: [
      {
        semester: '1',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201718301/Prova_1modulo.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201718301/Gabarito_1modulo.pdf"
      },
      {
        semester: '2',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201727490/Prova_1modulo.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/201727490/Gabarito_1modulo_retificado.pdf"
      },

    ]
  },
  {
    year: '2016',
    edition: [
      {
        semester: '1',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20161738/Prova_1modulo.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20161738/Gabarito_1modulo.pdf"
      },
      {
        semester: '2',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20162639/Prova_1modulo.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20162639/Gabarito_1modulo.pdf"
      },

    ]
  },
  {
    year: '2015',
    edition: [
      {
        semester: '1',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20147534/Prova_1modulo.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20147534/Gabarito_1modulo.pdf"
      },
      {
        semester: '2',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20152679/Prova_1modulo.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20152679/Gabarito_1modulo.pdf"
      },

    ]
  },
  {
    year: '2014',
    edition: [
      {
        semester: '1',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20147208/Prova_1modulo.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20147208/Gabarito_1modulo_retificado.pdf"
      },
      {
        semester: '2',
        prova: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20149276/Prova_1modulo.pdf",
        gabarito: "https://fatweb.s3.amazonaws.com/vestibulinhoetec/gabarito/20149276/Gabarito_1modulo.pdf"
      },
    ]
  }
]

export default provasData
