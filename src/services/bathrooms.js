import api from "./commom";

export function getBathrooms() {
  return new Promise(resolve => resolve(
    {
      data: [
        {
          "id": 1,
          "location": {
            "place": "Bar do Mário",
            "formatedAddress": "Rua tal, 192",
            "coordinates": {
              "lat": -10,
              "lng": -45
            }
          },
          "description": "Um ótimo lugar que dá a possibilidade de trancar pessoas pra dentro do banheiro caso pareçam mais suspeitas que o alçapão semi-secreto/misterioso no teto; péssimo lugar pra um date.",
          "characteristics": [
            { key: "clean", includes: true, description: "Limpo" },
            { key: "paper", includes: true, description: "Papel Higiênico" },
            { key: "accessibility", includes: true, description: "Acessibilidade" },
            { key: "light", includes: true, description: "Luzes" },
            { key: "flush", includes: true, description: "Descarga" },
            { key: "doorlock", includes: true, description: "Fechadura" }
          ],
          "pictures": [
            "/Users/arthurmoro/Projects/where-to-poop/app/src/assets/images/bardomario/bardomario1.jpeg",
            "/Users/arthurmoro/Projects/where-to-poop/app/src/assets/images/bardomario/bardomario2.jpeg",
            "/Users/arthurmoro/Projects/where-to-poop/app/src/assets/images/bardomario/bardomario3.jpeg",
            "/Users/arthurmoro/Projects/where-to-poop/app/src/assets/images/bardomario/bardomario4.jpeg",

            "s3"
          ],
          "comments": [
            { user: "Arthur Moro", text: "Limpo, cheiroso e gostoso", createdAt: new Date() },
            { user: "Arthur Moro", text: "Limpo, cheiroso e gostoso", createdAt: new Date() },
            { user: "Arthur Moro", text: "Limpo, cheiroso e gostoso", createdAt: new Date() },
            { user: "Arthur Moro", text: "Limpo, cheiroso e gostoso", createdAt: new Date() },
          ]
        },
        {
          "id": 2,
          "location": {
            "place": "Bar do Mário 2",
            "formatedAddress": "Rua tal, 192 2",
            "coordinates": {
              "lat": -11,
              "lng": -45
            }
          },
          "description": "Um ótimo lugar que dá a possibilidade de trancar pessoas pra dentro do banheiro caso pareçam mais suspeitas que o alçapão semi-secreto/misterioso no teto; péssimo lugar pra um date.",
          "characteristics": [
            "clean",
            "accessibility",
            "paper",
            "light",
            "flush",
            "doorlock"
          ],
          "pictures": [
            "/Users/arthurmoro/Projects/where-to-poop/app/src/assets/images/bardomario/bardomario1.jpeg",
            "/Users/arthurmoro/Projects/where-to-poop/app/src/assets/images/bardomario/bardomario2.jpeg",
            "/Users/arthurmoro/Projects/where-to-poop/app/src/assets/images/bardomario/bardomario3.jpeg",
            "/Users/arthurmoro/Projects/where-to-poop/app/src/assets/images/bardomario/bardomario4.jpeg",

            "s3"
          ],
          "comments": [
            { user: "Arthur Moro", text: "Limpo, cheiroso e gostoso", createdAt: new Date() },
            { user: "Arthur Moro", text: "Limpo, cheiroso e gostoso", createdAt: new Date() },
            { user: "Arthur Moro", text: "Limpo, cheiroso e gostoso", createdAt: new Date() },
            { user: "Arthur Moro", text: "Limpo, cheiroso e gostoso", createdAt: new Date() },
          ]
        }
      ]
    }
  ))
}