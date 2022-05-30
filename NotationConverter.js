/*  

    EXAMPLE INPUT: 
    ALL n IN Evens. EXISTS p, EXISTS q IN Primes. n EQUALS p ADD q.

    DESIRED OUTPUT:
    ∀n ∈ Evens. ∃p, ∃q ∈ Primes. n = p + q. 

    CURRENT OUTPUT:
    ∀ n ∈ Evens. ∃ p, ∃ q ∈ Primes. n = p + q.
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

    // Generic Operators
    if      (check == "equals" || check == "equal") { process[i] = "="; }
    else if (check == "add" || check == "plus")     { process[i] = "+"; }
    else if (check == "minus")                      { process[i] = "-"; }
    else if (check == "times" || check == "*")      { process[i] = "×"; }
    else if (check == "div")                        { process[i] = "/"; }
    else if (check == "goe" || check == ">=")       { process[i] = "≥"; }
    else if (check == "loe" || check == "<=")       { process[i] = "≤"; }
    else if (check == "mod")                        { process[i] = "%"; }
    else if (check == "mod2")                       { process[i] = "MOD"; }

    // Symbolic Notation
    else if (check == "in")                         { process[i] = "∈"; }
    else if (check == "and")                        { process[i] = "∧"; }
    else if (check == "or")                         { process[i] = "∨"; }
    else if (check == "exists" || check == "exist") { process[i] = "∃"; }
    else if (check == "not"  || check == "~")       { process[i] = "¬"; }
    else if (check == "all"  || check == "every")   { process[i] = "∀"; }
    else if (check == "then" || check == "implies") { process[i] = "⇒"; }
    else if (check == "iff"  || check == "iaoi")    { process[i] = "≡"; }
    else if (check == "iff2" || check == "iaoi2")   { process[i] = "⟺";}

    else if (check == "!in" 
          || check == "nin" 
          || check == "notin")                       { process[i] = "∉"; }  
    else if (check == "!exist" 
          || check == "notexist" 
          || check == "nexist" 
          || check == "nex")                         { process[i] = "∄"; }
    else if (check == "=/=" 
          || check == "dne" 
          || check == "notequals" 
          || check == "!=")                          { process[i] = "≠"; }

    else if (check == "therefore" 
          || check == "and so")                      { process[i] = "∴"; }
    else if (check == "because" 
          || check == "bc"
          || check == "since")                       { process[i] = "∵"; }
    
    // Set Notation
    // https://www.mathsisfun.com/sets/symbols.html
    else if (check == "suchthat"        || check == "st")           { process[i] = "|"; }
    else if (check == "suchthat"        || check == "st")           { process[i] = "∪"; }
    else if (check == "subsetof"        || check == "subset")       { process[i] = "⊆"; }
    else if (check == "intersection"    || check == "intsec")       { process[i] = "∩"; }
    else if (check == "propersubset"    || check == "propsub")      { process[i] = "⊂"; }
    else if (check == "superset"        || check == "supset")       { process[i] = "⊇"; }
    else if (check == "propersuperset"  || check == "propsup")      { process[i] = "⊃"; }
    else if (check == "notsubset"       || check == "!subset")      { process[i] = "⊄"; }
    else if (check == "!superset"       || check == "notsup")       { process[i] = "⊅"; }
    
    // Double-struck
    // https://en.wikipedia.org/wiki/Blackboard_bold
    else if (check == "emptyset" || check == "0set")    { process[i] = "Ø"; }
    else if (check == "nn" || check == "natnum")        { process[i] = "ℕ"; }
    else if (check == "zz" || check == "intset")        { process[i] = "ℤ"; }
    else if (check == "qq" || check == "ratset")        { process[i] = "ℚ"; }
    else if (check == "rr" || check == "realset")       { process[i] = "ℝ"; }
    else if (check == "nn" || check == "natset")        { process[i] = "ℕ"; }
    else if (check == "cc" || check == "compset")       { process[i] = "ℂ"; }
    else if (check == "dd" || check == "domain")        { process[i] = "𝔻"; }
    
    
    // TODO:
    // ∫ ∬ ∮ ≈ ∑ √ ∏ ∞ ± `


    output = output.concat(" ", process[i]);
    
}

// TODO: Fix up this loop so it works!
// var k = 1;
// var outlength = output.length;
// for (var l = 0; i < outlength; l++)
// {
//     //TODO: check JS for syntax can declare k within loop conditions?
//     if (output[l] == "¬" 
//      || output[l] == "∀"
//      || output[l] == "∃"
//      || output[l] == "∄" && output[k] == " ") 
//      {
//         output = output.slice(0, l) + output.slice(k);   
//         // output.splice(i+1, 1);  
//      }
//      k += 1;
// }

console.log(output);
