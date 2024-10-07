let count = 0;

document.addEventListener("DOMContentLoaded", () => {
  count = Math.floor(Math.random() * 1453 + 1);
  console.log(count);
  getData();
});

document.querySelector("button").addEventListener("click", () => {
  if (count == 1453) {
    count = 0;
    getData();
  } else {
    count++;
    getData();
  }
});

function getData() {
  fetch("quotes.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.querySelector(
        ".container"
      ).innerHTML = `<p>Loading quote...</p>`;
      setTimeout(() => {
        document.querySelector(".container").innerHTML = `
        <h1>Quote of the day</h1>
        <p id='quote'>${data.quotes[count].quote}</p>
        <p id='auth'><span>~</span> ${data.quotes[count].author}</p>
        `;
      }, 1000);
    });
}

document.querySelector("#copy").addEventListener("click", () => {
  let quotesText = document.querySelector("#quote");
  let popMSg = document.querySelector(".pop-up");

  popMSg.classList.add("active-pop");
  setTimeout(() => {
    popMSg.classList.remove("active-pop");
  }, 1300);
  navigator.clipboard.writeText(quotesText.innerText);
});
