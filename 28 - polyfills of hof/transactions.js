/**
 * Problem Statement:

You are given an array of objects representing transactions made by customers. Each object contains the following properties:

customerId: Number, representing the unique ID of the customer.
amount: Number, representing the amount of the transaction.
date: String, representing the date of the transaction (in the format "YYYY-MM-DD").
Your task is to write a JavaScript function using functional programming techniques that 
takes this array of transaction objects and returns an object containing the following information:


totalTransactions: Total number of transactions.
totalAmount: Total amount of all transactions.
averageTransactionAmount: Average amount of transactions.
transactionsPerDay: An object where keys are dates and values are arrays containing transactions made on that date.
transactionsByCustomer: An object where keys are customer IDs and values are arrays containing transactions made by that customer.
 */

const transactions = [
    { customerId: 1, amount: 100, date: '2024-03-01' },
    { customerId: 2, amount: 150, date: '2024-03-01' },
    { customerId: 1, amount: 200, date: '2024-03-02' },
    { customerId: 3, amount: 50, date: '2024-03-02' },
    { customerId: 2, amount: 120, date: '2024-03-03' }
  ];

//   output

// step1  totalTransactions: Total number of transactions.

const totalTransactions = transactions.length;

// step2 totalAmount: Total amount of all transactions.
const totalAmount = transactions.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)


// step3 averageTransactionAmount
const averageTransactionAmount = totalAmount / totalTransactions

// step4 transactionsPerDay . group transactions by date.'
const transactionsPerDay = transactions.reduce((acc, transaction) => {
    if(!acc[transaction.date]) {
        acc[transaction.date] = []
    } 
    acc[transaction.date].push(transaction);
    return acc;
}, {})

// step 5 transactionsByCustomer

const transactionsByCustomer = transactions.reduce((acc, transaction) => {
    if(!acc[transaction.customerId]) {
        acc[transaction.customerId] = []
    } 
    acc[transaction.customerId].push(transaction);
    return acc;
}, {})


//  {
//     '2024-03-01' : [{ customerId: 1, amount: 100, date: '2024-03-01' }, { customerId: 2, amount: 150, date: '2024-03-01'} ],
//     '2024-03-02': [ { customerId: 1, amount: 200, date: '2024-03-02' },
//     { customerId: 3, amount: 50, date: '2024-03-02' },]
// }


const result = {
    totalTransactions,
    totalAmount,
    averageTransactionAmount,
    transactionsPerDay,
    transactionsByCustomer
  };

  console.log(result)