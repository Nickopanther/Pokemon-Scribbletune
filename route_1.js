const scribble = require('scribbletune');


// console.log(scribble);



var route_1 = scribble.clip({

  // - <------- That dash means it is a rest beat

  // _ <----- That means the note holds down

          // First Part
  notes: ['d4', 'e4', 'f#4', 'f#4', 'f#4',
         'd4', 'e4', 'f#4', 'f#4', 'f#4',
         'd4', 'e4', 'f#4', 'f#4', 'g4', 'f#4', 'e4',

         'c#4', 'd4', 'e4', 'e4', 'e4',
         'c#4', 'd4', 'e4', 'e4', 'e4',
         'c#4', 'd4', 'e4', 'e4', 'f#4', 'e4', 'e4', 'f#4', 'd4',

         'd4', 'e4', 'f#4', 'f#4', 'f#4',
         'd4', 'e4', 'f#4', 'f#4', 'f#4',
         'd4', 'e4', 'f#4', 'f#4', 'g4', 'f#4', 'e4',

         'c#4', 'd4', 'e4', 'g4', 'f#4', 'e4', 'd4', 'c#4', 'b3', 'd4', 'a4', 'c#4', 'd4',

         // Second Part
         'f#4', 'g4', 'a4', 'a4', 'f#4', 'd4', 'd5', 'c#5', 'b4', 'c#5', 'a4', 'f#4', 'd4', 'f#4', 'e4',
         'f#4', 'g4', 'a4', 'a4', 'f#4', 'd4', 'd5', 'c#5', 'b4', 'g4', 'a4', 'd5', 'c#5', 'e5', 'd5',

          // First Part
          'd4', 'e4', 'f#4', 'f#4', 'f#4',
          'd4', 'e4', 'f#4', 'f#4', 'f#4',
          'd4', 'e4', 'f#4', 'f#4', 'g4', 'f#4', 'e4',

          'c#4', 'd4', 'e4', 'e4', 'e4',
          'c#4', 'd4', 'e4', 'e4', 'e4',
          'c#4', 'd4', 'e4', 'e4', 'f#4', 'e4', 'e4', 'f#4', 'd4', 'f#4',

          'd4', 'e4', 'f#4', 'f#4', 'f#4',
          'd4', 'e4', 'f#4', 'f#4', 'f#4',
          'd4', 'e4', 'f#4', 'f#4', 'g4', 'f#4', 'e4',

          'c#4', 'd4', 'e4', 'g4', 'f#4', 'e4', 'd4', 'c#4', 'b3', 'd4', 'a4', 'c#4', 'd4',

           // Second Part
          'f#4', 'g4', 'a4', 'a4', 'f#4', 'd4', 'd5', 'c#5', 'b4', 'c#5', 'a4', 'f#4', 'd4', 'f#4', 'e4',
          'f#4', 'g4', 'a4', 'a4', 'f#4', 'd4', 'd5', 'c#5', 'b4', 'g4', 'a4', 'd5', 'c#5', 'e5', 'd5',

          // Ending
          'd4', 'e4', 'f#4', 'f#4', 'f#4',
          'd4', 'e4', 'f#4', 'f#4', 'f#4',
          'd4', 'e4', 'f#4', 'f#4', 'g4', 'f#4', 'e4',

          'c#4', 'd4', 'e4', 'g4', 'f#4', 'e4', 'd4', 'c#4', 'b3', 'd4', 'a4', 'c#4', 'd4', 'c#3', 'd3'
],
          // First Part
  pattern: 'xxx-x-x-'
          +'xxx-x-x-'
          +'xxx-x-x__xx___-'

          +'xxx-x-x-'
          +'xxx-x-x-'
          +'xxx-x-xxxxx___-'

          +'xxx-x-x-'
          +'xxx-x-x-'
          +'xxx-x-x__xx___-'

          +'xxx-x-x-x-x-x-x-x-x___x___x___-'

          // Second Part
          +'xxx-x-x-x-x-x-x-x-x-x-x__xx____'
          +'xxx-x-x-x-x-x-x-x-x-x-x-x-x____-'

          // First Part
          +'xxx-x-x-'
          +'xxx-x-x-'
          +'xxx-x-x__xx___-'

          +'xxx-x-x-'
          +'xxx-x-x-'
          +'xxx-x-xxxxx___x_'

          +'xxx-x-x-'
          +'xxx-x-x-'
          +'xxx-x-x__xx___-'

          +'xxx-x-x-x-x-x-x-x-x___x___x___-'

          // Second Part
          +'xxx-x-x-x-x-x-x-x-x-x-x__xx____'
          +'xxx-x-x-x-x-x-x-x-x-x-x-x-x____-'

          // Ending
          +'xxx-x-x-'
          +'xxx-x-x-'
          +'xxx-x-x__xx___-'

          +'xxx-x-x-x-x-x-x-x-x___x___x_x_x__________----'
});
scribble.midi(route_1, 'route_1.midi');
/*
var route_1LowOctave = scribble.clip({

  // - <------- That dash means it is a rest beat

  // _ <----- That means the note holds down

          // First Part
  notes:  ['d3' 'e3' 'f#3' 'f#3' 'f#3'
          'd3' 'e3' 'f#3' 'f#3' 'f#3'
          'd3' 'e3' 'f#3' 'f#3' 'g3' 'f#3' 'e3'

          'c#3' 'd3' 'e3' 'e3' 'e3'
          'c#3' 'd3' 'e3' 'e3' 'e3'
          'c#3' 'd3' 'e3' 'e3' 'f#3' 'e3' 'e3' 'f#3' 'd3'

          'd3' 'e3' 'f#3' 'f#3' 'f#3'
          'd3' 'e3' 'f#3' 'f#3' 'f#3'
          'd3' 'e3' 'f#3' 'f#3' 'g3' 'f#3' 'e3'

          'c#3' 'd3' 'e3' 'g3' 'f#3' 'e3' 'd3' 'c#3' 'b2' 'd3' 'a3' 'c#3' 'd3'

          // Second Part
          'f#3' 'g3' 'a3' 'a3' 'f#3' 'd3' 'd4' 'c#4' 'b3' 'c#4' 'a3' 'f#3' 'd3' 'f#3' 'e3'
          'f#3' 'g3' 'a3' 'a3' 'f#3' 'd3' 'd4' 'c#4' 'b3' 'g3' 'a3' 'd4' 'c#4' 'e4' 'd4'

        // First Part
        'd3' 'e3' 'f#3' 'f#3' 'f#3'
        'd3' 'e3' 'f#3' 'f#3' 'f#3'
        'd3' 'e3' 'f#3' 'f#3' 'g3' 'f#3' 'e3'

        'c#3' 'd3' 'e3' 'e3' 'e3'
        'c#3' 'd3' 'e3' 'e3' 'e3'
        'c#3' 'd3' 'e3' 'e3' 'f#3' 'e3' 'e3' 'f#3' 'd3'

        'd3' 'e3' 'f#3' 'f#3' 'f#3'
        'd3' 'e3' 'f#3' 'f#3' 'f#3'
        'd3' 'e3' 'f#3' 'f#3' 'g3' 'f#3' 'e3'

        'c#3' 'd3' 'e3' 'g3' 'f#3' 'e3' 'd3' 'c#3' 'b2' 'd3' 'a3' 'c#3' 'd3'

        // Second Part
        'f#3' 'g3' 'a3' 'a3' 'f#3' 'd3' 'd4' 'c#4' 'b3' 'c#4' 'a3' 'f#3' 'd3' 'f#3' 'e3'
        'f#3' 'g3' 'a3' 'a3' 'f#3' 'd3' 'd4' 'c#4' 'b3' 'g3' 'a3' 'd4' 'c#4' 'e4' 'd4'

        // Ending
        'd3' 'e3' 'f#3' 'f#3' 'f#3'
        'd3' 'e3' 'f#3' 'f#3' 'f#3'
        'd3' 'e3' 'f#3' 'f#3' 'g3' 'f#3' 'e3'

        'c#3' 'd3' 'e3' 'g3' 'f#3' 'e3' 'd3' 'c#3' 'b2' 'd3' 'a3' 'c#3' 'd3' 'c#2' 'd2'
],

          // First Part
  pattern: 'xxx-x-x-'
          +'xxx-x-x-'
          +'xxx-x-x__xx___-'

          +'xxx-x-x-'
          +'xxx-x-x-'
          +'xxx-x-xxxxx___-'

          +'xxx-x-x-'
          +'xxx-x-x-'
          +'xxx-x-x__xx___-'

          +'xxx-x-x-x-x-x-x-x-x___x___x___-'

          // Second Part
          +'xxx-x-x-x-x-x-x-x-x-x-x__xx____'
          +'xxx-x-x-x-x-x-x-x-x-x-x-x-x____-'

          // First Part
          +'xxx-x-x-'
          +'xxx-x-x-'
          +'xxx-x-x__xx___-'

          +'xxx-x-x-'
          +'xxx-x-x-'
          +'xxx-x-xxxxx___-'

          +'xxx-x-x-'
          +'xxx-x-x-'
          +'xxx-x-x__xx___-'

          +'xxx-x-x-x-x-x-x-x-x___x___x___-'

          // Second Part
          +'xxx-x-x-x-x-x-x-x-x-x-x__xx____'
          +'xxx-x-x-x-x-x-x-x-x-x-x-x-x____-'

          // Ending
          +'xxx-x-x-'
          +'xxx-x-x-'
          +'xxx-x-x__xx___-'

          +'xxx-x-x-x-x-x-x-x-x___x___x_x_x__________----'
});
*/

/*
var route_1LowOctaveTwo = scribble.clip({

  // First Part
  notes: ['d3', 'e3', 'f#3', 'f#3', 'f#3',
  'd3', 'e3', 'f#3', 'f#3', 'f#3',
  'd3', 'e3', 'f#3', 'f#3', 'g3', 'f#3', 'e3',

  'c#3', 'd3', 'e3', 'e3', 'e3',
  'c#3', 'd3', 'e3', 'e3', 'e3',
  'c#3', 'd3', 'e3', 'e3', 'f#3', 'e3', 'e3', 'f#3', 'd3', 'f#3',

  'd3', 'e3', 'f#3', 'f#3', 'f#3',
  'd3', 'e3', 'f#3', 'f#3', 'f#3',
  'd3', 'e3', 'f#3', 'f#3', 'g3', 'f#3', 'e3',

  'c#3', 'd3', 'e3', 'g3', 'f#3', 'e3', 'd3', 'c#3', 'b2', 'd3', 'a3', 'c#3', 'd3',

  // Second Part
  'f#3', 'g3', 'a3', 'a3', 'f#3', 'd3', 'd4', 'c#4', 'b3', 'c#4', 'a3', 'f#3', 'd3', 'f#3', 'e3',
  'f#3', 'g3', 'a3', 'a3', 'f#3', 'd3', 'd4', 'c#4', 'b3', 'g3', 'a3', 'd4', 'c#4', 'e4', 'd4'
],

        // First Part
pattern: 'xxx-x-x-'
        +'xxx-x-x-'
        +'xxx-x-x__xx___-'

        +'xxx-x-x-'
        +'xxx-x-x-'
        +'xxx-x-xxxxx___x_'

        +'xxx-x-x-'
        +'xxx-x-x-'
        +'xxx-x-x__xx___-'

        +'xxx-x-x-x-x-x-x-x-x___x___x___-'

        // Second Part
        +'xxx-x-x-x-x-x-x-x-x-x-x__xx____'
        +'xxx-x-x-x-x-x-x-x-x-x-x-x-x____-'




});
*/
