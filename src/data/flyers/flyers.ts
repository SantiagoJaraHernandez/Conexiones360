export type FlyerPlan = {
  id: string;
  mes: "enero" | "febrero" | "marzo" | "abril" | "mayo" | "junio" | "julio" | "agosto" | "septiembre" | "octubre" | "noviembre" | "diciembre";
  tipo: "terrestre" | "aereo";
  titulo: string;
  fechas: string[]; // 👈 AQUÍ LA CLAVE
  precio: number;
  imagen: string;
  whatsappBase: string;
};

export const flyers: FlyerPlan[] = [

// AEREOS
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
    titulo: "Mexico",
    fechas: ["Salidas temporadas bajas o a tu elección"],
    precio: 3800000,
    imagen: "/Aereos/mexico.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Mexico ",
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
// TERRESTRES 2026
// FEBRERO
  {
    id: "ListadoCompleto-febrero",
    mes: "febrero",
    tipo: "terrestre",
    titulo: "Programación Febrero 2026",
    fechas: ["Febrero 1 - 22"],
    precio: 145000,
    imagen: "/Febrero2026/ListaFebrero.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Febrero 2026",
  },
  {
    id: "piscilago-febrero",
    mes: "febrero",
    tipo: "terrestre",
    titulo: "Piscilago Pasadía",
    fechas: [
      "Febrero 1",
      "Febrero 8",
      "Febrero 15",
      "Febrero 22",
    ],
    precio: 170000,
    imagen: "/Febrero2026/piscilago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Piscilago",
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
    id: "carnavalbarranquilla",
    mes: "febrero",
    tipo: "terrestre",
    titulo: "Carnaval de Barranquilla",
    fechas: ["Febrero 12 al 26"],
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
    precio: 680000,
    imagen: "/Febrero2026/guatape.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Guatapé + Santorini y Hacienda Nápoles",
  },
    {
    id: "parquedelcafe",
    mes: "febrero",
    tipo: "terrestre",
    titulo: "Parque del Café",
    fechas: ["Febrero 22"],
    precio: 340000,
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
    precio: 145000,
    imagen: "/Marzo2026/listamarzo.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Marzo 2026",
  },
          {
    id: "piscilago-marzo",
    mes: "marzo",
    tipo: "terrestre",
    titulo: "Piscilago Pasadía",
    fechas: [
      "Marzo 1",
      "Marzo 15",
      "Marzo 22",
      "Marzo 29",
    ],
    precio: 170000,
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
    id: "medellin-coveñas",
    mes: "marzo",
    tipo: "terrestre",
    titulo: "Medellín + Coveñas",
    fechas: ["Marzo 18 al 23"],
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
    id: "playahawai-marzo",
    mes: "marzo",
    tipo: "terrestre",
    titulo: "Playa Hawai",
    fechas: ["Marzo 29"],
    precio: 145000,
    imagen: "/Marzo2026/playahawai.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Playa Hawai",
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
    id: "costacaribe-abril",
    mes: "abril",
    tipo: "terrestre",
    titulo: "Costa Caribe",
    fechas: ["Marzo 30 al Abril 5"],
    precio: 1680000,
    imagen: "/Abril2026/costacaribe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Costa Caribe",
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
    id: "ejecafetero-abril",
    mes: "abril",
    tipo: "terrestre",
    titulo: "Eje Cafetero",
    fechas: ["Abril 1 al 4"],
    precio: 910000,
    imagen: "/Abril2026/ejecafe.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Eje Cafetero",
  },
          {
    id: "bugaylajas-abril",
    mes: "abril",
    tipo: "terrestre",
    titulo: "Santuario de las Lajas y Buga",
    fechas: ["Abril 1 al 5"],
    precio: 145000,
    imagen: "/Abril2026/laslajas.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Buga Y Lajas",
  },
        {
    id: "playahawai-abril",
    mes: "abril",
    tipo: "terrestre",
    titulo: "Playa Hawai",
    fechas: ["Abril 29"],
    precio: 145000,
    imagen: "/Abril2026/playahawai.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Playa Hawai",
  },
            {
    id: "parquejaimeduque-abril",
    mes: "abril",
    tipo: "terrestre",
    titulo: "Parque Jaime Duque",
    fechas: ["Abril 18"],
    precio: 330000,
    imagen: "/Abril2026/jaimeduque.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Parque Jaime Duque",
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

// Mayo
        {
    id: "listadocompleto-mayo",
    mes: "mayo",
    tipo: "terrestre",
    titulo: "Programación Mayo 2026",
    fechas: ["Mayo 1 - 31"],
    precio: 145000,
    imagen: "/Mayo2026/lista.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Mayo 2026",
  },
          {
    id: "medellin-mayo",
    mes: "mayo",
    tipo: "terrestre",
    titulo: "Medellín, Guatapé y Nápoles",
    fechas: ["Abril 30 al Mayo 3"],
    precio: 899000,
    imagen: "/Mayo2026/medellin.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Medellín, Guatapé y Nápoles",
  },
          {
    id: "cafam-mayo",
    mes: "mayo",
    tipo: "terrestre",
    titulo: "Cafam Melgar",
    fechas: ["Mayo 1"],
    precio: 170000,
    imagen: "/Mayo2026/cafam.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Cafam",
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
      "Mayo 31",
    ],
    precio: 170000,
    imagen: "/Mayo2026/piscilago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Piscilago Pasadía",
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
    id: "miradoresraquira-mayo",
    mes: "mayo",
    tipo: "terrestre",
    titulo: "Miradores de Raquira",
    fechas: ["Mayo 24"],
    precio: 280000,
    imagen: "/Mayo2026/raquira.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Miradores de Raquira",
  },
              {
    id: "bugacali-mayo",
    mes: "mayo",
    tipo: "terrestre",
    titulo: "Buga, Cali y Lago Calima",
    fechas: ["Mayo 29 al 31"],
    precio: 600000,
    imagen: "/Mayo2026/caliylago.jpg",
    whatsappBase:
      "Hola Conexiones360, quiero información del plan Buga, Cali y Lago Calima",
  },

// JUNIO
        {
    id: "listadocompleto-junio",
    mes: "junio",
    tipo: "terrestre",
    titulo: "Programación Junio 2026",
    fechas: ["Junio 1 - 30"],
    precio: 145000,
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
];
