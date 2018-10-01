const scribble = require('scribbletune');

/*
    Pokemon Gold/Silver/Crystal - Goldenrod City
*/


let goldenrodcity = scribble.clip({

          // First Part
  notes: ['f5', 'c#5', 'd#5', 'c5', 'c#5', 'c5', 'a#4', 'c5', 'g#4',
          'g#4', 'a4', 'a#4', 'c#5', 'a#4', 'a#5', 'g#5', 'f#5', 'f5', 'f#5', 'g#5', 'f5', 'd#5',
          'f5', 'c#5', 'd#5', 'c5', 'c#5', 'c5', 'a#4', 'c5', 'g#4',
          'g#4', 'a4', 'a#4', 'c#5', 'a#4', 'a#5', 'g#5', 'f#5', 'g#5', 'a#5', 'c6', 'c#6', 'd#6',

          // Second parent
          'c#6', 'f6', 'c#6', 'c6', 'd#6', 'c6', 'g#5', 'a5', 'a#5', 'c#6', 'a#5', 'c6', 'd#6', 'g#5', 'a#5', 'b5', 'c6',
          'c#6', 'f6', 'c#6', 'c6', 'd#6', 'c6', 'g#5', 'a5', 'a#5', 'c#6', 'a#5', 'c6', 'd#6', 'f6', 'd#6', 'c#6', 'c6', 'g#5',

          // First Part
          'f5', 'c#5', 'd#5', 'c5', 'c#5', 'c5', 'a#4', 'c5', 'g#4',
          'g#4', 'a4', 'a#4', 'c#5', 'a#4', 'a#5', 'g#5', 'f#5', 'f5', 'f#5', 'g#5', 'f5', 'd#5',
          'f5', 'c#5', 'd#5', 'c5', 'c#5', 'c5', 'a#4', 'c5', 'g#4',
          'g#4', 'a4', 'a#4', 'c#5', 'a#4', 'a#5', 'g#5', 'f#5', 'g#5', 'a#5', 'c6', 'c#6', 'd#6',

          // Second parent
          'c#6', 'f6', 'c#6', 'c6', 'd#6', 'c6', 'g#5', 'a5', 'a#5', 'c#6', 'a#5', 'c6', 'd#6', 'g#5', 'a#5', 'b5', 'c6',
          'c#6', 'f6', 'c#6', 'c6', 'd#6', 'c6', 'g#5', 'a5', 'a#5', 'c#6', 'a#5', 'c6', 'd#6', 'f6', 'd#6', 'c#6', 'c6', 'g#5',

          // First Part
          'f5', 'c#5', 'd#5', 'c5', 'c#5', 'c5', 'a#4', 'c5', 'g#4',

],
          // First Part
  pattern: 'x___x___x___x___x_x_x_x_x____-'
          +'xxx___x___x_x_x_x_x_x_x_x_x_____-'
          +'x___x___x___x___x_x_x_x_x____-'
          +'xxx___x___x_x_x_x_x_x_x_x_x_____-'

          // Second part
          +'x_____x____x___x_____x____x_xxx_____x____x___x___x_x_x_x_x__-'
          +'x_____x____x___x_____x____x_xxx_____x____x___x___x_x_x_x_x_x_'

          // First part
          +'x___x___x___x___x_x_x_x_x____-'
          +'xxx___x___x_x_x_x_x_x_x_x_x_____-'
          +'x___x___x___x___x_x_x_x_x____-'
          +'xxx___x___x_x_x_x_x_x_x_x_x_____-'

          // Second part
          +'x_____x____x___x_____x____x_xxx_____x____x___x___x_x_x_x_x__-'
          +'x_____x____x___x_____x____x_xxx_____x____x___x___x_x_x_x_x_x_'

          // First part
          +'x___x___x___x___x_x_x_x_x________________________________________-----'

});



scribble.midi(goldenrodcity, 'goldenrodcity.midi');
