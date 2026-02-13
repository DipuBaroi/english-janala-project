const loadLessons = () =>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then((res)=>res.json())
    .then((json)=>displayLesson(json.data))
}



const displayLesson =(lessons) =>{
    // get the container and empty
    const levelContainer = document.getElementById('level-container')
    levelContainer.innerHTML="";

    //  get into every lesson
    for(let lesson of lessons){
        // create element
        console.log(lesson);
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML=`
        <button class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
        </button>
        
        `
        // append into container
        levelContainer.append(btnDiv)
    }
}
loadLessons()