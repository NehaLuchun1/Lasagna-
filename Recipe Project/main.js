// Event Listener
document.getElementById('page').addEventListener('click', pageButton);
document.getElementById('hist').addEventListener('click',  histButton);
document.getElementById('tech').addEventListener('click', techButton);
document.getElementById('reci').addEventListener('click', reciButton);

// Event Function
function histButton() {
    // Change Img
    document.getElementById('img').src = 'images/Italy.png';
    document.getElementById('img2').src = 'images/italy-map.gif';
    document.getElementById('img3').src = 'images/italiaTrainMap_2.gif';
    document.getElementById('img4').src = 'images/italy-regions.png';
    // Re-enter Paragraph
    document.getElementById('para').innerHTML = 'The first lasagna recipe to be written was in the 14th century liber de Coquina and originated in Italy. However lasagna can be traced back all the way to Ancient Greece, lasagnon.';
    document.getElementById('pics').innerHTML = 'The traditional lasagna of Naples, lasagne di carnevale, have sausage, fried meatballs, hard-boiled eggs, ricotta, and mozzarella cheese with neapolitan sauce. The dish is typically flavored by wine, garlic, onion, and oregano. It can be made by various kinds of ricotta and mozzarella as well as meat and vegetables.';
    // Change Font-Size
    document.getElementById('pics').style.fontSize = '44px';
}

function pageButton() {
    document.getElementById('img').src = 'images/lasagna.jpg';
    document.getElementById('img2').src = 'images/lazy-day-lasagna-hero.jpg';
    document.getElementById('img3').src = 'images/wholelasagna.jpg';
    document.getElementById('img4').src = 'images/platelasagna.jpg';
    document.getElementById('para').innerHTML = 'Welcome to our lasagna site! Where we show how to make the most perfect lasagna on even the most laziest days!';
    document.getElementById('pics').innerHTML = 'Gallery';
}

function techButton() {
    document.getElementById('img').src = 'images/basic-lasagna.jpg';
    document.getElementById('img2').src = 'images/lasagna-with-fresh-ricotta.jpg';
    document.getElementById('img3').src = 'images/pasta-dish.jpg';
    document.getElementById('img4').src = 'images/preparation.jpg'
    document.getElementById('para').innerHTML = '1. Never use oil <br> 2. Bring Water To Boil <br> 3. Add Salt After Boiling Water <br> 4. Serve Immediately'
}

function reciButton() {
    document.getElementById('para').innerHTML = '1. Preheat oven to 350 F <br> 2. Bring water to boil in a pot then add salt <br> 3. Cook meat over medium heat <br> 4. Add spices, garlic, oregano, muchroom, thyme, basil, tomato sauce <br> 5. Simmer for 5 min <br> 6. mix egg, ricotta, any cheese you want in a bowl <br> 7. Begin layering <br> 8. Spread meat sauce & cheese mixture over a dish then add the pasta <br> 9. Repeat until full & bake for 15 or so mins <br> 10. Allow to cool'
}