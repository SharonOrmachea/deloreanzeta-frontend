@ceciliaBruno @contraseña @regresion

Scenario Outline: Mostrar Contraseña
Given estoy en la pagina de login de Delorean Zeta
And soy un usuario registrado
When completo el formulario con email <email> and contraseña <pass>
And hago click en el "ojo"
Then cambia el icono del ojo
And me muestra los caracteres ingresados en la contraseña
Examples:
|email                  |pass|
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

Scenario Outline: Recuperar contraseña
Given estoy en la pagina de login de Delorean Zeta
And soy un usuario registrado
When hago click en "¿Olvidaste tu contraseña?"
And me redirecciona a una pagina de "Recupera tu Cuenta"
And ingreso mi  correo indicado en el registro <mail válido>
And hago click en continuar
And recibo en mi casilla de correo electronico un codigo que me permita recuperar contraseña
And completo el campo con el codigo
And hago click en "Continuar"
Then me abre un formulario
Examples:
|mail válido|
|ceciprueba@gmail.com|