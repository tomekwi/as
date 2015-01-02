var test = require('tape');
var mapToObject = require('../object');

test('map-to/object', function (tape) {
  var deepEqual = Function.prototype.apply.bind(tape.deepEqual, null);

  [ [ mapToObject([])
    , {}
    ]

  , [ mapToObject(
      [ {key: 'a', value: 'b'}
      , {key: 'c', value: 'd'}
      ])
    , {a: 'b', c: 'd'}
    ]

  , [ mapToObject(
      [ {key: 'a', value: 'b'}
      , {key: 'c', value: 'd'}
      , {key: 'e', value: {key: 'f', value: 'g'}}
      ])
    , {a: 'b', c: 'd', e: {key: 'f', value: 'g'}}
    ]

  , [ mapToObject(
      [ {key: 'a', value: 'b'}
      , null
      , {key: 'c', value: 'd'}
      , undefined
      , {}
      , "a string"
      , true
      ])
    , {a: 'b', c: 'd'}
    ]

  ].map(deepEqual);

  tape.end();
  });
