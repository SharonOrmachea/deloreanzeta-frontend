@ceciliaBruno @Tienda @regresion @PaginaDeTienda
Feature: Tienda

COMO visitante del sitio Delorean Zeta
QUIERO una página de tienda
PARA ver los productos que están a la venta

Scenario: Abrir la pagina de la tienda
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll hacia abajo hasta la seccion "Tienda"
And hago clcick sobre el botòn "Ver mas"
Then me redirecciona hasta la pagina de la tienda

Scenario Outline: Verificar el funcionamiento de los botones de categoria
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll hacia abajo hasta la seccion "Tienda"
And hago click sobre el botòn "Ver mas"
And hago click sobre la categoria <categoria>
Then verifico que muestre solo los prodcutos de <categoria>
Examples:
|categoria|
|Tazas|
|Cuadros|
|Remeras|
|Funkos|

Scenario: Visualizar todos los prodcutos cargados en la tienda
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll hacia abajo hasta la seccion "Tienda"
And hago click sobre el boton "Ver mas"
And hago scroll hacia abajo
Then me muestra todos los prodcutos cargados en la tienda

Scenario: Seleccionar un producto desde la Tienda
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll hacia abajo hasta la seccion "Tienda"
And hago click sobre el boton "Ver mas"
And hago click en el primer producto
Then me redirecciona a la pagina de "descripcion de un producto"

Scenario: Seleccionar un producto desde el carrusel de la tienda
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll hacia abajo hasta la seccion "Tienda"
And hago click en el primer producto
Then me redirecciona a la pagina de "descripcion de un producto"

Scenario: verificacion de las funcionalidades de los botones "chevron" del carrusel de la tienda
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll hacia abajo hasta la seccion "Tienda"
And hago click sobre el boton "chevron" de la <direccion>
Then me muestra mas productos
Examples:
|direccion|
|derecha|
|izquierda|