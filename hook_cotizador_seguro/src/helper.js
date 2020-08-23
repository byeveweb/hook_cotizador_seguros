//obtiene la diferencia
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

//calcula el totoal a pagar
export function calcularMarca(marca) {

    let incrementos = 0

    switch (marca) {

        case 'europeo':
            incrementos = 1.30
            console.log(incrementos)
            break;
        case 'americano':
            incrementos = 1.15
            console.log(incrementos)
            break;
        case 'asiatico':
            incrementos = 1.05
            console.log(incrementos)
            break;

        default:
            break;
    }

    return incrementos

}


//Calcula el tipo de seguro
export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50
}

// Muestra la primera letra mayúscula
export function primeraMayus(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}
