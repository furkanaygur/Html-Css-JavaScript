class UI {
    constructor(){
        this.profileDiv = document.getElementById("profile");
        this.repoDiv = document.getElementById("repos");
        this.lastUsers = document.getElementById("last-users");
        this.inputField = document.getElementById("githubname");
        this.cardBody = document.querySelector(".card-body")
    }

    clearInput(){
        this.inputField.value = "";
    }

    showUserInfo(user){
        this.profileDiv.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
            <div class="col-md-4">
                <a href="${user.html_url}" target = "_blank">
                <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
                <hr>
                <div id="fullName" style="text-align:center"><strong > ${user.name}</strong></div>
                <hr>
                <div id="bio">${user.bio}</div>
            </div>
            <div class="col-md-8">
                <button class="btn btn-secondary">
                    Followers  <span class="badge badge-light">${user.followers}</span>
                </button>
                <button class="btn btn-info">
                    Following  <span class="badge badge-light">${user.following}</span>
                </button>
                <button class="btn btn-danger">
                    Repositories  <span class="badge badge-light">${user.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="mail">${user.email}</span>  
                    </li>
                </div>
            </div>
        </div>
        `;
    }

    showRepoInfo(repos){
        this.repoDiv.innerHTML = `<h3 class="page-heading mb-3"> <strong>Latest Repositories</strong></h3>`;
        repos.forEach(repo => {
            this.repoDiv.innerHTML += `
            <hr>
            <div class="mb-2 card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
                <div class="row">
                    <div class="col-md-8" style="text-align: center;">
                        <a href="${repo.html_url}" target = "_blank" id = "repoName" >${repo.name}</a>
                    </div>
                <div class="col-md-4">
                    <button class="btn btn-secondary">
                        <i class="fas fa-star"></i> Stars  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                    </button>
                    <button class="btn btn-info">
                        <i class="fas fa-code-branch"></i> Forks  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                    </button>
                </div>
            </div>
            `;
        });
    }
    
    addSearchedUserToUI(username){
        let users = Storage.getSearchedUsers();

        if(users.indexOf(username) === -1){
            // const liElement = document.createElement("li");
            // liElement.className = "list-group-item";
            // liElement.textContent = username;
            // this.lastUsers.appendChild(liElement);   
            this.lastUsers.innerHTML += `<li class="list-group-item" style="text-align:center">${username}</li>`;
        }

    }

    clearAllSearchedFromUI(){
        while(this.lastUsers.firstElementChild !== null){
            this.lastUsers.removeChild(this.lastUsers.firstElementChild)
        }
    }

    showErr(message){
        const div = document.createElement("div");
        div.className = "alert alert-danger";
        div.textContent = message;
        this.cardBody.appendChild(div);
        setTimeout(()=>{
            div.remove();
        },2000);
    }


}