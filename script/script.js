/* Creating Sample Partner Data */

const partners = [];

function samplePartnerData(id, name, partnerId, mobile, status, active) {
	(this.id = id),
		(this.name = name),
		(this.partnerId = partnerId),
		(this.mobile = mobile),
		(this.status = status),
		(this.active = active);
}

function createPartner(id, name, partnerId, mobile, status, active) {
	partners.push(new samplePartnerData(id, name, partnerId, mobile, status, active));
}

createPartner(1, 'Myilvaganan', 'OMA00011', 8925162153, 'IDLE', 'yellow');
createPartner(2, 'Tovino Thomas', 'PAE56398', 8925154153, 'INACTIVE', 'red');
createPartner(3, 'Ilayaraja', 'EDR52896', 8925182153, 'IDLE', 'yellow');
createPartner(4, 'Ar Rahman', 'FGH25418', 8925662153, 'VISIT FGH25418', 'green');
createPartner(5, 'Vijay', 'MNJ36529', 8925125153, 'INACTIVE', 'red');
createPartner(6, 'Karikku', 'VGH52368', 89251369953, 'VISIT VGH52368', 'green');

const sideMenu = document.querySelector('.users-list--data');

const partnerDetails = partners.map((partner) => {
	//New Elements Creation
	const parentEle = document.createElement('div');
	const childEle = document.createElement('div');
	const arrowEle = document.createElement('div');

	//Class Names Insertion
	parentEle.classList.add('card-parent');
	childEle.classList.add('card-child');
	arrowEle.classList.add('card-arrow');

	// Add Arrow Icon
	arrowEle.innerHTML = '<i class="fas fa-arrow-circle-right"></i>';

	//Partners Contents
	const title = document.createElement('h4');
	title.classList.add('title');
	title.innerText = partner.name;

	const content = document.createElement('p');
	content.classList.add('contents');
	content.innerHTML = `<span> ${partner.partnerId}</span> | <span>${partner.mobile} </span>`;

	const status = document.createElement('h5');
	status.classList.add('full-status');

	//Changing status and Icon Colors
	if (partner.active === 'green') {
		status.innerHTML = `<span class="green status-icons"></span> ${partner.status}`;
	} else if (partner.active === 'yellow') {
		status.innerHTML = `<span class="yellow status-icons"></span> ${partner.status}`;
	} else {
		status.innerHTML = `<span class="red status-icons"></span> ${partner.status}`;
	}

	//Append children to parent nodes
	childEle.appendChild(title);
	childEle.appendChild(content);
	childEle.appendChild(status);

	parentEle.appendChild(childEle);
	parentEle.appendChild(arrowEle);

	//Append to Top-most Parent Node
	sideMenu.appendChild(parentEle);

	/* Changing dynamically in the right section display */
	/* Event Handling */

	parentEle.addEventListener('click', () => {
		sideMenu.childNodes.forEach((child) => {
			if (child.nodeType === 1) {
				if (child.classList.contains('active')) {
					child.classList.remove('active');
				}
			}
		});

		// Querying Elements from index.html and adding dynamic values
		const partner_name = document.querySelector('.name');
		const partner_id = document.querySelector('.id');
		const partner_details = document.querySelector('.mobile');
		const partner_status = document.querySelector('.status');

		parentEle.classList.toggle('active');

		//Getting Details of the partner using dot notation
		partner_name.innerText = childEle.children[0].textContent;
		let gettingID = childEle.children[1].textContent;
		gettingID = gettingID.substr(0, gettingID.indexOf(' | '));
		let gettingMobile = childEle.children[1].textContent;

		gettingMobile = gettingMobile.substr(gettingMobile.indexOf(' | ') + 2, gettingMobile.length - 1);

		//Manipulating Details
		partner_id.innerText = gettingID;
		partner_details.innerText = gettingMobile;
		partner_status.innerHTML = childEle.children[2].innerHTML;
	});
});

//Side Menu Opens

const sideMenuOpen = document.querySelector('.navbar-btn');
const sectionToBeDisplayed = document.querySelector('.users-list--data');
sideMenuOpen.addEventListener('click', () => {
	sectionToBeDisplayed.classList.toggle('active');
});

// Handling Side Menu
const hamburger = document.querySelector('.hamburger');
const openSideMenu = document.querySelector('.nav-mobile-menu-items');
hamburger.addEventListener('click', () => {
	openSideMenu.classList.toggle('active');
});
