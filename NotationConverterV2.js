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
    {Shorthand: '≡', UserInput: 'ioi'},
    {Shorthand: '⟺', UserInput: 'iff2'},
    {Shorthand: '⟺', UserInput: 'ioi2'},
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


// Links to check up on 
// https://www.youtube.com/watch?v=xogpUfUL5kY
// https://www.youtube.com/watch?v=XF1_MlZ5l6M

// This method worked on with Steve:


var raw;
var rawword = [];
var rawwordlower = [];

var paintedword = [];
var painted;

function submitTextEntry() {
                                
    raw = document.getElementById("raw").value;

    rawword = raw.split(" ");
    rawwordlower = raw.toLowerCase().split(" ");
    
    paintedword = [];

    for (i = 0; i < rawword.length; i++) 
    {
        paintedword[i] = rawword[i];

        for (n = 0; n < shorthandLookupTable.length; n++)
        {
            if (shorthandLookupTable[n].UserInput == rawwordlower[i])
            {
                paintedword[i] = shorthandLookupTable[n].Shorthand;
            }
        }
    }

    painted=paintedword.join(" "); 
    
    document.getElementById("out").innerHTML=painted;

    setTimeout(submitTextEntry, 100);
}

submitTextEntry();
