let projects = JSON.parse(localStorage.getItem("projects")) || [];

displayProjects();

function addProject(){

    let projectName = document.getElementById("projectName").value;
    let status = document.getElementById("status").value;

    if(projectName==""){
        alert("Please enter project name");
        return;
    }

    projects.push({
        name: projectName,
        status: status
    });

    localStorage.setItem("projects", JSON.stringify(projects));

    document.getElementById("projectName").value="";

    displayProjects();
}

function displayProjects(){

    let list = document.getElementById("projectList");

    list.innerHTML="";

    let completed = 0;
    let pending = 0;

    projects.forEach((project,index)=>{

        if(project.status=="Completed")
            completed++;
        else
            pending++;

        let li = document.createElement("li");

        li.innerHTML=`
        <div>
            <b>${project.name}</b><br>
            Status : ${project.status}
        </div>

        <div>
            <button class="action-btn edit"
            onclick="editProject(${index})">Edit</button>

            <button class="action-btn delete"
            onclick="deleteProject(${index})">Delete</button>
        </div>
        `;

        list.appendChild(li);

    });

    document.getElementById("totalProjects").innerText = projects.length;
    document.getElementById("completedProjects").innerText = completed;
    document.getElementById("pendingProjects").innerText = pending;

}

function deleteProject(index){

    if(confirm("Delete this project?")){

        projects.splice(index,1);

        localStorage.setItem("projects",JSON.stringify(projects));

        displayProjects();

    }

}

function editProject(index){

    let newName = prompt("Edit Project Name",projects[index].name);

    if(newName!=null && newName!=""){

        projects[index].name = newName;

        let newStatus = prompt(
            "Enter Status (Pending/Completed)",
            projects[index].status
        );

        if(newStatus=="Pending" || newStatus=="Completed"){
            projects[index].status = newStatus;
        }

        localStorage.setItem("projects",JSON.stringify(projects));

        displayProjects();

    }

}