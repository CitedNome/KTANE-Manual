const col1 = [1, 2, 3, 4, 5, 6, 7];
const col2 = [8, 1, 7, 9, 10, 6, 11];
const col3 = [12, 13, 9, 14, 15, 3, 10];
const col4 = [16, 17, 18, 5, 14, 11, 19];
const col5 = [20, 19, 18, 21, 17, 22, 23];
const col6 = [16, 8, 24, 25, 20, 26, 27];

const cols = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 1, 7, 9, 10, 6, 11],
    [12, 13, 9, 14, 15, 3, 10],
    [16, 17, 18, 5, 14, 11, 19],
    [20, 19, 18, 21, 17, 22, 23],
    [16, 8, 24, 25, 20, 26, 27]]

var symbols = [];

var filter = "brightness(0) saturate(100%) invert(18%) sepia(79%) saturate(6123%) hue-rotate(359deg) brightness(101%) contrast(126%)";

function symbolPress(symbol_id) {
    var symbol_img = document.getElementById(`symbol${symbol_id}`);
    if (symbol_img.style.filter == "") {
        symbol_img.style.filter = filter;
        symbols.push(symbol_id);
    }
    else {
        symbol_img.style.filter = "";
        symbols.splice(symbols.indexOf(symbol_id), 1)
    }
    if (symbols.length != 4) {
        var sol_imgs = document.getElementsByClassName("symbol_sol");
        for (let i = 0; i<=3; i++) {
            sol_imgs[i].src = "";
            sol_imgs[i].style.visibility = "hidden";
        }
    }
    solveKeypad()
}

function solveKeypad() {
    var sol = [[], [], [], [], [], []];
    if(symbols.length == 4) {
        for (var col in cols){
            for (var col_sym in cols[col]) {
                for (var sym in symbols){
                    if (symbols[sym] == cols[col][col_sym]){
                        sol[col].push(symbols[sym]);
                        //console.log(`[PUSH] Col: ${cols[col]}; col_sym: ${cols[col][col_sym]}; sym: ${symbols[sym]}`)
                    }
                    else {
                        //console.log(`[BREAK] Col: ${cols[col]}; col_sym: ${cols[col][col_sym]}; sym: ${symbols[sym]}`)
                    }
                }
            }
        }
        for (var col in sol) {
            if (sol[col].length == 4) {
                console.log(sol[col]);
                var sol_imgs = document.getElementsByClassName("symbol_sol");
                for (let i = 0; i<=3; i++) {
                    //console.log(`../imgs/keypad/${sol[col][i]}.png`);
                    sol_imgs[i].src = "../imgs/keypad/" + sol[col][i] + ".png";
                sol_imgs[i].style.visibility = "visible";
                }
            }
        }
    }
}
