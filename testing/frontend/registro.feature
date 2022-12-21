@ceciliaBruno @Registro @regresion
Feature: Registro

COMO visitante de la página Delorean Zeta
QUIERO poder registrarme
PARA poder loguearme y comprar productos.

#FUNCIONALIDADES DE "REGISTRATE"

Scenario: Comprobar la funcionalidad de "Registrate" desde el header de la pagina de login

Given estoy en la pagina de login de Delorean Zeta

When hago click en "Registrate" del header
Then me redirecciona a la pagina de "Formulario de Crear una Cuenta"

Scenario: Comprobar la funcionalidad de "Registrate" desde la pagina de login

Given estoy en la pagina de login de Delorean Zeta

When hago click en scroll down  hasta "¿No tienes una cuenta? Regístrate."
And hago click sobre "Regístrate"
Then me redirecciona a la pagina de "Formulario de Crear una Cuenta"

#FORMULARIO: CREAR UNA Cuenta

Scenario Outline: Registro exitoso completando formulario
Given estoy en la pagina de Login de  Delorean Zeta
When hago click en "Registrate"
And  completo el formulario con nombre <nombre>, apellido <apellido>, telefono <telefono>, email <email>, contraseña <contraseña>, repetir  contraseña <repetir contraseña>
And acepto "Términos de Uso y Politicas de Privacidad"
And hago click en "Crear Cuenta"
Then me re direcciona a la pagina de usuario logueado.

Examples:
|nombre |apellido	|telefono  	| email	 |contraseña	|repetir contraseña|
|cecilia    |bruno	|0261333333	|ceciprueba@gmail.com	|CeciPrueba1234$	|CeciPrueba1234$|

Scenario Outline: Registro fallido por <dato invalido>
Given estoy en la pagina de Login de  Delorean Zeta
When hago click en "Registrate"
And  completo el formulario con nombre <nombre>, apellido <apellido>, telefono <telefono>, email <email>, contraseña <contraseña>, repetir  contraseña <repetir contraseña>
And acepto "Términos de Uso y Politicas de Privacidad"
And hago click en "Crear Cuenta"
Then me re direcciona a la pagina de usuario logueado.

Examples:
|dato invalido|nombre|apellido	|telefono	| email|contraseña			|repetir contraseña|



Scenario Outline: Registro fallido por no aceptar términos de uso y políticas de privacidad
Given estoy en la pagin de Login Delorean Zeta
When hago click en "Registrate"
And  completo el formulario con nombre <nombre>, apellido <apellido>, telefono <telefono>, email <email>, contraseña <contraseña>, repetir  contraseña <repetir contraseña>
And no acepto "Términos de Uso y Politicas de Privacidad"
And hago click en "Crear Cuenta"
Then recibo un mensaje de <mensaje>

Examples:
|nombre		|apellido	|telefono	| email					|contraseña			|repetir contraseña	|mensaje|
|cecilia	|bruno		|0261333333	|ceciprueba@gmail.com	|CeciPrueba1234$	|CeciPrueba1234$	|"Debe aceptar los Términos de Uso y Políticas de Privacidad"|

Scenario Outline: Mostrar Contraseña
Given estoy en la pagina de login de Delorean Zeta
When hago click en Registrate
And  completo la contraseña <contraseña> del formulario
And hago click en el "ojo"
Then cambia el icono del ojo
And me muestra los caracteres ingresados en la contraseña
Examples:
|contraseña|
|CeciPrueba1234$|

Scenario Outline: Ocultar Contraseña
Given estoy en la pagina de login de Delorean Zeta
When hago click en Registrate
And  completo la contraseña <contraseña> del formulario
And hago click en el "ojo" dos veces
Then cambia el icono del ojo y  me muestra y oculta los caracteres ingresados en la contraseña respectivamente
Examples:
|pass|
|CeciPrueba1234$|

Scenario Outline: Mostrar Repetir Contraseña
Given estoy en la pagina de login de Delorean Zeta
When hago click en Registrate
And  completo Repetir contraseña <contraseña>
And hago click en el "ojo"
Then cambia el icono del ojo
And me muestra los caracteres ingresados en Repetir contraseña
Examples:
|contraseña|
|CeciPrueba1234$|

Scenario Outline: Ocultar Repetir Contraseña
Given estoy en la pagina de login de Delorean Zeta
When hago click en Registrate
And  completo Repetir contraseña <contraseña>
And hago click en el "ojo" dos veces
Then cambia el icono del ojo y  me muestra y oculta los caracteres ingresados en la  repetir contraseña respectivamente
Examples:
|pass|
|CeciPrueba1234$|

Scenario: Leer "Términos de Uso"
Given estoy en la pagina de login de Delorean Zeta
When hago click en Registrate
And  hago click sobre "Términos de Uso"
Then me redireciona a una pagina con  los términos y condiciones de uso de la página.

Scenario: Leer "Política de Privacidad"
Given estoy en la pagina de login de Delorean Zeta
When hago click en Registrate
And  hago click sobre "Política de Privacidad"
Then me redireciona a una pagina con la Poltica de Privacidad