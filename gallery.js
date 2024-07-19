 
 
 const filterContainer = document.querySelector(".galleryxx-filter"),
 galleryItems = document.querySelectorAll(".galleryxx-item");
 
 filterContainer.addEventListener("click", (event) =>{
     if(event.target.classList.contains("filter-item")){
         //hault initail active 'filter__Pack'
         filterContainer.querySelector(".active").classList.remove("active");
         //indicates new 'filter__Pack'
         event.target.classList.add("active");
         const filterValue = event.target.getAttribute("data-filter");
         galleryItems.forEach((item) =>{
             if(item.classList.contains(filterValue) || filterValue ==='all'){
                 item.classList.remove("hide");
                 item.classList.add("show");
             }
             else{
                 item.classList.remove("show");
                 item.classList.add("hide");
             }
         });
     }
 });