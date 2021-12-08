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

            /*--------------EVENTS----------------*/
            let event1 = document.createElement('p');
            let event2 = document.createElement('p');
            let event3 = document.createElement('p');
            let event4 = document.createElement('p');

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

            event1.textContent = towns[i].events[0]
            event2.textContent = towns[i].events[1]
            event3.textContent = towns[i].events[2]
            event4.textContent = towns[i].events[3]

            card.appendChild(div1);
            card.appendChild(div2);
            div1.appendChild(name);
            div1.appendChild(motto);
            div1.appendChild(yearFounded);
            div1.appendChild(population);
            div1.appendChild(annualRain);
            div2.appendChild(image);

            if (document.body.contains(document.querySelector('div.cards'))){
                document.querySelector('div.cards').appendChild(card);
            }

            else if (document.body.contains(document.getElementById('upcoming-events-fish'))){
                if (towns[i].name == 'Fish Haven') {
                    document.querySelector('#upcoming-events-fish').appendChild(event1);
                    document.querySelector('#upcoming-events-fish').appendChild(event2);
                    document.querySelector('#upcoming-events-fish').appendChild(event3);
                    document.querySelector('#upcoming-events-fish').appendChild(event4);
                }
            }

            else if (document.body.contains(document.getElementById('upcoming-events-soda'))){
                if (towns[i].name == 'Soda Springs') {
                    document.querySelector('#upcoming-events-soda').appendChild(event1);
                    document.querySelector('#upcoming-events-soda').appendChild(event2);
                    document.querySelector('#upcoming-events-soda').appendChild(event3);
                }
            }

            else if (document.body.contains(document.getElementById('upcoming-events-preston'))){
                if (towns[i].name == 'Preston') {
                    document.querySelector('#upcoming-events-preston').appendChild(event1);
                    document.querySelector('#upcoming-events-preston').appendChild(event2);
                    document.querySelector('#upcoming-events-preston').appendChild(event3);
                }
            }
            
        }
    });