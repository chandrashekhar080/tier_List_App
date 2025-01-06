console.log("Mrcs Tier Maker App !!!");


//First complete the Adding New Tier part
const newTierInput = document.querySelector("#tier");

const submitBut = document.querySelector("#submit");

// const tierSection = document.getElementsByClassName('tier-section');

// const tierContainer = document.getElementById('section-tier');

// const newTier = document.querySelector("#new-tier");

// const newImg = document.querySelector("#new-img");


submitBut.addEventListener('click', (event) => {
    console.log("inside tier");
    event.preventDefault();
   
   if(newTierInput.value === ''){
    alert("Please Write a tier First !!!");
    return;
   };
//    console.log(newTierInput.value);
   
   createTierList(newTierInput.value);
   newTierInput.value = '';

  
});


function createTierList(){
    const tierContainer = document.getElementById('section-tier');
    // const newTier = document.querySelector("#new-tier");

    const tierContainerDiv = document.createElement('div');
    tierContainerDiv.classList.add('tier-list');



    const tierItem =  document.createElement('div');
    tierItem.classList.add('tier-item');

    tierItem.textContent = newTierInput.value;
    tierContainer.appendChild(tierContainerDiv);
    tierContainerDiv.appendChild(tierItem);
    // console.log(tierItem.textContent);
    const br = document.createElement('br');
    tierContainer.appendChild(br);
};



//Second complete the Adding New Tier imgs
const imgForm = document.getElementById('img-form');

const imgUrl = document.getElementById('tier-img');


imgForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("inside img section");
   
   if(imgUrl.value === ''){
    alert("Please Past img URL First !!!");
    return;
   };
//    console.log(newTierInput.value);
   
   createTierListItem(imgUrl.value);
   imgUrl.value = '';
    
});


function createTierListItem(){
    // const imgContainer = document.getElementById('section-tier-img');
    
    const imgContainerDiv = document.getElementById('new-img');

    const newTierImg = document.createElement('img');
    newTierImg.classList.add('tier-img');

    // imgContainer.appendChild(imgContainerDiv);
    imgContainerDiv.appendChild(newTierImg);
    newTierImg.src = imgUrl.value;

};

