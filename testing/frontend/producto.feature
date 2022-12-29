@ceciliaBruno @regresion @tienda @paginaDeProducto
Feature: Tienda de Productos

COMO visitante del sitio Delorean Zeta
QUIERO una página de producto
PARA ver los detalles del producto

Scenario: Abrir un producto desde la tienda
Given estoy en store de Delorean Zeta
When hago scroll down hasta "Todos los productos"
When  hago click sobre el primer producto del catalogo
Then se visualiza la informacion del producto 
Then se visualiza el boton  "Agregar al Carrito"

Scenario Outline: Visualizar foto ampliada
Given estoy  en store de Delorean Zeta
When hago click en el primer producto del catalogo
When hago click en la <foto>
Then se visualiza la <foto> ampliada
Examples:
|foto|
|primer foto|
|segunda foto|
|tercer foto|
|cuarta foto|

Scenario: Agregar un producto al carrito
Given estoy en store de Delorean Zeta
When hago click en el primer producto del catalogo
When hago click en "Agregar al Carrito"
Then se visualiza que el producto se agrego al carrito

Scenario: Modificar la cantidad de un producto
Given estoy en store de Delorean Zeta
When hago click en el primer producto del catalogo
When hago click en el signo "+"
Then se verifica que la cantidad es igual a "2"
When hago click en el "-"
Then se verifica que la cantidad es igual a "1"

Scenario: Mensaje de error por dismunir la cantidad  de un producto a "0"
Given estoy en store de Delorean Zeta
When hago click en el primer producto del catalogo
When hago click en el signo "-"
Then se visualiza el mensaje de error: "No se puede descontar más productos"

Scenario: Visualizar la informacion de un producto
Given estoy en la pagina de producto
When selecciono un prodcuto
And hago scroll down sobre la pagina
Then se visualiza la informacion del producto