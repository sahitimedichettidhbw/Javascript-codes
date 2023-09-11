//Model
let friends=[];


//View
function flist(){
    const frndlist=document.getElementById("nameList");
    frndlist.innerHTML= '';

    friends.forEach((nme,index)=>{
        const listName= document.createElement('li');
        listName.textContent=nme;
        listName.addEventListener("click", () =>{
          removeName(index);  
        });
        frndlist.appendChild(listName);
    });
}


/*function addName(){
    const nameInput= document.getElementById("nameInput");
    const newName= nameInput.value.trim();
    if(newName!== '')
    {
        friends.push(newName);
        nameInput.value= '';
        flist();
    }
}
//controller for removing
function removeName(index) {
    friends.splice(index, 1);
    flist();
}
document.getElementById("addName").addEventListener("click", addName);

flist();*/