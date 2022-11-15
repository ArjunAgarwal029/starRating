
// const allstar=document.querySelectorAll(".star-widget input");
//                 let text=document.querySelector(".textarea textarea");
//                 let btn=document.querySelector(".btn");
//                 // console.log(allstar);
//                 allstar.forEach((star,i)=>{
//                 let currentlevel= (allstar.length) - i ;
//                 star.onclick=function(){
//                     console.log(star);
                    

//                     // console.log(i+1);
//                     console.log(currentlevel);

//                 }
//                 btn.onclick=function(){
//                     let text1=text.value;
//                     console.log(text1);
//                 }
                  

//                 firebase
//                 .database()
//                 .ref("Rating/" + "starlevel")
//                 .set({
//                     star_rating_level:currentlevel,
//                     text:text1,
//                 })
//                 document.querySelector(".textarea textarea").value="";

//               })






const allstar=document.querySelectorAll(".star-widget input");
                let text=document.querySelector(".textarea textarea");
                let btn=document.querySelector(".btn");
                // console.log(allstar);
                allstar.forEach((star,i)=>{
                let currentlevel= (allstar.length) - i ;
                star.onclick=function(){
                    console.log(star);
                    

                    // console.log(i+1);
                    console.log(currentlevel);

                }
                btn.onclick=function(){
                    let text1=text.value;
                    console.log(text1);
                }
                  

              })