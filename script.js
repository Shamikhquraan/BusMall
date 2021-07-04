'use strict';
let attemptsEl = document.getElementById('attempts');
let containerEl = document.getElementById('container');
let lifEle = document.getElementById('lifEle');
let cenEle = document.getElementById('cenEle');
let rigEle = document.getElementById('rigEle');
let ulEl = document.getElementById('result');

let caTimg = [];
let atmPs = 1;
let mxAtmps = 25;


function CatoImg(cName) {
    
    this.spLname = cName.split('.')[0];
    this.img= 'images/' + cName ;
    this.votes = 0;
    this.views = 0;
    caTimg.push(this);
}

let cImg = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg',
 'chair.jpg', 'cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg',
 'sweep.png','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg'];


 for (let i = 0; i < cImg.length; i++) {
    new CatoImg(cImg[i]);
};console.log(CatoImg);


function raNF() {

    return  Math.floor(Math.random() * caTimg.length);
}


let lFIndx;
let RFIndx;
let CFIndx;


function raNFINd () {

    lFIndx = raNF();
    CFIndx = raNF();
    RFIndx = raNF();
    while (lFIndx === CFIndx || CFIndx === RFIndx || RFIndx=== lFIndx) {
        lFIndx = raNF();
        CFIndx = raNF();
    };

};



raNFINd ();


    lifEle.setAttribute('src', caTimg[lFIndx].img);
    cenEle.setAttribute('src', caTimg[CFIndx].img);
    rigEle.setAttribute('src', caTimg[RFIndx].img);

    lifEle.setAttribute('alt', caTimg[lFIndx].spLname);
    cenEle.setAttribute('alt', caTimg[CFIndx].spLname);
    rigEle.setAttribute('alt', caTimg[RFIndx].spLname);

    lifEle.setAttribute('title', caTimg[lFIndx].spLname);
    cenEle.setAttribute('title', caTimg[CFIndx].spLname);
    rigEle.setAttribute('title', caTimg[RFIndx].spLname);

   caTimg[lFIndx].views++;
   caTimg[CFIndx].views++;
   caTimg[RFIndx].views++;

   raNFINd ();



  lifEle.addEventListener('click', handelClicks);
  cenEle.addEventListener('click', handelClicks);
  rigEle.addEventListener('click', handelClicks);

  function handelClicks(event) {
    if (atmPs <= mxAtmps) {
        let clickedImg = event.target.id;
        if (clickedImg === 'lifEle') {
           caTimg[lFIndx].votes++;
        }    else if (clickedImg === 'cenEle') {
                  caTimg[CFIndx].votes++;
              } else if (clickedImg === 'rigEle') {
                caTimg[RFIndx].votes++;
            }
       raNFINd();
    } else {
        let ulEl = document.getElementById('result');
        for (let i = 0; i < caTimg.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${caTimg[i].spLname} has ${caTimg[i].votes} votes and ${caTimg[i].views} views .`;
            ulEl.appendChild(liEl);
        }
        lifEle.removeEventListener('click', handelClicks);
       cenEle.removeEventListener('click', handelClicks);
      rigEle.removeEventListener('click', handelClicks);
    }
    atmPs++;
}


