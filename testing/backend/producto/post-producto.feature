 @ceciliaBruno @regresion @producto @post
 Feature: Post producto

  Scenario: Dar de alta una producto
    Given url 'http://localhost:3000' + 'api/producto'
    Given request   {
        "nombre": "remeras de la banda",
        "precio": "1000",
        "categoria": 1,
        "imagen": "fufilb",
        "descripcion":" talle s"
    }
    When method post
    Then status 200
  
  Scenario: No dar de alta un producto con precio negativo
    Given url 'http://localhost:3000' + 'api/producto'
    Given request   {
        "nombre": "remeras de la banda",
        "precio": "-3000",
        "categoria": 1,
        "imagen": "",
        "descripcion": "talle xxxxxl"
    }
    When method post
    Then status 403

Scenario: No Dar de Alta un Producto sin categoria
    Given url 'http://localhost:3000' + 'api/producto'
    Given   {
        "nombre": "musculosa",
        "precio": "1000",
        "imagen": "gdzf",
        "descripcion": "talle 1"
    }
    When method post
    Then status 403

Scenario: No Dar de Alta un Producto sin nombre
    Given url 'http://localhost:3000' + 'api/producto'
    Given request   {
        "precio": "10000",
        "categoria": 1,
        "imagen": "",
        "descripcion": "L"
    }
    When method post
    Then status 403

Scenario: No Dar de Alta un Producto con nombre vacio
    Given url 'http://localhost:3000' + 'api/producto'
    Given request   {
        "nombre": "",
        "precio": "10000",
        "categoria": 1,
        "imagen": "",
        "descripcion": "L"
    }
    When method post
    Then status 403

Scenario: No Dar de Alta un Producto sin precio
    Given url 'http://localhost:3000' + 'api/producto'
    Given request   {
        "nombre": "remeras de la banda",
        "categoria": 1,
        "imagen": "",
        "descripcion":" talle s"
    }
    When method post
    Then status 403

    Scenario: No dar de Alta un Producto sin imagen
    Given url 'http://localhost:3000' + 'api/producto'
    Given request    {
        "nombre": "remes",
        "precio": "1000",
        "categoria": 1,
        "descripcion": "talle s"
    }
    When method post
    Then status 403