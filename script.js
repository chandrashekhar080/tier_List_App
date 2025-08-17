console.log("Mrcs Tier Maker App !!!");

let currentDraggedItem;

//First complete the Adding New Tier part

// const tierSection = document.getElementsByClassName('tier-section');

// const tierContainer = document.getElementById('section-tier');

// const newTier = document.querySelector("#new-tier");

// const newImg = document.querySelector("#new-img");
const newTierInput = document.querySelector("#tier");

const itemcontainers = document.getElementsByClassName('tier-img');

const submitBut = document.querySelector("#submit");

const tierLists = document.querySelectorAll('.tier-list');

//for drag feature
for (const itemcontainer of itemcontainers) {
    setupItemContainerForDragDrop(itemcontainer);
};
//for drop feature
//tierLists.forEach(setUpDropZoneForTierLists);
//instent of above method we use another inside createTierList function
submitBut.addEventListener('click', (event) => {
   // console.log("inside tier");
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

    const tierName = document.createElement('h1');
    tierName.classList.add('tier-name');

    const tierItem =  document.createElement('div');
    tierItem.classList.add('tier-item');

    tierName.textContent = newTierInput.value;

    
    tierContainer.appendChild(tierContainerDiv);
    tierContainerDiv.appendChild(tierName);
    tierContainerDiv.appendChild(tierItem);
    // console.log(tierItem.textContent);
    
    setUpDropZoneForTierLists(tierItem);
    //console.log(tierItem);
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
    newTierImg.setAttribute('draggable', true);
        newTierImg.classList.add('tier-img');
        
        // imgContainer.appendChild(imgContainerDiv);
        imgContainerDiv.appendChild(newTierImg);
        newTierImg.src = imgUrl.value;
        setupItemContainerForDragDrop(newTierImg);
    
    
};

function setupItemContainerForDragDrop(newTierImg){
    newTierImg.addEventListener('dragstart', (event) => {
        currentDraggedItem = event.target; //parentNode
        //console.log(event.target); //parentNode

        
    });
};

function setUpDropZoneForTierLists(tierItem){
    tierItem.addEventListener('drag', (event) => {
        event.preventDefault(); //stop the default behavior of browser which are not allow to drop anything to anywhere
       // console.log('dragging');
        
  });

  tierItem.addEventListener('dragover', function(event) { //when we drag over the drop zone is called
    console.log("Darg Event is" , event);
    
    //console.log("darg over happens on drop Zone");
    //  event.target.appendChild(currentDraggedItem);
    if (this !== currentDraggedItem) {
        this.appendChild(currentDraggedItem);
        
    }
    });
};
