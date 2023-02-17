@ceciliaBruno @Login @regresion @ceci
Feature: Login

COMO usuario registrado de  la página Delorean Zeta
QUIERO loguearme  
PARA poder comprar productos 
#y revisar mi historial de compras

Scenario Outline: Iniciar Sesion Exitosamente
Given estoy en la pagina de login de Delorean Zeta
And soy un usuario registrado
When completo el formulario con email <email> and contraseña <pass> validos
When hago click en el boton "Iniciar Sesion"
Then me redirecciona a la pagina de usuario logueado
Examples:
|email				    |pass|
|ceciprueba@gmail.com	|CeciPrueba1234$|

Scenario Outline: No Iniciar Sesion con <datos_invalidos>
Given estoy en la pagina de login de Delorean Zeta
And soy un usuario registrado
When completo el formulario con email <email> and contraseña <pass>
And hago click en el boton "Iniciar Sesion"
Then me envia mensaje de error <error> y no me permite loguearme

Examples:
|datos_invalidos            |email			        |pass		    | error|
|email por formato invalido |ceciliagmail.com       |ceciprueba1234$|Usuario y/o contraseña incorrecta|
|email vacio                |                       |ceciprueba1234$|Usuario y/o contraseña incorrecta|
|contraseña invalida        |ceciprueba@gmail.com   |ceciprueba1234$|Usuario y/o contraseña incorrecta|
|contraseña vacia           |ceciprueba@gmail.com   |               |Usuario y/o contraseña incorrecta|
|usuario no registrado		|ceciceci@gmail.com	    |CeciPrueba1234$|El usuario no existe|
