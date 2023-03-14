// TODO: Additional signs: https://unicode-table.com/en/sets/mathematical-signs/

function startup() 
{ 
    /* This function will call itself on startup and process rawStart */
    const rawStart = "This converter parses shorthand with whitespace. Type into the white box. Copy text from the black box. Check the dictionary for shorthand. Clear the white box & type \"spec pls\" followed by a space to read the specification.\n\nGoldbach: all n in Evens. exists p, q in Primes. n equals p add q .\nDe Morgan: not (P and Q) iff ( not P) or ( not Q) \nEuler: every a, b, c, d in zz sup + .  a sup 4 + b sup 4 plus c sup 4 dne d sup 4\nAluminium sulfate: Al sub 2 ( SO sub 4 ) sub 3";    
    document.getElementById("raw").innerHTML = rawStart;
    submitTextEntry();

    populateDictionary(shorthandLookupTable);    
}

function examplePrint()
{
    document.getElementById("raw").value = "TABLE OF CONTENTS:\n\t1. Syntax\n\t2. Subscript & superscript\n\t3. Set notation\n\t4. Propositional logic\n\t5. Summation notation\n\t6. Integrals\n\t7. Greek symbols\n\t8. Colophon\n\n1. SYNTAX\nThis program parses by whitespace, converting shorthand keywords into mathematical notation, using Unicode symbols. Consider all . This means that\n  \t \" all p in n\" successfully converts, but \"all p in n\" does not. \nMost symbols have more than one keyword:\n\n\t natset nn \t\t goe >= \t\t propersubset propsub \n\nNegatives also work with exclamation marks: \n\t dne !=  \t\t subset !subset \t\t exist  !exist \n\nAs a rule, variants can be found by just typing the last letter of a keyword again:\n\t int \t\t intt \t\t inttt \n\n\n2. SUPERSCRIPT\nSub/superscript functionality discriminates by a-z, 0-9, mathematical operators & parentheses, but /not/ by A-Z.\n\nLook at this formula for DMSP:\n\t(CH sub 3 ) sub 2 S sup + CH sub 2 CH sub 2 COO sup - \n\t(CH sub 3) sub 2S sup +CH sub 2CH sub 2COO sup - \n\nNote the use of an initial space for sub/superscript that begins a line, where | is the start of a new line:\n\n\t| sup 4 sqr 16 = stddev 2\n\t|sup 4 sqr 16 = stddev 2\n\n\t| sub 5P sub 3 = 5! / (5-3)! = 60\n\nThis converter uses Unicode characters rather than LATEX/html-style formatting, so a small number of letters cannot be used & styling may be inconsistent:\n\tsuper sup script \tsub sub script \n\n\n3. SET NOTATION\nYou may find that you need to write 'and' and 'or'. If you just type the last letter of the word twice by writing orr or andd it will convert: \n\n \t{ emptyset , 4} !superset { 1, {2, 3}, 4 } \n\tA union B = {x| x in A orr x in B orr x in A and B}\n\tA' = A sup c = {  var st var in uu andd var nin A}\n\n\n4. PROPOSITIONAL LOGIC\n\n\t possibly ( var sup 2 = 1 and 0 = y)\n\t not necessarily not p\n\t ( models p) implies ( entailss necessarily p)\n\t (p >> q) and p) entails q\n\n\n5. SIGMA/PI NOTATION\n\n\t sigmaa (1 <= i < j loe n)  | S sub i intsec S sub j intersection S sub k |. \n\t pii (5 ; i = 1). i = 5!\n\t | sigmaa sup n sub i=1 function ( t sub i ) deltaa sub i | < epsilon \n\n\n6. INTEGRALS\nComplex expressions may be difficult to render with sub/superscript functionality.\n\n\t integral sub 0 sup 1 sqr x dx = 2/3 \n\t intt sub r fn (x, y) dA.\n\t int (0, 1) dy  int (0, sqr y)  (x + y) dx \n\n\n7. GREEK SYMBOLS\nTo write an uppercase version, just type the last letter of the word twice:\n\t 'delta'  converts to\t delta \n\t 'deltaa' converts to\t deltaa \n\nSome characters can be written using Latin capitals, e.g. using a normal capital B to represent the 'beta' function', where no symbol is needed; 'beta' still converts to beta \n\nExamples:\n\n\t B(x, y) = gammaa (x) gammaa (y) / gammaa (x + y).\n\t alpha + 2 beta = 3 gamma , beta = sigmaa \n\t H sub 0 : mu sub 1 = mu sub 2 \n\n\n8. COLOPHON\n\nThis program was written by <a href='https://callumbeaney.github.io'>Callum Beaney</a> out of want for a quick, easy to use notation converter for use on forums etcetera.  The synchronised scrolling feature is imported from Dmitry Prokashev's excellent <a href='https://github.com/asvd/syncscroll'>Syncscroll</a> library. I received kind debugging assistance from Dart grandmaster <a href='https://github.com/alexobviously'>Alex Baker</a>. You can read the source code <a href='https://github.com/CallumBeaney/Symbolic-Notation-Converter'>here</a>.";
    
    document.getElementById("raw").setSelectionRange(154, 154); 
    submitTextEntry();
}

function populateDictionary(lookup)
{
    const titles = ["Generic Operators", 
                    "Symbolic Notation", 
                    "Set Notation",
                    "Double-Struck",
                    "Miscellaneous",
                    "Greek (lowercase)", 
                    "Greek (uppercase)",
                    "Double-Struck (cont.)",
                    
                ]

    // Input core table HTML
    document.getElementById("dict").innerHTML = '<colgroup><col style="width: 50%"><col style="width: 50%"></colgroup><tbody>';
    
    let stacker = "";
    let counter = 0;
    let titlecount = 0;

    // Go through shorthandLookupTable and parse it into the dictionary <div>
    for (i = 0, k = 1; k <= lookup.length; i++, k++)
    {
        let thisLoopSymbol = lookup[i].Shorthand.toString();
        let thisLoop_Short = lookup[i].UserInput.toString();
        let nextLoopSymbol = lookup[k].Shorthand.toString();
        let nextLoop_Short = lookup[k].UserInput.toString();

        // Each keyword in >indexes is the start of a new symbol group. It must be paired with >titles
        const indexes = ["equal", "all", "suchthat", "nn", "gammaa", "alpha", "sqr", "aa"];
        if (indexes.includes(thisLoop_Short))
        {
            document.getElementById("dict").innerHTML += `<tr><td class="title" colspan="2">${titles[titlecount]}</td></tr>`;
            titlecount += 1;
        }

        // If the next symbol in the lookup table is the same, put it into this iteration's cell and skip it.
        if (counter == 0 && thisLoopSymbol == nextLoopSymbol)
        {
            stacker += thisLoop_Short + ", " + nextLoop_Short;
            counter += 1;
            continue;
        }
        if (counter != 0 && thisLoopSymbol == nextLoopSymbol)
        {
            stacker += ", " + nextLoop_Short;
            counter += 1;
            continue;
        }
        if (counter != 0 && thisLoopSymbol != nextLoopSymbol)
        {
            document.getElementById("dict").innerHTML += `<tr><td class="symbol">${thisLoopSymbol}</td><td class="code">${stacker}</td></tr>`;
            counter = 0;
            stacker = "";
            continue;
        }
        document.getElementById("dict").innerHTML += `<tr><td class="symbol">${thisLoopSymbol}</td><td class="code">${thisLoop_Short}</td></tr>`;
    }
    // Close off table HTML.
    document.getElementById("dict").innerHTML += "</tbody>";
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
    // const shouldJoins = ["∀", "¬", "∃", "{", "(", "𝑓", "∄", "√", ];

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
        ||  removed[k] == "□"
        ||  removed[k] == "◇"
        ||  removed[k] == "𝑓" 
        ||  removed[k] == "∄"
        ||  removed[k] == "∂"
        ||  removed[k] == "√") 
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

function submitTextEntry() {                                 // main function

    /* split user input by \n to avoid newline-whitespace problems */
    let lines = document.getElementById("raw").value.split("\n");
    let type;

        // User requests more examples
        if (lines[0].toString().toLowerCase().split(" ")[0] === "spec")
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

