// TODO: Look into splitting files for final version
// TODO: flex layout CSS for mobile view & font sizing
// TODO: s sup 4 times A sup 2 · kg sup -1 · m sup -2
//       1 F = 1 s4 x A2 / m2 x kg (f = farad)
// TODO: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea?fbclid=IwAR1-XJKAIGhREYyyq-iFVpYvX4C3W3hkPGoTbMXbmh_ktHWkN21W5tYjjDU


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
    {Shorthand: 'ℙ', UserInput: 'pp'},


    // Logical operators
    {Shorthand: '⊼', UserInput: 'nand'},
    {Shorthand: '⊽', UserInput: 'nor'},
    {Shorthand: '⊻', UserInput: 'xor'},
    {Shorthand: '⊕', UserInput: 'xorr'},


    // Misc
    {Shorthand: 'λ', UserInput: 'lambda'},
    {Shorthand: '∑', UserInput: 'sigma'},
    {Shorthand: 'Ω', UserInput: 'ohm'},
    {Shorthand: '√', UserInput: 'sqr'},
    {Shorthand: '±', UserInput: 'stddev'},
    {Shorthand: '∞', UserInput: 'inf'},
    {Shorthand: 'π', UserInput: 'pi'},
]

// const unicodemap = [
//     {UserInput: '0',  SupScr: '⁰', SubScr: '₀'},
//     {UserInput: '1',  SupScr: '¹', SubScr: '₁'},
//     {UserInput: '2',  SupScr: '²', SubScr: '₂'},
//     {UserInput: '3',  SupScr: '³', SubScr: '₃'},
//     {UserInput: '4',  SupScr: '⁴', SubScr: '₄'},
//     {UserInput: '5',  SupScr: '⁵', SubScr: '₅'},
//     {UserInput: '6',  SupScr: '⁶', SubScr: '₆'},
//     {UserInput: '7',  SupScr: '⁷', SubScr: '₇'},
//     {UserInput: '8',  SupScr: '⁸', SubScr: '₈'},
//     {UserInput: '9',  SupScr: '⁹', SubScr: '₉'},
//     {UserInput: '+',  SupScr: '⁺', SubScr: '⁺'},
//     {UserInput: '-',  SupScr: '⁻', SubScr: '⁻'},
//     {UserInput: 'a',  SupScr: 'ᵃ', SubScr: 'ₐ'},
//     {UserInput: 'b',  SupScr: 'ᵇ', SubScr: '?'},
//     {UserInput: 'c',  SupScr: 'ᶜ', SubScr: '?'},
//     {UserInput: 'd',  SupScr: 'ᵈ', SubScr: '?'},
//     {UserInput: 'e',  SupScr: 'ᵉ', SubScr: 'ₑ'},
//     {UserInput: 'f',  SupScr: 'ᶠ', SubScr: '?'},
//     {UserInput: 'g',  SupScr: 'ᵍ', SubScr: '?'},
//     {UserInput: 'h',  SupScr: 'ʰ', SubScr: 'ₕ'},
//     {UserInput: 'i',  SupScr: 'ⁱ', SubScr: 'ᵢ'},
//     {UserInput: 'j',  SupScr: 'ʲ', SubScr: 'ⱼ'},
//     {UserInput: 'k',  SupScr: 'ᵏ', SubScr: 'ₖ'},
//     {UserInput: 'l',  SupScr: 'ˡ', SubScr: 'ₗ'},
//     {UserInput: 'm',  SupScr: 'ᵐ', SubScr: 'ₘ'},
//     {UserInput: 'n',  SupScr: 'ⁿ', SubScr: 'ₙ'},
//     {UserInput: 'o',  SupScr: 'ᵒ', SubScr: 'ₒ'},
//     {UserInput: 'p',  SupScr: 'ᵖ', SubScr: 'ₚ'},
//     {UserInput: 'r',  SupScr: 'ʳ', SubScr: 'ᵣ'},
//     {UserInput: 's',  SupScr: 'ˢ', SubScr: 'ₛ'},
//     {UserInput: 't',  SupScr: 'ᵗ', SubScr: 'ₜ'},
//     {UserInput: 'u',  SupScr: 'ᵘ', SubScr: 'ᵤ'},
//     {UserInput: 'v',  SupScr: 'ᵛ', SubScr: 'ᵥ'},
//     {UserInput: 'w',  SupScr: 'ʷ', SubScr: '?'},
//     {UserInput: 'x',  SupScr: 'ˣ', SubScr: 'ₓ'},
//     {UserInput: 'y',  SupScr: 'ʸ', SubScr: '?'},
//     {UserInput: 'z',  SupScr: 'ᶻ', SubScr: '?'},
//  ]

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
] // DEPRECATED VERSION FOR 1-NUMBER SUPERSCRIPT 




function startup(){
    let rawstart = "This converter parses shorthand with whitespace. Reference the dictionary to check usage.\n\nGoldbach: all n in Evens. exists p, q in Primes. n equals p add q .\nDe Morgan: not (P and Q) ioif ( not P) or ( not Q) \nEuler: every a, b, c, d in ZZ sup + .  a sup 4 + b sup 4 plus c sup 4 dne d sup 4";    
    document.getElementById("raw").innerHTML = rawstart;
    submitTextEntry();
}


function specialcases(paintedword)
{
    for (n = 0; n < paintedword.length; n++)
    {
        var k = n - 1;

        if (paintedword[n] == " " 
        &&  paintedword[k] == "////" // TODO: find out why this specific post && condition fails every time
        ||  paintedword[k] == "∀" 
        ||  paintedword[k] == "¬"
        ||  paintedword[k] == "∃"
        ||  paintedword[k] == "("
        ||  paintedword[k] == "∄") 
        {
            paintedword[k] += paintedword[n]; 
            paintedword.splice(n, 1);        
        }
          
            // OLD VERSION of superscript  TO BE DEPRECATED -- WORKED WELL WITH DEPRECATED "sup" CONST ABOVE
            // e.g.  a sup 4 --> a⁴      BUT     a sup 44a --> (program breaks)
            
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
        
        // NEW VERSION of superscript TRYING TO MAKE MULTI-CHARACTER SUPERSCRIPTS DOABLE, BUT BUGGY
        // What I need: e.g.    a sup 44a --> a⁴⁴ᵃ

        // if (paintedword[k] === "sup")
        // {
        //     let pass = paintedword[n].toString();
        //     let passarray = Array.from(pass);
        //     for (w = 0; w <= passarray.length; w++)
        //     {
        //         for (q = 0; q <= unicodemap.length; q++)
        //         {
        //             if (passarray[w] == unicodemap[q].UserInput)
        //             {
        //                 passarray[w] = unicodemap[q].SupScr;
        //             }
        //         }
        //     }
        //     paintedword[n] = passarray;
        //     paintedword[k - 1] += paintedword[n];
        // }

    }
    
}

function submitTextEntry() {

    let paintedword = [];
    const raw = document.getElementById("raw").value;
        
    
    // TODO: fix line break checker
    //
    // for (i = rawword.length; i > 0; i--)
    // {        
    //     if (rawword[i].includes("\n"))
    //     {
    //         let tosplit = rawword[i].toString();
    //         //     REGEX:   raw.split((/\s+/); 
    //         // syntaxes/code snippets below:
    //         // let pass = tosplit.split((/\s+/));
    //         // let pass = tosplit.split("\n");
    //         // rawword[i] = pass[0].toString() + "i";      
    //         // rawword.splice(i + 1, 0, pass[1].toString() + "p");   
    //     }
    // }   

    // TODO: reimplement case flexibility. **
    //
    // const rawwordlower = raw.toLowerCase().split(" ");

    const rawword = raw.split(" "); 

    for (i = 0; i < rawword.length; i++) 
    {
        paintedword[i] = rawword[i];

        for (n = 0; n < shorthandLookupTable.length; n++)
        {
            if (shorthandLookupTable[n].UserInput == rawword[i])           // ** if (shorthandLookupTable[n].UserInput == rawwordlower[i])

            {
                paintedword[i] = shorthandLookupTable[n].Shorthand;
            }
        }

    }

    specialcases(paintedword);

 

    let painted = paintedword.join(" "); 

    document.getElementById("out").innerHTML= "<p>" + painted + "</p>";
}

startup();

