/*  TEST EXAMPLE
    ALL n IN Evens. EXISTS p, EXISTS q IN Primes. n EQUALS p ADD q
    ∀n ∈ Evens. ∃p, q ∈ Primes. n = p + q. 
*/

const prompt = require("prompt-sync")({ sigint: true });
// To use: npm install prompt-sync

var input = prompt("INPUT: ").trim();
var process = input.split(" ");
var output = " ";

let length = process.length;

for (i = 0; i < length; i++)
{
    var conv = process[i].toString();
    var check = conv.toLowerCase();

    /* TODO: Occasionally get below error, but can't find exact problem
    TypeError: Cannot read properties of undefined (reading 'toString') */

    //Chose if-else over switch as wanted conditional operator control

    // Symbolic Notation
    if (check == "all" || check == "every")
    {
        process[i] = "∀";
    }
    else if (check == "in")
    {
        process[i] = "∈";
    }
    else if (check == "exists" || check == "exist")
    {
        process[i] = "∃";
    }

    // Generic Operators
    else if (check == "equals")
    {
        process[i] = "=";
    }
    else if (check == "add")
    {
        process[i] = "+";
    }
    
    // TODO: Trying many ways of removing space between specific whitespace-containing buckets in the process array. Failing.
    // 
    // (up above was: j = i + 1;)
    //
    // if (process[i] == "∃" || process[i] == "∀" && process[j] == " ")
    // {
    //     var index = process.indexOf(j);
    //     process.splice(j, 1);
    // }

    output = output.concat(" ", process[i]);
    
}

console.log(output);