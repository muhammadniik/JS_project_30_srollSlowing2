 const ulChilds = document.querySelector(".ul").children;
 // this.Array.from(ulChilds).forEach((e) => {
 //     e.addEventListener('click', () => {
 //         this.Array.from(ulChilds).forEach((n) => {
 //             n.classList.remove("active");

 //         })
 //         e.classList.add("active");
 //     })
 // })
 let curntSection;
 const sections = document.querySelector('.contant').children;
 window.addEventListener('scroll', () => {

     Array.from(sections).forEach((a) => {
         const sectionTop = a.offsetTop;
         console.log(scrollY, sectionTop)
         if (scrollY > sectionTop - (a.clientHeight / 3)) {
             curntSection = a.getAttribute('id');
         }

     })
     Array.from(ulChilds).forEach((li) => {
         li.classList.remove("active");
         if (li.classList.contains(curntSection))
             li.classList.add('active');
     })
 })