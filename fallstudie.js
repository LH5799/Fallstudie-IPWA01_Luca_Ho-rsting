new Vue({
  el: '#app',
  data() {
    return {
      items: [
        { unternehmen: "Muster GmbH", land: "Deutschland", emissionen: 348 },
        { unternehmen: "New York e.U.", land: "USA", emissionen: 1200 },
        { unternehmen: "Test-Firma", land: "Deutschland", emissionen: 600 },
        { unternehmen: "William and Son", land: "England", emissionen: 400 },
        { unternehmen: "Azienda campione", land: "Italien", emissionen: 780 },
        { unternehmen: "Eksempel på virksomhed", land: "Dänemark", emissionen: 250 },
        { unternehmen: "Entreprise modèle", land: "Frankreich", emissionen: 600 },
        { unternehmen: "Mon entreprise", land: "Frankreich", emissionen: 1100 },
        { unternehmen: "Moja firma", land: "Polen", emissionen: 354 },
        { unternehmen: "Företag e.U.", land: "Schweden", emissionen: 450 },
        { unternehmen: "MyTable inc.", land: "USA", emissionen: 680 },
      ],
      fields: [
        {
          key: 'unternehmen',
          sortable: true
        },
        {
          key: 'land',
          sortable: true
        },
        {
          key: 'emissionen',
          sortable: false
        },
      ],
      filter: '',
    }
  }
})

  