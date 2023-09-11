function addName(){
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

flist();