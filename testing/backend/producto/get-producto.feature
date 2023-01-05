 Feature: Get producto 

  Scenario: Obtener todas las productos
    Given url 'http://localhost:3000' + 'api/producto'
    When method get
    Then status 200

Scenario: Obtener producto por ID
  
   Given url 'http://localhost:3000' + 'api/producto' + '2'
    When method get
    Then status 200

 Scenario: Obtener producto por ID
  
   Given url 'http://localhost:3000' + 'api/producto' + '100000'
    When method get
    Then status 404