const svg = d3.select('#svg');

// const FLAT = "♭";
// const SHARP = "♯";

const tunings = {
  "openg": { name: "Open G" },
  "sawmill": { name: "Sawmill" },
  "doublec": { name: "Double C" },
};

const chords = [
  { name:    "G", tuning: "openg", firstFret: 0, frets: [  0, 0, 0, 0 ] },
  { name:    "G", tuning: "openg", firstFret: 3, frets: [  5, 4, 3, 5 ] },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },

  { name:    "A", tuning: "openg", firstFret: 0, frets: [  2, 2, 2, 2 ] },
  { name:   "Am", tuning: "openg", firstFret: 0, frets: [  0, 2, 1, 2 ] },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },

  { name:    "B", tuning: "openg", firstFret: 0, frets: [  4, 4, 4, 4 ] },
  { name:   "Bm", tuning: "openg", firstFret: 0, frets: [  -1, 4, 3, 4 ] },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },

  { name:    "C", tuning: "openg", firstFret: 0, frets: [  2, 0, 1, 2 ] },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },

  { name:    "D", tuning: "openg", firstFret: 0, frets: [  4, 2, 3, 4 ] },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },

  { name:    "Em", tuning: "openg", firstFret: 0, frets: [  2, 0, 0, 2 ] },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },

  { name:    "F", tuning: "openg", firstFret: 0, frets: [  3, 2, 1, 3 ] },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },
  { tuning: "openg" },


  // Sawmill
  { name: "Gsus", tuning: "sawmill", firstFret: 0, frets: [  0, 0, 0, 0 ] },
  { name:    "G", tuning: "sawmill", firstFret: 0, frets: [  0, 4, 2, 0 ] },
  { name:   "Gm", tuning: "sawmill", firstFret: 0, frets: [  0, 3, 2, 0 ] },
  { name:   "G7", tuning: "sawmill", firstFret: 0, frets: [ -1, 0, 2, 3 ] },
  { tuning: "sawmill" },
  { tuning: "sawmill" },

  { name:    "A", tuning: "sawmill", firstFret: 0, frets: [ -1, 2, 1, 2 ] },
  { name:   "Am", tuning: "sawmill", firstFret: 0, frets: [ -1, 2, 0, 2 ] },
  { tuning: "sawmill" },
  { tuning: "sawmill" },
  { tuning: "sawmill" },
  { tuning: "sawmill" },

  { name:   "B♭", tuning: "sawmill", firstFret: 0, frets: [  0, 3, 2, 3 ] },
  { tuning: "sawmill" },
  { tuning: "sawmill" },
  { tuning: "sawmill" },
  { tuning: "sawmill" },
  { tuning: "sawmill" },

  { name:    "C", tuning: "sawmill", firstFret: 0, frets: [  2, 0, 0, 2 ] },
  { name:   "Cm", tuning: "sawmill", firstFret: 0, frets: [  1, 0, 0, 1 ] },
  { tuning: "sawmill" },
  { tuning: "sawmill" },
  { tuning: "sawmill" },
  { tuning: "sawmill" },

  { name:    "D", tuning: "sawmill", firstFret: 0, frets: [  0, 2, 2, 4 ] },
  { name:    "D", tuning: "sawmill", firstFret: 0, frets: [  0, 2, 2, 0 ], comment: "No 3rd" },
  { name:   "Dm", tuning: "sawmill", firstFret: 0, frets: [  0, 2, 2, 3 ] },
  { name:   "D7", tuning: "sawmill", firstFret: 0, frets: [ -1, 2, 0, 0 ] },
  { tuning: "sawmill" },
  { tuning: "sawmill" },

  { name:   "E7", tuning: "sawmill", firstFret: 0, frets: [ -1, 1, 2, 0 ] },
  { name:  "Em7", tuning: "sawmill", firstFret: 0, frets: [ -1, 0, 2, 2 ] },
  { tuning: "sawmill" },
  { tuning: "sawmill" },
  { tuning: "sawmill" },
  { tuning: "sawmill" },

  { name:    "F", tuning: "sawmill", firstFret: 0, frets: [  3, 2, 0, 3 ] },
  { name:   "Fm", tuning: "sawmill", firstFret: 0, frets: [ -1, 1, 0, 3 ] },
  { tuning: "sawmill" },
  { tuning: "sawmill" },
  { tuning: "sawmill" },
  { tuning: "sawmill" },
];

const options = {
  columns: 12,        // number of columns (one chord per column)
  cgroups: 2,         // number of columns groups (the above will be divided into )
  chordw: 140,        // width of a chord
  chordh: 260,        // height of a chord
  
  // Chord diagram options
  fretw: 20,          // width of a fret
  freth: 30,          // height of a fret
  strokew: 2,         // stroke width to draw frets (fret 0 will be double width)
  frets: 4,           // number of frets in each chord
  color: 'black',     // color of the chords
  radius: 6,          // radius of the dots

  // Tabs
  stringColor: "#b1a792",
  stringh: 20,        // distance between 2 strings
  strings: 5,         // number of strings
  dspacing: {          // spacing (h) for each duration
    "2/4": { "S": 30, "E": 40, "Q": 80, "H": 120 },
    "3/4": { "S": 30, "E": 40, "Q": 80, "H": 120 },
    "4/4": { "S": 15, "E": 30, "Q": 40, "H": 80 },
  },
  barh: 6,            // vertical spacing between the horizontal bars representing half or quarter notes

  // Lyrics
  lyricsx: 1320,
  lyricsy: 60,
}

const songs = {
};

const registerSong = (name, song) => {
  songs[name] = song;
}


// Return the Roman number corresponding to the given number
const romanNumbers = [ "", "I", "II", "III", "IV", "V", "VI", "VII", 
                       "VIII", "IX", "X", "XI", "XII", "XIII", "XIV",
                       "XV", "XVI", "XVII", "XVIII" ];
const roman = (i) => {
  return romanNumbers[i];
}

const drawChord = (parent, chord, x, y) => {
  const g = parent.append('g')
               .attr('transform', `translate(${x}, ${y})`);

  // calculate the width of each text elements
  // Each Chord has 1 or 2 text elements. The first one is the name
  // of the chord (such as GmSus4), the second is a short comment
  // which will be displayed in smaller font size, for example and in
  // parenthesis, for example "(No 3rd)"
  const width1 = g.append("text")
    .text(chord.name)
    .attr('font-size', '2em')
    .style("visibility", "hidden")
    .node().getBBox().width;

  let width2 = 0;
  let comment = chord.comment;
  if (chord.comment) {
    comment = "(" + chord.comment + ")";
    width2 = g.append("text")
      .text(comment)
      .style("font-size", "1em")
      .style("visibility", "hidden")
      .node().getBBox().width;
  }

  g.selectAll("text").remove();

  const totalWidth = width1 + width2;
  const xtext = 0; 

  g.append('text')
   .text(chord.name)
   .attr('x', xtext)
   .attr('y', -40)
   .attr('text-anchor', 'start')
   .attr('font-size', '2em');

   if (comment) {
    g.append('text')
    .text(comment)
    .attr('x', xtext + width1 + 8)
    .attr('y', -40)
    .attr('text-anchor', 'start')
    .attr('font-size', '1em');
   }

   // vertical bars
  for (let i = 0; i < chord.frets.length; i++) {
    g.append('line')
     .attr('x1', i * options.fretw)
     .attr('x2', i * options.fretw)
     .attr('y1', 0)
     .attr('y2', options.freth * options.frets)
     .attr('stroke', options.color)
     .attr('stroke-width', options.strokew);
  }

  // horizontal bars
  for (let i=0; i <= options.frets; i++) {
    let w = options.strokew;
    if (i == 0 && chord.firstFret == 0) w = w * 2;
    g.append('line')
     .attr('x1', -options.strokew/2)
     .attr('x2', (chord.frets.length - 1) * options.fretw + options.strokew/2)
     .attr('y1', i * options.freth)
     .attr('y2', i * options.freth)
     .attr('stroke', options.color)
     .attr('stroke-width', w);    
  }

  // If chord does not start of fret 0, display the starting fret number
  if (chord.firstFret > 0) {
    g.append('text')
    .text(roman(chord.firstFret))
    .attr('x', -options.fretw - 4)
    .attr('y', options.freth/2)
    .attr('text-anchor', 'start')
    .attr('dominant-baseline', 'middle')
    .attr('font-size', '1em');
  }

  // dots
  for (let i = 0; i < chord.frets.length; i++) {

    // Fret 0 is a bit special since it's outisde of the chord shape
    let cx = i * options.fretw;
    let cy = -16;
    let fillOpacity = 0;
    if (chord.frets[i] > 0) {
      let shift = chord.firstFret == 0 ? 1 : chord.firstFret;
      cy = (chord.frets[i] - shift) * options.freth + options.freth/2;
      fillOpacity = 1;
    }

    if (chord.frets[i] >= 0) {
      g.append('circle')
        .attr('cx', cx)
        .attr('cy', cy)
        .attr('r', options.radius)
        .attr('stroke', options.color)
        .attr('stroke-width', options.strokew)
        .attr('fill', options.color)
        .attr('fill-opacity', fillOpacity);
    }
    else {
      g.append('line')
      .attr('x1', cx - options.radius)
      .attr('x2', cx + options.radius)
      .attr('y1', cy - options.radius)
      .attr('y2', cy + options.radius)
      .attr('stroke', options.color)
      .attr('stroke-width', options.strokew);
      g.append('line')
      .attr('x1', cx + options.radius)
      .attr('x2', cx - options.radius)
      .attr('y1', cy - options.radius)
      .attr('y2', cy + options.radius)
      .attr('stroke', options.color)
      .attr('stroke-width', options.strokew);
    }
  }
}


function clear(title, subtitle) {
  let x = 32;
  let y = 260;

  var svgEl = document.getElementById("svg");
  while (svgEl.firstChild) {
    svgEl.removeChild(svgEl.firstChild);
  }

  if (title) {
    svg.append('text')
      .text(title)
      .attr('class', 'title')
      .attr('x', x)
      .attr('y', y-200)
      .attr('text-anchor', 'start')
  }
  
  if (subtitle) {
    svg.append('text')
      .text(subtitle)
      .attr('class', 'subtitle')
      .attr('x', x)
      .attr('y', y-160)
      .attr('text-anchor', 'start')
  }
}


function showChords(displayOptions, tuningName) {
  const parent = svg;
  let x = 100;
  let y = 260;

  const tuning = tunings[tuningName];

  clear("Common Chords", tuning.name + " Tuning");

  const g = parent.append('g').attr('transform', `scale(0.75)`);

  const visibleChords = chords.filter(chord => chord.tuning === tuningName);
  
  for (let i=0; i<visibleChords.length; i++) {
    if (visibleChords[i].name) {
      drawChord(g, visibleChords[i], x, y);
    }
    x = x + options.chordw;
    if ((i+1) % (options.columns / options.cgroups) == 0) {
      x = x + options.chordw;
    }
    if ((i+1) % options.columns == 0) {
      x = 100;
      y = y + options.chordh;
    }
  }
}

function drawGroup(parent, dspacing, group, x, y) {
  const g = parent.append('g').attr('transform', `translate(${x}, ${y})`);

  // groups to control ordering
  const gchords = g.append('g');  // chords on top
  const gstrings = g.append('g'); // strings (horizontal lines) are behind
  const gliaisons = g.append('g'); // vertical lines are in the middle
  const gfrets = g.append('g');   // frets and notes are in front

  x = 0;
  let prevx = 0;
  let lastStep = 0;
  let maxy = options.stringh * (options.strings + 1);
  for (let i=0; i<group.notes.length; i++) {

    if (i == 0 && group.chord) {
      gchords.append('text')
      .text(group.chord)
      .attr('x', x)
      .attr('y', -32)
      .attr('text-anchor', 'start')
      .attr('dominant-baseline', 'middle')
      .attr('font-weight', 'bold')
      .attr('font-size', '1.2em');
    }

    const allNotes = group.notes[i];
    const eachNote = allNotes.split(",");
    let lowery = 0; // starting point of the vertical line
    for (let note of eachNote) {
      let comment = undefined;
      const index = note.indexOf('+');
      if (index >= 0) {
        comment = note.substring(index + 1);
        note = note.substring(0, index);
      }
      const duration = note.substring(0, 1);
      const string = parseInt(note.substring(1, 2), 10);
      const hasString = string === string; // if NaN/false, then this is a pause (soupir)
      let effect = "";
      if (note.endsWith("P") || note.endsWith("H") || note.endsWith("S") || note.endsWith("g")) 
        effect = note.substring(note.length - 1);
      let fret = note.substring(2, note.length - effect.length);
      if (effect == "g") fret = "(" + fret + ")";
      y = (string - 1) * options.stringh + 4;
      if (!hasString) y = (options.strings - 1) * options.stringh + 4;
      if (y > lowery) lowery = y;

      // show the fret number (white circle as a background)
      if (hasString) {
        gfrets.append('circle')
          .attr('cx', x)
          .attr('cy', y - 2)
          .attr('r', options.radius + 2)
          .attr('stroke', 'white')
          .attr('stroke-width', 0)
          .attr('fill', 'white');
          
          gfrets.append('text')
          .text(fret)
          .attr('x', x)
          .attr('y', y)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          /*.attr('font-weight', 'bold')*/
          .attr('font-family', 'times, serif')
          .attr('font-size', '1.2em');
      }

      // optional comment (below the tab)
      if (comment) {
        const circle = comment.startsWith("(") && comment.endsWith(")");
        if (circle) comment = comment.substring(1, comment.length-1);
        gstrings.append('text')
        .text(comment)
        .attr('x', x)
        .attr('y', options.strings * options.stringh + 52)
        .attr('text-anchor', 'start')
        .attr('dominant-baseline', 'middle')
        .attr('font-family', 'times, serif')
        .attr('font-size', '1.2em');
        if (circle) {
          gstrings.append('circle')
          .attr('cx', x + 5)
          .attr('cy', options.strings * options.stringh + 50)
          .attr('r', 12)
          .attr('stroke', 'black')/*
          .attr('stroke-width', 0)
           */
          .attr('fill', 'none');  
        }
      }

      // Effect (if any) - such as pull or hamer
      if (effect) {
        const deltay = effect == 'S' ? 12 : 0;
        if (effect != "g") {
          // white circle as a background
          gliaisons.append('circle')
            .attr('cx', x - lastStep/2)
            .attr('cy', y - options.stringh - 8 - 2 + deltay)
            .attr('r', options.radius + 2)
            .attr('stroke', 'white')
            .attr('stroke-width', 0)
            .attr('fill', 'white');

          // effect name ("H", "P", ...)
          gliaisons.append('text')
            .text(effect)
            .attr('x', x - lastStep/2)
            .attr('y', y - options.stringh - 8 + deltay)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('font-size', '0.8em');
        }

        // Arc for hammer and pull offs
        if (effect == "H" || effect == "P") {
          const geffect = gliaisons.append('g').attr('transform', `translate(${prevx - 26}, ${y - 64})`);
          geffect.append("path")
            .attr("d", "M 30 50 A 20 20 0 0 1 50 50")
            .attr("stroke", "black")
            .attr("stroke-width", 2)
            .attr("fill", "transparent");
        }
        // Diagonal line for slides
        else if (effect == "S") {
          gliaisons.append("line")
            .attr('x1', prevx + 8)
            .attr('x2', x - 8)
            .attr('y1', y + 2)
            .attr('y2', y - 6)
            .attr("stroke", "black")
            .attr("stroke-width", 2)
            .attr("fill", "transparent");
        }
      }

      // horizontal bars
      let bars = 0;
      let last = i == group.notes.length - 1;
      if (!last) {
        let nextDuration = group.notes[i+1].substring(0, 1);
        if (duration == "E" && (nextDuration == "E" || nextDuration == "S"))
          bars = 1;
        if (duration == "S" && (nextDuration == "S"))
          bars = 2;
        if (duration == "S" && (nextDuration == "E"))
          bars = 1;
      }

      lastStep = dspacing[duration];
      const nextx = x + lastStep;
      for (let j=0; j<bars; j++) {
        gliaisons.append('line')
        .attr('x1', x)
        .attr('x2', nextx)
        .attr('y1', maxy - j * options.barh)
        .attr('y2', maxy - j * options.barh)
        .attr('stroke', options.color)
        .attr('stroke-width', options.strokew * (j == 0 ? 2 : 1));
      }
    }

    // vertical line to connect the notes 
    gliaisons.append('line')
          .attr('x1', x)
          .attr('x2', x)
          .attr('y1', lowery + options.stringh / 2)
          .attr('y2', maxy)
          .attr('stroke', options.color)
          .attr('stroke-width', options.strokew);
  
    prevx = x;
    x = x + lastStep;
  }
  
  // horizontal bars (one for each string)
  for (let i=1; i<=options.strings; i++) {
    y = (i-1) * options.stringh;
    gstrings.append('line')
    .attr('x1', 0)
    .attr('x2', x)
    .attr('y1', y)
    .attr('y2', y)
    .attr('stroke', options.stringColor)
    .attr('stroke-width', options.strokew);
  }

  
  return x;
}

function drawEndMeasure(parent, x, y) {
  const g = parent.append('g')
  .attr('transform', `translate(${x}, ${y})`);

    // vertical bar
    g.append('line')
    .attr('x1', 0)
    .attr('x2', 0)
    .attr('y1', 1)
    .attr('y2', (options.strings - 1) * options.stringh - 1)
    .attr('stroke', options.stringColor)
    .attr('stroke-linecap', 'square')
    .attr('stroke-width', options.strokew * 2);

  return options.strokew;
}

function drawStartMeasure(parent, num, signature, x, y) {
  const g = parent.append('g')
               .attr('transform', `translate(${x}, ${y})`);

  let w = signature ? 80 : 30;  

  // measure number
  g.append('text')
  .text(num)
  .attr('x', 4)
  .attr('y', -8)
  .attr('text-anchor', 'start')
  .attr('stroke', options.stringColor)
  .attr('font-size', '1em');

  // vertical bar
  if (signature) {
    g.append('line')
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', 1)
      .attr('y2', (options.strings - 1) * options.stringh - 1)
      .attr('stroke', options.stringColor)
      .attr('stroke-linecap', 'square')
      .attr('stroke-width', options.strokew * 2);
  }

  // horizontal bars (one for each string)
  for (let i=1; i<=options.strings; i++) {
    y = (i-1) * options.stringh;
    g.append('line')
    .attr('x1', 0)
    .attr('x2', w)
    .attr('y1', y)
    .attr('y2', y)
    .attr('stroke', options.stringColor)
    .attr('stroke-width', options.strokew * 1);
  }
  if (signature) {
    g.append('text')
      .text(signature.substring(0, 1))
      .attr('x', 28)
      .attr('y', (options.stringh * options.strings)/2 - options.stringh/2 -6)
      .attr('text-anchor', 'middle')
      //.attr('font-weight', 'bold')
      .attr('font-family', 'times, serif')
      .attr('font-size', '2.4em')
      .attr('stroke', options.stringColor);

    g.append('text')
      .text(signature.substring(2))
      .attr('x', 28)
      .attr('y', (options.stringh * options.strings)/2 + options.stringh/2 +12)
      .attr('text-anchor', 'middle')
      //.attr('font-weight', 'bold')
      .attr('font-family', 'times, serif')
      .attr('font-size', '2.4em');
  }

  return w;
}

function loadSvg(name) {
  return fetch("name", {
    method: "GET",
    headers: {
        "Content-Type": "image/svg+xml"
    }
  })
  .then(response => response.text())
  .then(data => {
    var parser = new DOMParser();
    var svgDom = parser.parseFromString(data, "image/svg+xml");
    return svgDom;
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function drawEightNote(parent, x, y) {
  const g = parent.append('g').attr('transform', `translate(${x - 10}, ${y - 20}) scale(0.25)`);
  g.append('path')
    .attr('fill-rule', "evenodd")
    .attr('clip-rule', "evenodd")
    .attr('d', "M53.701,39.417c0-11.218,0.003-22.437-0.008-33.656   c0-0.986,0.008-1.823,1.39-1.758c0.919,0.043,1.315,0.366,1.41,1.297c0.422,4.159,1.062,8.261,3.218,11.964   c1.701,2.92,4.061,5.293,6.299,7.77c2.184,2.418,4.496,4.724,6.509,7.289c4.287,5.459,6.937,11.512,6.416,18.612   c-0.481,6.602-2.633,12.724-5.608,18.586c-0.502,0.991-1.051,1.964-1.598,2.933c-0.159,0.283-0.334,0.599-0.587,0.777   c-0.389,0.271-0.905,0.308-1.284,0.041c-0.402-0.283-0.076-0.682,0.071-0.998c1.646-3.512,3.26-7.035,4.384-10.761   c2.145-7.108,2.169-14.106-1.497-20.753c-3.262-5.91-8.166-9.852-14.806-11.471c-1.48-0.362-1.622-0.236-1.622,1.338   c-0.004,8.706-0.003,17.41-0.003,26.114c0,7.093,0,14.185,0,21.277c0,8.762-4.124,14.457-12.52,17.253   c-3.312,1.101-6.658,1.607-10.041,0.281c-4.613-1.814-6.488-5.979-4.783-10.647c1.208-3.308,3.565-5.722,6.321-7.752   c4.238-3.121,8.902-4.817,14.262-3.896c1.103,0.188,2.197,0.42,3.162,1.012c0.76,0.466,0.917,0.157,0.914-0.57   c-0.01-2.723,0-5.445,0-8.168C53.703,56.827,53.703,48.122,53.701,39.417z");
  return g;
}

function showSong(displayOptions, name) {
  const parent = svg;
  const song = songs[name];
  clear(song.title, song.author);

  let x = 100;
  let y = 260;

  // Tuning
  if (song.tuning) {
    parent.append('text')
      .text(tunings[song.tuning].name + " Tuning")
      .attr('class', 'tuning')
      .attr('x', options.lyricsx - 124)
      .attr('y', y - 210)
      .attr('text-anchor', 'end')
      .attr('font-size', '1em')
  }

  // Tempo
  if (song.tempo) {
    const g = parent.append('g').attr('class', 'tempo');
    const text = g.append('text')
      .text("= " + song.tempo)
      .attr('x', options.lyricsx - 124)
      .attr('y', y - 210 + 28)
      .attr('text-anchor', 'end')
      .attr('font-size', '1em');
    const width = text.node().getBBox().width;

    const note = g.append('g').attr('class', 'tempo-note');
    drawEightNote(note, options.lyricsx - 124 - width - 14, y - 210 + 28);
  }

  if (displayOptions.displayMode == "print") {
    const x0 = 20;
    const y0 = 140;

    // Draw tab
    if (song.tab && displayOptions.showTablature) {
      const gTablature = svg.append('g').attr('transform', `scale(0.4) translate(${x0}, ${y0})`);

      x = x0;
      y = y0 - 240;
      let mcount = 0; // modulo measure number [0..4[
      let mnum = 1; // absolute measure number
      let dspacing = options.dspacing["2/4"]; // default spacing
      for (let tab of song.tab) {
        mcount = 4;
        let name = tab.name;
        mnum = 1;

        /*if (name) {
          gTablature.append('text')
            .text(name)
            .attr('x', x0 - 40)
            .attr('y', y + 240 + 50)
            .attr('text-anchor', 'end')
            .attr('font-size', '2em');
        }*/

        let signature = tab.signature;
        if (signature)
          dspacing = options.dspacing[signature];
        for (measure of tab.measures) {
          if (measure.num) mnum = measure.num;
          if (mcount == 4) {
            x = x0;
            y = y + 240;
            mcount = 0;
          }
          x = x + drawStartMeasure(gTablature, mnum, signature, x, y);
          for (group of measure.groups) {
            x = x + drawGroup(gTablature, dspacing, group, x, y);
          }
          x = x + drawEndMeasure(gTablature, x, y);
          signature = null;
          mcount = mcount + 1;
          mnum = mnum + 1;
          if (measure.breakAfter) {
            x = x0;
            y = y + 240;
            mcount = 0;
          }
        }
      }
      y = y + 80;
    }
    else {
      y = 80;
    }
    
    // Draw Lyrics
    if (displayOptions.showLyrics && song.lyrics) {
      const pageHeight = 682;
      //y = 80;
      const g = svg.append('g').attr('class', 'lyrics');
      for (const p of song.lyrics) {
        const rows = p.text;

        // next paragraph will end at position
        const nextY = y + 20 * rows.length;
        const page = Math.floor(y / pageHeight);
        const nextPage = Math.floor(nextY / pageHeight);
        if (nextPage > page) {
          y = (page + 1) * (pageHeight);
        }

        for (const row of rows) {
          let parts = [ ];
          if (row.startsWith("*") || row.endsWith("*")) {
            // row contains a bold substring
            const first = row.indexOf("*");
            const last = row.lastIndexOf("*");
            if (first > 0) {
              parts.push({ text: row.substring(0, first), bold: false });
            }
            parts.push({ text: row.substring(first+1, last), bold: true });
            if (last < row.length - 1) {
              parts.push({ text: row.substring(last+1), bold: false });
            }
          }
          else {
            parts.push({ text: row, bold: false });
          }

          x = 100; // 50%
          for (const part of parts) {
            const gtext = g.append('text')
              .text(part.text)
              .attr('x', x)
              .attr('y', y)
              .attr('text-anchor', 'start')
              .attr('font-size', '12pt')
              .attr('font-weight', part.bold ? 'bold' : 'normal');
            const width = gtext.node().getBBox().width;
            x = x + width;
          }
          y = y + 20;
        }
        y = y + 12;
      }
    }
  }


  if (displayOptions.displayMode == "screen") {
    const x0 = 120;
    const y0 = 140;

    // Draw tab
    if (song.tab && displayOptions.showTablature) {
      const gTablature = svg.append('g').attr('transform', `scale(0.75) translate(${x0}, ${y0})`);

      x = x0;
      y = y0 - 240;
      let mcount = 0; // modulo measure number [0..4[
      let mnum = 1; // absolute measure number
      let dspacing = options.dspacing["2/4"]; // default spacing
      for (let tab of song.tab) {
        mcount = 4;
        let name = tab.name;
        mnum = 1;

        if (name) {
          gTablature.append('text')
            .text(name)
            .attr('x', x0 - 40)
            .attr('y', y + 240 + 50)
            .attr('text-anchor', 'end')
            .attr('font-size', '2em');
        }

        let signature = tab.signature;
        if (signature)
          dspacing = options.dspacing[signature];
        for (measure of tab.measures) {
          if (measure.num) mnum = measure.num;
          if (mcount == 4) {
            x = x0;
            y = y + 240;
            mcount = 0;
          }
          x = x + drawStartMeasure(gTablature, mnum, signature, x, y);
          for (group of measure.groups) {
            x = x + drawGroup(gTablature, dspacing, group, x, y);
          }
          x = x + drawEndMeasure(gTablature, x, y);
          signature = null;
          mcount = mcount + 1;
          mnum = mnum + 1;
          if (measure.breakAfter) {
            x = x0;
            y = y + 240;
            mcount = 0;
          }
        }
      }
    }

    // Lyrics
    if (displayOptions.showLyrics && song.lyrics) {
      x = options.lyricsx;
      y = options.lyricsy;
      for (const p of song.lyrics) {
        const rows = p.text;

        for (const row of rows) {
          let parts = [ ];
          if (row.startsWith("*") || row.endsWith("*")) {
            // row contains a bold substring
            const first = row.indexOf("*");
            const last = row.lastIndexOf("*");
            if (first > 0) {
              parts.push({ text: row.substring(0, first), bold: false });
            }
            parts.push({ text: row.substring(first+1, last), bold: true });
            if (last < row.length - 1) {
              parts.push({ text: row.substring(last+1), bold: false });
            }
          }
          else {
            parts.push({ text: row, bold: false });
          }

          x = options.lyricsx;
          for (const part of parts) {
            const gtext = svg.append('text')
              .text(part.text)
              .attr('x', x)
              .attr('y', y)
              .attr('text-anchor', 'start')
              .attr('font-size', '1.4em')
              .attr('font-weight', part.bold ? 'bold' : 'normal');
              const width = gtext.node().getBBox().width;
              x = x + width;
            }
          y = y + 32;
        }
        y = y + 24;
      }
    }

    // Chords (horizontal)
    if (displayOptions.showTablature) {
      x = 750;
      y = y0 - 80; 
      if (song.chords) {
        const g = svg.append('g').attr('transform', `scale(0.5) translate(${x}, ${y})`);
        for (let i=0; i<song.chords.length; i++) {
          const chord = chords.find(chord => chord.name === song.chords[i] && chord.tuning == song.tuning);
          if (chord) {
            drawChord(g, chord, x + i * options.chordw, y);
          }
        }
      }
    }
  }
}