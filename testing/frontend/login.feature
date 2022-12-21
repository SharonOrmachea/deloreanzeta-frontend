@ceciliaBruno @Login @regresion

Feature: Login

COMO usuario registrado de  la página Delorean Zeta
QUIERO loguearme  
PARA poder comprar productos y revisar mi historial de compras

#FUNCIONALIDADES DEL HEADER de la pagina de Login
Scenario Outline: Comprobar las funcionalidades del los navbar del Header de la pagina de login

Given estoy en la pagina de inicio de Delorean Zeta
When hago click en "Iniciar Sesion"
And hago click sobre el navbar <navbar>
Then me redirecciona a la pagina <pagina>
Examples:
|navbar			|pagina|
|Logo			|Inicio|
|Registrate		|Formulario de Crear una Cuenta|
|Iniciar Sesion	|Formulario de Iniciar Sesion|



#FORMULARIO DE "INICIAR SESION"
Scenario Outline: Iniciar Sesion Exitosamente
Given estoy en la pagina de login de Delorean Zeta
And soy un usuario registrado
When completo el formulario con Email <email> and contraseña <pass> validos
And hago click en el boton "Iniciar Sesion"
Then me re direcciona a la pagina de usuario logueado
Examples:
|email				|pass|
|ceciprueba@gmail.com	|CeciPrueba1234$|


Scenario Outline: No Iniciar Sesion con <datos invalidos>
Given estoy en la pagina de login de Delorean Zeta
And soy un usuario registrado
When completo el formulario con Email <email> and contraseña <pass>
And hago click en el boton "Iniciar Sesion"
Then me envia mensaje de error <error> y no me permite loguearme

Examples:
|datos invalidos			|email			          |pass				| error|
|email invalido sin @		|cecipruebagmail.com	  |CeciPrueba1234$		|
|email invalido sin dominio	|ceciprueba@gmail		  |CeciPrueba1234$		|
|email invalido por caracteres	|@%&%/?¡@gmail.com	  |CeciPrueba1234$		|
|emial sin nombre de usuario	| @gmail.com			  |CeciPrueba1234$		|
|email invalido por punto inicial en la direccion|.ceciprueba@gmail	|CeciPrueba1234$		|
|email invalido por punto final  en la direccion |ceciprueba.@gmail	|CeciPrueba1234$		|
|contraseña invalida por no tener mayuscula 	 |ceciprueba@gmail.com	  |ceciprueba1234$		|
|contraseña invalida por no tener minuscula	  |ceciprueba@gmail.com|CECIPRUEBA1234$		|
|contraseña invalida por no tener numero	|ceciprueba@gmail.com	|ceciprueba$			|
|contraseña invalida por no tener caracter	|ceciprueba@gmail.com	|ceciprueba1234 		|
|usuario no registrado					|ceciceci@gmail.com	|CeciPrueba1234$		|


Scenario Outline: Mostrar Contraseña
Given estoy en la pagina de login de Delorean Zeta
And soy un usuario registrado
When completo el formulario con email <email> and contraseña <pass>
And hago click en el "ojo"
Then cambia el icono del ojo
And me muestra los caracteres ingresados en la contraseña
Examples:
|email				|pass|
|ceciprueba@gmail.com	|CeciPrueba1234$|


Scenario Outline: Ocultar Contraseña
Given estoy en la pagina de login de Delorean Zeta
And soy un usuario registrado
When completo el formulario con email <email> and contraseña <pass>
And hago click en el "ojo" dos veces
Then cambia el icono del ojo y  me muestra y oculta los caracteres ingresados en la contraseña respectivamente
Examples:
|email				|pass|
|ceciprueba@gmail.com	|CeciPrueba1234$|



#RECUPERAR CONTRASEÑA

Scenario Outline: Recuperar contraseña
Given estoy en la pagina de login de Delorean Zeta
And soy un usuario registrado
When hago click en "¿Olvidaste tu contraseña?"
And me redirecciona a una pagina de "Recupera tu Cuenta"
And ingreso mi  correo indicado en el registro <mail válido>
And indico que  no soy un robot
And hago click en continuar
And recibo en mi casilla de correo electronico un codigo que me permita recuperar contraseña
And completo el campo con el codigo
And hago click en "Continuar"
Then
Examples:
|mail válido|
|ceciprueba@gmail.com|



#FUNCIONALIDAD DE "REGISTRATE" DESDE LA PAGINA DEL Login

Scenario: Comprobar la funcionalidad de "Registrate" desde la pagina de login

Given estoy en la pagina de login de Delorean Zeta

When hago click en scroll down  hasta "¿No tienes una cuenta? Registrate."
And hago click sobre "Registrate"
Then me redirecciona a la pagina de "Formulario de Crear una Cuenta"