//Mario Kart Simulator
'use strict';
//Event Listner
document.getElementById('image').addEventListener('click', results)
let randNum = Math.random(); //Random decimal from 0 up to one
    let possible;
    let possibile = document.getElementById('position').value;

function results () {
    if (possible == '1' || '2' || '3' || '4' || '5' || '6') {
        if (randNum<=0.45){
            document.getElementById('image').src = 'Images/Tripple_Bananas.webp';
            document.getElementById('name').innerHTML = 'Triple Bananas';
        } else if (randNum<0.8) {
            document.getElementById('image').src = 'Images/greenshell.webp';
            document.getElementById('name').innerHTML = 'Green Shell';
        } else if (randNum<0.95) {
            document.getElementById('image').src = 'Images/Star.webp';
            document.getElementById('name').innerHTML = 'Star';
        } else if (randNum<0.99){
            document.getElementById('image').src = 'Images/Golden_Mushroom.webp';
            document.getElementById('name').innerHTML = 'Golden Mushroom';
        } else {
            document.getElementById('image').src = 'Images/Bullet_Bill';
            document.getElementById('image').innerHTML = 'Bullet Bill';
        }
    } else {
        if (randNum <=0.05){
            document.getElementById('image').src = 'Images/Tripple_Bananas.webp';
            document.getElementById('name').innerHTML = 'Triple Bananas';
        } else if (randNum <0.10) {
            document.getElementById('image').src = 'Images/greenshell.webp';
            document.getElementById('name').innerHTML = 'Green Shell';
        } else if (randNum<0.35) {
            document.getElementById('image').src = 'Images/Star.webp';
            document.getElementById('name').innerHTML = 'Star';
        } else if (randNum<0.7){
            document.getElementById('image').src = 'Images/Golden_Mushroom.webp';
            document.getElementById('name').innerHTML = 'Golden Mushroom';
        } else {
            document.getElementById('image').src = 'Images/Bullet_Bill';
            document.getElementById('image').innerHTML = 'Bullet Bill';
        }
    }
}

