
/**
 * 
 * CONSOLE SECTION
 * 
 */

 function reload() {
    window.location.reload();
    console.clear();
}

console.log(
    "%c             ",
    "display: inline-block ; background-image: url( 'https://bennadel.github.io/JavaScript-Demos/demos/console-log-css/rock.png' ) ; " +
    "background-size: cover ; padding: 10px 175px 158px 10px ; " +
    "font-family: monospace ;"
    );
    console.log("%cFOR DEVELOPERS ONLY","color:red; font-family:system-ui; font-size:2rem; -webkit-text-stroke: 1px black; font-weight:bold");

const dict = 
{
    "A" : 0,    "B" : 1,    "C" : 2,    "D" : 3,    "E" : 4,    "F" : 5,
    "G" : 6,    "H" : 7,    "I" : 8,    "J" : 9,    "K" : 10,   "L" : 11,
    "M" : 12,   "N" : 13,   "O" : 14,   "P" : 15,   "Q" : 16,   "R" : 17,
    "S" : 18,   "T" : 19,   "U" : 20,   "V" : 21,   "W" : 22,   "X" : 23,
    "Y" : 24,   "Z" : 25,   "0" : 26,   "1" : 27,   "2" : 28,   "3" : 29,
    "4" : 30,   "5" : 31,   "6" : 32,   "7" : 33,   "8" : 34,   "9" : 35
}

// module calculation
var modulo = Object.keys(dict).length ;


const diacritics =
{
    "Ě" : "E",    "Š" : "S",    "Č" : "C",     "Ř" : "R",    "Ž" : "Z",   "Ý" : "Y",
    "Á" : "A",    "Í" : "I",    "É" : "E",     "Ó" : "O",    "Ů" : "U",   "Ú" : "U",
    "Ť" : "T",    "Ď" : "D",    "Ň" : "N"
}

// array
let cipherText = [];
let decryptText;

// GCD function... check Greatest Common Divider (nejvetsi spolecny delitel)
function gcd(a, b){
    if(b){
        return gcd(b, a % b);
    } else {
        return Math.abs(a);
    }
}

/**
 * 
 * ENCRYPT SECTION
 * 
 * 
 */
function encrypt() {
    
    // user text 
    let input = document.getElementById("input").value;
        // set user text to upper case 
        input = input.toUpperCase();
    
    // user key
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
        // print key A and B in console
        console.log("%cYOUR KEY IS A:" + a + " B:" + b," color: #DA70D6; font-weight: bold;")

    if(a == "" || b == "" || input == "" || gcd(a, modulo) != "1"){
        if(gcd(a, modulo) != "1") {
            alert("USE ONE OF THE NUMBERS FOR KEY A:\n 5, 7, 11, 13, 17, 19, 23, 25, 29, 31");
        }
        else {
            alert("ENTER ALL REQUIRED FIELDS!");
        }
    }
    else {

        for(var i = 0; i < input.length; i++){

            if(input[i] == " "){
                input = input.replace(/\s/g,"XMEZERAX");
            }

            if(input[i] in diacritics){
                var change = (input[i], diacritics[input[i]]);
                    input = input.replace(input[i], change);     
               }

            if(input[i] in dict){
                var x = (input[i], dict[input[i]]);

                var mod = ((a * x) + b)%modulo;
                const crypted = Object.keys(dict).find(crypted => dict[crypted] === mod);

                // add crypted element to array
                cipherText.push(crypted);

                    // console section (print in console)
                    console.groupCollapsed(
                        "%cINPUT CHARACTER: " + input[i],
                        "color: #228B22 ; font-weight: bold;"
                    );
                        console.log("------------------------------------------")
                        console.log("INPUT CHARACTER: " + input[i]);
                        console.log("POSITION OF CHARACTER: " + x);
                        console.log("NEW POSITION: " + mod);
                        console.log("NEW CRYPTED CHARACTER: " + crypted);
                        console.log("------------------------------------------")

                        console.groupEnd();
            }
            else {
                cipherText.push();
                console.log("%cCHARACTER HAS BEEN REMOVED: " + input[i],"color: #DC143C; font-weight: bold;")
            }
        }

        // rank 5 elements
        ct = [];
        var counter = 5;
        for(var i = 0; i < cipherText.length; i++) {
            
            if(i == counter){
                ct.push(" ");
                counter = counter + 5;
            }
            ct.push(cipherText[i]);
         
        }
        // print crypted text in html page
        document.getElementById("output").innerHTML = ct.join("");
            // print crypted text in console
            console.log("%cCRYPTED TEXT: "+ ct.join(""), "color: #DAA520;");
    }
}

/**
 * 
 * DECRYPT SECTION
 * 
 * 
 */

function decrypt(){

    // user text
    let input = document.getElementById("input").value;
        // set user text to upper case
        input = input.toUpperCase();
    
    // user key
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
        // print key in console
        console.log("%cYOUR KEY IS A:" + a + " B:" + b," color: #DA70D6; font-weight: bold;")

    if(a == "" || b == "" || input == "" || gcd(a, modulo) != "1"){
        if(gcd(a, modulo) != "1") {
            alert("USE ONE OF THE NUMBERS FOR KEY A:\n 5, 7, 11, 13, 17, 19, 23, 25, 29, 31");
        }
        else {
            alert("ENTER ALL REQUIRED FIELDS!");
        }
    }
    else {

        // inverse module
        for(var i = 0; i < 100; i++){

            var result = (a * i)%modulo;

            if(result == 1){
                var inversion = i;
                    console.log("%cINVERSE MODULE: " + inversion , "color: #DA70D6; font-weight: bold;");
                break
            }
        }

        // main decrypt loop
        for( var j = 0; j < input.length; j++){

            // inputs must be in dictionary
            if(input[j] in dict || input[j] === " "){

                // clears gaps
                if(input[j] === " "){
                    input.replace(/\s/g,"");   
                }
                else {

                    // position of index in dictionary
                    var y = (input[j], dict[input[j]]);
        
                    // decrypt equation
                    var equation = inversion * (y -b);
        
                    // if equation is less than 0 will make positive value
                    if(equation < 0){
                        for(var i = 0; equation < modulo; i++){
                            equation = equation + modulo;
                        }
                    }
        
                    // result of decrypt equation
                    var mod = equation%modulo;
                    
                    // find elemnt by key in dictionary
                    const crypted = Object.keys(dict).find(crypted=> dict[crypted] === mod);
        
                    // add element to array
                    cipherText.push(crypted);
        
                    // set array to string
                    decryptText = cipherText.join("");
        
                        // console section (print in console)
                        console.groupCollapsed(
                            "%cINPUT CHARACTER: " + input[j],
                            "color: #228B22; font-weight: bold;"
                        );
                        console.log("------------------------------------------")
                        console.log("INPUT CHARACTER: " + input[j]);
                        console.log("POSITION OF CHARACTER: " + y);
                        console.log("NEW POSITION: " + mod);
                        console.log("NEW CRYPTED CHARACTER: " + crypted);
                        console.log("------------------------------------------")  
                        console.groupEnd();      
                }

                    
                // replace all gaps from string
                decryptText = decryptText.replace(/XMEZERAX/g, " ");
                
                // print decrypt string in html page    
                document.getElementById('output').innerHTML = decryptText;

            }
            else {
                console.log("%cWRONG CHARACTER: " + input[j], "color: #DC143C; font-weight: bold;");
                alert("NOT OK");
            }        

        }

    }
}