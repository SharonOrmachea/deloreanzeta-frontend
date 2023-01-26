@ceciliaBruno @contrataciones @regresion 
Feature: Contraciones

COMO usuario 
QUIERO una seccion de contrataciones
PARA ponerme en contacto con la banda y contratarlos para un evento

Scenario Outline: Contactar con exito a la banda
Given estoy en la pagina de contrataciones de Delorean Zeta
When completo el formulario con nombre <nombre>, apellido <apellido>, telefono <telefono>, email <email>, Asunto <asunto>, mensaje <mensaje>
And hago click en el boton "Enviar"
#Then recibo un mesaje de 
Examples:
|nombre     |apellido   |telefono   |email                   |asunto         |mensaje|
|cecilia    |bruno      |2613607767 |ceciprueba@gmail.com    |cumple de 40   |quiero contratarlos|

Scenario Outline: No contactar con la banda si los campos estan incompletos

Given estoy en la pagina de contrataciones de Delorean Zeta
When completo el formulario con nombre <nombre>, apellido <apellido>, telefono <telefono>, email <email>, Asunto <asunto>, mensaje <mensaje>
And hago click en el boton "Enviar"
#Then recibo un mesaje de 
Examples: 
|nombre     |apellido   |telefono   |email                   |asunto         |mensaje|
|cecilia    |bruno      |2613607767 |ceciprueba@gmail.com    |cumple de 40   |quiero contratarlos|