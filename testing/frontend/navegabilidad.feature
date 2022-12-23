@ceciliaBruno @PaginaDeInicio @regresion
Feature: navegabilidad

COMO visitante del sitio Delorean Zeta
QUIERO navegar por del sitio
PARA visualizar cuales son las secciones y funcionalidades disponibles

Scenario Outline: Comprobar las funcionalidades del los navbar del Header de la pagina de inicio.
Given estoy en la pagina de inicio de Delorean Zeta
When hago click sobre el nav <nav>
Then me redirecciona a la pagina <pagina>
Examples:
|nav|pagina|
|Logo|Inicio|
|Inicio|Inicio|
|Galeria|fotos y videos|
|Tienda	 |Tienda|
|La Banda|Sobre nosotros|
|Tours	|Fechas y lugares de eventos|
|Contartataciones	|Formulario de Contrataciones|
|Iniciar Sesión		|Formulariode Iniciar Sesión|
|carrito| carrito|

@Ignore 
#falta desarrollar la seccion noticias
Scenario Outline: Comprobar las funcionalidades de los filtros de la seccion noticias.
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll down hasta la seccion noticias
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
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll down hasta la seccion "Noticias"
And hago click sobre la imagen o el titulo de la noticia
Then me amplia la informacion dela noticia.

@Ignore 
#falta desarrollar la seccion noticias
Scenario: Comprobar funcionalidad del Botón "Ver más" de la seccion "Noticias"
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll down hasta la seccion noticias
And hago click sobre el botón "Ver mas"
Then me muestra mas noticias

Scenario: Comprobar funcionalidad de las cards de Tienda
Given estoy en la pagina de incio de Delorean Zeta
When hago scroll down hasta la seccion "Tienda"
And hago click sobre la imagen del producto
Then me abre la informacion del producto y me permite agregar al carrito

Scenario: Comprobar funcionalidad del Botón "Ver más" de la seccion "Tienda"
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll down hasta la seccion "Tienda"
And hago click sobre el botón "Ver mas"
Then me muestra las categorias y  productos disponibles en la tienda.


Scenario Outline: Comprobar redireccionamiento a redes sociales
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll down hasta el footer de la pagina
And hago click sobre el icono <icono>
Then me redirecciona hasta <red social> de la banda

Examples:
|icono		|red social|
|Instagram 	|delorean_zeta_oficial|
|Twitter	||
|YouTube	|@deloreanzeta8770|

@Ignore 
 #ya no existe se modifico el footer de la pagina 
Scenario Outline: Comprobar funcionalidad de "Nosotros" del footer
Given estoy en la pagina de inicio de Delorean Zeta
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
Given estoy en la pagina de inicio de Delorean Zeta
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

Scenario: Comprobar funcionalidad de "terminos y condiciones"
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll down hasta el footer de la pagina
And hago click sobre "terminos y condiciones"
Then me redirecciona hasta la pagina de Terminos y Condiciones de uso

Scenario: Comprobar funcionalidad de "Politica de privacidad"
Given estoy en la pagina de inicio de Delorean Zeta
When hago scroll down hasta el footer de la pagina
And hago click sobre "Politica de privacidad"
Then me redirecciona hasta la pagina de "Politica de privacidad"

Scenario Outline: Comprobar las funcionalidades del los navbar del Header de la pagina de login
Given estoy en la pagina de inicio de Delorean Zeta
When hago click en "Iniciar Sesion"
And hago click sobre el navbar <navbar>
Then me redirecciona a la pagina <pagina>
Examples:
|navbar			|pagina|
|Logo			|Inicio|
|Registrate		|Formulario de Crear una Cuenta|
|Iniciar Sesion	|Formulario de Iniciar Sesion|

Scenario Outline: Comprobar las funcionalidades del los navbar del Header de la pagina de Registro
Given estoy en la pagina de inicio de Delorean Zeta
When hago click en "Iniciar Sesion"
And hago click en "Registrate"
And hago click sobre el navbar <navbar>
Then me redirecciona a la pagina <pagina>
Examples:
|navbar			|pagina|
|Logo			|Inicio|
|Registrate		|Formulario de Crear una Cuenta|
|Iniciar Sesion	|Formulario de Iniciar Sesion|
|Politica de privacidad| Politica de privacidad|
|Terminos y condiciones| Terminos y condiciones|
|Instagram 	|delorean_zeta_oficial|
|Twitter	||
|YouTube	|@deloreanzeta8770|