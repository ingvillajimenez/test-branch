// GO! (check the 'TASK *' html comments for the relevant elements to manipulate )


/* TASK 1 -- Show/Hide Nav */
document.querySelector('.btn-toggle-menu').addEventListener('click', function () {

  var btn = document.querySelector('.btn-toggle-menu');
  var navMenu = document.querySelector('.answer-box nav');
  // console.log(navMenu.getAttribute("class"));
  //document.querySelector('.nav-menu').remove();
  if (navMenu.className === "nav-menu"){
    btn.innerHTML = "show nav";
    navMenu.classList.remove('nav-menu');
    navMenu.classList.add('nav-menu-hidden');
  }
  else {
    btn.innerHTML = "hide nav";
    navMenu.classList.remove('nav-menu-hidden');
    navMenu.classList.add('nav-menu');
  }
});

/* TASK 2 -- Select/Deslect an Icon */

document.querySelectorAll('.option').forEach(function(div){
  div.addEventListener('click', function(event){
    if(event.currentTarget.className === 'option') {
      event.currentTarget.classList.add('selected');
    }
    else {
      event.currentTarget.classList.remove('selected');
    }
  })
});

/* TASK 3 -- Increase total number*/

document.querySelectorAll('.point').forEach(function(button){
  button.addEventListener('click', function(){
    var totalPoints = document.querySelector('.total-points');
    totalPoints.textContent = parseInt(totalPoints.textContent) + parseInt(button.textContent);
  })
});

/* TASK 4 (Adventure Mode)-- Move Item List to List */

document.querySelectorAll('.point').forEach(function(button){
  button.addEventListener('click', function(){
    var totalPoints = document.querySelector('.total-points');
    totalPoints.textContent = parseInt(totalPoints.textContent) + parseInt(button.textContent);
  })
});

/* TASK 5 (Adventure Mode) -- Change Text Background Color From Palette */
