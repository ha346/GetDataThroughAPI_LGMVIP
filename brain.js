let box = document.getElementById("cards");
let API = async () => {
    let response = await fetch("https://reqres.in/api/users?page=1");
    let file = await response.json();
    let info = file.data
        .map((element) => {
            return `<div class="pt-4 rounded-t-lg">
            <img src="${element.avatar}" alt="image"
              class="object-cover w-24 h-24 mx-auto rounded-full shadow-xl bg-secondaryBG" />
             
            <blockquote
              class="flex flex-col justify-between p-12 -mt-6 text-center rounded-lg shadow-xl bg-primaryTxt">
              <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900 font-bold mb-2">${element.first_name}</span>
              <p class="text-lg font-bold text-secondaryTxt">${element.first_name} ${element.last_name}</p>
              <p class="mt-1 text-sm font-medium text-secondaryTxt">${element.email}
              </p>
              <p class="mt-1 text-xl font-medium text-secondaryTxt">User ID: ${element.id}
              </p>
              
            </blockquote>
          </div>`;
        })
        .join("");
    cards.innerHTML = info;
}; let navBtn = document.getElementById("push");
navBtn.addEventListener("click", () => {
    cards.innerHTML = `<h1 class='load'>LOADING...</h1>`;
    setTimeout(() => {
        API();
    }, 2000);
});