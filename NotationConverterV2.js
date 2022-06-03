const shorthandLookupTable = [
    // Generic Operators
    {Shorthand: '=', UserInput: 'equals'},
    {Shorthand: '=', UserInput: 'equal'},
    {Shorthand: '+', UserInput: 'plus'},
    {Shorthand: '+', UserInput: 'add'},
    {Shorthand: '-', UserInput: 'minus'},
    {Shorthand: '×', UserInput: 'times'},
    {Shorthand: '×', UserInput: '*'},
    {Shorthand: '/', UserInput: 'div'},
    {Shorthand: '≥', UserInput: '>='},
    {Shorthand: '≥', UserInput: 'goe'},
    {Shorthand: '≤', UserInput: 'loe'},
    {Shorthand: '≤', UserInput: '<='},
    {Shorthand: '%', UserInput: 'mod'},
    {Shorthand: 'MOD', UserInput: 'modd'},


    // Symbolic Notation
    {Shorthand: '∈', UserInput: 'in'},
    {Shorthand: '∧', UserInput: 'and'},
    {Shorthand: '∨', UserInput: 'or'},
    {Shorthand: '∃', UserInput: 'exists'},
    {Shorthand: '∃', UserInput: 'exist'},
    {Shorthand: '¬', UserInput: 'not'},
    {Shorthand: '¬', UserInput: '~'},
    {Shorthand: '∀', UserInput: 'all'},
    {Shorthand: '∀', UserInput: 'every'},
    {Shorthand: '⇒', UserInput: 'then'},
    {Shorthand: '⇒', UserInput: 'implies'},
    {Shorthand: '≡', UserInput: 'iff'},
    {Shorthand: '≡', UserInput: 'ioi'},
    {Shorthand: '⟺', UserInput: 'ifff'},
    {Shorthand: '⟺', UserInput: 'ioif'},
    {Shorthand: '∉', UserInput: '!in'},
    {Shorthand: '∉', UserInput: 'nin'},
    {Shorthand: '∉', UserInput: 'notin'},
    {Shorthand: '∄', UserInput: '!exist'},
    {Shorthand: '∄', UserInput: 'notexist'},
    {Shorthand: '∄', UserInput: 'nexist'},
    {Shorthand: '∄', UserInput: 'nex'},
    {Shorthand: '≠', UserInput: '=/='},
    {Shorthand: '≠', UserInput: 'dne'},
    {Shorthand: '≠', UserInput: 'notequals'},
    {Shorthand: '≠', UserInput: '!='},
    {Shorthand: '∴', UserInput: 'therefore'},
    {Shorthand: '∴', UserInput: 'andso'},
    {Shorthand: '∵', UserInput: 'because'},
    {Shorthand: '∵', UserInput: 'bc'},
    {Shorthand: '∵', UserInput: 'since'},


    // Set Notation
    // https://www.mathsisfun.com/sets/symbols.html
    {Shorthand: '|', UserInput: 'suchthat'},
    {Shorthand: '|', UserInput: 'st'},
    {Shorthand: '∪', UserInput: 'union'},
    {Shorthand: '⊆', UserInput: 'subsetof'},
    {Shorthand: '⊆', UserInput: 'subset'},
    {Shorthand: '∩', UserInput: 'intersection'},
    {Shorthand: '∩', UserInput: 'intsec'},
    {Shorthand: '⊂', UserInput: 'propersubset'},
    {Shorthand: '⊂', UserInput: 'propsub'},
    {Shorthand: '⊇', UserInput: 'superset'},
    {Shorthand: '⊇', UserInput: 'supset'},
    {Shorthand: '⊃', UserInput: 'propersuperset'},
    {Shorthand: '⊃', UserInput: 'propsupset'},
    {Shorthand: '⊄', UserInput: 'notsubset'},
    {Shorthand: '⊄', UserInput: '!subset'},
    {Shorthand: '⊅', UserInput: 'notsup'},
    {Shorthand: '⊅', UserInput: '!superset'},
    
    
    // Double-struck
    // https://en.wikipedia.org/wiki/Blackboard_bold
    {Shorthand: 'Ø', UserInput: 'emptyset'},
    {Shorthand: 'Ø', UserInput: '0set'},
    {Shorthand: 'ℕ', UserInput: 'nn'},
    {Shorthand: 'ℕ', UserInput: 'natnum'},
    {Shorthand: 'ℕ', UserInput: 'natset'},
    {Shorthand: 'ℤ', UserInput: 'zz'},
    {Shorthand: 'ℤ', UserInput: 'intset'},
    {Shorthand: 'ℚ', UserInput: 'qq'},
    {Shorthand: 'ℚ', UserInput: 'ratset'},
    {Shorthand: 'ℝ', UserInput: 'rr'},
    {Shorthand: 'ℝ', UserInput: 'realset'},
    {Shorthand: 'ℂ', UserInput: 'cc'},
    {Shorthand: 'ℂ', UserInput: 'compset'},
    {Shorthand: '𝔻', UserInput: 'dd'},
    {Shorthand: '𝔻', UserInput: 'domain'},

    // TODO:
    // ∫ ∬ ∮ ≈ ∑ √ ∏ ∞ ± `
]
const sup = [
    {UserInput: '0', Shorthand: '⁰'},
    {UserInput: '1', Shorthand: '¹'},
    {UserInput: '2', Shorthand: '²'},
    {UserInput: '3', Shorthand: '³'},
    {UserInput: '4', Shorthand: '⁴'},
    {UserInput: '5', Shorthand: '⁵'},
    {UserInput: '6', Shorthand: '⁶'},
    {UserInput: '7', Shorthand: '⁷'},
    {UserInput: '8', Shorthand: '⁸'},
    {UserInput: '9', Shorthand: '⁹'},
]
const sub = [
    {UserInput: '0', Shorthand: '₀'},
    {UserInput: '1', Shorthand: '₁'},
    {UserInput: '2', Shorthand: '₂'},
    {UserInput: '3', Shorthand: '₃'},
    {UserInput: '4', Shorthand: '₄'},
    {UserInput: '5', Shorthand: '₅'},
    {UserInput: '6', Shorthand: '₆'},
    {UserInput: '7', Shorthand: '₇'},
    {UserInput: '8', Shorthand: '₈'},
    {UserInput: '9', Shorthand: '₉'},
]

var raw;
var rawword = [];
var rawwordlower = [];

var paintedword = [];
var painted;

var changed = 0;

function startup(){
    var rawstart = "This converter parses shorthand with whitespace. Reference the dictionary to check usage.\n\nGoldbach: all n in Evens. exists p, q in Primes. n equals p add q .\nDe Morgan: not (P and Q) ioif ( not P) or ( not Q) \nEuler: every a, b, c, d in ZZ sup + .  a sup 4 + b sup 4 plus c sup 4 dne d sup 4";
    document.getElementById("raw").innerHTML = rawstart;
}


function specialcases()
{
    for (n = 0; n < paintedword.length; n++)
    {
        var k = n - 1;

        if (paintedword[n] == " " 
        &&  paintedword[n] == "////" // TODO: find out why this specific post && condition fails every time
        ||  paintedword[k] == "∀" 
        ||  paintedword[k] == "¬"
        ||  paintedword[k] == ","
        ||  paintedword[k] == "∃"
        ||  paintedword[k] == "∄") 
        {
            paintedword[k] += paintedword[n]; 
            paintedword.splice(n, 1);        
        }

        if (paintedword[k] == " "
        &&  paintedword[n] == ",")
        {
            paintedword[n] += paintedword[k]; 
            paintedword.splice(k, 1);   
        }
        
        if (paintedword[k] == "sub"
        &&  !isNaN(paintedword[n]) )
        {
            var pass = paintedword[n];
            paintedword[n] = sub[pass].Shorthand; 
            paintedword[k - 1] += paintedword[n];
            paintedword.splice(k, 2);   
        }

        if (paintedword[k] == "sup"
        &&  !isNaN(paintedword[n]) )
        {
            var pass = paintedword[n];
            paintedword[n] = sup[pass].Shorthand; 
            paintedword[k - 1] += paintedword[n];
            paintedword.splice(k, 2);   
        }
        else if (paintedword[k] == "sup" && paintedword[n] == "+") {
            paintedword[k - 1] += "⁺";
            paintedword.splice(k, 2); 
        }
        else if (paintedword[k] == "sup" && paintedword[n] == "-") {
            paintedword[k - 1] += "⁻";
            paintedword.splice(k, 2); 
        }

        // TODO: fix
        // if (paintedword[n] == "." && paintedword[k] == " ")
        // {
        //     paintedword[k - 1] += paintedword[n]; 
        //     paintedword.splice(k, 2); 
        // }
    }

}

function submitTextEntry() {

    raw = document.getElementById("raw").value;

    rawword = raw.split(" ");
    rawwordlower = raw.toLowerCase().split(" ");

    paintedword = [];

    changed = 0;

    for (i = 0; i < rawword.length; i++) 
    {
        paintedword[i] = rawword[i];

        for (n = 0; n < shorthandLookupTable.length; n++)
        {
            if (shorthandLookupTable[n].UserInput == rawwordlower[i])
            {
                paintedword[i] = shorthandLookupTable[n].Shorthand;
                changed = 1;
            }
        }
    }

    specialcases();

    painted = paintedword.join(" "); 

    document.getElementById("out").innerHTML=painted;
}

startup();
submitTextEntry();