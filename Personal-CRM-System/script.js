let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

displayContacts();

function addContact(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;

if(name==""||email==""||phone==""){
alert("Please fill all fields");
return;
}

contacts.push({
name:name,
email:email,
phone:phone
});

localStorage.setItem("contacts",JSON.stringify(contacts));

document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("phone").value="";

displayContacts();

}

function displayContacts(){

let search=document.getElementById("search").value.toLowerCase();

let list=document.getElementById("contactList");

list.innerHTML="";

contacts.forEach((contact,index)=>{

if(contact.name.toLowerCase().includes(search)){

let li=document.createElement("li");

li.innerHTML=`
<div>
<b>${contact.name}</b><br>
${contact.email}<br>
${contact.phone}
</div>

<div>
<button onclick="editContact(${index})">Edit</button>
<button onclick="deleteContact(${index})">Delete</button>
</div>
`;

list.appendChild(li);

}

});

}

function deleteContact(index){

    let choice = confirm("Are you sure you want to delete this contact?");

    if(choice){

        contacts.splice(index,1);

        localStorage.setItem("contacts",JSON.stringify(contacts));

        displayContacts();

    }

}

function editContact(index){

let name=prompt("Edit Name",contacts[index].name);

let email=prompt("Edit Email",contacts[index].email);

let phone=prompt("Edit Phone",contacts[index].phone);

if(name&&email&&phone){

contacts[index].name=name;

contacts[index].email=email;

contacts[index].phone=phone;

localStorage.setItem("contacts",JSON.stringify(contacts));

displayContacts();

}

}