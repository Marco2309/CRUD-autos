import autos from './autos.js'
const tbody = document.getElementsByTagName('tbody')

// Constructor de auto
function Car (id, Marca, Modelo, Color, Año,  Precio) {
    this.id = id
    this.Marca = Marca
    this.Modelo = Modelo
    this.Color = Color
    this.Año = Año
    this.Precio = Precio
    }

// imprimir fila
function rowPrint (car) {
    const row = `<tr>
                    <td rowspan="2">${car.id}</td>
                    <td rowspan="2">${car.Marca}</td>
                    <td rowspan="2">${car.Modelo}</td>
                    <td rowspan="2">${car.Color}</td>
                    <td rowspan="2">${car.Año}</td>
                    <td rowspan="2">${car.Precio}</td>
                    <td><input type="button" value="Eliminar" onclick="removeUser(${car.id})" class="btn btn-danger"></td>
                </tr>
                <tr>
                    <td><input type="button" value="Editar" onclick="editingUser(${car.id})" class="btn btn-warning"></td>
                </tr>`
    tbody[0].innerHTML += row
}
// imprimir autos por defectao
function defaulCars () {
    tbody[0].innerHTML=''
    autos.forEach((auto) => rowPrint(auto))
}
//Agregar auto
function addCar() {
    const id = autos.length + 1
    const marca = document.getElementById('Marca').value
    const modelo = document.getElementById('Modelo').value
    const color = document.getElementById('Color').value
    const anno = document.getElementById('Año').value
    const precio = document.getElementById('Precio').value
    const newCar = new Car(id, marca, modelo, color, anno, precio)
    autos.push(newCar)
    // let marca2 = document.getElementById('Marca')
    // marca2.innerHTML = ''
    document.getElementById("miForm").reset();
    defaulCars()
}

function removeUser(id) {
    const index = autos.findIndex((auto) => auto.id === id);
    autos.splice(index, 1);
    defaulCars()
}

function editingUser (id) {
    const index = autos.findIndex((auto) => auto.id === id);
    autos[index].Marca = document.getElementById('Marca').value
    autos[index].Modelo = document.getElementById('Modelo').value
    autos[index].Color = document.getElementById('Color').value
    autos[index].Año = document.getElementById('Año').value
    autos[index].Precio = document.getElementById('Precio').value
    document.getElementById("miForm").reset();
    defaulCars ()
}

window.addCar = addCar;
window.removeUser = removeUser;
window.editingUser = editingUser;
defaulCars()
