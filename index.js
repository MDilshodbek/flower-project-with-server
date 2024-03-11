// 64bebc1e2c6d3f056a8c85b7 token

let url = "https://cute-jade-binturong-boot.cyclic.app/api";

const container = document.getElementById("container");

const deleteMe = async (index) => {
  document.getElementById(`card-${index}`).remove();
};

const getFlower = async () => {
  const reponse = await fetch(
    `${url}/flower/category/house-plants?access_token=64bebc1e2c6d3f056a8c85b7`
  );
  const formattedResponse = await reponse.json();
  const data = await formattedResponse;

  data.data.forEach((value, index) => {
    container.innerHTML += `<div class="card" id="card-${index}">
    <h1>${value.title}</h1>
    <img src = "${value.main_image}"/>
    <p>${value.description}</p>
    <button onclick="deleteMe(${index})">Delete me</button>
    </div>`;
  });
};

getFlower();
