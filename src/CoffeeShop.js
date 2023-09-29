// 1. Creating variables
function createVariables() {
    var coffeeType = "Latte";
    let numberOfCoffees = 1;
    return {coffeeType, numberOfCoffees};
  }
  
  // 2. Case sensitivity
  function caseSensitivity() {
    return null;
  }
  
  // 3. Variable naming rules
  function variableNaming() {
    null;
  }
  
  // 4. CamelCase spelling
  function camelCaseSpelling() {
    null;
  }
  
  // 5. Declaring constants
  function declaringConstants() {
    null;
  }
  
  /**Do Not Touch!!!! */
  
  function orderSummary() {
    let summary = {
      ...createVariables(),
      ...caseSensitivity(),
      specialRequest: variableNaming(),
      isOrderComplete: camelCaseSpelling(),
      salesTaxRate: declaringConstants()
    }
    return summary;
  }
  
  
  module.exports = {
    createVariables,
    caseSensitivity,
    variableNaming,
    camelCaseSpelling,
    declaringConstants,
    orderSummary
  };