const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let div1 = document.createElement('div')
            let div2 = document.createElement('div')
            let name = document.createElement('h2');
            let motto = document.createElement('h3');
            let yearFounded = document.createElement('p');
            let population = document.createElement('p');
            let annualRain = document.createElement('p');
            let image = document.createElement('img')

            let imagesFolder = './images/homeImages/'

            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Population: '+ towns[i].currentPopulation;
            annualRain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            image.setAttribute('src', imagesFolder + towns[i].photo);
            image.setAttribute('alt', towns[i].name)

            div1.setAttribute('class','data')
            div2.setAttribute('class','image')

            card.appendChild(div1);
            card.appendChild(div2);
            div1.appendChild(name);
            div1.appendChild(motto);
            div1.appendChild(yearFounded);
            div1.appendChild(population);
            div1.appendChild(annualRain);
            div2.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    });