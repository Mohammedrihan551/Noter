
//To show created note after revisit or refresh of website
  shownotes();

//Saving notes from textarea to localstorage
  let addNotesButton=document.getElementById("addNotesButton");
  addNotesButton.addEventListener("click",function(element){
      let textedArea=document.getElementById("textedArea");
      let notes=localStorage.getItem("notes");
        if(notes==null){
            notesContent=[];
        }
        else{
            notesContent=JSON.parse(notes);
        }
  
        notesContent.push(textedArea.value);
        localStorage.setItem("notes",JSON.stringify(notesContent));
        textedArea.value="";
        shownotes();
  });

//Displaing notes inside notes container
  function shownotes(){
      let notes=localStorage.getItem("notes");
        if(notes==null){
            notesContent=[];
        }
        else{
            notesContent=JSON.parse(notes);
        }
      let insetNotes="";
         notesContent.forEach(function(element,index) {
          insetNotes+=`<div class="notesCard">
                        <h4 id="notesTitle">Notes ${index+1}</h4>
                        <p id="notes">${element}</p>
                        <button id="${index}" onclick="deletenotes(this.id)" class="deleteNotesButton">Delete Notes</button>
                       </div>`;
          });
          let insert=document.getElementById("notesContainer");
            if(notesContent.length!=0){
                insert.innerHTML=insetNotes;
            }
            else{
                insert.innerHTML="Create notes to show";
            }
  }

//To delete the displayed notes
   function deletenotes(index){
     let notes=localStorage.getItem("notes");
       if(notes==null){
           notesContent=[];
       }
       else{
           notesContent=JSON.parse(notes);
       }

       notesContent.splice(index,1);
       localStorage.setItem("notes",JSON.stringify(notesContent));
       shownotes();
   }

//To search the notes content from searchbar
  let search=document.getElementById("searchBar");
  search.addEventListener("input",function(){
   let searched=search.value.toLowerCase();
   let notesCard=document.getElementsByClassName("notesCard");
       Array.from(notesCard).forEach(function(element){
         let cardContent=element.getElementsByTagName("p")[0].innerText.toLowerCase();
           if(cardContent.includes(searched)){
               element.style.display="block";
           }
           else{
            element.style.display="none";
           }
       });
  });
