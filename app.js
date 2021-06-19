//hacer click en boton agregar al carrito
//agregar elementos a una lista de compras
//poder eliminar un producto de la lista
//poder vaciar todos los elementos de la lista
//mostrar la lista en el boton carrito
//Guardar informacion en el local storage

//Variables
const cursos = document.getElementById('cursos');

//Listeners
cursos.addEventListener('click', (e) => {
	if (e.target.classList.contains('btnAgregar')) {
		console.log(
			e.target.previousElementSibling.previousElementSibling
				.previousElementSibling.firstElementChild
		);
	}
});

//Funciones
