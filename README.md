# Print Guitar Chords

Deployed automatically using GitHub pages to https://mkiki.github.io/chords/


# Dev operations

```sh
npm start
```

# Song format

A song has the following attributes
* title
* author
* tuning
* chords, an array of the chords in this song
* tab, the tablature
* lyrics, the lyrics

### Add a song
* Create a JS file in the `songs` folder. This file must call the `registerSong` with a song object as a parameter
* Make sure the song has a unique name
* Choose one or multiple categories, either "banjo", "song", or both


### Tablature format

* A "signature", such as "2/4" or "4/4"
* An array of "measures"

Each measure is an object
* A "groups" array

Each group is a group of notes linked together in the measure
* An optional "chord" name which will be displayed above the group of notes
* An array of "notes"

Each "note" in a group is a string with a particular format
* First char is duration: H (half note), Q (quarter note), E (eight note), S (sixteenth note)
* If nothing more, then this represents a silence
* For actual notes, the duration is followed by 2 numbers, first the string nummber (1 for the top string, and 5 for the drone string), the the fret number
* Optionally, this can be followed by a comment statting with a "+". The comment will be displayed below the group note. Special comments surrounded with "(" and ")" will be displayed inside a circle
* To support multiple notes vertically, add a comma and another note. For example: "E10,E20,E30"
* For a hammer effect, add "H" suffix to the ending note
* For a pull off effect, add "P" suffix to the ending note
* For a slide effect, add "S" suffix to the ending note
* For a ghost note effect, add "g" suffix to the note

