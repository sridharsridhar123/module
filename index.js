const menu=document.querySelector('#menu-icon');
 const menulist =document.querySelector('.navbar');

 menu.addEventListener('click',()=>
{
  menulist.classList.toggle('showmenu')
})


for (let i = 0; i < 90; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Set random position for each star
  star.style.left = Math.random() * 150 + 'vw';
  star.style.top = Math.random() * 150 + 'vh';
  

  document.body.appendChild(star);
}