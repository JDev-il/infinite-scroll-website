$(document).ready(function() {
  var dataArr = [];

  var primeNum;
  var pic;

  function isPrime(num) {
    for (var i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      } 
    primeNum = num;
    if(primeNum % 2 === 0 || primeNum >= 10 && primeNum <= 20){
      pic = "https://cdn.pixabay.com/photo/2016/09/23/08/28/code-1689066_1280.jpg"
    } else {
      pic = "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_1280.jpg"
    }
    return primeNum;
  }

  
  //Fetching posts from jsonplaceholder//
  fetch("../posts.json")
    .then(response => {
      return response.json();
    })
    .then(data => {
      dataArr.push(data);
      $(data).each(function(index, e) {
        $(".article").append(
          `<div class="card mb-4" id="${e.id}">
          <div class="card-body">
           <h2 class="card-title">Article Example #${e.id}</h2>
           <div class="imgArea"></div>
          <p class="card-text">${e.body}</p>
          </div>
         </div>`
        );
        isPrime(e.id);
        if (e.id == isPrime(e.id)) {
          $(`.card#${e.id} .imgArea`).prepend(
            `<img src=${pic}>
            `
          );
        }
      });
      $(".card").hide();
      return dataArr;
    });
  //Fetching posts from https://jsonplaceholder.typicode.com///

  var count = 0;

  var card;

  //Scroll Function//

  var scrollPos = 0;
  var counter = 0;

  var prevId = 1;

  $(window).scroll(function(e) {
    if(prevId >= 100){
      e.preventDefault()
    } else {
      var scrollPosCur = $(this).scrollTop();
      if (scrollPosCur < scrollPos) {
        counter += 1;
      }
  
      scrollPos = scrollPosCur;
      $("#spinner").show();
      if (prevId == dataArr[0][counter].id - 1) {
        $("#spinner").hide();
        prevId += 1;
        $(`.card#${counter}`).show();      
      }
    }
  });

  
  //Scroll Function//
});
