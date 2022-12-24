@ceciliaBruno @regresion @tienda @paginaDeProducto
Feature: Tienda de Productos

COMO visitante del sitio Delorean Zeta
QUIERO una página de producto
PARA ver los detalles del productos

Scenario: Abrir un producto desde la pagina de inicio
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll hacia abajo hasta la seccion "Tienda"
And hago click sobre el primer producto
Then se abre la pagina de producto
Then me muestra imagenes, nombre, categoria, precio,descuento,cantidad, detalle, medios de pago
Then puedo visualizar el boton "Agregar al carrito"

Scenario: Abrir un producto desde la tienda
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll hacia abajo hasta la seccion "Tienda"
And hago click sobre el botòn "Ver mas"
And hago click sobre el primer producto
Then se abre la pagina de producto
Then me muestra imagenes, nombre, categoria, precio,descuento,cantidad, descripcion, medios de pago
Then me muestra el boton "Agregar al carrito"

Scenario Outline: Verificar funcionalidades de los botones de la pagina de producto
Given estoy  en la pagina de producto
When hago click en <funcion>
Then verifico que <verificacion>
Examples:
|funcion|verificacion|
|foto| la foto se abre y apraece ampliada|
|Agregar al carrito| me redirecciona a la pagina para concretar compra|
|cantidad +| aumenta la cantidad de producto seleccionado|
|cantidad -| disminuye la cantidad de producto seleccionado|
|medios de pago|me amplia la lista de medios de pago|

Scenario: Visualizar la infromacion de un producto
Given estoy en la pagina de producto
When selecciono un prodcuto
And hago scroll down sobre la pagina
Then se visualiza la informacion del producto