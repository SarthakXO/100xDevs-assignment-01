/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let finalarr = [];
  for (let i = 0; i < transactions.length; i++) {
    let obj = {
      category: transactions[i].category,
      totalSpent: 0,
    };
    for (let j = 0; j < transactions.length; j++) {
      if ((obj.category = transactions[j].category)) {
        obj.totalSpent = obj.totalSpent + transactions[j].price;
      }
    }
    if (i == 0) {
      finalarr.push(obj);
    } else {
      for (let x = 0; x <= finalarr.length - 1; x++) {
        if (finalarr[x].category == obj.category) {
          break;
        } else {
          finalarr.push(obj);
        }
      }
    }
  }

  return finalarr;
}

module.exports = calculateTotalSpentByCategory;
