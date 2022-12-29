@ceciliaBruno @contraseña @regresion
Feature: Password

Scenario Outline: Mostrar Contraseña
COMO usuario registrado de  la página Delorean Zeta
QUIERO restablecer mi cotraseña
PARA poder poder loguearme 

Scenario Outline: Mostrar Contraseña en login
Given estoy en login de Delorean Zeta
When completo el formulario con email <email> and contraseña <pass>
When hago click en "Show"
Then se visualiza "Hide"
Then se visualiza los caracteres ingresados en la contraseña
Examples:
|email                  |pass|
|ceciprueba@gmail.com	|CeciPrueba1234$|

Scenario Outline: Ocultar Contraseña en login
Given estoy en la pagina de login de Delorean Zeta
When completo el formulario con email <email> and contraseña <pass>
When hago click en "Show"
When hago click en "Hide"
Then se visualiza "Show"
Then se visualiza los caracteres enmascarados de la contraseña
Examples:
|email				    |pass|
|ceciprueba@gmail.com	|CeciPrueba1234$|

Scenario Outline: Restablecer contraseña
Given estoy en la pagina de login de Delorean Zeta
And soy un usuario registrado
When hago click en "¿Olvidaste tu contraseña?"
When ingreso el correo indicado en el registro <mailvalido>
When hago click en continuar
When ingreso el codigo recibido en el correo
When hago click en "Continuar"
When ingreso contraseña <pass>
When repito contraseña <pass>
When acepto "Términos de Uso y Politicas de Privacidad"
When hago click sobre"Restablecer la Contraseña"
Then me redirecciona a la pagina de login

Examples:
|mailvalido             |pass|
|ceciprueba@gmail.com   |Cecilia1234#|

Scenario Outline: Mostrar Contraseña en sign-in
Given estoy en sign-in de Delorean Zeta
When completo el campo "Contraseña" <pass>
When hago click en "Show"
Then se visualiza "Hide"
Then se visualiza los caracteres ingresados en la contraseña
Examples:
|pass|
|CeciPrueba1234$|

Scenario Outline: Ocultar Contraseña en sign-in
Given estoy en sign-in de Delorean Zeta
When completo el campo "Contraseña" <pass>
When hago click en "Show"
When hago click en "Hide"
Then se visualiza "Show"
Then se visualiza los caracteres enmascarados de la contraseña
Examples:
|pass|
|CeciPrueba1234$|

Scenario Outline: Mostrar Repetir Contraseña en sign-in
Given estoy en sign-in de Delorean Zeta
When completo el campo "Repetir Contraseña" <pass>
When hago click en "Show"
Then se visualiza "Hide"
Then se visualiza los caracteres ingresados en la contraseña
Examples:
|pass|
|CeciPrueba1234$|

Scenario Outline: Ocultar Repetir Contraseña en sign-in
Given estoy en sign-in de Delorean Zeta
When completo el campo "Repetir Contraseña" <pass>
When hago click en "Show"
When hago click en "Hide"
Then se visualiza "Show"
Then se visualiza los caracteres enmascarados de la contraseña
Examples:
|pass|
|CeciPrueba1234$|