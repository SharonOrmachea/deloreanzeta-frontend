@ceciliaBruno @Carrito_de_compras @regresion @ceci
Feature: Carrito_de_compras

COMO usuario logueado
QUIERO un carrito de compras
PARA cargar productos y concretar comprar

Scenario: Agregar un producto al carrito
Given estoy en store de Delorean Zeta
When hago scroll down hasta "Todos los productos"
When  hago click sobre el primer producto del catalogo
When hago click sobre el  boton  "Agregar al Carrito"
Then visualizo que el producto este agregado a "cart"

Scenario: Agregar mas de un producto al carrito
Given estoy en store de Delorean Zeta
When hago scroll down hasta "Todos los productos"
When hago click sobre el primer producto del catalogo
When hago click sobre el  boton  "Agregar al Carrito"
When hago click sobre "Tienda" del header
When hago scroll down hasta "Todos los productos"
When hago click sobre el segundo producto del catalogo
When hago click sobre el  boton  "Agregar al Carrito"
Then visualizo que el primer y segundo producto esten agregados a "cart"

Scenario: Sumar una unidad a un producto del al carrito
Given estoy en store de Delorean Zeta
When hago click en el primer producto del catalogo
When voy a cart
When hago click en el signo "+" del primer producto
Then se verifica que la cantidad es igual a "2"

Scenario: Restar una unidad a un producto del al carrito
Given estoy en store de Delorean Zeta
When hago click en el primer producto del catalogo
When voy a cart
When hago click en el signo "+" del primer producto
Then se verifica que la cantidad es igual a "2"
When hago click en el "-"
Then se verifica que la cantidad es igual a "1"
Then visualizo que el producto este agregado a "cart"

Scenario Outline: Verificar el precio de un producto en el carrito
Given estoy en store de Delorean Zeta
When hago scroll down hasta "Todos los productos"
When  hago click sobre el primer producto del catalogo
When visualizo el precio del prmer producto en la tienda <precio1>
When hago click sobre el  boton  "Agregar al Carrito"
Then visualizo que el primer producto este agregado a "cart"
Then verifico que el precio del  primer producto en el carrito <precio2> sea igual a precio del priemr producto en la tienda <precio1>
Examples:
|precio1|precio2|
|1500|1500|

Scenario Outline: Verificar la sumatoria precio de un producto en el carrito
Given estoy en store de Delorean Zeta
When hago scroll down hasta "Todos los productos"
When  hago click sobre el primer producto del catalogo
When visualizo el precio del primer producto en la tienda <precio1>
When hago click sobre el  boton  "Agregar al Carrito"
When hago click sobre "Tienda" del header
When hago scroll down hasta "Todos los productos"
When hago click sobre el segundo producto del catalogo
When visualizo el precio del segundo producto en la tienda <precio3>
When hago click sobre el  boton  "Agregar al Carrito"
Then visualizo que el primer producto y segundo prodcuto esten agregados a "cart"
Then verifico qu el precio total <precio_total> del carrito sea la suma de <precio1> y <precio3>
Examples:
|precio1|precio3|precio_total|
|1400   |2400   |3800|

Scenario: Eliminar un producto del carrito
Given estoy en store de Delorean Zeta
When hago scroll down hasta "Todos los productos"
When  hago click sobre el primer producto del catalogo
When hago click sobre el  boton  "Agregar al Carrito"
When hago clicl en "Eliminar producto"
Then visualizo que el producto  este eliminado de "cart"
