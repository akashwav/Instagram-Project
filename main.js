let bnav = document.getElementById('bnav');
let gnav = document.getElementById('gnav')
let searchbtn = document.getElementById('search');
let searchbar = document.getElementById('searchbar')
let suggestions = document.getElementById('suggestions-mobile');
let search = document.getElementById('search');
let searchinput = document.getElementById('searchheader');
let popup = document.getElementById('popupsearch');


searchbtn.addEventListener('click', function toggleHide() {
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

let pimage = document.querySelectorAll('.postimage');
let aac = document.querySelectorAll('.aac');
let likescount = document.querySelectorAll('.likescount');
countp = 1;

for (let i = 0; i < pimage.length; i++) {
	pimage[i].addEventListener('click', function doubleTap() {
		countp++;
		if (countp % 2 == 0) {
			aac[i].style.color = 'red';
			aac[i].style.fontVariationSettings = "'FILL' 1";
			aac[i].style.transition = '0.2s';
			likescount[0].innerText = '3,000,231';
			likescount[1].innerText = '2,972,401';
			likescount[2].innerText = '10,500,346';
			likescount[3].innerText = '900,161';
		}
		if (countp % 4 == 0) {
			aac[i].style.color = 'black';
			aac[i].style.fontVariationSettings = "'FILL' 0";
			likescount[0].innerText = '3,000,230';
			likescount[1].innerText = '2,972,400';
			likescount[2].innerText = '10,500,345';
			likescount[3].innerText = '900,160';
		}
	})

}

countf = 0;
for (let i = 0; i < aac.length; i++) {
	aac[i].addEventListener('click', function likeReset() {
		console.log('clicked')
		countf++;
		if (aac[i].style.color = 'red') {
			aac[i].style.color = 'black';
			aac[i].style.fontVariationSettings = "'FILL' 0";
			likescount[0].innerText = '3,000,230';
			likescount[1].innerText = '2,972,400';
			likescount[2].innerText = '10,500,345';
			likescount[3].innerText = '900,160';
		}
		if (countf % 2 != 0) {
			aac[i].style.color = 'red';
			aac[i].style.fontVariationSettings = "'FILL' 1";
			aac[i].style.transition = '0.2s';
			likescount[0].innerText = '3,000,231';
			likescount[1].innerText = '2,972,401';
			likescount[2].innerText = '10,500,346';
			likescount[3].innerText = '900,161';
		}
	})

}

let vert = document.querySelectorAll('.vert');
let tipcard = document.querySelectorAll('.tipcard');
let postspfp = document.querySelectorAll('.postspfp')

for (let i = 0; i < vert.length; i++) {
	let county = 1;
	const vertbtn = vert[i];
	vertbtn.addEventListener('click', function showtip() {
		county++;
		if (vertbtn.style.pointerEvents = 'initial') {
			if (county % 2 == 0) {
				vertbtn.innerHTML = 'add';
				vertbtn.style.transform = 'rotate(45deg)';
				tipcard[i].style.visibility = 'initial';
				tipcard[i].style.pointerEvents = 'initial';
				tipcard[i].style.opacity = '1';
				tipcard[i].style.transition = '0.3s';
			}
			if (county % 2 != 0) {
				vertbtn.innerHTML = 'more_vert';
				vertbtn.style.transform = 'rotate(0deg)';
				tipcard[i].style.visibility = 'hidden';
				tipcard[i].style.pointerEvents = 'none';
				tipcard[i].style.opacity = '0';
				tipcard[i].style.transition = '0.3s';
			}
		}
		else {
			vertbtn.style.pointerEvents = 'none';
			
		}
	})
}

let bac = document.querySelectorAll('.bac');
let cbox = document.querySelectorAll('.commentbox');
let clicks = 1;

for (let i = 0; i < bac.length; i++) {
	const cboxbtn = bac[i];
	cboxbtn.addEventListener('click', function cboxToggle() {
		clicks++;
		if (cbox[i].style.position = 'absolute' && clicks % 2 != 0) {
			cbox[i].style.position = 'relative';
			cbox[i].style.left = '0px';
			cbox[i].style.right = '0px';
			cbox[i].style.top = '0px';
			cbox[i].style.visibility = 'visible';
			cbox[i].style.width = '100%';
			cbox[i].style.transition = '0.5s';
			cbox[i].style.pointerEvents = 'all';

		}
		if (cbox[i].style.position = 'relative' && clicks % 2 == 0) {
			cbox[i].style.position = 'absolute';
			cbox[i].style.left = '20px';
			cbox[i].style.right = '20px';
			cbox[i].style.top = '-50px';
			cbox[i].style.pointerEvents = 'none';
			cbox[i].style.visibility = 'hidden';
			cbox[i].style.width = '100%';
			cbox[i].style.transition = '0.4s';
		}
	})
}

let dac = document.querySelectorAll('.dac');
dcount = 1;
console.log(dac)
dac.forEach(bookmark => {
	bookmark.addEventListener('click', function favToggle() {
		dcount++;
		if (dcount % 2 == 0) {
			bookmark.style.fontVariationSettings = "'FILL' 1";
			bookmark.style.color = 'black';
		}
		if (dcount % 2 != 0) {
			bookmark.style.fontVariationSettings = "'FILL' 0";
			bookmark.style.color = 'black';
		}
	})
});

let sgfollow = document.querySelectorAll('.sgfollow');
sgcount = 1;
sgfollow.forEach(followsgbtn => {
	followsgbtn.addEventListener('click', function followToggle() {
		sgcount++;
		if (sgcount % 2 == 0) {
			followsgbtn.style.color = 'black';
			followsgbtn.style.background = 'rgba(0, 0, 0, 0.143)';
			followsgbtn.innerText = 'Following';
		}
		if (sgcount % 2 != 0) {
			followsgbtn.style.color = 'white';
			followsgbtn.style.background = 'rgb(49, 49, 255)';
			followsgbtn.innerText = 'Follow';
		}
	})
});