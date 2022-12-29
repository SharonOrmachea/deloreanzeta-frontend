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

