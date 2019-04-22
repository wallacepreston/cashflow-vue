 
//  This is the basic utility function to calculate the cashflow and output it as an array.  It takes in numbers as parameters and returns an array of objects representing years consecutively.
 
 const calculateCashflow = (startingSavings = 0, savingPerYear = 0, cashflowPerHouse = 0, houseCount = 0, numYears = 10, cashDownPerHouse = 20000) => {
  houseCount = Number(houseCount)
  // Initialize the year at 1
  let currYear = 1;
  // Copy starting savings parameter value into new variable that will track our cash as we go.  This is our "bank account" so to speak.
  let currCash = +startingSavings;
  // Basically, I'm assuming the cash down is 25% of the total value of the house, so multiply by 4 to reverse-engineer the house's value based on the downpayment.  This could be better-adjusted to allow for closing costs and such, but it could be argued that we should use 20% down, so this could be a good estimate.
  let valueEachHouse = +cashDownPerHouse * 4;

  // this variable will keep track of our annual cashflow that is created from rentals
  let annualRealEstateCashFlow = 0;

  //initialize our array of objects representing each year of cashflow/cash/value in succession
  let years = []
  // Start looping from now through the total number of years we put in
  while(currYear <= +numYears){
    // Our current cashflow will be based on the passed-in cashflow per house and the current number of rentals we own
    annualRealEstateCashFlow = +cashflowPerHouse * +houseCount;
    // Our current cash is calculated
    currCash = currCash + +savingPerYear + annualRealEstateCashFlow;
    // Buy as many houses as we can: Get our total available cash, and figure out how many we can buy with the cash down per house.
    let numHousesToBuy = Math.floor(+currCash / +cashDownPerHouse);
    // Add that number of houses to our house count, and decrease the total left in our account
    if(currCash > cashDownPerHouse) {
      houseCount += numHousesToBuy;
      currCash -= cashDownPerHouse * numHousesToBuy;
    }
    // update our portfolio value
    const portfolioValue = valueEachHouse * 0.75 * +houseCount
    // Save all our current stats (for this year) in an object and...
    const currYearStats = {currYear, currCash, houseCount, portfolioValue, annualRealEstateCashFlow};
    // ... push it to an array
    years.push(currYearStats)
    // no infinite loops!
    currYear++;
  }
  
  return years;
  
}

export {
  calculateCashflow
}