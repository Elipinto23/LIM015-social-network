import { logout} from '../security/security.function.js';
export function viewHome ()  {
  const viewHome = `
      <h2>Pets-Lovers</h2>
      <div class="home">
            <img src="img/home.jpg" id="home1" class="homeAnimal">
       <div id="exit">
       <button id="btnExit">Logout</button>
   
      </div>`;
  const divElem = document.createElement("div");
  divElem.innerHTML = viewHome;
  return divElem;
};

export function initHome() {
  const btnLogout = document.getElementById("btnExit");
  btnLogout.addEventListener("click",function(e) {
  logout() 
  window.location.hash ="#/login";
});
}
