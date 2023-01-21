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
