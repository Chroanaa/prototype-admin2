export function Search() {
  const search = document.querySelector(".search-container");
  search.innerHTML = `
    <div class="search-input">
        <input type="text" id="search" placeholder="Search.." />
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <br />
      <br />
      <br />
      <hr />`;
}
