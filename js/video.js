// Fetch, load and show categories button on html

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}

// {
//     "category_id": "1001",
//      "category": "Music"
// }
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("category");

    categories.forEach((items) => {
        //    create button
        const button = document.createElement("button")
        // jodi button.classList.add use kori then ("mx-auto","p-2" amne use hobe)
        button.classList = "btn";
        button.innerText = items.category;

        // add button to category container
        categoryContainer.append(button);
    });
}
loadCategories();
