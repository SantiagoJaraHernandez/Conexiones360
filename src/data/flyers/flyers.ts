export type FlyerPlan = {
  id: string;
  mes: "febrero" | "marzo" | "abril" | "mayo" | "junio" | "julio";
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

  
];
