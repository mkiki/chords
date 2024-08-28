registerSong({
  name: "examples",
  title: "Examples",
  tuning: "openg",
  categories: [ "banjo" ],
  tempo: 120,
  tab: [
    { 
      name: "Bum Ditty",
      measures: [
        {
          groups: [
            { notes: [ "E30", "S10,S20,S30", "S50" ] },
            { notes: [ "E30", "S10,S20,S30", "S50" ] },
          ]
        },
      ]
    },
    {
      name: "Chords",
      measures: [
        {
          groups: [
            { chord: "G", notes: [ "E30", "S10,S20,S30", "S50" ] },
            { notes: [ "E30", "S10,S20,S30", "S50" ] },
          ]
        },
        {
          groups: [
            { chord: "C", notes: [ "E32", "S12,S21,S32", "S50" ] },
            { notes: [ "E32", "S12,S21,S32", "S50" ] },
          ]
        },
      ]
    },
    { 
      name: "Hammer on",
      measures: [
        {
          groups: [
            { notes: [ "S30", "S32H", "S10,S20,S30", "S50" ] },
            { notes: [ "S30", "S32H", "S20", "S21H" ] },
          ]
        },
      ]
    },
    { 
      name: "Pull off",
      measures: [
        {
          groups: [
            { notes: [ "S32", "S30P", "S10,S20,S30", "S50" ] },
            { notes: [ "S30", "S32H", "S21", "S20P" ] },
          ]
        },
      ]
    },
    { 
      name: "Slide",
      measures: [
        {
          groups: [
            { notes: [ "S32", "S34S", "S10,S20,S34", "S50" ]},
            { notes: [ "E20", "S21", "S50" ]},
          ]
        },
      ]
    },
    { 
      name: "Dropped thumb",
      measures: [
        {
          groups: [
            { notes: [ "E20", "S10,S20,S30", "S50" ]},
            { notes: [ "S20", "S37+T", "S10,S20,S30", "S50" ]},
          ],
        },
      ]
    },
    { 
      name: "Ghost notes",
      measures: [
        {
          groups: [
            { notes: [ "E30", "S10,S20,S30", "S50" ]},
            { notes: [ "S20g", "S30+T", "S42", "S40P" ]},
          ]
        },
      ]
    },
    { 
      name: "Foot note",
      measures: [
        {
          groups: [
            { notes: [ "S31", "S30P", "E45" ]},
            { notes: [ "S45", "S30+(x)", "S31", "S50" ]},
          ],
        },
      ]
    },
  ],
});



