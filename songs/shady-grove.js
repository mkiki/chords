registerSong({
  name: "shady-grove",
  title: "Shady Grove",
  author: "Doc Watson",
  tuning: "sawmill",
  categories: [ "banjo", "song" ],
  tempo: 120,
  chords: [ "Gsus", "F" ],
  tab: [
    { 
      name: "Verse/Chorus",
      signature: "2/4",
      measures: [
        {
          groups: [
            { chord: "Gmsus4", notes: [ "E30", "S10,S20,S30", "S50" ] },
            { notes: [ "E30", "S10,S20,S30", "S50" ] },
          ]
        },
        {
          groups: [
            { chord: "F Maj", notes: [ "S32", "S30P", "S10,S20,S30", "S50" ] },
            { notes: [ "S43", "S40P", "S10,S20,S30", "S50" ] }
          ]
        },
        {
          groups: [
            { chord: "Gmsus4", notes: [ "E30", "S10,S20,S30", "S50" ] },
            { notes: [ "S32", "S30P", "S20", "S50" ] }
          ]            
        },
        {
          groups: [
            { notes: [ "S20", "S22H", "S10,S22,S30", "S50" ] },
            { notes: [ "E22", "S10,S22,S30", "S50" ] },
          ]            
        },
        {
          groups: [
            { notes: [ "S10", "S13H", "S13,S20,S30", "S50" ] },
            { notes: [ "E13", "S13,S20,S30", "S50" ] },
          ]            
        },
        {
          groups: [
            { chord: "F Maj", notes: [ "S22", "S20P", "S10,S20,S30", "S50" ] },
            { notes: [ "E30", "S10,S20,S30", "S50" ] }
          ]            
        },
        {
          groups: [
            { notes: [ "E30", "S10,S20,S30", "S50" ] },
            { notes: [ "S32", "S30P", "E43" ] }
          ]            
        },
        {
          groups: [
            { notes: [ "E30", "S10,S20,S30", "S50" ] },
            { notes: [ "S40", "S43H", "S20,S30,S43", "S50" ] }
          ]            
        },
      ]
    },
    { 
      name: "Intro / Solo",
      signature: "2/4",
      measures: [

        {
          groups: [
            { chord: "Gmsus4", notes: [ "E30", "S10,S20,S30", "S50" ] },
            { notes: [ "E30", "S10,S20,S30", "S50" ] },
          ]
        },
        {
          groups: [
            { chord: "F Maj", notes: [ "S32", "S30P", "S10,S20,S30", "S50" ] },
            { notes: [ "E43", "S20,S30,S43", "S50" ] }
          ]
        },
        {
          groups: [
            { chord: "Gmsus4", notes: [ "E30", "S10,S20,S30", "S50" ] },
            { notes: [ "S32", "S30P", "S20", "S50" ] }
          ]            
        },
        {
          groups: [
            { notes: [ "S20", "S22H", "S10,S22,S30", "S50" ] },
            { notes: [ "E22", "S10,S22,S30", "S50" ] },
          ]            
        },
        {
          groups: [
            { notes: [ "S10", "S13H", "S13,S20,S30", "S50" ] },
            { notes: [ "E13", "S13,S20,S30", "S50" ] },
          ]            
        },
        {
          groups: [
            { chord: "F Maj", notes: [ "S22", "S20P", "S10,S20,S30", "S50" ] },
            { notes: [ "S32", "S30P", "S10,S20,S30", "S50" ] }
          ]            
        },
        {
          groups: [
            { notes: [ "E30", "S10,S20,S30", "S50" ] },
            { notes: [ "S32", "S30P", "E43" ] }
          ]            
        },
        {
          groups: [
            { notes: [ "Q30", "Q" ] },
          ]            
        },


      ]
    }
  ],
  lyrics: [
    {
      type: "struct", 
      text: [
        "(Intro)"
      ]
    },
    {
      type: "chorus",
      text: [
        "(Chorus) Shady Grove, my little love",
        "Shady Grove I say",
        "Shady Grove, my little love",
        "I’m (a) bound to go away"
      ],
    },
    {
      type: "verse",
      text: [
        "(Verse) Cheeks as red a blooming rose",
        "And eyes the prettiest brown",
        "She’s the darling of my heart",
        "Sweetest girl in town"
      ]
    },
    {
      type: "struct", 
      text: [
        "(Chorus)"
      ]
    },
    {
      type: "struct", 
      text: [
        "(Solo)"
      ]
    },
    {
      type: "verse",
      text: [
        "(Verse) I wish I had a big fine horse",
        "And corn to feed him on",
        "And Shady Grove to stay at home",
        "And feed him when I’m gone"          
      ]
    },
    {
      type: "struct", 
      text: [
        "(Chorus)"
      ]
    },
    {
      type: "verse",
      text: [
        "(Verse) Went to see my Shady Grove",
        "She was standing in the door",
        "Her shoes and stockin’s in her hand",
        "And her little bare feet on the floor"
      ]
    },
    {
      type: "struct", 
      text: [
        "(Chorus)"
      ]
    },
    {
      type: "verse",
      text: [
        "(Verse) When I was a little boy",
        "I wanted a Barlow knife",
        "And now I want little Shady Grove",
        "To say she’ll be my wife",
      ]
    },
    {
      type: "struct", 
      text: [
        "(Chorus)"
      ]
    },
    {
      type: "verse",
      text: [
        "(Verse) A kiss from pretty little Shady Grove",
        "Is sweet as brandy wine",
        "And there ain’t no girl in this old world",
        "That’s prettier than mine"
      ]
    },
  ]
});
