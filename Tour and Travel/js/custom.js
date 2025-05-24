// Scroll bar Control
window.onscroll = () =>{
	searchBtn.classList.remove('fa-times');
	searchBar.classList.remove('active');
	menu.classList.remove('fa-times');
    navbar.classList.remove('active');
	loginForm.classList.remove('active');
};

// Search Bar
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
searchBtn.addEventListener('click', () =>{
	searchBtn.classList.toggle('fa-times');
	searchBar.classList.toggle('active');
});

// Login Form
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
formBtn.addEventListener('click', () =>{
	loginForm.classList.add('active');
});
formClose.addEventListener('click', () =>{
	loginForm.classList.remove('active');
});

// Menu Bar
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
menu.onclick = function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Clickable Image Slider
let videoBtn = document.querySelectorAll('.vid-btn');
videoBtn.forEach(btn =>{
	btn.addEventListener('click',()=>{
		document.querySelector('.controls .active').classList.remove('active');
		btn.classList.add('active');
		let src = btn.getAttribute('data-src');
		document.querySelector('#video-slider').src = src;
	});
});

// Autoplay Review Slider
let swiper = new Swiper(".review-slider", {
	spaceBetween: 20,
	loop:true,
	autoplay:{
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints:{
		640:{
			slidesPerView: 1,
		},
		768:{
			slidesPerView: 2,
		},
		1024:{
			slidesPerView: 3,
		},
	},
});







