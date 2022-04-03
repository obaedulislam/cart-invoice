// Buyer detail information
const detailSubmitBtn = document.getElementById("detail-submit-btn");

detailSubmitBtn.addEventListener("click", function(){

  const buyerDetails = document.getElementById("buyer-details-input");
   const buyerInfo = document.getElementById("buyer-info");
  buyerInfo.innerText = buyerDetails.value;

  buyerDetails.value = '';
});

// Item details information
const addProductBtn = document.getElementById("add-details-btn");
addProductBtn.addEventListener("click", function(){
  const itemName = document.getElementById("item-name-input").value;
  const itemPrice = document.getElementById("item-price-input").value;
  const itemQuantity = document.getElementById("item-quantity-input").value;
  if (
    itemName.value == "" ||
    itemPrice.value < 0 ||
    itemQuantity.value < 0 ||
    itemPrice.value == "" ||
    itemQuantity.value == ""
  ) {
    return;
  }


/* <tr>
    <th >1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
</tr> */

  const infoTable = document.getElementById("info-table");
  const tr = document.createElement('tr');
  const th = document.createElement('th');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const totalPrice = parseInt(itemPrice) * parseInt(itemQuantity);

  td3.classList.add('item-total');
  th.innerText = itemName; // <th >1</th>
  td1.innerText = itemPrice;//<td>Mark</td>
  td2.innerText = itemQuantity;
  td3.innerText = totalPrice;

  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  infoTable.appendChild(tr);
  
  totalCalculation();
});

function totalCalculation(){
  const subTotal = calculateSubTotal();
  const subTotalToDisplay = document.getElementById('sub-total');
  subTotalToDisplay.innerText = subTotal;

  const tax = subTotal*20/100;
  document.getElementById("tax").innerText = tax.toFixed(2);
  document.getElementById("grand-total").innerText = tax + subTotal;
}


// Sub Total Calculation
function calculateSubTotal(){

  let subTotal = 0;
  const cost = document.getElementsByClassName('item-total');

  for(let i = 0; i < cost.length; i++){
    const element = cost[i];
    const price = parseInt(element.innerText);

    subTotal = subTotal + price;
  }
  return subTotal;
}