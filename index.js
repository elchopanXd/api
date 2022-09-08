// La Function CallBack es una funcion que busca algo y lo devuelve

/*function saludo(nombre) {
    console.log(`\nHola: ${nombre}\n`)
}*/

const users = [
    {
    id: 1,
    name: "patricio",
    edad: 19
    },
    {
        id: 2,
        name: "elchopanXd",
        edad: 20
    },
    {
        id: 3,
        name: "carlos",
        edad: 21
    }

]

// Utilizo una Arrow Function para buscar usuarios

const user = users.find(user => user.id === 3)

/*

// FUNCTION QUE ESCRIBE DATOS DE UN OBJETO SOLO
const saludo = (users) => {
    console.log(`\nHola: ${users.name}, tienes ${users.edad} anios\n`)
}

*/

const saludo = (user) => {
    console.log(`\nHola: ${user.name}, tienes ${user.edad} anios\n`)
}

saludo(user);




// las dos funciones son validas

// const name = () => {}