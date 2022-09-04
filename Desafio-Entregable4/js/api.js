console.log("Hola");

document.addEventListener("DOMContentLoaded", () =>{
    const random = getRandomInt(1,151)
    fetchData(random)
})

const getRandomInt = (min, max)=> {
    return Math.floor(Math.random() * (max - min) + min);
}

const fetchData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        
        const pokemon = {
            img: data.sprites.other.dream_world.front_default
        }
        pintarCard(pokemon)

    } catch (error) {
        console.log(error);
        
    }
}

const pintarCard = (pokemon) => {
    console.log(pokemon); 
    const cajaRegistro = document.querySelector('.imagen-registro')
    const template = document.querySelector('#template-card').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    clone.querySelector('.img-registro').setAttribute('src', pokemon.img)

    fragment.appendChild(clone)
    cajaRegistro.appendChild(fragment)



}


