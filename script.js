'use strict';
let attemptsEl = document.getElementById('attempts');
let containerEl = document.getElementById('container');
let lifEl = document.getElementById('lifEle');
let rightEl = document.getElementById('rigEle');
let cenEl = document.getElementById('cenEle');
let ulEl = document.getElementById('result');
let catimgs=[];
let atmPs = 1;
let mxAtmps = 25;



let catimgs=[];
function CatoImg(cName) {
    
    this.spLname = cName.split('.')[0];
    this.img= 'images/' + cName ;
    this.votes = 0;
    this.views = 0;
    catimgs.push(this);
}

let cImg = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg',
 'chair.jpg', 'cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg',
 'sweep.png','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg'];


 for (let i = 0; i < cImg.length; i++) {
    new CatoImg(cImg[i]);
};


function raNFimg() {

    return Math.floor(Math.random() * catimgs.length);
}

let LFIndx;
let RFIndx;
let CFIndx;

function renderRandomimg() {

    lFIndx = raNFimg();
    RFIndx = raNFimg();
    CFIndx = raNFimg();
    while (lFIndx === RFIndx || RFIndx === CFIndx || CFIndx === lFIndx) {
        lFIndx = raNFimg();
        RFIndx=raNFimg();
        CFIndx = raNFimg();
    }
    lifEl.setAttribute('src', catimg[LFIndx].img);
    rightEl.setAttribute('src', catimg[RFIndx].img);
    cenEl.setAttribute('src', catimg[CFIndx].img);
    lifEl.setAttribute('alt', catimg[LFIndx].spLname);
    rightEl.setAttribute('alt', catimg[RFIndx].spLname);
    cenEl.setAttribute('alt', catimg[CFIndx].spLname);
    lifEl.setAttribute('title', catimg[LFIndx].spLname);
    rightEl.setAttribute('title', catimg[RFIndx].spLname);
    cenEl.setAttribute('title', catimg[CFIndx].spLname);
    
   catimgs[LFIndx].views++;
   catimgs[RFIndx].views++;
   catimgs[CFIndx].views++;

}

renderRandomimg();

  lifEl.addEventListener('click', handelClicks);
  rightEl.addEventListener('click', handelClicks);
  cenEl.addEventListener('click', handelClicks);

  function handelClicks(event) {
    if (atmPs <= mxAtmps) {
        let clickedImg = event.target.id;
        if (clickedImg === 'lifEle') {
           catimgs[LFIndx].votes++;
        }    else if (clickedImg === 'rigele') {
                  catimgs[rigEle].votes++;
              } else if (clickedImg === 'cenEle') {
                catimgs[cenEle].votes++;
            }
       raNFINd();
    } else {
        let ulEl = document.getElementById('result');
        for (let i = 0; i < catimg.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${catimgs[i].spLname} has ${catimgs[i].votes} votes and ${catimgs[i].views} views .`;
            ulEl.appendChild(liEl);
        }
        lifEle.removeEventListener('click', handelClicks);
      rigEle.removeEventListener('click', handelClicks);
      cenEle.removeEventListener('click', handelClicks);

    }
    atmPs++;
}


