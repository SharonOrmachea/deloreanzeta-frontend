@ceciliaBruno @PaginaDeInicio @regresion @ceci
Feature: navegabilidad

COMO visitante de Delorean Zeta
QUIERO navegar por del sitio
PARA visualizar cuales son las secciones y funcionalidades disponibles

Scenario Outline: Comprobar las funcionalidades del los navbar del Header de la pagina de inicio.
Given estoy en home de Delorean Zeta
When hago click sobre el nav <nav>
Then me redirecciona a la pagina <pagina>
Examples:
|nav|pagina|
|Logo|home|
|Inicio|home|
#|Galeria|fotos y videos|
|Tienda	 |store|
#|Noticias| noticias|
#|La Banda|Sobre nosotros|
#|Tours	|Fechas y lugares de eventos|
#|Contartataciones	|Formulario de Contrataciones|
|Iniciar Sesión		|login|
|Carrito| cart|

@Ignore 
#falta desarrollar la seccion noticias
Scenario Outline: Comprobar las funcionalidades de los filtros de la seccion noticias.
Given estoy en home de Delorean Zeta
When hago scroll down hasta la seccion "Noticias"
And hago click sobre el boton <boton>
And hago click en el navbar <navbar>
Then me muestra las noticias <noticias> primero 

Examples:
|Boton			|navbar					|noticias|
|Fechas			|mas receintes primero	|que se subieron ultimas |
|Fechas  		| mas antiguas			|mas antiguas |
|Tipo de Evento	|||
|Categoria		| ||

@Ignore 
#falta desarrollar la seccion noticias
Scenario: Comprobar funcionalidad de las cards de Noticias
Given estoy en home de Delorean Zeta
When hago scroll down hasta la seccion "Noticias"
And hago click sobre la imagen o el titulo de la noticia
Then me amplia la informacion dela noticia.

@Ignore 
#falta desarrollar la seccion noticias
Scenario: Comprobar funcionalidad del Botón "Ver más" de la seccion "Noticias"
Given estoy en home de Delorean Zeta
When hago scroll down hasta la seccion noticias
And hago click sobre el botón "Ver mas"
Then me muestra mas noticias

Scenario: Comprobar funcionalidad de las cards de Tienda
Given estoy en home de Delorean Zeta
When hago scroll down hasta la seccion "Tienda"
When hago click sobre la imagen del primer producto
Then se visualiza la informacion del producto 
Then se visualiza el boton  "Agregar al Carrito"

Scenario: Comprobar funcionalidad del Botón "Ver más" de la seccion "Tienda"
Given estoy en home de Delorean Zeta
When hago scroll down hasta la seccion "Tienda"
When hago click sobre el botón "Ver mas"
Then me redirecciona a la pagina "store"


Scenario Outline: Comprobar redireccionamiento a redes sociales
Given estoy en home de Delorean Zeta
When hago scroll down hasta el footer de la pagina
And hago click sobre el icono <icono>
Then me redirecciona hasta <red social> de la banda

Examples:
|icono		|red social|
|Instagram 	|delorean_zeta_oficial|
#|Twitter	||
|YouTube	|@deloreanzeta8770|

@Ignore 
 #ya no existe se modifico el footer de la pagina 
Scenario Outline: Comprobar funcionalidad de "Nosotros" del footer
Given estoy en home de Delorean Zeta
When hago scroll down hasta el footer de la pagina
And hago click sobre el navbar <nav>
Then me redirecciona hasta <pagina>

Examples:
|nav				|pagina|
|Inicio				|Inicio|
|Galeria			|fotos y videos|
|Tienda				|Tienda|
|La Banda			|Sobre nosotros|
|Calendario			|Fechas y lugares de eventos|
|Contartataciones	|Formulario de Contrataciones|

@Ignore 
 #ya no existe se modifico el footer de la pagina
Scenario Outline: Comprobar funcionalidad de "FAQ" del footer
Given estoy en home de Delorean Zeta
When hago scroll down hasta el footer de la pagina
And hago click sobre el navbar <FAQ>
Then me redirecciona hasta la pagina de <direccion>

Examples:
|FAQ					|direccion|
|Política de Privacidad	|Política de Privacidad|
|FAQ					|Preguntas Frecuentes|
|Blog				| |
|Noticias				|Noticias de la Banda|

@Ignore 
 #ya no existe se modifico el footer de la pagina
Scenario Outline: Comprobar funcionalidad de "Soporte" del footer
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll down hasta el footer de la pagina
And hago click sobre el navbar <Soporte>
Then me redirecciona hasta la pagina <voy>

Examples:
|Soporte		|voy|
|Tu Cuenta		|Iniciar Sesión	|
|Contrataciones	|Formulario de Contrataciones|

Scenario: Comprobar funcionalidad de <uso> del footer 
Given estoy en home de Delorean Zeta
When hago scroll down hasta el footer de la pagina
And hago click sobre <uso>
Then me redirecciona a la pagina <pagina>
Examples:
|uso                    |pagina|
|Términos y Condiciones |terminos|
|Politica de Privacidad |politica|

Scenario Outline: Comprobar las funcionalidades del los navbar del Header de la pagina de login
Given estoy en el login de Delorean Zeta
When hago click sobre el navbar <navbar>
Then me redirecciona a la pagina <pagina>
Examples:
|navbar			|pagina|
|Logo			|home|
|Regístrate		|sing-in|
|Iniciar Sesion	|login|

Scenario Outline: Comprobar las funcionalidades del los navbar del Header de la pagina de Registro
Given estoy en sing-in de Delorean Zeta
When hago click sobre el navbar <navbar>
Then me redirecciona a la pagina <pagina>
Examples:
|navbar			|pagina|
|Logo			|home|
|Registrate		|sing-in|
|Iniciar Sesion	|login|

Scenario: Comprobar la funcionalidad de "Registrate" desde la pagina de login
Given estoy en el login Delorean Zeta
When hago scroll down hasta la sección "¿No tienes una cuenta? Regístrate."
When hago click sobre "Regístrate"
Then me redirecciona a la pagina "sing-in"

Scenario: Comprobar funcionalidad de <uso> de sign-in
Given estoy en sign-in  de Delorean Zeta
When hago scroll down hasta el pie del formulario
And hago click sobre <uso>
Then me redirecciona a la pagina <pagina>
Examples:
|uso                    |pagina|
|Términos y Condiciones |terminos|
|Política de Privacidad |politica|