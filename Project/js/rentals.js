const file = './JSON/rentals.json';

fetch(file)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        const rentals = jsonObject['rentals'];

        for (let i = 0; i < rentals.length; i++) {
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let reserve = document.createElement('div')
            let walk = document.createElement('div')
            let reservation = document.createElement('h3');
            let maxPersons = document.createElement('p');
            let halfDay = document.createElement('p');
            let fullDay = document.createElement('p');
            let walkIn = document.createElement('h3');
            let halfDay2 = document.createElement('p');
            let fullDay2 = document.createElement('p');
            
            let image = document.createElement('img')


            

            name.textContent = rentals[i].rental_type;
            
            maxPersons.textContent = 'Max Persons: ' + rentals[i].max_persons;
            reservation.textContent = 'With Rreservation: '
            walkIn.textContent = 'Walk In: '
            halfDay.textContent = 'Half Day: ' + rentals[i].reservation.half_day + '$';
            fullDay.textContent =  'Full Day: ' + rentals[i].reservation.full_day + '$';
            halfDay2.textContent = 'Half Day: ' +  rentals[i].walk_in.half_day + '$';
            fullDay2.textContent = 'Full Day: ' + rentals[i].walk_in.full_day + '$';
            
            // image.setAttribute('src', imagesFolder + towns[i].photo);
            // image.setAttribute('alt', towns[i].name)

            // div1.setAttribute('class','data')
            // div2.setAttribute('class','image')


            card.appendChild(name);
            card.appendChild(maxPersons);
            card.appendChild(reserve);
            card.appendChild(walk);

            reserve.appendChild(reservation);
            reserve.appendChild(halfDay);
            reserve.appendChild(fullDay);
            
            walk.appendChild(walkIn);
            walk.appendChild(halfDay2);
            walk.appendChild(fullDay2);
            


            document.querySelector('.cards').appendChild(card)
            
        }
    });