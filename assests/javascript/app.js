  
  const topics =[
    bigDogs, littleDogs, Aries
  ]
  
  
  document.querySelectorAll(".gif").forEach(function (img) {
    img.addEventListener("click", function (event) {

      const state = event.target.getAttribute("data-dog");
     
      if (state === "still") {
        event.target.setAttribute("src", event.target.getAttribute("data-animate"));
        event.target.setAttribute("data-dog", "animate");
      } else {
        event.target.setAttribute("src", event.target.getAttribute("data-still"));
        event.target.setAttribute("data-dog", "still");
      }
    });
  });
// This should have made the photo's stay still, but only made them start over.


 document.getElementById('bigDogs').addEventListener('click', function (e) {
        const img = document.createElement('img');
        img.setAttribute('src', 'https://media.giphy.com/media/SHdIKkGGlPI7gcdf72/giphy.gif');
        e.target.appendChild(img);
      });

 document.getElementById('littleDogs').addEventListener('click', function (e) {
        const img = document.createElement('img');
        img.setAttribute('src', 'https://media.giphy.com/media/11tLJ4XVXqWHSg/giphy.gif');
        e.target.appendChild(img);
      });

 document.getElementById('Aries').addEventListener('click', function (e) {
               const img = document.createElement('img');
               img.setAttribute('src', 'https://media.giphy.com/media/pWPc1tEcF2cyk/giphy.gif');
               e.target.appendChild(img);
             });
    
            //This should have brought the images into a place that they are connected
            // to the buttons but that did not happen and I do not know why they are
            // not connected.

       
//There was a 403 error and i am apparentely locked out of the gifs stuff.

      const queryURL = "https://media.giphy.com/media/SHdIKkGGlPI7gcdf72/giphy.gif" +
     + "&api_key=q47LbgNT1pNoqx6sn07jeKcy4BQ9XZkM&limit=10";
             "https://media.giphy.com/media/11tLJ4XVXqWHSg/giphy.gif" +
        "&api_key=q47LbgNT1pNoqx6sn07jeKcy4BQ9XZkM&limit=10";
            "https://media.giphy.com/media/pWPc1tEcF2cyk/giphy.gif" +
         "&api_key=q47LbgNT1pNoqx6sn07jeKcy4BQ9XZkM&limit=10";

      fetch(queryURL)
        .then(function (response) {
          return response.json();
        })
    
        .then(function (responseJson) {
          console.log(queryURL);

          console.log(responseJson);
          
          const results = responseJson.data;

        
          for (let i = 0; i < results.length; i++) {

        
            const dogDiv = document.createElement("div");

            
            const p = document.createElement("p")
            p.innerHTML = "Rating: " + results[i].rating;

           //this should have added a rating system but could not get it running,
            
            const dogImage = document.createElement("img");
            
            dogImage.setAttribute("src", results[i].images.fixed_height.url);

        
            doglDiv.append(p);
            dogDiv.append(dogImage);

        
            document.getElementById("gifs-appear-here").prepend(dogDiv);
          }
        });
    //There are multiple problems that have occured during this build. I know what
    //needs to be done but am still struggling to get the concepts down.

    //There should have be access to the internet via the search button,
    //the buttons that are standard should have produced more images if clicked again
    // The images should have been hidden until they rest of the page is run
   
    // What i do have is able to adjust to the sizing of the screen and the images,
    //do stop when they are clicked.
