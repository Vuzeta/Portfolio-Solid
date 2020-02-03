class Technology {
	constructor({ title, imgTitle, imgExt, description, rootEl }) {
		this.title = title;
		this.imgTitle = imgTitle;
		this.imgExt = imgExt;
		this.description = description;
		this.rootEl = rootEl;
		this.buildTechnology();
	}

	buildTechnology = () => {
		const tech = document.createElement('div');
		tech.classList.add('technology');

		const logo = document.createElement('div');
		logo.classList.add('technology__logo');
		logo.style.backgroundImage = `url(assets/${this.imgTitle}_icon.${this.imgExt})`;

		const description = document.createElement('p');
		description.classList.add('technology__description');
		description.textContent = this.description;

		const techTitle = document.createElement('span');
		techTitle.classList.add('technology__title');
		techTitle.textContent = `${this.title} - `;

		this.rootEl.appendChild(tech);
		tech.appendChild(logo);
		tech.appendChild(description);
		description.insertBefore(techTitle, description.firstChild);
	};
}

export default Technology;
