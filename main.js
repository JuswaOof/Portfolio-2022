const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - scrollY - 10)+"px; left: " + (e.pageX - 10) + "px;");


})





  function phone(mediaQuery) {
    if (mediaQuery.matches) { // If media query matches
      document.querySelector(".about").addEventListener("click", about);
      document.querySelector(".projects").addEventListener("click", projects);
      document.querySelector(".something").addEventListener("click", something);
      document.querySelector(".contacts").addEventListener("click", contacts);
      document.querySelector(".customButton").addEventListener("click", customButton);

      function customButton(){
        location.reload();
          
      }
      
      function about(){
          document.querySelector(".something").style.display = "none";
          document.querySelector(".about").style.height =  "calc(16.6666666667% * 4)";
          document.querySelector(".projects").style.display = "none";
          document.querySelector(".contacts").style.display = "none";
          document.querySelector(".customButton").style.display = "block";
          document.querySelector(".aboutContent").style.display = "flex";
          document.querySelector(".aboutLink").style.display = "none";

          var aboutHeading = document.querySelector(".aboutContent .heading");

          aboutHeading.classList.toggle('leftToRight');
        }
        
        function projects(){
          document.querySelector(".something").style.display = "none";
          document.querySelector(".about").style.display =  "none";
          document.querySelector(".projects").style.height = "calc(16.6666666667% * 4)";
          document.querySelector(".contacts").style.display = "none";
          document.querySelector(".projects").style.top = "calc(100% - 16.6666666667% * 5)";
          document.querySelector(".customButton").style.display = "block";
          document.querySelector(".projectsLink").style.display = "none";
          document.querySelector(".sliderContainer").style.display = "grid";
        }
        
        function something(){
          document.querySelector(".something").style.height = "calc(16.6666666667% * 4)";
          document.querySelector(".about").style.display =  "none";
          document.querySelector(".projects").style.display = "none";
          document.querySelector(".contacts").style.display = "none";
          document.querySelector(".something").style.top = "calc(100% - 16.6666666667% * 5)";
          document.querySelector(".customButton").style.display = "block";
          document.querySelector(".toolsLogo").style.display = "flex";
          document.querySelector(".somethingLink").style.display = "none";
        }
        
        function contacts(){
          document.querySelector(".something").style.display = "none";
          document.querySelector(".about").style.display =  "none";
          document.querySelector(".projects").style.display = "none";
          document.querySelector(".contacts").style.height = "calc(16.6666666667% * 4)";
          document.querySelector(".contacts").style.top = "calc(100% - 16.6666666667% * 5)";
          document.querySelector(".customButton").style.display = "block";
          document.querySelector(".contactsLink").style.display = "none";
          document.querySelector(".contactsContainer").style.display = "flex";
          document.querySelector(".contactsInfoContainer").style.display = "none";

        }
    } else {
     
      document.querySelector(".about").addEventListener("click", about);
      document.querySelector(".projects").addEventListener("click", projects);
      document.querySelector(".something").addEventListener("click", something);
      document.querySelector(".contacts").addEventListener("click", contacts);
      document.querySelector(".customButton").addEventListener("click", customButton);

      function customButton(){
        location.reload();
          
      }
      
      function about(){
          document.querySelector(".something").style.display = "none";
          document.querySelector(".about").style.height =  "calc(100% - 124px)";
          document.querySelector(".projects").style.display = "none";
          document.querySelector(".contacts").style.display = "none";
          document.querySelector(".about").style.bottom =  "0";
          document.querySelector(".about").style.width =  "100%";
          document.querySelector(".about").style.right =  "0";
          document.querySelector(".customButton").style.display = "block";
          document.querySelector(".aboutContent").style.display = "flex";
          document.querySelector(".aboutLink").style.display = "none";

          document.querySelector(".image").classList.toggle("animateTotoro");

          var aboutHeading = document.querySelector(".aboutContent .heading");

          aboutHeading.classList.toggle('leftToRight');

        }
        function projects(){
          document.querySelector(".something").style.display = "none";
          document.querySelector(".projects").style.height =  "calc(100% - 124px)";
          document.querySelector(".about").style.display = "none";
          document.querySelector(".contacts").style.display = "none";
          document.querySelector(".projects").style.bottom =  "0";
          document.querySelector(".projects").style.width =  "100%";
          document.querySelector(".projects").style.left =  "0";
          document.querySelector(".customButton").style.display = "block";
          document.querySelector(".sliderContainer").style.display = "grid";
          document.querySelector(".projectsLink").style.display = "none";

          const scrollContainer = document.querySelector(".sliderContainer");

          scrollContainer.addEventListener("wheel", (evt) => {
          evt.preventDefault();
          scrollContainer.scrollLeft += evt.deltaY * 0.68027210884 ;

          });

          
            window.onmousemove = function(e){
 
                        var projectHover = document.getElementsByClassName("tooltip");


                        for(const tooltip of projectHover){

                        var y = e.clientY;
                        var x = e.clientX;
              
                        tooltip.style.top = (y + 20) + 'px';
                        tooltip.style.left = (x + 20) + 'px';
                        
                        console.log(projectHover);
                        }
                      }
              
 
        }
        function something(){
          document.querySelector(".about").style.display = "none";
          document.querySelector(".something").style.height =  "calc(100% - 124px)";
          document.querySelector(".projects").style.display = "none";
          document.querySelector(".contacts").style.display = "none";
          document.querySelector(".something").style.top =  "124px";
          document.querySelector(".something").style.width =  "100%";
          document.querySelector(".something").style.right =  "0";
          document.querySelector(".customButton").style.display = "block";
          document.querySelector(".toolsLogo").style.display = "flex";
          document.querySelector(".somethingLink").style.display = "none";

        }
        function contacts(){
          document.querySelector(".something").style.display = "none";
          document.querySelector(".contacts").style.height =  "calc(100% - 124px)";
          document.querySelector(".projects").style.display = "none";
          document.querySelector(".about").style.display = "none";
          document.querySelector(".contacts").style.top =  "124px";
          document.querySelector(".contacts").style.width =  "100%";
          document.querySelector(".contacts").style.left =  "0";
          document.querySelector(".customButton").style.display = "block";
          document.querySelector(".contactsLink").style.display = "none";
          document.querySelector(".contactsContainer").style.display = "flex";

        }
        
     
    }
  }
  
  var mediaQuery = window.matchMedia("(max-width:767px)")
  phone(mediaQuery) // Call listener function at run time
  mediaQuery.addListener(phone) // Attach listener function on state changes



