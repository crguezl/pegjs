"use strict";
const util = require('util');
const ins = x => util.inspect(x, { depth: null})
const peg = require( "pegjs" );
const sinon = require( "sinon" );

const grammar = `
  start = ab+
  ab = 'a' / 'b'
`;
const parser = peg.generate( grammar, { trace: true } );
const tracer = { trace: sinon.spy() };

parser.parse( "abba", { tracer: tracer } );
const c = tracer.trace.callCount;
console.log(`tracer called ${c} times`);
for(let i=0; i<c; i++) {
  console.log(ins(tracer.trace.getCall(i).args));
}
