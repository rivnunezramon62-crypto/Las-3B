/* ===== EDITA AQUÍ ===== */
const NEGOCIO = {
  nombre: "Las 3B",
  whatsapp: "53XXXXXXXX",   // código 53 + tu número, sin + ni espacios (ej. 5351234567)
  moneda: "$"
};

const CATEGORIAS = [
  { id: "ropa-hombre", nombre: "Ropa de hombre", icono: "👔" },
  { id: "ropa-mujer", nombre: "Ropa de mujer", icono: "👗" },
  { id: "zapatos", nombre: "Zapatos", icono: "👟" },
  { id: "hogar", nombre: "Hogar y utensilios", icono: "🍳" },
  { id: "lenceria", nombre: "Lencería", icono: "🩱" },
  { id: "musica", nombre: "Discos y música", icono: "💿" },
  { id: "salud-belleza", nombre: "Salud y belleza", icono: "💄" }
];

/* fotos: hasta 5 nombres de archivo de fotos subidas junto a index.html (ej. fotos: ["zapato1.jpg","zapato2.jpg"]). Si no hay fotos se muestra el icono. */
const PRODUCTOS = [
  { categoria: "ropa-hombre", nombre: "Camisa de lino manga larga", precio: 45000, descripcion: "Camisa fresca de lino, tallas S a XL. Colores: blanco, azul y arena.", fotos: ["camisa-1.jpg", "camisa-2.jpg", "camisa-3.jpg", "camisa-4.jpg", "camisa-5.jpg"] },
  { categoria: "ropa-hombre", nombre: "Jean clásico corte recto", precio: 68000, descripcion: "Jean de algodón resistente, tallas 28 a 38.", foto: "" },
  { categoria: "ropa-mujer", nombre: "Vestido floral midi", precio: 79000, descripcion: "Vestido liviano con cintura ajustable. Tallas S a L.", fotos: ["vestido-1.jpg", "vestido-2.jpg", "vestido-3.jpg", "vestido-4.jpg", "vestido-5.jpg"] },
  { categoria: "ropa-mujer", nombre: "Blusa de satén", precio: 52000, descripcion: "Blusa elegante para oficina o salida. Colores: negro, vino y crema.", foto: "" },
  { categoria: "zapatos", nombre: "Zapatillas deportivas running", precio: 135000, descripcion: "Suela amortiguada y malla transpirable. Tallas 36 a 44.", fotos: ["zapatillas-1.jpg", "zapatillas-2.jpg", "zapatillas-3.jpg", "zapatillas-4.jpg", "zapatillas-5.jpg"] },
  { categoria: "zapatos", nombre: "Sandalias de cuero", precio: 89000, descripcion: "Cuero genuino, plantilla suave. Tallas 35 a 40.", foto: "" },
  { categoria: "hogar", nombre: "Juego de ollas antiadherentes (5 piezas)", precio: 210000, descripcion: "Incluye tapas de vidrio. Apto para todo tipo de cocina.", fotos: ["ollas-1.jpg", "ollas-2.jpg", "ollas-3.jpg", "ollas-4.jpg", "ollas-5.jpg"] },
  { categoria: "hogar", nombre: "Licuadora 1.5 litros", precio: 120000, descripcion: "Motor de 600 W, jarra de vidrio y 3 velocidades.", foto: "" },
  { categoria: "lenceria", nombre: "Conjunto de encaje", precio: 58000, descripcion: "Sostén y panty de encaje suave. Tallas S a L.", fotos: ["encaje-1.jpg", "encaje-2.jpg", "encaje-3.jpg", "encaje-4.jpg", "encaje-5.jpg"] },
  { categoria: "lenceria", nombre: "Pijama de algodón", precio: 64000, descripcion: "Dos piezas, tela fresca para dormir cómoda.", foto: "" },
  { categoria: "musica", nombre: "Vinilos clásicos de salsa", precio: 95000, descripcion: "Colección en buen estado. Pregunta por títulos disponibles.", foto: "" },
  { categoria: "musica", nombre: "Parlante bluetooth portátil", precio: 150000, descripcion: "Batería de 10 horas, resistente al agua.", fotos: ["parlante-1.jpg", "parlante-2.jpg", "parlante-3.jpg", "parlante-4.jpg", "parlante-5.jpg"] },
  { categoria: "salud-belleza", nombre: "Set de cuidado facial", precio: 72000, descripcion: "Limpiador, tónico y crema hidratante.", fotos: ["facial-1.jpg", "facial-2.jpg", "facial-3.jpg", "facial-4.jpg", "facial-5.jpg"] },
  { categoria: "salud-belleza", nombre: "Secador de pelo profesional", precio: 98000, descripcion: "2000 W con difusor y boquilla concentradora.", foto: "" }
];
