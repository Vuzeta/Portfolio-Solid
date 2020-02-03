import Technology from './technology';

const rootElement = document.querySelector('.technologies__wrapper');

const initTech = () => {
	const html = new Technology({
		title: 'HTML5',
		imgTitle: 'html',
		imgExt: 'svg',
		description:
			'Bardzo dobrze radzę sobie w tworzeniu prawidłowej struktury strony jak i wykorzystywaniu w niej tagów semantycznych.',
		rootEl: rootElement,
	});

	const css = new Technology({
		title: 'CSS3',
		imgTitle: 'css',
		imgExt: 'svg',
		description:
			'Kaskadowe arkusze w stylu poznałem w stopniu, który pozwala na swobodne zbudowanie średnio-zaawansowanej strony internetowej. Umiem projektować szablony dzięki Flexbox oraz Grid. Często w projektach używam metodologii BEM.',
		rootEl: rootElement,
	});

	const js = new Technology({
		title: 'JavaScript',
		imgTitle: 'javascript',
		imgExt: 'svg',
		description:
			'Główny język, którego się ucze. Potrafię manipulować elementami DOM, znam specyfikację ES6, potrafię programować funkcyjnie jak i obiektowo.',
		rootEl: rootElement,
	});

	const sass = new Technology({
		title: 'Sass',
		imgTitle: 'sass',
		imgExt: 'svg',
		description:
			"W wiekszości moich projektów używam preprocesora Sass. Ułatwia on mi pracę dzięki łatwemu odwoływaniu się do zmiennych, tworzeniu mixin'ów, rozszerzeń, interpolacji oraz instrukcji warunkowych.",
		rootEl: rootElement,
	});

	const jQuery = new Technology({
		title: 'jQuery',
		imgTitle: 'jquery',
		imgExt: 'svg',
		description:
			'Posiadam podstawy w pracy z jQuery, znam jego właściwości i metody, które pozwalają w łatwy sposób manipulować elementami DOM.',
		rootEl: rootElement,
	});

	const bootstrap = new Technology({
		title: 'Bootstrap',
		imgTitle: 'bootstrap',
		imgExt: 'svg',
		description: `Posiadam wiedzę na temat działania jak i samej implementacji Boostrap'a w projekcie. Technologii tej użyłem w swoim pierwszym portfolio. Boostrap ze względu na swoje działanie można porównać z materialize, którego użyłem w projekcie "Manager".`,
		rootEl: rootElement,
	});

	const git = new Technology({
		title: 'GIT',
		imgTitle: 'git',
		imgExt: 'svg',
		description: `Z systemu kontroli wersji korzystam w codziennej pracy, projekty które tworze umieszczam na Githubie`,
		rootEl: rootElement,
	});

	const gulp = new Technology({
		title: 'Gulp',
		imgTitle: 'gulp',
		imgExt: 'svg',
		description: `Task runner, którego używałem w projektach : "Portfolio", "Interactive Agency". W zależności od projektu korzystam z tej technologii lub Webpack'a`,
		rootEl: rootElement,
	});

	const webpack = new Technology({
		title: 'Webpack',
		imgTitle: 'webpack',
		imgExt: 'svg',
		description: `Module Bundler bez którego nie wyobrażam sobie pracy. Stosuje go w większości projektów, pozwala mi on przygotować odpowiednio aplikacje do deploymentu.`,
		rootEl: rootElement,
	});

	const react = new Technology({
		title: 'React',
		imgTitle: 'react',
		imgExt: 'svg',
		description: `Technologia w której chciałbym się rozwijać. Na jej podstawie stworzyłem projekty "Manager", "Movie_Library", "TODO List".`,
		rootEl: rootElement,
	});

	const avocode = new Technology({
		title: 'Avocode',
		imgTitle: 'avocode',
		imgExt: 'svg',
		description: `Technologia ta pozwala mi na analize projektu graficznego, prace z plikami PSD, ułatwia ona również dostanie się do parametrów zaprojektowanego elementu i użycie ich w projekcie.`,
		rootEl: rootElement,
	});

	const Jira = new Technology({
		title: 'Jira & Confluence',
		imgTitle: 'jira',
		imgExt: 'svg',
		description: `Technologie, których używam codziennie w pracy w dziale Application Support. Pomaga mi jak i wszystkim w firmie na prostrze zarządzanie projektami jak i przydzielanymi zadaniami. Confluence zaś jest świetną "biblioteką wiedzy" w firmie.`,
		rootEl: rootElement,
	});
};

export default initTech;
