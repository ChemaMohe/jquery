var listInt =  [1, 7, 3, 4];
var listProd = [0,0,0,0];


function get_products_of_all_ints_except_at_index(listInt,listProd)
{
	for(var i = 0; i < listInt.length; i++)
	{
		var product = 0;
		for(var j = 0; j <listInt.length; j++)
		{
			if(i!=j)
			{
				if(product === 0)
				{
					product = listInt[j]; 
				}
				else{
					product = product * listInt[j]; 
				}
			}
		}
		listProd.push(product);
	}
},

}

function getProductsOfAllIntsExceptAtIndex(intArray) {

    var productsOfAllIntsExceptAtIndex = [];

    // for each integer, we find the product of all the integers
    // before it, storing the total product so far each time
    var productSoFar = 1;
    for (var i = 0; i < intArray.length; i++) {
        productsOfAllIntsExceptAtIndex[i] = productSoFar;
        productSoFar *= intArray[i];
    }

    // for each integer, we find the product of all the integers
    // after it. since each index in products already has the
    // product of all the integers before it, now we're storing
    // the total product of all other integers
    productSoFar = 1;
    for (var j = intArray.length - 1; j >= 0; j--) {
        productsOfAllIntsExceptAtIndex[j] *= productSoFar;
        productSoFar *= intArray[j];
    }

    return productsOfAllIntsExceptAtIndex;
}