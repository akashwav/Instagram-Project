let bnav = document.getElementById('bnav');
let gnav = document.getElementById('gnav')
let searchbtn = document.getElementById('search');
let clicks = document.getElementById('notifcount');
let searchbar = document.getElementById('searchbar')
let suggestions = document.getElementById('suggestions-mobile');
let search = document.getElementById('search');
let searchinput = document.getElementById('searchheader');
let popup = document.getElementById('popupsearch');
count = 0;


searchbtn.addEventListener('click', function toggleHide() {
	count++;
	if (searchbar.style.width <= '50px') {
		gnav.style.display = 'flex';
		bnav.style.display = 'none';
		searchbar.style.width = '100%';
		searchbar.style.transition = '0.3s width';
		searchbar.style.padding = '7px';
		searchbar.style.background = 'rgba(0, 0, 0, 0.070)';
		search.style.fontSize = '24px';
		search.style.color = 'rgba(0, 0, 0, 0.710)';
	}
	if (gnav.style.display = 'flex') {
		gnav.addEventListener('click', function toggleShow() {
			gnav.style.display = 'none';
			bnav.style.display = 'flex';
			searchbar.style.width = '39px';
			searchbar.style.transition = '0.3s width';
			searchbar.style.padding = '0px';
			searchbar.style.background = 'transparent';
			search.style.fontSize = '30px';
			search.style.color = 'rgba(0, 0, 0)';
		})
	}
})


let pimage = document.getElementById('postimage');
let aac = document.getElementById('aac');
let likescount = document.getElementById('likescount');
count = 0;
countf = 1;

pimage.addEventListener('click', function doubleTap() {
	count++;
	if (count % 2 == 0) {
		aac.style.color = 'red';
		aac.style.fontVariationSettings = "'FILL' 1";
		aac.style.transition = '0.2s';
		likescount.innerText = '3,000,231';
	}
	if(count % 4 == 0 ) {
	  aac.style.color = 'black';
	  aac.style.fontVariationSettings = "'FILL' 0";
	  likescount.innerText = '3,000,230';
	}
})

aac.addEventListener('click', function likeReset() {
  console.log('clicked')
  countf++;
  if(countf % 2 == 0) {
    aac.style.color = 'black';
    aac.style.fontVariationSettings = "'FILL' 0";
    likescount.innerText = '3,000,230';
  }
  if(countf % 2 != 0) {
    aac.style.color = 'red';
		aac.style.fontVariationSettings = "'FILL' 1";
		aac.style.transition = '0.2s';
		likescount.innerText = '3,000,231';
  }
})