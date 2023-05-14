const API_URL = "https://randomuser.me/api/?results=25";

const body = document.getElementsByTagName("body")[0];
const ul = document.createElement("ul");
body.appendChild(ul);

fetch(API_URL)
  .then((resopnse) => {
    console.log(resopnse);
    return resopnse.json();
  })
  .then((data) => {
    const people = data.results;

    people.forEach((person, index) => {
      //for each person we need to create a LI
      const li = document.createElement("li");
      const h2 = document.createElement("h2");
      const img = document.createElement("img");
      const btn = document.createElement("button")
      const personAddress = document.createElement("p")
      const personDOB = document.createElement("p")

      h2.innerText = `${person.name.first} ${person.name.last}`;
      img.src = person.picture.medium;
      img.alt = `${person.name.first} ${person.name.last}`;

      btn.innerText = "Click for more information"

      btn.addEventListener("click", () => {
        const address = `${person.location.street.number} 
        ${person.location.street.name},
        ${person.location.city},
        ${person.location.state},
        ${person.location.country}
         `
        const dob = new Date(person.dob.date).toLocaleDateString()
        personAddress.innerHTML = `Address: ${address}`
        personDOB.innerHTML = `Date of birth: ${dob}`

      })



      li.appendChild(h2);
      li.appendChild(img);
      li.appendChild(btn)
      li.appendChild(personAddress)
      li.appendChild(personDOB)
      ul.appendChild(li);
      console.log(person);
    });
  });