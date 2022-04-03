// Buyer detail information
const detailSubmitBtn = document.getElementById("detail-submit-btn");

detailSubmitBtn.addEventListener("click", function(){

  const buyerDetails = document.getElementById("buyer-details-input");
   const buyerInfo = document.getElementById("buyer-info");
  buyerInfo.innerText = buyerDetails.value;

  buyerDetails.value = '';
});