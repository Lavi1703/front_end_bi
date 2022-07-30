

function thirdLargest(arr, arr_size)
{
	/* There should be
	atleast three elements */
	if (arr_size < 3)
	{
		document.write(" Invalid Input ");
		return;
	}
	
	// Find first
	// largest element
	let first = arr[0];
	for (let i = 1;i < arr_size ; i++)
		if (arr[i] > first)
			first = arr[i];
	
	// Find second
	// largest element
	let second = Number.MIN_VALUE;
 // console.log(parseInt(second));
	for (let i = 0;i < arr_size ; i++)
		if (arr[i] > second && arr[i] < first)
     // console.log(arr[i] > second && arr[i] < first);
			second = arr[i];
	
	// Find third
	// largest element
	let third = Number.MIN_VALUE;
	for (let i = 0;i < arr_size ; i++)
		if (arr[i] > third &&
			arr[i] < second)
			third = arr[i];
	
	document.write("The third Largest " + "element is ", third);
}

// Driver Code

	let arr = [12, 13, 1, 10, 34, 16];
	let n = arr.length;
	thirdLargest(arr, n);
						

