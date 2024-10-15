export function Header() {
  const header = document.querySelector(".header");
  header.innerHTML = `
  <h4 class="logo-text">
        <img
          class="logo"
          src="../assets/images/logo.png"
          alt="logo"
        />BARANGAY STA. LUCIA
      </h4>
      <nav>
        <ul>
          <li class="Home">
            <i class="fa-solid fa-house"></i>Home
            <i class="fa-solid fa-chevron-right"></i>
          </li>
          <li class="ordinance">
            <i class="fa-solid fa-gavel"></i>City Ordinance
            <i class="fa-solid fa-chevron-right"></i>
          </li>
          <li class="request">
            <i class="fa-solid fa-file-lines"></i>Request
            <i class="fa-solid fa-chevron-right"></i>
          </li>
          <li class="template">
            <i class="fa-solid fa-file-signature"></i>Templates
            <i class="fa-solid fa-chevron-right"></i>
          </li>
        </ul>
      </nav>
      <div class="vertical-line"></div>`;
}
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("Home")) {
    window.location.href = "../Home/index.html";
  }
  if (e.target.classList.contains("ordinance")) {
    window.location.href = "../City Ordinance/CirtyOrdinance.html";
  }
  if (e.target.classList.contains("request")) {
    window.location.href = "../Request/Request.html";
  }
  if (e.target.classList.contains("template")) {
    window.location.href = "../Template/index.html";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.href;
  const chevronRight = document.querySelectorAll(".fa-chevron-right");
  const homeLink = document.querySelector(".Home");
  const replacementChevronRight = document.createElement("i");
  replacementChevronRight.classList.add("fa-solid", "fa-chevron-left");

  if (currentUrl.includes("Home")) {
    homeLink.style.backgroundColor = "#0f2b4a";

    chevronRight[0].replaceWith(replacementChevronRight);
  } else if (currentUrl.includes("City%20Ordinance")) {
    const ordinanceLink = document.querySelector(".ordinance");
    ordinanceLink.style.backgroundColor = "#0f2b4a";
    chevronRight[1].replaceWith(replacementChevronRight);
  }
});
