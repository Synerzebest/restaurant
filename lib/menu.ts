export type Language = "fr" | "nl" | "en"

export type Allergen =
  | "gluten"
  | "crustaces"
  | "eggs"
  | "fish"
  | "peanuts"
  | "soy"
  | "milk"
  | "nuts"
  | "celery"
  | "mustard"
  | "sesame"
  | "sulphites"
  | "lupin"
  | "molluscs"

export type MenuItem = {
  name: string
  description?: string
  price: string
  allergens?: Allergen[]
  badge?: "Signature" | "Vegetarien" | "Vegan" | "Sans gluten" | "Chef"
}

export type MenuCategory = {
  title: string
  note?: string
  items: MenuItem[]
}

export type MenuContent = {
  meta: {
    restaurantName: string
    lastUpdated: string // format libre, affichage uniquement
    currency: "EUR"
  }
  hero: {
    label: string
    title: string
    description: string
  }
  categories: MenuCategory[]
  footerNote: string
}

export const allergensLabel: Record<Allergen, { fr: string; nl: string; en: string }> =
  {
    gluten: { fr: "Gluten", nl: "Gluten", en: "Gluten" },
    crustaces: { fr: "Crustacés", nl: "Schaaldieren", en: "Crustaceans" },
    eggs: { fr: "Œufs", nl: "Eieren", en: "Eggs" },
    fish: { fr: "Poisson", nl: "Vis", en: "Fish" },
    peanuts: { fr: "Arachides", nl: "Pinda", en: "Peanuts" },
    soy: { fr: "Soja", nl: "Soja", en: "Soy" },
    milk: { fr: "Lait", nl: "Melk", en: "Milk" },
    nuts: { fr: "Fruits à coque", nl: "Noten", en: "Nuts" },
    celery: { fr: "Céleri", nl: "Selderij", en: "Celery" },
    mustard: { fr: "Moutarde", nl: "Mosterd", en: "Mustard" },
    sesame: { fr: "Sésame", nl: "Sesam", en: "Sesame" },
    sulphites: { fr: "Sulfites", nl: "Sulfieten", en: "Sulphites" },
    lupin: { fr: "Lupin", nl: "Lupine", en: "Lupin" },
    molluscs: { fr: "Mollusques", nl: "Weekdieren", en: "Molluscs" },
  }

export const menu: Record<Language, MenuContent> = {
  fr: {
    meta: {
      restaurantName: "La Maison",
      lastUpdated: "Janvier 2026",
      currency: "EUR",
    },
    hero: {
      label: "Notre Menu",
      title: "Un Voyage au Fil des Saisons",
      description:
        "Une cuisine guidée par la saisonnalité, le respect du produit et l’expression du goût. Menu susceptible de varier selon les arrivages.",
    },
    categories: [
      {
        title: "Entrées",
        note: "À partager ou à savourer en entrée.",
        items: [
          {
            name: "Velouté de potimarron",
            description: "Crème légère, huile de noisette, croûtons dorés",
            price: "9€",
            allergens: ["milk", "gluten", "nuts"],
          },
          {
            name: "Tartare de bar",
            description: "Agrumes, herbes fraîches, pointe de piment doux",
            price: "15€",
            allergens: ["fish"],
            badge: "Signature",
          },
          {
            name: "Salade de betteraves rôties",
            description: "Chèvre frais, noix, vinaigrette au miel",
            price: "12€",
            allergens: ["milk", "nuts"],
            badge: "Vegetarien",
          },
        ],
      },
      {
        title: "Plats",
        note: "Élaborés avec des produits de saison soigneusement sélectionnés.",
        items: [
          {
            name: "Filet de bœuf grillé",
            description: "Sauce au poivre, légumes du marché, jus réduit",
            price: "29€",
            allergens: ["milk"],
            badge: "Chef",
          },
          {
            name: "Risotto aux champignons",
            description: "Parmesan affiné, émulsion légère, herbes",
            price: "24€",
            allergens: ["milk"],
            badge: "Vegetarien",
          },
          {
            name: "Dos de cabillaud confit",
            description: "Purée de céleri, beurre citronné, herbes",
            price: "27€",
            allergens: ["fish", "milk", "celery"],
          },
        ],
      },
      {
        title: "Desserts",
        items: [
          {
            name: "Crème brûlée à la vanille",
            description: "Vanille de Madagascar, cassonade caramélisée",
            price: "9€",
            allergens: ["eggs", "milk"],
            badge: "Signature",
          },
          {
            name: "Fondant au chocolat",
            description: "Cœur coulant, glace maison",
            price: "10€",
            allergens: ["eggs", "milk", "gluten"],
          },
          {
            name: "Poire pochée",
            description: "Épices douces, sirop léger, éclats de noix",
            price: "9€",
            allergens: ["nuts"],
            badge: "Sans gluten",
          },
        ],
      },
      {
        title: "Boissons",
        note: "Sélection courte. Carte des vins sur demande.",
        items: [
          { name: "Eau plate / pétillante", description: "75cl", price: "6€" },
          { name: "Café", description: "Expresso", price: "3€" },
          { name: "Thé", description: "Sélection de thés", price: "4€" },
          {
            name: "Verre de vin",
            description: "Blanc / Rouge (selon sélection)",
            price: "7€",
            allergens: ["sulphites"],
          },
        ],
      },
    ],
    footerNote:
      "Merci de signaler toute allergie à notre équipe. Prix TTC. Service compris.",
  },

  nl: {
    meta: {
      restaurantName: "La Maison",
      lastUpdated: "Januari 2026",
      currency: "EUR",
    },
    hero: {
      label: "Ons Menu",
      title: "Een Reis door de Seizoenen",
      description:
        "Een keuken geleid door seizoensproducten, respect voor ingrediënten en vakmanschap. Het menu kan variëren volgens de aanvoer.",
    },
    categories: [
      {
        title: "Voorgerechten",
        note: "Om te delen of als voorgerecht.",
        items: [
          {
            name: "Pompoenvelouté",
            description: "Lichte room, hazelnootolie, krokante croutons",
            price: "9€",
            allergens: ["milk", "gluten", "nuts"],
          },
          {
            name: "Zeebaartartaar",
            description: "Citrus, verse kruiden, zachte chili",
            price: "15€",
            allergens: ["fish"],
            badge: "Signature",
          },
          {
            name: "Geroosterde bietensalade",
            description: "Verse geitenkaas, walnoten, honingvinaigrette",
            price: "12€",
            allergens: ["milk", "nuts"],
            badge: "Vegetarien",
          },
        ],
      },
      {
        title: "Hoofdgerechten",
        note: "Bereid met zorgvuldig geselecteerde seizoensproducten.",
        items: [
          {
            name: "Gegrilde rundsfilet",
            description: "Pepersaus, marktgroenten, gereduceerde jus",
            price: "29€",
            allergens: ["milk"],
            badge: "Chef",
          },
          {
            name: "Paddenstoelenrisotto",
            description: "Gerijpte Parmezaan, lichte emulsie, kruiden",
            price: "24€",
            allergens: ["milk"],
            badge: "Vegetarien",
          },
          {
            name: "Gekonfijte kabeljauw",
            description: "Selderijpuree, citroenboter, kruiden",
            price: "27€",
            allergens: ["fish", "milk", "celery"],
          },
        ],
      },
      {
        title: "Desserts",
        items: [
          {
            name: "Vanillecrème brûlée",
            description: "Madagascar vanille, gekaramelliseerde suiker",
            price: "9€",
            allergens: ["eggs", "milk"],
            badge: "Signature",
          },
          {
            name: "Chocoladefondant",
            description: "Vloeibare kern, huisgemaakt ijs",
            price: "10€",
            allergens: ["eggs", "milk", "gluten"],
          },
          {
            name: "Gepocheerde peer",
            description: "Zachte kruiden, lichte siroop, notenstukjes",
            price: "9€",
            allergens: ["nuts"],
            badge: "Sans gluten",
          },
        ],
      },
      {
        title: "Dranken",
        note: "Korte selectie. Wijnkaart op aanvraag.",
        items: [
          { name: "Plat / bruiswater", description: "75cl", price: "6€" },
          { name: "Koffie", description: "Espresso", price: "3€" },
          { name: "Thee", description: "Selectie van theesoorten", price: "4€" },
          {
            name: "Glas wijn",
            description: "Wit / Rood (volgens selectie)",
            price: "7€",
            allergens: ["sulphites"],
          },
        ],
      },
    ],
    footerNote:
      "Gelieve allergieën te melden aan ons team. Prijzen inclusief btw. Service inbegrepen.",
  },

  en: {
    meta: {
      restaurantName: "La Maison",
      lastUpdated: "January 2026",
      currency: "EUR",
    },
    hero: {
      label: "Our Menu",
      title: "A Journey Through the Seasons",
      description:
        "A cuisine guided by seasonality, respect for ingredients, and craft. Menu items may vary depending on availability.",
    },
    categories: [
      {
        title: "Starters",
        note: "To share or to enjoy as a first course.",
        items: [
          {
            name: "Pumpkin velouté",
            description: "Light cream, hazelnut oil, golden croutons",
            price: "9€",
            allergens: ["milk", "gluten", "nuts"],
          },
          {
            name: "Sea bass tartare",
            description: "Citrus, fresh herbs, mild chili",
            price: "15€",
            allergens: ["fish"],
            badge: "Signature",
          },
          {
            name: "Roasted beet salad",
            description: "Fresh goat cheese, walnuts, honey vinaigrette",
            price: "12€",
            allergens: ["milk", "nuts"],
            badge: "Vegetarien",
          },
        ],
      },
      {
        title: "Mains",
        note: "Created with carefully selected seasonal produce.",
        items: [
          {
            name: "Grilled beef fillet",
            description: "Pepper sauce, market vegetables, reduced jus",
            price: "29€",
            allergens: ["milk"],
            badge: "Chef",
          },
          {
            name: "Mushroom risotto",
            description: "Aged parmesan, light emulsion, herbs",
            price: "24€",
            allergens: ["milk"],
            badge: "Vegetarien",
          },
          {
            name: "Confit cod",
            description: "Celeriac purée, lemon butter, herbs",
            price: "27€",
            allergens: ["fish", "milk", "celery"],
          },
        ],
      },
      {
        title: "Desserts",
        items: [
          {
            name: "Vanilla crème brûlée",
            description: "Madagascar vanilla, caramelized sugar",
            price: "9€",
            allergens: ["eggs", "milk"],
            badge: "Signature",
          },
          {
            name: "Chocolate fondant",
            description: "Molten center, house-made ice cream",
            price: "10€",
            allergens: ["eggs", "milk", "gluten"],
          },
          {
            name: "Poached pear",
            description: "Warm spices, light syrup, crushed nuts",
            price: "9€",
            allergens: ["nuts"],
            badge: "Sans gluten",
          },
        ],
      },
      {
        title: "Drinks",
        note: "Short selection. Wine list available upon request.",
        items: [
          { name: "Still / sparkling water", description: "75cl", price: "6€" },
          { name: "Coffee", description: "Espresso", price: "3€" },
          { name: "Tea", description: "Tea selection", price: "4€" },
          {
            name: "Glass of wine",
            description: "White / Red (selection)",
            price: "7€",
            allergens: ["sulphites"],
          },
        ],
      },
    ],
    footerNote:
      "Please inform our team of any allergies. Prices include VAT. Service included.",
  },
}
