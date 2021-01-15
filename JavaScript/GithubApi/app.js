const githubForm = document.getElementById("github-form");
const githubNameInput = document.getElementById("githubname");
const clearRecentCalls = document.getElementById("clear-recent-calls");
const lastUsers = document.getElementById("last-users");



const github = new Github();
const ui = new UI();

eventListeners();


function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearRecentCalls.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}



function getData(e){
    const username = githubNameInput.value.trim();
    
    if(username === ""){
        ui.showErr("Please enter an username");
    }
    else {
        github.getGithubData(username).then(response => {
            if(response.user.message === "Not Found"){
                ui.showErr("User Not Found");
            }
            else {
                ui.addSearchedUserToUI(username);
                Storage.addSearchUsers(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
        }).catch(err => ui.showErr(err));
    }

    ui.clearInput();
    e.preventDefault();
}

function clearAllSearched(){
    if(confirm("Are you sure?")){
        Storage.clearAllSearchedUsers();
        ui.clearAllSearchedFromUI();
    }
}

function getAllSearched(){
    let users = Storage.getSearchedUsers();
    let result = "";
    users.forEach(user => {
        result += `<li class="list-group-item" style="text-align:center">${user}</li>`;
    });
    lastUsers.innerHTML = result;
}
