export default function (server) {
  server.db.loadData({
    contacts: [
      {
        firstName: "John",
        lastName: "Doe",
        address: {
          street: "Steenstraat 1",
          postalCode: "8000",
          city: "Brugge",
          state: "West-Vlaanderen",
          country: "Belgium",
        },
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        address: {
          street: "Veldstraat 1",
          postalCode: "9000",
          city: "Gent",
          state: "Oost-Vlaanderen",
          country: "Belgium",
        },
      },
    ],
  });
}
