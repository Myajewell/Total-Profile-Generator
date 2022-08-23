const Manager = require("../lib/Manager");

const generateTeam = (team) => {
    console.log(team);
    const html = [];

    const generateManager = Manager => {
        console.log(Manager);
        const managerhtml = `
        div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>${Manager.name}</b></h4>
    <ul class= "list-group>
    <li class=
  </div>
</div>
        `
    }
}