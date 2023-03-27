    
let heroes =[
            {
            id:1,
            nombre:'Spiderman',
            imagen:'/imagenes/1.png',
            propietario:'Marvel',
            datos:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            },
          {
            id:2,
            nombre:'Superman',
            imagen:'/imagenes/2.png',
            propietario:'Marvel',
            datos:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            id:3,
            nombre:'Flash',
            imagen:'/imagenes/3.png',
            propietario:'Marvel',
            datos:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            id:4,
            nombre:'Lobezno',
            imagen:'/imagenes/4.png',
            propietario:'Marvel',
            datos:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          },
          {
            id:5,
            nombre:'Batman',
            imagen:'/imagenes/5.png',
            propietario:'Marvel',
            datos:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          }
    ]


    export function getHeroes(id){
      return heroes.find((heroe) => heroe.id == id);
    }
    export function getHeroesApi(){
      var api = require('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=edcf7ec496297afd50c3609b57c2eed5&hash=b3c3cb1dab2c9010d489abb09de3968e');
 
      var marvel = api.createClient({
        publicKey: 'edcf7ec496297afd50c3609b57c2eed5'        
      , privateKey: '8f4f7f4f421a4ae4f6e054d9a119013b336e26fd'
      });
      marvel.characters.findAll()
      .then(console.log)
      .fail(console.error)
      .done();
    
    }