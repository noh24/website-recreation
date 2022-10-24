window.addEventListener("load", function() {
  console.log("hi");
  //get userinput and put values into array
  const array = document.getElementById("array");
  let form = document.querySelector("form");
  console.log("hello");
  form.addEventListener("submit", function(e) { 
    e.preventDefault();
    //collect form input values, place them into an array
    const credit = document.getElementById("credit").value;
    const dob = document.getElementById("dob").value;
    const social = document.getElementById("social").value;

    const userInputArray = [credit, dob, social];
    // array.innerText = "Array: " + `${userInputArray}`;
    const newArray = [];
    newArray.push(userInputArray[1], userInputArray[0], userInputArray[2]);
    // array.append(" New Array: ", newArray);
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    li1.append(userInputArray);
    li2.append(newArray);
    ul.append(li1, li2);
    document.body.append(ul);
  });
});
// window.addEventListener("load", function() {
//   //website recreation practice
//   const oldH1 = document.querySelector("h1");
//   oldH1.remove();
//   const newH1 = document.createElement("h1");
//   newH1.append("Webpage Recreation Practice");
//   const firstP = document.createElement("p");
//   firstP.append("The HTML of this webpage was created with JavaScript.");
//   const firstImg = document.createElement("img");
//   firstImg.setAttribute("src", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900");
//   firstImg.setAttribute("alt", "This is an image of a Multicolored Tanager bird from birdsoftheworld.org");
//   firstImg.setAttribute("style", "width: 30%");
//   const secondH1 = document.createElement("h1");
//   secondH1.append("Facts about the Multicolored Tanager");
//   const firstUl = document.createElement("ul");
//   const firstLi = document.createElement("li");
//   firstLi.append("It is a endemic to the mountains of Colombia");
//   const secondLi = document.createElement("li");
//   secondLi.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet");
//   firstUl.append(firstLi, secondLi);
//   const firstH2 = document.createElement("h2");
//   firstH2.append("Source");
//   const link = document.createElement("a");
//   link.setAttribute("href", "https://en.wikipedia.org/wiki/Multicoloured_tanager");
//   link.append("Wiki");
//   const locateBody = document.body;
//   locateBody.append(newH1, firstP, firstImg, secondH1, firstUl);
//   firstUl.after(firstH2);
//   firstH2.after(link);
// });


