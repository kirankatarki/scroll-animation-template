console.log('Running');
let parent = document.querySelector('.top-section')
let curDiv = document.querySelector('.one-sec')
let leftDiv = document.querySelector('.two-sec')

document.onscroll = function scroll() {
    let y = window.scrollY;
    if(y < 100){
        console.log('0 scroll');
        parent.className = 'top-section sticky normal-section'
        curDiv.className = 'one-sec show'    
        leftDiv.className = 'two-sec hide'
    }else if(y > 300){
        parent.className = 'top-section non-sticky normal-section'
        curDiv.className = 'one-sec hide hide-animation'    
        leftDiv.className = 'two-sec show show-animation'
    }else {
        curDiv.className = 'one-sec hide hide-animation'    
        leftDiv.className = 'two-sec show show-animation'
    }
    // document.querySelectorAll('.normal-section').forEach(el => {
    //     if 
    // })
    
    // console.log(curDiv);
    // secondsec.scrollIntoView({behavior: "smooth"});
}

// const expo = function(el, entries) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting)
//         el.style.transform = `translateX(-${100}%)`;
//         let eleTop  = el.target.getBoundingClientRect().top + window.scrollY
//         window.scroll({top: eleTop, behavior: "smooth"})
//     });
//   };
  
//   document.querySelectorAll("body").forEach(el => {
//     const els = el.querySelector("body");
//     const Obs = new IntersectionObserver(expo.bind(null, els), {threshold: 0.5});
//     el.querySelectorAll(".normal-section").forEach(el => Obs.observe(el));
//   });
// const entry = () => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             console.log(entry);
//           // It's visible. Add the animation class here!
//         //   let children = entry.target.children
//         //   console.log(children[0]);
//         //   children[0].classList.add('show-left');
//             console.log(en);
//         }
//     });
// }
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry.target.dataset.pos);
                // if(entry.target.dataset.pos != 1){
                    let eleTop  = entry.target.getBoundingClientRect().top + window.scrollY
                    window.scroll({top: eleTop, behavior: "smooth"})
                // }
                
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll('.normal-section').forEach(el => {
    // console.log(el);
    observer.observe(el);
})
  
  // Tell the observer which elements to track



