function TimeCalculation(data){
    const minutes= parseInt(data/60);
    const second = parseInt(data%60);
   
    const hours = parseInt(minutes/60)
    const remainingMinute= parseInt(minutes%60)
    if(hours == 0 && minutes != 0){
        return(`${remainingMinute} minutes ${second} seconds`)
    }
    else if(hours != 0 && minutes == 0){
        return(`${hours} hours ${remainingMinute} minutes ${second} seconds`)
    }
    else if(hours == 0 && minutes == 0){
        return(`${second} seconds`)
    }
    else{
        return(`${hours} hours ${remainingMinute} minutes ${second} seconds`)
    }
   
}
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

// Fetch, load and show videos on html
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(error => console.log(error))
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("videos");
    videos.forEach((videos) => {
        //    create button
        const card = document.createElement("div")
        // jodi button.classList.add use kori then ("mx-auto","p-2" amne use hobe)
        card.classList="card card-compact hover:-translate-y-3 hover:duration-75"
        card.innerHTML = `
           <figure class="h-[200px] relative">
             <img class="w-full h-full object-cover"
                 src=${videos.thumbnail}
                alt="Shoes" />
             <span class="absolute bg-black rounded-lg p-2 text-xs text-white right-2 bottom-2">${TimeCalculation(videos.others.posted_date)}</span>
          </figure>
          <div class="flex gap-4">
             <div class="">
                 <img class="w-10 h-10 rounded-full" src="${videos.authors[0].profile_picture}">
             </div>
             <div class="">
                 <h2 class="font-bold">${videos.title} </h2>
                 <div class="flex gap-2">
                     <p class="text-xs text-gray-500">${videos.authors[0].profile_name} </p>
                     ${videos.authors[0].verified == true ? `<img class="w-5 h-5 rounded-full" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png">`: "" }
                 </div> 
                 <p class="text-xs text-gray-500">${videos.others.views} views </p>
             </div>
         </div>`;

        // add button to category container
        videoContainer.append(card);
    });
}
loadVideos();

