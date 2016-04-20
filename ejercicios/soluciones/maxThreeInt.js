var listInt =  [1, 7, 3, 4];

function getMaxThreeInt(listInt)
{
	var max1 = 1;
	var max2 = 1;
	var max3 = 1;

	for(var i = 0; i<listInt.length; i++)
	{
		if(listInt[i] > max1)
		{
			max3 = max2;
			max2 = max1;
			max1 = listInt[i];
		}
		else if(listInt[i] > max2)
		{
			max3 = max2;
			max2 = listInt[i];
		}
		else if(listInt[i] > max1){
			max3 = listInt[i];
		}
	}
	return max1 * max2 * max3;
}

function getMaxThreeInt(listInt)
{

	var lowestProduct2 = listInt[0] * listInt[1];
	var highestProduct2 = listInt[0] * listInt[1];
	var highestProduct3 = listInt[0] * listInt[1] * listInt[2];
	var lowest = Math.min(listInt[0], listInt[1]);
	var highest = Math.max(listInt[0], listInt[1]);

	for (var i = 2; i < listInt.length; i++)
	{
		//Calculate max of 3
		highestProduct3 = Math.max(highestProduct3,lowestProduct2 * listInt[i]);
		highestProduct3 = Math.max(highestProduct3,highestProduct2 * listInt[i]);

		//Calculate max and min of 2
		var currentLowerProduct2 =  listInt[i] * lowest;
	 	var currentHighestProduct2 =  listInt[i] * highest;
	 	lowestProduct2 = Math.min(lowestProduct2,currentLowerProduct2, currentHighestProduct2);
	 	highestProduct2 = Math.max(highestProduct2,currentHighestrProduct2,currentLowerProduct2);

	 	//Calculate max and min
	 	var lowest = Math.min(listInt[i], lowest);
		var highest = Math.max(listInt[i], highest);
	}
	return highestProduct3;
}