@ceciliaBruno @Tienda @regresion @PaginaDeTienda
Feature: Tienda

COMO visitante del sitio Delorean Zeta
QUIERO una página de tienda
PARA ver los productos que están a la venta

Scenario: Verificar el funcionamiento de los botones de categoria
Given estoy en store de Delorean Zeta
When hago scroll down hasta la seccion "Todos los productos"
Then se visualiza todas las categorias y los productos de la tienda


Scenario Outline: Visualizar todos los prodcutos de la categoria <categoria>
Given estoy en store de Delorean Zeta
When hago scroll down hasta la seccion "Todos los productos"
When hago click sobre la categoria <Categoria>
Then se visualiza todos los prodcutos de esa categoria

Examples:
|categoria|
|Tazas|
|Cuadros|
|Remeras|
|Funkos|

Scenario: Seleccionar un producto desde la Tienda
Given estoy en home de Delorean Zeta
When hago scroll down hasta la seccion "Tienda"
And hago click sobre el boton "Ver mas"
And hago click en el primer producto del catalogo
Then me redirecciona a la pagina de "descripcion de un producto"

Scenario: Seleccionar un producto desde el carrucel de la tienda
Given estoy en home de Delorean Zeta
When hago scroll down hasta la seccion "Tienda"
And hago click en el primer producto del carrucel
Then me redirecciona a la pagina de "descripcion de un producto"

Scenario: verificacion de las funcionalidades de los botones "chevron" del carrusel de la tienda
Given estoy en home de Delorean Zeta
When hago scroll down hasta la seccion "Tienda"
And hago click sobre el boton "chevron" de la <direccion>
Then me muestra mas productos
Examples:
|direccion|
|derecha|
|izquierda|