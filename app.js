let homeScore = ''
let awayScore = ''

function home1(){
    homeScore++
    console.log(homeScore);
    let homeElement = document.getElementById('homeScore')
    homeElement.innerText = homeScore
    console.log(homeElement);
}

function away1(){
    awayScore++
    console.log(awayScore);
    let awayElement = document.getElementById('awayScore')
    awayElement.innerText = awayScore
    console.log(awayElement);
}

function home3(){
    homeScore+3
    console.log(homeScore += 3);
    let homeElement = document.getElementById('homeScore')
    homeElement.innerText = homeScore
    console.log(homeElement);
}

function away3(){
    awayScore+3
    console.log(awayScore += 3);
    let awayElement = document.getElementById('awayScore')
    awayElement.innerText = awayScore
    console.log(awayElement);
}
