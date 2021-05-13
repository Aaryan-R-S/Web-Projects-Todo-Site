//If user saves notes
let addbtn = document.getElementById('addbtn')
showNote();

addbtn.addEventListener('click', () => {
    let addtxt = document.getElementById('addtxt')
    let addtitle = document.getElementById('addtitle')
    let notes = localStorage.getItem('MyNotes')
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let myObj = {
        Title: addtitle.value,
        Text: addtxt.value
    }
    notesObj.push(myObj)
    localStorage.setItem('MyNotes', JSON.stringify(notesObj))
    addtxt.value = "";
    addtitle.value = "";
    // console.log(notesObj);
    showNote();
})

function showNote() {
    let notes = localStorage.getItem('MyNotes')
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card notevis my-2 mx-2" style="width: 21rem;">
        <div class="card-body">
            <h5 class="card-title">${element.Title}</h5>
            <p class="card-text cardp">${element.Text}</p>
            <button id='${index}' onclick='deleteNote(this.id)' class="btn btn-primary">Delete</button>
        </div>
      </div>
     `
    })
    let notesElm = document.getElementById('notes')
    if (notesObj.length != 0) {
        notesElm.innerHTML = html
    }
    else {
        notesElm.innerHTML = `No Notes Yet ! Click on 'Add' to add a Note !`
    }
}

//delete note
function deleteNote(index){
    // console.log('I am deleting', index)
    let notes = localStorage.getItem('MyNotes')
    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)
    }
  notesObj.splice(index, 1)
  localStorage.setItem('MyNotes', JSON.stringify(notesObj))

  showNote()
}

let search = document.getElementById('search');
search.addEventListener('input', function(){
   let inputval= search.value ;

    let notevis =document.getElementsByClassName('notevis')
    Array.from(notevis).forEach(function(element){
        let cardtxt = element.getElementsByTagName("p")[0].innerText ;

       if(cardtxt.includes(inputval)){
           element.style.display ='block'
        }
        else{
            element.style.display ='none'
       }
    })
})