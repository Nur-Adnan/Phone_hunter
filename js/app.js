// Function For User Searching Button
const searchPhones = () => {
    const userInputField = document.getElementById('user-Input');
    showField = userInputField.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${showField}`
    // clear input field start
    userInputField.value = '';
    // clear input field end

    // calling API start
    fetch(url)
        .then(res => res.json())
        .then(data => showResult(data.data))
    // calling API End
}
// Showing The Result 
const showResult = cellphone => {
    const showingResults = document.getElementById('result-Display');
    showingResults.innerHTML = '';
    const tags = document.getElementById('searching-Result');
    tags.innerText = '';
    if (cellphone.length != 0) {

        cellphone.slice(0, 20).map(show = cellphone => {
            const cellPhonesDetails = document.createElement('div');
            // set result dynamically Using ES6 Features
            cellPhonesDetails.innerHTML =
                `
                 <div class="card bg-white shadow">
          <img src="${cellphone.image}" class="card-img-top pt-4 m-auto img-fluid w-25" alt="Image Not Found">
          <div class="card-body p-4">
            <h4 class="card-title p-2 rounded">${cellphone.phone_name}</h4>
            <h6 class="p-2"> Brand: ${cellphone.brand}</h6>
            <button onclick="phoneDetails('${cellphone.slug}')" class="btn btn-info px-2 pt-2 pb-2 text-white font-weight-bold shadow-sm" >Details</button>
           </div>
           </div>`
            //   Appending into main div 

            showingResults.appendChild(cellPhonesDetails);

        });

    }
    else
        tags.innerText = 'No result found';

}
// Shwoing Cell phones details Result
const phoneDetails = detailsById => {
    const url = ` https://openapi.programming-hero.com/api/phone/${detailsById}`
    fetch(url)
        .then(res => res.json())
        .then(data => MoreInformation(data.data))
}
const MoreInformation = aboutPhone => {
    const showInformation = document.getElementById('details-show')

    const showingDetails = document.createElement('div');
    showInformation.innerHTML = '';
    showingDetails.innerHTML = `
    <div class="card mx-auto rounded p-4 " style="width: 25rem;">
    <img src="${aboutPhone.image}" class="card-img-top img-fluid w-50 m-auto" alt="Image Not Found">
    <div class="card-body shadow mt-4">
      <h3 class="card-title text-center p-2">${aboutPhone.name}</h3>
      <p class= "text-capitalize">releaseDate:${aboutPhone.releaseDate}</p>
      <p class= "text-capitalize">storage:${aboutPhone.mainFeatures.storage}</p>
      <p class= "text-capitalize">DisplaySize:${aboutPhone.mainFeatures.displaySize}</p>
      <p class= "text-capitalize">chipSet:${aboutPhone.mainFeatures.chipSet}</p>
      <p class= "text-capitalize">memory:${aboutPhone.mainFeatures.memory}</p>
      <p class= "text-capitalize">sensor:${aboutPhone.mainFeatures.sensors.slice(0, 12)}</p>
      <p class= "text-capitalize">others:</p>
      <p class= "text-capitalize">Bluetooth:${aboutPhone.others.Bluetooth}</p>
      <p class= "text-capitalize">GPS:${aboutPhone.others.GPS}</P>
      <p class= "text-capitalize">Radio:${aboutPhone.others.Radio}</p>
      <p class= "text-capitalize">WALAN:${aboutPhone.others.WLAN}</p>
       </div>
  </div>`;

    showInformation.appendChild(showingDetails);
}
