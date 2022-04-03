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

  th.innerText = itemName; // <th >1</th>
  td1.innerText = itemPrice;//<td>Mark</td>
  td2.innerText = itemQuantity;
  td3.innerText = totalPrice;

  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  infoTable.appendChild(tr);
  
});