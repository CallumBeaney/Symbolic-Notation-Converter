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
    {Shorthand: 'MOD', UserInput: 'mod2'},


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
    {Shorthand: '≡', UserInput: 'iaoi'},
    {Shorthand: '⟺', UserInput: 'iff2'},
    {Shorthand: '⟺', UserInput: 'iaoi2'},
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

// This method worked on with Steve:

function submitTextEntry() {
    // ORIGINAL: popup gets user input, make array of words split by whitespace
    // const submittedTextArray = prompt('Enter text here').toLowerCase().split(' ');

                                    
// TODO: currently not working
    var submittedTextArray;
    submittedTextArray = document.getElementById("in").value;

    // array to store the converted (or untouched) words
    let convertedTextArray = [];

    // bool to determine whether to add original word or not
    let hasBeenAdded;

    for (i = 0; i < submittedTextArray.length; i++) {
        // set to false for each new word from array of user input
        hasBeenAdded = false;

        for (n = 0; n < shorthandLookupTable.length; n++) {
            // check if submitted word matches UserInput property for object
            if (shorthandLookupTable[n].UserInput == submittedTextArray[i]) {
                // push the Shorthand symbol to array of converted words
                convertedTextArray.push(shorthandLookupTable[n].Shorthand);
                // set to true so original word can be ignored
                hasBeenAdded = true;
            } 
        }
        if (hasBeenAdded == false) {
            // push original word to the converted array
            convertedTextArray.push(submittedTextArray[i]);
        }
    }

    // make a string of the array words with a space between each
    const convertedTextString = convertedTextArray.join(' ');


    // ORIGINAL: output to an empty paragraph on the webpage
    // document.getElementById('output-box').innerHTML = "<p>" + convertedTextString + "</p>";

    // TODO: Debug 
    document.getElementById("out").innerHTML=convertedTextString;

}