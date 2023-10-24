// Obtener el usuario desde el almacenamiento local o establecerlo en falso si no existe
const user = JSON.parse(localStorage.getItem('login_success')) || false;

// Verificar si el usuario está autenticado
if (!user) {
  window.location.href = 'login.html';
} else {
  // Mostrar el nombre del usuario en el elemento con id 'name_display'
  const username = document.getElementById('name_display');
  username.textContent = user.name;
  console.log(localStorage.getItem('login_success'));
}

// Manejar el evento de clic en el botón de cierre de sesión
const logout = document.getElementById('salir_cuenta');
logout.addEventListener('click', () => {
  alert('Hasta pronto!');
  // Eliminar la información de inicio de sesión del almacenamiento local
  localStorage.removeItem('login_success');
  window.location.href = 'login.html';
});

// Mostrar en la consola los datos de usuarios almacenados en el almacenamiento local
console.log(JSON.parse(localStorage.getItem('users')));

const usuariosEnBase = JSON.parse(localStorage.getItem('users')) || [];
const usuariosMenosActual = usuariosEnBase.filter(usuario => usuario.name === "123");
localStorage.setItem('users', JSON.stringify(usuariosMenosActual));
console.log(JSON.parse(localStorage.getItem('users')));

