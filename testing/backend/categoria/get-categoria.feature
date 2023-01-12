 Feature: Get categoria

  Scenario: Obtener todas las Categorias
    Given url 'http://localhost:3000' + 'api/categoria'
    When method get
    Then status 200

Scenario: Obtener categoria por ID
  
   Given url 'http://localhost:3000' + 'api/categoria' + '2'
    When method get
    Then status 200

 Scenario: Obtener categoria por ID
  
   Given url 'http://localhost:3000' + 'api/categoria' + '100000'
    When method get
    Then status 404