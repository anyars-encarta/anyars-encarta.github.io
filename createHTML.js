let popupDiv = document.createElement('div');
popupDiv.classList.add('modal');
popupDiv.id = 'modal';

document.body.appendChild(popupDiv);

// document.getElementById('print-html').addEventListener('click', addPopupDetails);
document.querySelector('.load-modal').addEventListener('click', addPopupDetails);

let div = document.createElement('div');
div.id = 'overlay'
document.body.appendChild(div);

function addPopupDetails() {
   let popupTitle = document.getElementById('print-1').value
   let popupImage = 'logos/Popup-Portfolio-Big.png';
   let popupImageAltText = document.querySelector('[alt]');
   let projectDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br> <br> </br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.';
   
   let popupFormDetails = `<div class="modal-header">
   <div class="title">Keeping track of hundreds of components website</div>
   <button data-close-button class="close-button">&times;</button>
</div>

<div class="modal-body">
   <ul class="popup-list" id="detail-id">
       <li class="list-item" id="item-1"><a href="#">HTML</a></li>
       <li class="list-item" id="item-1"><a href="#">Bootstrap</a></li>
       <li class="list-item" id="item-1"><a href="#">Ruby on rails</a></li>
   </ul>

   <div class="middle-section">
     <img src="./logos/Popup-Portfolio-Big.png" alt="Snapshoot Portfolio">
     
     <div class="side-items">
       <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting 
           industry. Lorem Ipsum has been the industry's 
           standard dummy text ever since the 1500s, when an 
           unknown printer took a galley of type and scrambled it to make a 
           type specimen book. It has survived not only five centuries, but 
           also the leap into electronic typesetting, remaining essent
       </p>
       <div class="popup-buttons">
           <a href ="#" class="button-1" id="btn-1">See more<img src="./logos/Icon-with-arrow.png" alt=""></a>
           <a href ="#" class="button-2" id="btn-2">See Source<img src="./logos/New-Github.png" alt=""></a>
       </div>
     </div>
   </div>
</div>`

popupDiv.insertAdjacentHTML('beforeend', popupFormDetails)
}