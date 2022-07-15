// TODO: Additional signs: https://unicode-table.com/en/sets/mathematical-signs/
// TODO: Speed tests, use ES6 modules if necessary

function startup() 
{ 
    /* This function will call itself on startup and process rawStart */
    const rawStart = "This converter parses shorthand with whitespace. Type into the white box. Copy text from the black box. Check the dictionary for shorthand. Clear the white box & type \"spec pls\" followed by a space to read the specification.\n\nGoldbach: all n in Evens. exists p, q in Primes. n equals p add q .\nDe Morgan: not (P and Q) ioif ( not P) or ( not Q) \nEuler: every a, b, c, d in zz sup +.  a sup 4 + b sup 4 plus c sup 4 dne d sup 4\nAluminium sulfate: Al sub 2 ( SO sub 4 ) sub 3";    
    document.getElementById("raw").innerHTML = rawStart;
    submitTextEntry();    
}

function replaceSymbols(element, lookup, type) 
{
    /* The "type" parameter determines the kind of parsing that 
       this function uses, matching the appropriate lookup table */

    let rawWord = [];
    let rawWord_lower = [];
    if (type === "SH")
    {
        rawWord = element.split(" ");
        rawWord_lower = element.toLowerCase().split(" ");
    } 
    else if (type === "SS" || type === "SB")
    {
        rawWord = element.split("");
        rawWord_lower = element.toLowerCase().split("");
    }
    
    /* This loop carries out the symbol replacement process */
    for (i = 0; i < rawWord.length; i++) 
    {
        for (n = 0; n < lookup.length; n++)
        {
            if (lookup[n].UserInput == rawWord_lower[i])
            {
                rawWord[i] = lookup[n].Shorthand;
            }
        }
    }

    /* This rejoins the input string that was parsed and operated upon above */
    let result;
    if (type === "SH")
    {
        result = rawWord.join(" ");
    } 
    else if (type === "SS" || type === "SB")    
    {
        result = rawWord.join("");
    }
    
    return result;
}

function spaceRemoval(element) 
{
    let removed = element.split(" ")
    for (n = 0; n < removed.length; n++)
    {
        var k = n - 1;

        if (removed[n] == " " 
        &&  removed[k] == "//\//" // TODO: whatever is on this line's OR condition, will invariably fail. 
        ||  removed[k] == "∀"     //       thus the nonsense "//\//" string. find out why.
        ||  removed[k] == "¬"
        ||  removed[k] == "∃"
        ||  removed[k] == "{"
        ||  removed[k] == "("
        ||  removed[k] == "∄") 
        {
            removed[k] += removed[n]; 
            removed.splice(n, 1);        
        }
    }
    return removed.join(" ");
}

function subSuper(element, type) 
{ 
    // EXAMPLE: Let's say that user input >element contains "Ex sup (443)"

    /* Create a new regex that looks for " sup " followed 
       by characters, then cater regex to input type      */    
   let reggie = new RegExp;
    
        if (type === "SS") {
            reggie = RegExp(' sup [0-9a-z\(\)\=\+\-\.]*', 'g');
        }
        else if (type === "SB") {
            reggie = RegExp(' sub [0-9a-z\(\)\=\+\-\.]*', 'g');
        }
    
    /* find and replace user input text based on sub/sup keyword */
    let subSupText = element;
    const matches = element.matchAll(reggie);

    for (const match of matches)
    {
        // EXAMPLE: if >match = " sup (443)" then >exponent is "(443)"
        let result;
        const exponent = match[0].split(" ")[2];

        if (type === "SS") {
            result = replaceSymbols(exponent, superScriptLookupTable, type);
        }
        else if (type === "SB") {
            result = replaceSymbols(exponent, subScriptLookupTable, type);
        }
        /* Insert the converted sup/subscript into the user 
           string and remove the preceding "sub"/"sup" prefix */
        subSupText = subSupText.replace(match[0], result);
    }

    // EXAMPLE: >element was "Ex sup (443)", >subSupText is now "Ex⁽⁴⁴³⁾"
    return subSupText;
}

function examplePrint()
{
    document.getElementById("raw").value = "TABLE OF CONTENTS:\n\t1. Syntax\n\t2. Subscript & superscript\n\t3. Set notation\n\t4. Summation notation\n\t5. Greek symbols\n\t6. Colophon\n\n1. SYNTAX\nThis program parses by whitespace, converting shorthand keywords into mathematical notation. Consider all . This means that\n  \t \" all p in n\" successfully converts, but \"all p in n\" does not. \nMost symbols have more than one keyword:\n\n\t natset nn \n\t goe >= \n\t propersubset propsub \n\nNegatives also work with exclamation marks: \n \n\t dne !=  \n\t subset !subset \n\t exist  notexist  !exist\n\n2. SUPERSCRIPT\nSub/superscript functionality discriminates by a-z, 0-9, mathematical operators & parentheses, but /not/ by A-Z.\n\nLook at this formula for DMSP:\n\t(CH sub 3 ) sub 2 S sup + CH sub 2 CH sub 2 COO sup - \n\t(CH sub 3) sub 2S sup +CH sub 2CH sub 2COO sup - \n\n3. SET NOTATION\n\te.g. { emptyset , 4} !superset { 1, {2, 3}, 4 } \n \n4. SUMMATION NOTATION \n\te.g. sigmaa (1 <= i < j loe n)  | S sub i intsec S sub j intersection S sub k |. \n\n5. GREEK SYMBOLS\nTo write an uppercase version, just type the last letter of the word twice:\n\n\t 'delta'  converts to\t delta \n\t 'deltaa' converts to\t deltaa \n\nSome characters can be written using Latin capitals, e.g. using a normal capital B to represent the 'beta' function', where no symbol is needed; 'beta' still converts to beta \n\nExamples:\n\n\tB(x, y) = gammaa (x) gammaa (y) / gammaa (x + y).\n\t alpha + 2 beta = 3 gamma , beta = sigmaa \n\n\n6. COLOPHON\n\nThis program was written by <a href='https://callumbeaney.github.io/website/'>Callum Beaney</a> out of want for a quick, easy to use notation converter for use on forums etc. that doesn't require intimate knowledge of/immediate access to LATEX et al.  The synchronised scrolling feature is imported from Dmitry Prokashev's excellent <a href='https://github.com/asvd/syncscroll'>Syncscroll</a> library. I received kind debugging assistance from Dart grandmaster <a href='https://github.com/alexobviously'>Alex Baker</a>. You can read the source code <a href='https://github.com/CallumBeaney/Symbolic-Notation-Converter'>here</a>.";
    
    document.getElementById("raw").setSelectionRange(140, 128); 
    submitTextEntry();
}

function submitTextEntry() {                                 // main function

    /* split user input by \n to avoid newline-whitespace problems */
    let lines = document.getElementById("raw").value.split("\n");
    let type;

        // User requests more examples
        if (lines[0].toString().split(" ")[0] === "spec")
        {
            examplePrint();
        }
    
    /* perform sequential functions on each subsequent line */
    const symbolsReplaced = lines.map((element) => replaceSymbols(element, shorthandLookupTable, type = "SH"));
    const spaceRemoved = symbolsReplaced.map(spaceRemoval);
    
    /* process any SuperScript and any SuBscript */
    const suppedText = spaceRemoved.map((element) => subSuper(element, type = "SS"));
    const subbedText = suppedText.map((element) => subSuper(element, type = "SB"));

    /* join by \n ready for output */
    const outputText = subbedText.join("\n");

    /*  pass to GUI output <div>  */
    document.getElementById("out").innerHTML= "<p>" + outputText + "</p>";   
}
