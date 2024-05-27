// let array = [
//     ["4","7","","8","6",""],
//     ["1","","9","","2",""],
//     ["","","","","5","1"],
//     ["4","2","8","3","","3"],
//     ["9","","6","","",""],
//     ["","7","","5","",""]
// ]

function showMaze(maze_id) {
    document.getElementById("container").style.backgroundImage=`url(../imgs/maze/${maze_id}.png)`
}

function showCir(cir_id) {
    let circles_spots = document.getElementsByClassName(`sol${cir_id}`);
    for (circle in circles_spots){
        circles_spots[circle].style.backgroundColor = "lightgreen"
    }
}

function hideCir(cir_id) {
    let circles_spots = document.getElementsByClassName(`sol${cir_id}`);
    for (circle in circles_spots){
        circles_spots[circle].style.backgroundColor = "rgb(255, 255, 255)"
    }
}
