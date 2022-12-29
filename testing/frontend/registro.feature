@ceciliaBruno @Registro @regresion
Feature: Registro

COMO visitante de la página Delorean Zeta
QUIERO poder registrarme
PARA poder loguearme y comprar productos.

Scenario Outline: Registro exitoso
Given estoy en sign-in de Delorean Zeta
When completo el formulario con nombre <nombre>, apellido <apellido>, telefono <telefono>, email <email>, contraseña <pass>, repetir  contraseña <repite_pass>
When acepto "Términos de Uso y Politicas de Privacidad"
When hago click en "Crear Cuenta"
#Then se visualiza un mensaje de "Registro exitoso"
Examples:
|nombre     |apellido	|telefono  	| email	                 |pass      	    |repite_pass|
|cecilia    |bruno	    |0261333333	|ceciprueba@gmail.com	 |CeciPrueba1234$	|CeciPrueba1234$|

Scenario Outline: Registro fallido por <dato_invalido>
Given estoy en sign-in de Delorean Zeta
When completo el formulario con nombre <nombre>, apellido <apellido>, telefono <telefono>, email <email>, contraseña <pass>, repetir  contraseña <repite_pass>
When acepto "Términos de Uso y Politicas de Privacidad"
When hago click en "Crear Cuenta"
Then se visualiza un mensaje de error <error>
Examples:
|dato_invalido           |nombre   |apellido |telefono  | email	              |pass      	    |repite_pass    |error|
|usuario ya existente    |cecilia  |bruno	 |0261333333|ceciprueba@gmail.com |CeciPrueba1234$	|CeciPrueba1234$|usuario ya existente |
|email sin @             |cecilia  |bruno	 |0261333333|ceciprueba@gmail.com |CeciPrueba1234$	|CeciPrueba1234$|email incorrecto|
|email sin dominio       |cecilia  |bruno	 |0261333333|ceciprueba@gmail     |CeciPrueba1234$	|CeciPrueba1234$|email incorrecto|
|email con caracteres    |cecilia  |bruno    |0261333333|@%&%/?¡@gmail.com	  |CeciPrueba1234$	|CeciPrueba1234$|email incorrecto|
|emial sin usuario       |cecilia  |bruno    |0261333333|@gmail.com			  |CeciPrueba1234$	|CeciPrueba1234$|email incorrecto|
|email por punto inicial |cecilia  |bruno    |0261333333|.ceciprueba@gmail	  |CeciPrueba1234$	|CeciPrueba1234$|email incorrecto|
|email por punto final   |cecilia  |bruno    |0261333333|ceciprueba.@gmail	  |CeciPrueba1234$	|CeciPrueba1234$|email incorrecto|
|email vacio             |cecilia  |bruno    |0261333333|                     |CeciPrueba1234$	|CeciPrueba1234$|email incorrecto|
|contraseña vacia        |cecilia  |bruno    |0261333333|ceciprueba@gmail.com |             	|CeciPrueba1234$|Debes ingresar una contraseña|
|contraseña sin mayuscula|cecilia  |bruno    |0261333333|ceciprueba@gmail.com |ceciprueba1234$	|ceciprueba1234$|Contraseña incorrecta|
|contraseña sin minuscula|cecilia  |bruno    |0261333333|ceciprueba@gmail.com |CECIPRUEBA1234$	|CECIPRUEBA1234$|Contraseña incorrecta|
|contraseña sin numero   |cecilia  |bruno    |0261333333|ceciprueba@gmail.com |ceciprueba$	    |ceciprueba$	|Contraseña incorrecta|	
|contraseña sin simbolo  |cecilia  |bruno    |0261333333|ceciprueba@gmail.com |ceciprueba1234 	|ceciprueba1234 |Contraseña incorrecta|
|nombre vacio            |         |bruno    |0261333333|ceciprueba@gmail.com |CeciPrueba1234$	|CeciPrueba1234$|Campo incompleto|
|nombre invalido         |1234234  |bruno    |0261333333|ceciprueba@gmail.com |CeciPrueba1234$	|CeciPrueba1234$|nombre invalido|
|apellido vacio          |cecilia  |         |0261333333|ceciprueba@gmail.com |CeciPrueba1234$	|CeciPrueba1234$|Campo incompleto|
|apellido invalido       |cecilia  |!$#""    |0261333333|ceciprueba@gmail.com |CeciPrueba1234$	|CeciPrueba1234$|Apellido invalido|
|telefono vacio          |cecilia  |bruno    |          |ceciprueba@gmail.com |CeciPrueba1234$	|CeciPrueba1234$|Campo incompleto|
|telefono invalido       |cecilia  |bruno    |WEF#$#"wwr|ceciprueba@gmail.com |CeciPrueba1234$	|CeciPrueba1234$|Telefono invalido|
|repite_pass incorrecta  |cecilia  |bruno    |0261333333|ceciprueba@gmail.com|CeciPrueba1234$	|ceciprueba1234$|contraseña incorrecta|

Scenario Outline: Registro fallido por no aceptar términos de uso y políticas de privacidad
Given estoy en sign-in de Delorean Zetaan Zeta
When completo el formulario con nombre <nombre>, apellido <apellido>, telefono <telefono>, email <email>, contraseña <pass>, repetir  contraseña <repite_pass>
When no acepto "Términos de Uso y Politicas de Privacidad"
When hago click en "Crear Cuenta"
Then recibo un mensaje de <mensaje>
Examples:
|nombre		|apellido	|telefono	| email					|contraseña			|repetir contraseña	|mensaje|
|cecilia	|bruno		|0261333333	|ceciprueba@gmail.com	|CeciPrueba1234$	|CeciPrueba1234$	|"Debe aceptar los Términos de Uso y Políticas de Privacidad"|
