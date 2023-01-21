 @ceciliaBruno @regresion @Categoria @post
 Feature: Post categoria

COMO administrador 
QUIERO poder crear categorias
PARA tener organizados mis productos

  Scenario: Dar de alta una categoria
    Given url 'http://localhost:3000' + 'api/categoria'
    Given request {"nombre": "gorras"}
    When method post
    Then status 200

  Scenario: No dar de alta una categoria con nombre solo de espacios
    Given url 'http://localhost:3000' + 'api/categoria'
    Given request {"nombre": "      "}
    When method post
    Then status 403

Scenario: No dar de alta una categoria sin nombre
    Given url 'http://localhost:3000' + 'api/categoria'
    Given request { }
    When method post
    Then status 404

Scenario: No dar de alta una categoria con nombre vacio
    Given url 'http://localhost:3000' + 'api/categoria'
    Given request {"nombre": ""}
    When method post
    Then status 403

Scenario: Dar de Alta una categoria con caracteres especiales
    Given url 'http://localhost:3000' + 'api/categoria'
    Given request {"nombre": "remeras con moños"}
    When method post
    Then status 200

Scenario: No Dar de Alta una categoria de longitud mayor a 45 caracteres
    Given url 'http://localhost:3000' + 'api/categoria'
    Given request {"nombre": "vasos ferneceros para juntarse con los amigos todos los fines de semana"}
    When method post
    Then status 500