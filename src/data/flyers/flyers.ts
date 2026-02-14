export type FlyerPlan = {
  id: string;
  mes: "enero" | "febrero" | "marzo" | "abril" | "mayo" | "junio" | "julio" | "agosto" | "septiembre" | "octubre" | "noviembre" | "diciembre";
  tipo: "terrestre" | "aereo";
  titulo: string;
  fechas: string[]; 
  precio: number;
  imagen: string;
  whatsappBase: string;
};

export const flyers: FlyerPlan[] = [

// AEREOS
  {
    id: "arboletesaereo",
    mes: "julio",
    tipo: "aereo", // mes no relevante para aereo
    titulo: "Arboletes",
    fechas: ["Salidas temporadas bajas o a tu elección"],
    precio: 2299000,
    imagen: "/Aereos/arboletes.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Arboletes",
  },

  {
    id: "cancunaereo",
    mes: "julio",
    tipo: "aereo", // mes no relevante para aereo
    titulo: "Cancún",
    fechas: ["Salidas temporadas bajas o a tu elección"],
    precio: 3500000,
    imagen: "/Aereos/cancun.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Cancún ",
  },
    {
    id: "mexiconaereo",
    mes: "julio",// mes no relevante para aereo
    tipo: "aereo",
    titulo: "México",
    fechas: ["Salidas temporadas bajas o a tu elección"],
    precio: 3800000,
    imagen: "/Aereos/mexico.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Mexico ",
  },
      {
    id: "mexicomixaereo",
    mes: "julio",// mes no relevante para aereo
    tipo: "aereo",
    titulo: "México + Cancún",
    fechas: ["Salidas temporadas bajas o a tu elección"],
    precio: 5300000,
    imagen: "/Aereos/mexicomix.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan México + Cancún",
  },
      {
    id: "panamaaereo",
    mes: "julio",// mes no relevante para aereo
    tipo: "aereo",
    titulo: "Panamá",
    fechas: ["Salidas temporadas bajas o a tu elección"],
    precio: 2850000,
    imagen: "/Aereos/panama.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Panamá ",
  },
      {
    id: "puntacanaaereo",
    mes: "julio",// mes no relevante para aereo
    tipo: "aereo",
    titulo: "Punta Cana",
    fechas: ["Salidas temporadas bajas o a tu elección"],
    precio: 3800000,
    imagen: "/Aereos/puntacana.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Punta Cana ",
  },
      {
    id: "sanandresaereo",
    mes: "julio",// mes no relevante para aereo
    tipo: "aereo",
    titulo: "San Andrés",
    fechas: ["Salidas temporadas bajas o a tu elección"],
    precio: 1870000,
    imagen: "/Aereos/sanandres.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan San Andrés",
  },
      {
    id: "capurganaereo",
    mes: "julio",// mes no relevante para aereo
    tipo: "aereo",
    titulo: "Capurganá",
    fechas: ["Salidas temporadas bajas o a tu elección"],
    precio: 2800000,
    imagen: "/Aereos/capurgana.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Capurganá",
  },
      {
    id: "cartagenaybaruaereo",
    mes: "julio",// mes no relevante para aereo
    tipo: "aereo",
    titulo: "Cartagena y Barú",
    fechas: ["Salidas temporadas bajas o a tu elección"],
    precio: 1280000,
    imagen: "/Aereos/cartagena.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Cartagena y Barú",
  },
      {
    id: "santamartaaereo",
    mes: "julio",// mes no relevante para aereo
    tipo: "aereo",
    titulo: "Santa Marta",
    fechas: ["Salidas temporadas bajas o a tu elección"],
    precio: 1189000,
    imagen: "/Aereos/santamarta.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Santa Marta",
  },
      {
    id: "coveñasaereo",
    mes: "julio",// mes no relevante para aereo
    tipo: "aereo",
    titulo: "Coveñas e Isla Múcura",
    fechas: ["Salidas temporadas bajas o a tu elección"],
    precio: 1708000,
    imagen: "/Aereos/covenas.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Coveñas e Isla Múcura",
  },
      {
    id: "islapalmasaereo",
    mes: "julio",// mes no relevante para aereo
    tipo: "aereo",
    titulo: "Isla Palma",
    fechas: ["Salidas temporadas bajas o a tu elección"],
    precio: 2830000,
    imagen: "/Aereos/islapalma.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Isla Palma",
  },
// TERRESTRES 2026
// FEBRERO
  {
    id: "ListadoCompleto-febrero",
    mes: "febrero",
    tipo: "terrestre",
    titulo: "Programación Febrero 2026",
    fechas: ["Febrero 1 - 22"],
    precio: 145000,
    imagen: "/Febrero2026/lista.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Febrero 2026",
  },
  {
    id: "playahawaii",
    mes: "febrero",
    tipo: "terrestre",
    titulo: "Playa Hawai",
    fechas: ["Febrero 1"],
    precio: 145000,
    imagen: "/Febrero2026/Playahawai.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Playa Hawai",
  },
    {
    id: "piscilago-febrero",
    mes: "febrero",
    tipo: "terrestre",
    titulo: "Piscilago Pasadía 2X",
    fechas: [
      "Febrero 8",
      "Febrero 15",
      "Febrero 22",
    ],
    precio: 320000,
    imagen: "/Febrero2026/piscilago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Piscilago",
  },
          {
    id: "carnavalbarranquilla",
    mes: "febrero",
    tipo: "terrestre",
    titulo: "Carnaval de Barranquilla",
    fechas: ["Febrero 12 al 17"],
    precio: 1100000,
    imagen: "/Febrero2026/carnavalb.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Carnaval de Barranquilla",
  },
          {
    id: "buga",
    mes: "febrero",
    tipo: "terrestre",
    titulo: "Peregrinación Buga",
    fechas: ["Febrero 14"],
    precio: 120000,
    imagen: "/Febrero2026/buga.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Peregrinación Buga",
  },
        {
    id: "pradotolima",
    mes: "febrero",
    tipo: "terrestre",
    titulo: "Pasadía Prado-Tolima",
    fechas: ["Febrero 15"],
    precio: 260000,
    imagen: "/Febrero2026/pradotolima.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Pasadía Prado-Tolima",
  },
          {
    id: "guatape",
    mes: "febrero",
    tipo: "terrestre",
    titulo: "Guatapé + Santorini y Hacienda Nápoles",
    fechas: ["Febrero 20 al 22"],
    precio: 650000,
    imagen: "/Febrero2026/guatape.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Guatapé + Santorini y Hacienda Nápoles",
  },
    {
    id: "parquedelcafe",
    mes: "febrero",
    tipo: "terrestre",
    titulo: "Parque del Café 2X",
    fechas: ["Febrero 22"],
    precio: 499000,
    imagen: "/Febrero2026/pcafe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Parque del Café",
  },
// MARZO 2026
        {
    id: "listadocompleto-marzo",
    mes: "marzo",
    tipo: "terrestre",
    titulo: "Programación Marzo 2026",
    fechas: ["Marzo 1 - 30"],
    precio: 120000,
    imagen: "/Marzo2026/listamarzo.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Marzo 2026",
  },
          {
    id: "piscilago-marzo",
    mes: "marzo",
    tipo: "terrestre",
    titulo: "Piscilago Pasadía 2X",
    fechas: [
      "Marzo 1",
      "Marzo 15",
      "Marzo 22",
      "Marzo 29",
    ],
    precio: 320000,
    imagen: "/Marzo2026/piscilago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Piscilago",
  },
          {
    id: "buga-marzo",
    mes: "marzo",
    tipo: "terrestre",
    titulo: "Peregrinación Buga",
    fechas: ["Marzo 14"],
    precio: 120000,
    imagen: "/Marzo2026/buga.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Peregrinación Buga",
  },
            {
    id: "haciendanapoles-marzo",
    mes: "marzo",
    tipo: "terrestre",
    titulo: "Hacienda Nápoles",
    fechas: ["Marzo 18 al 23"],
    precio: 650000,
    imagen: "/Marzo2026/haciendanapoles.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Hacienda Nápoles",
  },
          {
    id: "medellin-coveñas",
    mes: "marzo",
    tipo: "terrestre",
    titulo: "Medellín + Coveñas",
    fechas: ["Marzo 14 al 15"],
    precio: 1380000,
    imagen: "/Marzo2026/medellincovenas.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Medellín + Coveñas",
  },
          {
    id: "ejecafetero-marzo",
    mes: "marzo",
    tipo: "terrestre",
    titulo: "Eje Cafetero",
    fechas: ["Marzo 20 al 23"],
    precio: 910000,
    imagen: "/Marzo2026/ejecafe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Eje Cafetero",
  },
          {
    id: "boyaca-marzo",
    mes: "marzo",
    tipo: "terrestre",
    titulo: "Boyacá",
    fechas: ["Marzo 20 al 23"],
    precio: 850000,
    imagen: "/Marzo2026/boyaca.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Boyacá",
  },
          {
    id: "costacaribec-marzo",
    mes: "marzo",
    tipo: "terrestre",
    titulo: "Costa Caribe",
    fechas: ["Marzo 30 al Abril 5"],
    precio: 1680000,
    imagen: "/Marzo2026/costacaribe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Costa Caribe",
  },
  //Abril
        {
    id: "listadocompleto-abril",
    mes: "abril",
    tipo: "terrestre",
    titulo: "Programación Abril 2026",
    fechas: ["Abril 1 - 30"],
    precio: 145000,
    imagen: "/Abril2026/lista.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Abril 2026",
  },
        {
    id: "piscilago-abril",
    mes: "abril",
    tipo: "terrestre",
    titulo: "Piscilago Pasadía",
    fechas: [
      "Abril 1",
      "Abril 15",
      "Abril 22",
      "Abril 29",
    ],
    precio: 170000,
    imagen: "/Abril2026/piscilago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Piscilago",
  },
            {
    id: "bugaylajas-abril",
    mes: "abril",
    tipo: "terrestre",
    titulo: "Santuario de las Lajas y Buga",
    fechas: ["Abril 2 al 5"],
    precio: 850000,
    imagen: "/Abril2026/laslajas.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Buga Y Lajas",
  },
        {
    id: "ejecafetero-abril",
    mes: "abril",
    tipo: "terrestre",
    titulo: "Eje Cafetero",
    fechas: ["Abril 2 al 4"],
    precio: 960000,
    imagen: "/Abril2026/ejecafe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Eje Cafetero",
  },
        {
    id: "playahawai-abril",
    mes: "abril",
    tipo: "terrestre",
    titulo: "Playa Hawai 2X",
    fechas: ["Abril 12"],
    precio: 290000,
    imagen: "/Abril2026/playahawai.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Playa Hawai",
  },
            {
    id: "parquejaimeduque-abril",
    mes: "abril",
    tipo: "terrestre",
    titulo: "Guatavita y Parque Jaime Duque",
    fechas: ["Abril 18 al 19"],
    precio: 630000,
    imagen: "/Abril2026/jaimeduque.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Guatavita y Parque Jaime Duque",
  },
          {
    id: "ukumari-abril",
    mes: "abril",
    tipo: "terrestre",
    titulo: "Ukumarí",
    fechas: ["Abril 26"],
    precio: 340000,
    imagen: "/Abril2026/ukumari.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Ukumarí",
  },
          {
    id: "medellin-abril",
    mes: "abril",
    tipo: "terrestre",
    titulo: "Medellín, Guatapé y Nápoles",
    fechas: ["Abril 30 al Mayo 3"],
    precio: 899000,
    imagen: "/Abril2026/medellin.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Medellín",
  },

// Mayo
        {
    id: "listadocompleto-mayo",
    mes: "mayo",
    tipo: "terrestre",
    titulo: "Programación Mayo 2026",
    fechas: ["Mayo 1 - 31"],
    precio: 170000,
    imagen: "/Mayo2026/lista.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Mayo 2026",
  },
              {
    id: "piscilago-mayo",
    mes: "mayo",
    tipo: "terrestre",
    titulo: "Piscilago Pasadía",
    fechas: [
      "Mayo 3",
      "Mayo 10",
      "Mayo 18",
      "Mayo 24",
    ],
    precio: 170000,
    imagen: "/Mayo2026/piscilago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Piscilago Pasadía",
  },
            {
    id: "cafam-mayo",
    mes: "mayo",
    tipo: "terrestre",
    titulo: "Cafam Melgar",
    fechas: ["Mayo 1"],
    precio: 160000,
    imagen: "/Mayo2026/cafam.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Cafam",
  },
                {
    id: "bugacali-mayo",
    mes: "mayo",
    tipo: "terrestre",
    titulo: "Buga, Cali y Lago Calima",
    fechas: ["Mayo 9 al 10"],
    precio: 600000,
    imagen: "/Mayo2026/caliylago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Buga, Cali y Lago Calima",
  },
            {
    id: "tolucoveñas-mayo",
    mes: "mayo",
    tipo: "terrestre",
    titulo: "Tolú, Coveñas y Cartagena",
    fechas: ["Mayo 13 al 18"],
    precio: 1420000,
    imagen: "/Mayo2026/covenascartagena.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Tolú, Coveñas y Cartagena",
  },
              {
    id: "ejecafetero-mayo",
    mes: "mayo",
    tipo: "terrestre",
    titulo: "Eje Cafetero",
    fechas: ["Mayo 16 al 18"],
    precio: 910000,
    imagen: "/Mayo2026/ejecafe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Eje Cafetero",
  },
                {
    id: "haciendanapoles-mayo",
    mes: "mayo",
    tipo: "terrestre",
    titulo: "Hacienda Nápoles",
    fechas: ["Mayo 17"],
    precio: 370000,
    imagen: "/Mayo2026/napoles.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Hacienda Nápoles",
  },
              {
    id: "miradoresraquira-mayo",
    mes: "mayo",
    tipo: "terrestre",
    titulo: "Miradores de Raquira",
    fechas: ["Mayo 24"],
    precio: 300000,
    imagen: "/Mayo2026/raquira.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Miradores de Raquira",
  },

// JUNIO
        {
    id: "listadocompleto-junio",
    mes: "junio",
    tipo: "terrestre",
    titulo: "Programación Junio 2026",
    fechas: ["Junio 1 - 30"],
    precio: 130000,
    imagen: "/Junio2026/lista.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Junio 2026",
  },
          {
    id: "sanandres-junio",
    mes: "junio",
    tipo: "terrestre",
    titulo: "San Andrés",
    fechas: ["Junio 4 al 7"],
    precio: 1980000,
    imagen: "/Junio2026/sanandres.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan San Andrés",
  },
            {
    id: "medellin-junio",
    mes: "junio",
    tipo: "terrestre",
    titulo: "Medellín, Guatapé y Nápoles",
    fechas: ["Junio 6 al 8"],
    precio: 899000,
    imagen: "/Junio2026/medellin.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Medellín, Guatapé y Nápoles",
  },
            {
    id: "piscilago-junio",
    mes: "junio",
    tipo: "terrestre",
    titulo: "Piscilago Pasadía",
    fechas: [
      "Junio 8",
      "Junio 15",
      "Junio 21",
      "Junio 29",
    ],
    precio: 170000,
    imagen: "/Junio2026/piscilago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Piscilago Pasadía",
  },
            {
    id: "buga-junio",
    mes: "junio",
    tipo: "terrestre",
    titulo: "Peregrinación Buga",
    fechas: ["Junio 14"],
    precio: 130000,
    imagen: "/Junio2026/buga.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Peregrinación Buga",
  },
            {
    id: "ejecafetero-junio",
    mes: "junio",
    tipo: "terrestre",
    titulo: "Eje Cafetero",
    fechas: ["Junio 13 al 15"],
    precio: 910000,
    imagen: "/Junio2026/ejecafe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Eje Cafetero",
  },
            {
    id: "costacaribe-junio",
    mes: "junio",
    tipo: "terrestre",
    titulo: "Costa Caribe",
    fechas: ["Junio 17 al 25"],
    precio: 1590000,
    imagen: "/Junio2026/costacaribe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Costa Caribe",
  },
            {
    id: "playahawai-junio",
    mes: "junio",
    tipo: "terrestre",
    titulo: "Playa Hawai",
    fechas: ["Junio 28"],
    precio: 160000,
    imagen: "/Junio2026/playahawai.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Playa Hawai",
  },

// JULIO 

            {
    id: "listadocompleto-julio",
    mes: "julio",
    tipo: "terrestre",
    titulo: "Programación Julio 2026",
    fechas: ["Julio 1 - 26"],
    precio: 170000,
    imagen: "/Julio2026/lista.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Julio 2026",
  },

            {
    id: "haciendanapoles-julio",
    mes: "julio",
    tipo: "terrestre",
    titulo: "Hacienda Nápoles",
    fechas: ["Julio 5"],
    precio: 360000,
    imagen: "/Julio2026/napoles.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Hacienda Nápoles",
  },
              {
    id: "cali-julio",
    mes: "julio",
    tipo: "terrestre",
    titulo: "Cali, Lago Calima y Buga",
    fechas: ["Julio 11 al 12"],
    precio: 600000,
    imagen: "/Julio2026/cali.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Cali",
  },
              {
    id: "piscilago-julio",
    mes: "julio",
    tipo: "terrestre",
    titulo: "Piscilago Pasadía",
    fechas: [
      "Julio 5",
      "Julio 12",
      "Julio 20",
      "Julio 26",
    ],
    precio: 170000,
    imagen: "/Julio2026/piscilago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Piscilago Pasadía",
  },
            {
    id: "tintipanycovenas-julio",
    mes: "julio",
    tipo: "terrestre",
    titulo: "Tintipan Archipiélago de San Bernardo",
    fechas: ["Julio 15 al 20"],
    precio: 1430000,
    imagen: "/Julio2026/tintipan.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Tintipan Archipiélago de San Bernardo",
  },
              {
    id: "boyacá-julio",
    mes: "julio",
    tipo: "terrestre",
    titulo: "Villa de Leyva",
    fechas: ["Julio 19 al 20"],
    precio: 630000,
    imagen: "/Julio2026/boyaca.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Villa de Leyva",
  },
                {
    id: "ejecafe-julio",
    mes: "julio",
    tipo: "terrestre",
    titulo: "Eje Cafetero",
    fechas: ["Julio 18 al 20"],
    precio: 910000,
    imagen: "/Julio2026/ejecafe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Eje Cafetero",
  },
                {
    id: "cafam-julio",
    mes: "julio",
    tipo: "terrestre",
    titulo: "Cafam Melgar",
    fechas: ["Julio 26"],
    precio: 170000,
    imagen: "/Julio2026/cafam.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Cafam Melgar",
  },

// AGOSTO

            {
    id: "listadocompleto-agosto",
    mes: "agosto",
    tipo: "terrestre",
    titulo: "Programación Agosto 2026",
    fechas: ["Agosto 1 - 30"],
    precio: 170000,
    imagen: "/Agosto2026/lista.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Agosto 2026",
  },
              {
    id: "piscilago-agosto",
    mes: "agosto",
    tipo: "terrestre",
    titulo: "Piscilago Pasadía",
    fechas: [
      "Agosto 2",
      "Agosto 9",
      "Agosto 17",
      "Agosto 23",
      "Agosto 30",
    ],
    precio: 170000,
    imagen: "/Agosto2026/piscilago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Piscilago Pasadía",
  },
            {
    id: "feriadelasflores-agosto",
    mes: "agosto",
    tipo: "terrestre",
    titulo: "Feria de las Flores Medellín",
    fechas: ["Agosto 7 al 9"],
    precio: 899000,
    imagen: "/Agosto2026/feriaflores.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Feria de las Flores Medellín",
  },
              {
    id: "haciendanapoles-agosto",
    mes: "agosto",
    tipo: "terrestre",
    titulo: "Hacienda Nápoles",
    fechas: ["Agosto 9"],
    precio: 360000,
    imagen: "/Agosto2026/napoles.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Hacienda Nápoles",
  },
              {
    id: "capurgana-agosto",
    mes: "agosto",
    tipo: "terrestre",
    titulo: "Capurganá",
    fechas: ["Agosto 11 al 17"],
    precio: 2425000,
    imagen: "/Agosto2026/capurgana.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Capurganá",
  },
              {
    id: "ejecafetero-agosto",
    mes: "agosto",
    tipo: "terrestre",
    titulo: "Eje Cafetero",
    fechas: ["Agosto 15 al 17"],
    precio: 910000,
    imagen: "/Agosto2026/ejecafe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Eje Cafetero",
  },
              {
    id: "termales-agosto",
    mes: "agosto",
    tipo: "terrestre",
    titulo: "Termales Santa Rosa de Cabal",
    fechas: ["Agosto 23"],
    precio: 350000,
    imagen: "/Agosto2026/termales.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Termales Santa Rosa de Cabal",
  },
              {
    id: "jaimeduque-agosto",
    mes: "agosto",
    tipo: "terrestre",
    titulo: "Parque Jaime Duque + Piscilago",
    fechas: ["Agosto 29 al 30"],
    precio: 630000,
    imagen: "/Agosto2026/piscilagoyjaime.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Parque Jaime Duque + Piscilago",
  },
// SEPTIEMBRE

            {
    id: "listadocompleto-septiembre",
    mes: "septiembre",
    tipo: "terrestre",
    titulo: "Programación Septiembre 2026",
    fechas: ["Septiembre 1 - 30"],
    precio: 170000,
    imagen: "/Septiembre2026/lista.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Septiembre 2026",
  },
              {
    id: "piscilago-septiembre",
    mes: "septiembre",
    tipo: "terrestre",
    titulo: "Piscilago Pasadía 2X",
    fechas: [
      "Septiembre 6",
      "Septiembre 13",
      "Septiembre 20",
      "Septiembre 27",
    ],
    precio: 320000,
    imagen: "/Septiembre2026/piscilago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Piscilago Pasadía",
  },
              {
    id: "boyaca-septiembre",
    mes: "septiembre",
    tipo: "terrestre",
    titulo: "Villa de Leyva y Ráquira",
    fechas: ["Septiembre 5 al 6"],
    precio: 630000,
    imagen: "/Septiembre2026/boyaca.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Villa de Leyva y Ráquira",
  },
              {
    id: "ejecafetero-septiembre",
    mes: "septiembre",
    tipo: "terrestre",
    titulo: "Eje Cafetero",
    fechas: ["Septiembre 12 al 13"],
    precio: 630000,
    imagen: "/Septiembre2026/ejecafe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Eje Cafetero",
  },
              {
    id: "arboletesycoveñas-septiembre",
    mes: "septiembre",
    tipo: "terrestre",
    titulo: "Disney Colombiano con Tolú, Coveñas e Isla Múcura",
    fechas: ["Septiembre 15 al 20"],
    precio: 1599000,
    imagen: "/Septiembre2026/arboletes.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Disney Colombiano con Tolú, Coveñas e Isla Múcura",
  },
              {
    id: "buga-septiembre",
    mes: "septiembre",
    tipo: "terrestre",
    titulo: "Cali + Buga",
    fechas: ["Septiembre 19 al 20"],
    precio: 600000,
    imagen: "/Septiembre2026/cali.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Cali + Buga",
  },
              {
    id: "playahawai-septiembre",
    mes: "septiembre",
    tipo: "terrestre",
    titulo: "Playa Hawai 2X",
    fechas: ["Septiembre 13"],
    precio: 300000,
    imagen: "/Septiembre2026/playahawai.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Playa Hawai",
  },
              {
    id: "guatape-septiembre",
    mes: "septiembre",
    tipo: "terrestre",
    titulo: "Guatapé + Nápoles",
    fechas: ["Septiembre 25 al 27"],
    precio: 650000,
    imagen: "/Septiembre2026/guatape.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Guatapé + Nápoles",
  },

//OCTUBRE

            {
    id: "listadocompleto-octubre",
    mes: "octubre",
    tipo: "terrestre",
    titulo: "Programación Octubre 2026",
    fechas: ["Octubre 1 - 31"],
    precio: 170000,
    imagen: "/Octubre2026/lista.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Octubre 2026",
  },
              {
    id: "piscilago-octubre",
    mes: "octubre",
    tipo: "terrestre",
    titulo: "Piscilago Pasadía 2X",
    fechas: [
      "Octubre 4",
      "Octubre 12",
      "Octubre 18",
      "Octubre 25",
    ],
    precio: 320000,
    imagen: "/Octubre2026/piscilago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Piscilago Pasadía",
  },
              {
    id: "santamartayguajira-octubre",
    mes: "octubre",
    tipo: "terrestre",
    titulo: "Santa Marta y Guajira",
    fechas: ["Octubre 6 al 12"],
    precio: 1699000,
    imagen: "/Octubre2026/guajira.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Santa Marta y Guajira",
  },
              {
    id: "santuariodelaslajas-octubre",
    mes: "octubre",
    tipo: "terrestre",
    titulo: "Santuario de Las Lajas",
    fechas: ["Octubre 9 al 12"],
    precio: 850000,
    imagen: "/Octubre2026/lajas.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Santuario de Las Lajas",
  },
              {
    id: "ejecafetero-octubre",
    mes: "octubre",
    tipo: "terrestre",
    titulo: "Eje Cafetero",
    fechas: ["Octubre 10 al 12"],
    precio: 960000,
    imagen: "/Octubre2026/ejecafe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Eje Cafetero",
  },
              {
    id: "cafam-octubre",
    mes: "octubre",
    tipo: "terrestre",
    titulo: "Cafam Melgar",
    fechas: ["Octubre 18"],
    precio: 170000,
    imagen: "/Octubre2026/cafam.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Cafam Melgar",
  },
              {
    id: "termales-octubre",
    mes: "octubre",
    tipo: "terrestre",
    titulo: "Termales Santa Rosa de Cabal",
    fechas: ["Octubre 25"],
    precio: 350000,
    imagen: "/Octubre2026/termales.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Termales Santa Rosa de Cabal",
  },
              {
    id: "medellin-octubre",
    mes: "octubre",
    tipo: "terrestre",
    titulo: "Medellín, Guatapé y Nápoles",
    fechas: ["Octubre 31 al 2 Noviembre"],
    precio: 899000,
    imagen: "/Octubre2026/medellin.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Medellín, Guatapé y Nápoles",
  },
// NOVIEMBRE
            {
    id: "listadocompleto-noviembre",
    mes: "noviembre",
    tipo: "terrestre",
    titulo: "Programación Noviembre 2026",
    fechas: ["Noviembre 1 - 30"],
    precio: 170000,
    imagen: "/Noviembre2026/lista.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Noviembre 2026",
  },
                {
    id: "piscilago-noviembre",
    mes: "noviembre",
    tipo: "terrestre",
    titulo: "Piscilago Pasadía",
    fechas: [
      "Noviembre 2",
      "Noviembre 8",
      "Noviembre 16",
      "Noviembre 29",
    ],
    precio: 170000,
    imagen: "/Noviembre2026/piscilago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Piscilago Pasadía",
  },
              {
    id: "raquira-noviembre",
    mes: "noviembre",
    tipo: "terrestre",
    titulo: "Raquira y Villa de Leyva",
    fechas: ["Noviembre 8"],
    precio: 300000,
    imagen: "/Noviembre2026/raquira.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Raquira y Villa de Leyva",
  },
              {
    id: "cali-noviembre",
    mes: "noviembre",
    tipo: "terrestre",
    titulo: "Buga + Cali",
    fechas: ["Noviembre 14 al 15"],
    precio: 600000,
    imagen: "/Noviembre2026/caliconlago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Cali",
  },
              {
    id: "ejecafetero-noviembre",
    mes: "noviembre",
    tipo: "terrestre",
    titulo: "Eje Cafetero",
    fechas: ["Noviembre 14 al 16"],
    precio: 910000,
    imagen: "/Noviembre2026/ejecafe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Eje Cafetero",
  },
              {
    id: "jaimeduqueconpiscilago-noviembre",
    mes: "noviembre",
    tipo: "terrestre",
    titulo: "Jaime Duque con Piscilago",
    fechas: ["Noviembre 21 al 22"],
    precio: 630000,
    imagen: "/Noviembre2026/jaimeduque.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Jaime Duque con Piscilago",
  },
              {
    id: "costacaribe-noviembre",
    mes: "noviembre",
    tipo: "terrestre",
    titulo: "Costa Caribe",
    fechas: ["Noviembre 27 al 2 Diciembre"],
    precio: 1198000,
    imagen: "/Noviembre2026/costacaribe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Costa Caribe",
  },
                {
    id: "consota-noviembre",
    mes: "noviembre",
    tipo: "terrestre",
    titulo: "Ukumarí + Consotá",
    fechas: ["Noviembre 29"],
    precio: 340000,
    imagen: "/Noviembre2026/consota.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Ukumarí + Consotá",
  },

// DICIEMBRE

            {
    id: "listadocompleto-diciembre",
    mes: "diciembre",
    tipo: "terrestre",
    titulo: "Programación Diciembre 2026",
    fechas: ["Diciembre 1 - 31"],
    precio: 170000,
    imagen: "/Diciembre2026/lista.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Diciembre 2026",
  },
              {
    id: "piscilago-diciembre",
    mes: "diciembre",
    tipo: "terrestre",
    titulo: "Piscilago Pasadía",
    fechas: [
      "Diciembre 6",
      "Diciembre 13",
      "Diciembre 20",
    ],
    precio: 170000,
    imagen: "/Diciembre2026/piscilago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Piscilago Pasadía",
  },
              {
    id: "ejecafetero-diciembre",
    mes: "diciembre",
    tipo: "terrestre",
    titulo: "Eje Cafetero",
    fechas: ["Diciembre 6 al 8"],
    precio: 960000,
    imagen: "/Diciembre2026/ejecafe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Eje Cafetero",
  },
              {
    id: "costacaribe-diciembre",
    mes: "diciembre",
    tipo: "terrestre",
    titulo: "Costa Caribe",
    fechas: ["Diciembre 10 al 17"],
    precio: 1600000,
    imagen: "/Diciembre2026/costacaribe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Costa Caribe",
  },  
              {
    id: "cali-diciembre",
    mes: "diciembre",
    tipo: "terrestre",
    titulo: "Cali, Lago Calima y Buga",
    fechas: ["Diciembre 12 al 13"],
    precio: 630000,
    imagen: "/Diciembre2026/calilago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Cali, Lago Calima y Buga",
  },
                {
    id: "parquejaimeduque-diciembre",
    mes: "diciembre",
    tipo: "terrestre",
    titulo: "Parque Jaime Duque con Piscilago",
    fechas: ["Diciembre 19 al 20"],
    precio: 630000,
    imagen: "/Diciembre2026/jaimeduque.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Parque Jaime Duque con Piscilago",
  },
                {
    id: "AlumbradoMedellin-diciembre",
    mes: "diciembre",
    tipo: "terrestre",
    titulo: "Alumbrado Navideño Medellín",
    fechas: ["Diciembre 19 al 21"],
    precio: 970000,
    imagen: "/Diciembre2026/medellin.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Alumbrado Medellín",
  },
                {
    id: "boyaca-diciembre",
    mes: "diciembre",
    tipo: "terrestre",
    titulo: "Luces Navideñas Boyacá",
    fechas: ["Diciembre 31 al Enero 3"],
    precio: 1230000,
    imagen: "/Diciembre2026/boyaca.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Boyacá",
  },   
];
