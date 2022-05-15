let json = `[{
    "title": "Бэтмен",
    "universe": "DC Comics",
    "ego": "Брюс Уэйн",
    "occupation": "борец с преступностью, филантроп, миллиардер",
    "friends": "Робин, Бэтгерл",
    "superpowers": "интеллект, обширные познания, знания боевых искусств, ловкость",
    "picture": "https://n1s1.hsmedia.ru/13/a5/b2/13a5b2373d5e23489d9a4949ada5b927/547x397_0xac120002_8752067681540468870.jpg"
},{
    "title": "Супермен",
    "universe": "DC Comics",
    "ego": "Кларк Кент",
    "occupation": "борец за справедливость",
    "friends": "собака Крипто",
    "superpowers": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "picture": "https://n1s1.hsmedia.ru/06/d3/73/06d37321618034ec5f2a65b09c8576e3/547x397_0xac120002_45567661540468871.jpg"
},{
    "title": "Железный человек",
    "universe": "Marvel Comics",
    "ego": "Тони Старк",
    "occupation": "гений, миллиардер, плейбой, филантроп",
    "friends": "Мстители",
    "superpowers": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "picture": "https://n1s1.hsmedia.ru/7b/56/08/7b5608ec3df83d872fa1162fb9e32f28/547x397_0xac120002_1773711401540468871.jpg"
}]`;

document.addEventListener("DOMContentLoaded", function (event) {
let heroes = JSON.parse(json);
console.log(heroes);

let heroesContent = "";
for (let hero of heroes) {
    heroesContent += `<div class='hero'><h2>${hero.title}</h2>
    <div class='universe'><b>Вселенная</b>: ${hero.universe}</div>
    <div class='ego'><b>Альтер эго:</b> ${hero.ego}</div>
    <div class='occupation'><b>Род деятельности:</b> ${hero.occupation}</div>
    <div class='friends'><b>Друзья:</b> ${hero.friends}</div>
    <div class='superpowers'><b>Суперсила:</b> ${hero.superpowers}</div>
    <div><img className='picture' src=${hero.picture} alt="" /></div>
    <div class="title_text">Поставьте свою оценку супергерою (от 1 до 10)</div>
    <div class="score"><input type="number" max=10 min=1  required="" placeholder=""></div>
    <div><input name="button" type="button" id="button" value="Оценить" onclick="checkMessage()"/></div>
    </div>`;

    localStorage.removeItem(`${hero.title}`);
    function checkMessage() {
    localStorage.setItem(`${hero.title}`, document.getElementsByClassName("score").value);
    }

}


document.getElementById("heroesConteiner").innerHTML = heroesContent; 

});





