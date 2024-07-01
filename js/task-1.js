const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  // console.log(category);
  const h2 = category.querySelector("h2");
  console.log("Category:", h2.textContent);
  const ul = category.querySelectorAll("li");
  // console.log(ul);
  console.log("Elements:", ul.length);
});
