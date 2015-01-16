var esprima = require('esprima');
var escodegen = require('escodegen');
var fs = require('fs');

var NUM_RUNS = 100;

var jqueryContents = fs.readFileSync('jquery-1.11.2.js');
var jqueryAST = esprima.parse(jqueryContents);

function generate() {
    var start = process.hrtime();
    for (i = 0; i < NUM_RUNS; ++i) {
        escodegen.generate(jqueryAST);
    }
    var diff = process.hrtime(start);
    return diff[0] * 1e9 + diff[1];
}

console.log(generate());
