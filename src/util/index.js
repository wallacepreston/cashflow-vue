 
//  This is the basic utility function to calculate the cashflow and output it as an array.  It takes in numbers as parameters and returns an array of objects representing years consecutively.
 
 const calculateCashflow = (startingSavings = 0, savingPerYear = 0, cashflowPerHouse = 0, houseCount = 0, numYears = 20, cashDownPerHouse = 20000) => {
  houseCount = +houseCount
  startingSavings = +startingSavings 
  savingPerYear = +savingPerYear 
  cashflowPerHouse = +cashflowPerHouse 
  houseCount = +houseCount 
  numYears = +numYears
  cashDownPerHouse = +cashDownPerHouse
  // Initialize the year at 1
  let currYear = 1;
  // Copy starting savings parameter value into new variable that will track our cash as we go.  This is our "bank account" so to speak.
  let currCash = startingSavings;
  // Basically, I'm assuming the cash down is 25% of the total value of the house, so multiply by 4 to reverse-engineer the house's value based on the downpayment.  This could be better-adjusted to allow for closing costs and such, but it could be argued that we should use 20% down, so this could be a good estimate.
  let valueEachHouse = cashDownPerHouse * 4;
  let loanAmount = valueEachHouse - cashDownPerHouse

  // this variable will keep track of our annual cashflow that is created from rentals
  let annualRECashflow = 0;

  //initialize our array of objects representing each year of cashflow/cash/value in succession
  let years = []
  // Start looping from now through the total number of years we put in
  while(currYear <= numYears){
    // Our current cashflow will be based on the passed-in cashflow per house and the current number of rentals we own
    annualRECashflow = cashflowPerHouse * houseCount;
    // Our current cash is calculated
    currCash = currCash + savingPerYear + annualRECashflow;
    // Buy as many houses as we can: Get our total available cash, and figure out how many we can buy with the cash down per house.
    let numHousesToBuy = Math.floor(currCash / cashDownPerHouse);
    // Add that number of houses to our house count, and decrease the total left in our account
    if(currCash > cashDownPerHouse) {
      houseCount += numHousesToBuy;
      currCash -= cashDownPerHouse * numHousesToBuy;
    }
    // update our portfolio value
    const totalAssets = valueEachHouse * houseCount
    const totalDebt = loanAmount * houseCount
    const portfolioValue = (valueEachHouse - loanAmount)* houseCount
    // Save all our current stats (for this year) in an object and...
    const currYearStats = {currYear, currCash, houseCount, portfolioValue, annualRECashflow, totalAssets, totalDebt};
    // ... push it to an array
    years.push(currYearStats)
    // no infinite loops!
    currYear++;
  }
  
  return years;
  
}


// amort function takes current balance, interest rate, months.  Returns remaining balance, remaining months
const amort = (balance, interestRate, months) => {
  //Calculate the per month interest rate
	var monthlyRate = interestRate/12;
	
	//Calculate the payment
  var payment = balance * (monthlyRate/(1-Math.pow(
    1+monthlyRate, -months)));
  const interest = balance * monthlyRate;
  const monthlyPrincipal = payment - interest;
  const remainingBalance = balance - monthlyPrincipal;
  const result = {payment, monthlyPrincipal, remainingBalance};
	//returns the concatenated string to the page
  return result;
}
// eslint-disable-next-line no-console
console.log('>>>>>>>>>>>> amort(20000, 5, 12):', amort(20000, 5, 12))

export {
  calculateCashflow
}