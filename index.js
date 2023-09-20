let name = parseInt(prompt('enter your name'));
let weight = parseInt(prompt('enter your weight(kg)'));

function aboutMe(name, weight){
    let kilo = weight * 2.2
    alert(`${kilo}lbs`);
}
aboutMe(name, weight);
