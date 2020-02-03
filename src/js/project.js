class Project {
	constructor({
		title = 'Project',
		tech = 'technologies',
		img,
		desc = 'Description',
		linkToLive = 'https://github.com/Vuzeta',
		linkToCode = 'https://github.com/Vuzeta',
		rootElement,
	}) {
		this.desc = desc;
		this.img = img;
		this.tech = tech;
		this.title = title;
		this.linkToLive = linkToLive;
		this.linkToCode = linkToCode;
		this.rootEl = rootElement;
		this.show = false;
		this.buildProject();
	}

	buildProject = () => {
		const project = document.createElement('div');
		project.classList.add('project');

		const headerWrapper = document.createElement('div');
		headerWrapper.classList.add('project__header-wrapper');

		const projectTitle = document.createElement('h2');
		projectTitle.classList.add('project__title');
		projectTitle.textContent = this.title;

		const tech = document.createElement('p');
		tech.classList.add('project__tech');
		tech.textContent = this.tech;

		const iconWrapper = document.createElement('div');
		iconWrapper.classList.add('project__icon-wrapper');

		const projectBtn = document.createElement('button');
		projectBtn.classList.add('project__btn');
		projectBtn.addEventListener('click', this.showContent);

		const projectIconShow = document.createElement('i');
		projectIconShow.classList.add('fas', 'fa-chevron-down', 'project__icon', 'project__icon-show');

		const projectIMG = document.createElement('div');
		projectIMG.classList.add('project__image');
		projectIMG.style.backgroundImage = `url(assets/${this.img})`;

		const projectContent = document.createElement('div');
		projectContent.classList.add('project__content-wrapper');

		const descriptionWrapper = document.createElement('div');
		descriptionWrapper.classList.add('project__description-wrapper');

		const description = document.createElement('p');
		description.classList.add('project__description');
		description.textContent = this.desc;

		const linkLive = document.createElement('a');
		linkLive.classList.add('project__link-icon');
		linkLive.target = '_blank';
		linkLive.href = this.linkToLive;

		const linkCode = document.createElement('a');
		linkCode.classList.add('project__link-icon');
		linkCode.target = '_blank';
		linkCode.href = this.linkToCode;

		const desktopIcon = document.createElement('i');
		desktopIcon.classList.add('fas', 'fa-desktop', 'project__icon', 'project__icon-desktop');

		const codeIcon = document.createElement('i');
		codeIcon.classList.add('fas', 'fa-code', 'project__icon', 'project__icon-code');

		this.rootEl.appendChild(project);
		project.appendChild(headerWrapper);
		headerWrapper.appendChild(projectTitle);
		headerWrapper.appendChild(tech);
		project.appendChild(iconWrapper);
		iconWrapper.appendChild(projectBtn);
		projectBtn.appendChild(projectIconShow);
		project.appendChild(projectContent);
		projectContent.appendChild(projectIMG);
		projectContent.appendChild(descriptionWrapper);
		descriptionWrapper.appendChild(description);
		descriptionWrapper.appendChild(linkLive);
		linkLive.appendChild(desktopIcon);
		descriptionWrapper.appendChild(linkCode);
		linkCode.appendChild(codeIcon);

		this.initProjectHeight(project, headerWrapper);
	};

	showContent = e => {
		const btn = e.target;

		const titleWrapper = this.CalcOuterHightEl(
			btn.parentNode.parentNode.querySelector('.project__header-wrapper'),
		);
		const imgHeight = this.CalcOuterHightEl(
			btn.parentNode.parentNode.querySelector('.project__image'),
		);
		const descHeight = this.CalcOuterHightEl(
			btn.parentNode.parentNode.querySelector('.project__description-wrapper'),
		);
		const contentWrapper = this.CalcOuterHightEl(
			btn.parentNode.parentNode.querySelector('.project__content-wrapper'),
		);

		if (this.show === false) {
			this.show = !this.show;
			btn.classList.add('project__btn--active');
			if (window.innerWidth >= 767) {
				btn.parentNode.parentNode.style.height = `${contentWrapper + titleWrapper}px`;
			} else {
				btn.parentNode.parentNode.style.height = `${imgHeight + descHeight + titleWrapper}px`;
			}
		} else {
			this.show = !this.show;
			btn.classList.remove('project__btn--active');
			btn.parentNode.parentNode.style.height = `${titleWrapper}px`;
		}
	};

	CalcOuterHightEl = element => {
		let height = element.offsetHeight;
		const style = getComputedStyle(element);

		height += parseInt(style.marginTop) + parseInt(style.marginBottom);
		return height;
	};

	initProjectHeight = (project, header) => {
		const headerHeight = this.CalcOuterHightEl(header);
		project.style.height = `${headerHeight}px`;
	};
}

export default Project;
