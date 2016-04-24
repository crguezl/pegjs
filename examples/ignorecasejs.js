  var PEG, coffee, grammar, parser, r;

  PEG = require('pegjs');

  grammar = 'start = a:\'a\'i ';

  parser = PEG.buildParser(grammar);

  r = parser.parse('A');

  console.log(r);

  parser = PEG.buildParser(grammar);

  r = parser.parse('a');

  console.log(r);

