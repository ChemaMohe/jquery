  var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

var maxProfit = getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

function getMaxProfit(stocks)
{
	var maxProfit = 0;
	for(var i = 0; i < stocks.lenght; i++)
	{
		var buyPrice = stocks[i];
		for(var j = i + 1; j <stocks.lenght;j++)
		{
			var sellPrice = stocks[j];
			var currentProfit = buyPrice - sellPrice;
			if(maxProfit < currentProfit)
			{
				maxProfit = currentProfit
			}
		}
	}
	return maxProfit
}



function getMaxProfitGreedy(stocks)
{
	var minPrice = 0;
	var maxProfit = null;
	for(var i = 0; i<stocks.lenght; i++)
	{
		minPrice = Math.min(minPrice,stocks[i])

		var potencialProfit = stocks[i] - minPrice;

		if(Object.isEmpty(maxProfit))
		{
			maxProfit = potencialProfit;
		}
		else{
			maxProfit = Math.max(maxProfit, potencialProfit);
		}
	}
	return maxProfit;
}