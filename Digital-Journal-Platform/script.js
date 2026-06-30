let journals = JSON.parse(localStorage.getItem("journals")) || [];

displayEntries();

function addEntry(){

let title=document.getElementById("title").value;
let date=document.getElementById("date").value;
let mood=document.getElementById("mood").value;
let content=document.getElementById("content").value;

if(title=="" || content==""){

alert("Please fill all fields");

return;

}

journals.push({
title,
date,
mood,
content
});

localStorage.setItem("journals",JSON.stringify(journals));

document.getElementById("title").value="";
document.getElementById("date").value="";
document.getElementById("content").value="";

displayEntries();

}

function displayEntries(){

let search=document.getElementById("search").value.toLowerCase();

let list=document.getElementById("journalList");

list.innerHTML="";

journals.forEach((entry,index)=>{

if(entry.title.toLowerCase().includes(search)){

let li=document.createElement("li");

li.innerHTML=`

<div class="entry-title">${entry.title}</div>

<div class="entry-date">

📅 ${entry.date}

&nbsp;&nbsp;

${entry.mood}

</div>

<p>${entry.content}</p>

<div class="actions">

<button class="edit"

onclick="editEntry(${index})">

Edit

</button>

<button class="delete"

onclick="deleteEntry(${index})">

Delete

</button>

</div>

`;

list.appendChild(li);

}

});

}

function deleteEntry(index){

if(confirm("Delete this journal entry?")){

journals.splice(index,1);

localStorage.setItem("journals",JSON.stringify(journals));

displayEntries();

}

}

function editEntry(index){

let title=prompt("Edit Title",journals[index].title);

let content=prompt("Edit Content",journals[index].content);

if(title && content){

journals[index].title=title;

journals[index].content=content;

localStorage.setItem("journals",JSON.stringify(journals));

displayEntries();

}

}