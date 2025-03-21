const clients = [
    {
        "id": 100,
        "name": "Boulangerie Le Délice",
        "category": "Boulangerie",
        "phone": "+228 90 12 34 56",
        "email": "contact@ledelice.tg",
        "latitude": 6.2319,
        "longitude": 1.2228,
        "address": "Avenue de la Présidence, Lomé, Togo"
    },
    {
        "id": 1,
        "name": "Boulangerie Le Délice",
        "category": "Boulangerie",
        "phone": "+228 90 12 34 56",
        "email": "contact@ledelice.tg",
        "latitude": 6.1319,
        "longitude": 1.2228,
        "address": "Avenue de la Présidence, Lomé, Togo"
    },
    {
        "id": 2,
        "name": "Pâtisserie Douceur Sucrée",
        "category": "Pâtisserie",
        "phone": "+228 92 45 67 89",
        "email": "douceursucree@togo.com",
        "latitude": 6.1406,
        "longitude": 1.2145,
        "address": "Rue des Palmiers, Lomé, Togo"
    },
    {
        "id": 3,
        "name": "Crèmerie La Fraîcheur",
        "category": "Crèmerie",
        "phone": "+228 91 32 56 78",
        "email": "contact@lafraicheur.tg",
        "latitude": 6.1254,
        "longitude": 1.2178,
        "address": "Boulevard du 13 Janvier, Lomé, Togo"
    },
    {
        "id": 4,
        "name": "Pizzeria Bella Napoli",
        "category": "Pizzeria",
        "phone": "+228 98 76 54 32",
        "email": "info@bellanapoli.tg",
        "latitude": 6.1372,
        "longitude": 1.2293,
        "address": "Avenue de la Libération, Lomé, Togo"
    },
    {
        "id": 5,
        "name": "Boulangerie La Parisienne",
        "category": "Boulangerie",
        "phone": "+228 93 55 67 21",
        "email": "contact@laparisienne.tg",
        "latitude": 6.1280,
        "longitude": 1.2305,
        "address": "Rue du Commerce, Lomé, Togo"
    },
    {
        "id": 6,
        "name": "Pâtisserie Royal Cake",
        "category": "Pâtisserie",
        "phone": "+228 99 88 77 66",
        "email": "royalcake@togo.com",
        "latitude": 6.1441,
        "longitude": 1.2103,
        "address": "Boulevard Circulaire, Lomé, Togo"
    },
    {
        "id": 7,
        "name": "Crèmerie Lait Frais",
        "category": "Crèmerie",
        "phone": "+228 94 78 65 32",
        "email": "info@laitfrais.tg",
        "latitude": 6.1365,
        "longitude": 1.2209,
        "address": "Avenue des Cocotiers, Lomé, Togo"
    },
    {
        "id": 8,
        "name": "Pizzeria Roma",
        "category": "Pizzeria",
        "phone": "+228 97 45 78 23",
        "email": "roma@togo.com",
        "latitude": 6.1302,
        "longitude": 1.2157,
        "address": "Rue de la Paix, Lomé, Togo"
    },
    {
        "id": 9,
        "name": "Boulangerie TogoPain",
        "category": "Boulangerie",
        "phone": "+228 95 36 47 81",
        "email": "togopain@togo.com",
        "latitude": 6.1348,
        "longitude": 1.2245,
        "address": "Marché de Lomé, Lomé, Togo"
    },
    {
        "id": 10,
        "name": "Pâtisserie Mille Feuilles",
        "category": "Pâtisserie",
        "phone": "+228 96 21 32 87",
        "email": "millefeuilles@togo.com",
        "latitude": 6.1275,
        "longitude": 1.2263,
        "address": "Avenue des Nations, Lomé, Togo"
    },
    {
        "id": 11,
        "name": "Crèmerie Délice Glacé",
        "category": "Crèmerie",
        "phone": "+228 99 99 99 99",
        "email": "deliceglace@togo.com",
        "latitude": 6.1423,
        "longitude": 1.2198,
        "address": "Boulevard des Armées, Lomé, Togo"
    },
    {
        "id": 12,
        "name": "Pizzeria Venezia",
        "category": "Pizzeria",
        "phone": "+228 98 32 12 56",
        "email": "venezia@togo.com",
        "latitude": 6.1459,
        "longitude": 1.2167,
        "address": "Place de l'Indépendance, Lomé, Togo"
    },
    {
        "id": 13,
        "name": "Boulangerie La Gourmandise",
        "category": "Boulangerie",
        "phone": "+228 91 23 45 67",
        "email": "lagourmandise@togo.com",
        "latitude": 6.1500,
        "longitude": 1.2300,
        "address": "Rue de la République, Lomé, Togo"
    },
    {
        "id": 14,
        "name": "Pâtisserie Sucre d'Or",
        "category": "Pâtisserie",
        "phone": "+228 92 34 56 78",
        "email": "sucredor@togo.com",
        "latitude": 6.1600,
        "longitude": 1.2400,
        "address": "Avenue des Fleurs, Lomé, Togo"
    },
    {
        "id": 15,
        "name": "Crèmerie Glace Royale",
        "category": "Crèmerie",
        "phone": "+228 93 45 67 89",
        "email": "glaceroyale@togo.com",
        "latitude": 6.1700,
        "longitude": 1.2500,
        "address": "Boulevard de la Liberté, Lomé, Togo"
    },
    {
        "id": 16,
        "name": "Pizzeria La Dolce Vita",
        "category": "Pizzeria",
        "phone": "+228 94 56 78 90",
        "email": "ladolcevita@togo.com",
        "latitude": 6.1800,
        "longitude": 1.2600,
        "address": "Rue de la Paix, Lomé, Togo"
    },
    {
        "id": 17,
        "name": "Boulangerie Pain d'Or",
        "category": "Boulangerie",
        "phone": "+228 95 67 89 01",
        "email": "paindor@togo.com",
        "latitude": 6.1900,
        "longitude": 1.2700,
        "address": "Avenue des Étoiles, Lomé, Togo"
    },
    {
        "id": 18,
        "name": "Boulangerie Le Croissant Doré",
        "category": "Boulangerie",
        "phone": "+228 96 78 45 12",
        "email": "croissantdore@togo.com",
        "latitude": 6.2000,
        "longitude": 1.2800,
        "address": "Rue des Bougainvilliers, Lomé, Togo"
    },
    {
        "id": 19,
        "name": "Pâtisserie La Douceur",
        "category": "Pâtisserie",
        "phone": "+228 97 89 56 34",
        "email": "ladouceur@togo.com",
        "latitude": 6.2100,
        "longitude": 1.2900,
        "address": "Avenue des Baobabs, Lomé, Togo"
    },
    {
        "id": 20,
        "name": "Crèmerie Fraîcheur Sucrée",
        "category": "Crèmerie",
        "phone": "+228 98 90 67 45",
        "email": "fraicheursucree@togo.com",
        "latitude": 6.2200,
        "longitude": 1.3000,
        "address": "Boulevard des Tropiques, Lomé, Togo"
    },
    {
        "id": 21,
        "name": "Pizzeria La Bella Vita",
        "category": "Pizzeria",
        "phone": "+228 99 01 78 56",
        "email": "labellavita@togo.com",
        "latitude": 6.2300,
        "longitude": 1.3100,
        "address": "Rue des Hibiscus, Lomé, Togo"
    },
    {
        "id": 22,
        "name": "Boulangerie Le Pain Quotidien",
        "category": "Boulangerie",
        "phone": "+228 90 12 89 67",
        "email": "painquotidien@togo.com",
        "latitude": 6.2400,
        "longitude": 1.3200,
        "address": "Avenue des Manguiers, Lomé, Togo"
    },
    {
        "id": 23,
        "name": "Pâtisserie Délices Sucrés",
        "category": "Pâtisserie",
        "phone": "+228 91 23 90 78",
        "email": "delicessucre@togo.com",
        "latitude": 6.2500,
        "longitude": 1.3300,
        "address": "Boulevard des Acacias, Lomé, Togo"
    },
    {
        "id": 24,
        "name": "Crèmerie Glace et Délice",
        "category": "Crèmerie",
        "phone": "+228 92 34 01 89",
        "email": "glaceetdelice@togo.com",
        "latitude": 6.2600,
        "longitude": 1.3400,
        "address": "Rue des Orangers, Lomé, Togo"
    },
    {
        "id": 25,
        "name": "Pizzeria La Romaine",
        "category": "Pizzeria",
        "phone": "+228 93 45 12 90",
        "email": "laromaine@togo.com",
        "latitude": 6.2700,
        "longitude": 1.3500,
        "address": "Avenue des Jasmins, Lomé, Togo"
    }
];

 const FakeData = {
    clients
};

export default FakeData;