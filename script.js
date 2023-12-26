const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices=document.querySelectorAll('.price');
	let sum=0;
	for(let i=0;i<prices.length;i++){
		sum+=parseInt(prices[i].innerText);
	}

	const tr=document.createElement('tr');
	tr.colspan="2";
	tr.innerText=sum;
	tr.style.textAlign="right"
	const table=document.querySelector('table');
	table.append(tr);
  
};

getSumBtn.addEventListener("click", getSum);

