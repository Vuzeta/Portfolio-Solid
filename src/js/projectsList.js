import Project from './project';

const initProjects = () => {
	const movie_library = new Project({
		title: 'Movie Library',
		tech: 'React, React-Router, Sass, Axios, NPM',
		img: 'movie_library_image.jpg',
		desc:
			'Aplikacja Movie_Library została stworzona w ramach ćwiczeń z React-Router-DOM jak i z samym Reactem. Do pobierania danych z TMDb posłużyłem się biblioteką "Axios". Dane są kategoryzowane, wyświetlana jest lista filmów. Możemy otworzyć daną kartę filmu i otrzymać informacje na temat filmu, reżyserii, aktorów,rankingu, możemy oglądnąć trailer jak i dodać sam film do listy ulubionych poprzez kliknięcie serduszka.',
		linkToLive: 'https://vuzeta.github.io/Movie_Library',
		linkToCode: 'https://github.com/Vuzeta/Movie_Library',
		rootElement: document.querySelector('.projects__wrapper'),
	});

	const manager = new Project({
		title: 'Manager',
		tech: 'React, React-Router-DOM, NPM, GIT, Sass, materialize',
		img: 'manager_image.jpg',
		desc:
			'Aplikacja "Manager" służy do zarządzania pracownikami. W aplikacji możemy w prosty sposób dodawać i modyfikować pracowników, uzyskiwać dostęp do danych, dodawać dzień, w którym pracownik był w pracy, monitorować zarobki oraz otrzymywać wykres dni w formie diagramu.',
		linkToLive: 'https://vuzeta.github.io/Manager',
		linkToCode: 'https://github.com/Vuzeta/Manager',
		rootElement: document.querySelector('.projects__wrapper'),
	});

	const drink = new Project({
		title: 'Drink',
		tech: 'HTML5, CSS3, JavaScript, Fetch API, Webpack',
		img: 'drink_image.jpg',
		desc:
			'Aplikacja "Drink" została stworzona na podstawie przeżyć z dawnej pracy. Często goście hotelowi prosili o stworzenie napoju opartego na wybranym przez nich składniku. Nie znając przepisów, aby zadowolić gościa zmuszony byłem przeszukiwać Internet w poszukiwaniu konkretnego napoju. Aplikacja ta ma na celu ułatwienie wyszukiwania napojów według nazwy lub składnika. Aplikacja wyszukuje napoje za pomocą darmowego API zwracając plik json, z którego następnie jest wyświetlana lista pasujących przedmiotów.',
		linkToLive: 'https://vuzeta.github.io/Drink-API',
		linkToCode: 'https://github.com/Vuzeta/Drink-API',
		rootElement: document.querySelector('.projects__wrapper'),
	});

	const dent = new Project({
		title: 'Dent Website',
		tech: 'HTML5, CSS3, Javascript, Webpack, NPM, BEM',
		img: 'dent_image.jpg',
		desc:
			"Projekt Dent Website został zaprojektowany w programie UXpin a następnie zakodowany na stronę WWW. Dent Website był projektowany podejściem Mobile First. Celem projektu było zbudować stronę w pełni responsywną na różne urządzenia. W projekcie nauczyłem się umieszczać video w strukturze html jak i operować jego właściwościami oraz utwaliłem umiejętności konfiguracji Webpack'a",
		linkToLive: 'https://vuzeta.github.io/Dent_Website',
		linkToCode: 'https://github.com/Vuzeta/Dent_Website',
		rootElement: document.querySelector('.projects__wrapper'),
	});

	const digital = new Project({
		title: 'Digital Agency',
		tech: 'HTML5, CSS3, Javascript, Webpack, NPM',
		img: 'digital_image.jpg',
		desc:
			'Tworząć projekt Digital Agency inspirowałem się projektem PSD z PSD Freebies.com. Projekt miał na celu powtórzenie umiejętności odnośnie Flexboxa, Grida, Responsywności, metodologii BEM oraz Webpacka.',
		linkToLive: 'https://vuzeta.github.io/Digital_Agency',
		linkToCode: 'https://github.com/Vuzeta/Digital_Agency/',
		rootElement: document.querySelector('.projects__wrapper'),
	});

	const coeluso = new Project({
		title: 'Coeluso',
		tech: 'HTML, CSS, Scss, Javascript, Webpack',
		img: 'coeluso_image.jpg',
		desc:
			'Projekt Ceoluso-Website został zaczerpnięty z darmowego szablonu na symu.co. Pocięcie szablonu, odpowiednie przygotowanie znaczników, oraz rozmieszczenie elementów na stronie. Stworzenie tej strony internetowej miało na celu poznanie pakietu Webpack od podstaw. W projekcie dowiedziałem się również czym jest Babel.js i jak go wykorzystać w projektach.',
		linkToLive: 'https://vuzeta.github.io/Coeluso-Website',
		linkToCode: 'https://github.com/Vuzeta/Coeluso-Website',
		rootElement: document.querySelector('.projects__wrapper'),
	});

	const interactive = new Project({
		title: 'Interactive Agency',
		tech: 'HTML5, CSS3, Sass, JavaScript, Gulp',
		img: 'interactive_agency_image.jpg',
		desc:
			'Projekt Interactive Agency został zaczerpnięty z darmowego szablonu na symu.co. Projekt Interactive Agency miał na celu wykorzystanie motodologii BEM w projekcie oraz utrwalenie umiejętności projektowania z pliku PSD do HTML.',
		linkToLive: 'https://vuzeta.github.io/Interactiveagency_psd_to_html',
		linkToCode: 'https://github.com/Vuzeta/Interactiveagency_psd_to_html',
		rootElement: document.querySelector('.projects__wrapper'),
	});

	const todo = new Project({
		title: 'React TODO List',
		tech: 'React, CSS3, NPM, GIT',
		img: 'todo_image.jpg',
		desc:
			'Głównym celem stworzenia tej aplikacji było poznanie środowiska create-react-app. Najpierw stworzenie samej struktury, następnie sposób wyświetlania danych, tworzenie metod usuwania i modyfikowania zadań, ustalanie priorytetów, obsługa pól w panelu, dodawanie zadań oraz sortowanie zadań. Projekt nauczył mnie innego sposobu budowania projektów SPA.',
		linkToLive: 'https://vuzeta.github.io/React-todo-list',
		linkToCode: 'https://github.com/Vuzeta/React-todo-list',
		rootElement: document.querySelector('.projects__wrapper'),
	});

	const invite = new Project({
		title: 'Invite',
		tech: 'HTML5, CSS3, JavaScript',
		img: 'invite_image.jpg',
		desc:
			'Aplikacja "Invite Party" została stworzona na podstawie kursu na platformie TeamTreeHouse. Aplikacja pomaga skomponować listę uczestników na róznego rodzaju wydarzenia. Jest to prosta aplikacja w której dodajemy osobę, zaznaczamy czy weźmie udział w wydarzeniu. Aplikacja daje nam także możliwość modyfikacji uczestnika.',
		linkToLive: 'https://vuzeta.github.io/App-Invite-Party',
		linkToCode: 'https://github.com/Vuzeta/App-Invite-Party',
		rootElement: document.querySelector('.projects__wrapper'),
	});

	const weather = new Project({
		title: 'Weather forecast',
		tech: 'HTML5, CSS3, JavaScript, Ajax',
		img: 'weather_image.jpg',
		desc:
			'Aplikacja powstała dzięki darmowemu API openweathermap.org , które rozpowszechnia dane pogodowe na całym świecie. Aplikacja działa na zasadzie wysyłanych requestów metodą AJAX, które w odpowiedzi zwraca plik JSON z, które wyciągane i wyświetlane zostają dane pogodowe w Celcjuszach na 5 kolejnych dni.',
		linkToLive: 'https://vuzeta.github.io/Weather_API',
		linkToCode: 'https://github.com/Vuzeta/Weather_API',
		rootElement: document.querySelector('.projects__wrapper'),
	});

	const witcher = new Project({
		title: 'Witcher Clock',
		tech: 'HTML5, CSS3, JavaScript',
		img: 'witcher_image.jpg',
		desc:
			'Projekt "Witcher Clock" urodził się po przejściu gry Wiedźmin 3. Projekt nie miał większego celu, lecz dał możliwość poprawienia umiejętności z obiektem Date oraz samymi transformacjami w CSS.',
		linkToLive: 'https://vuzeta.github.io/Witcher_Clock',
		linkToCode: 'https://github.com/Vuzeta/Witcher_Clock',
		rootElement: document.querySelector('.projects__wrapper'),
	});

	const eudora = new Project({
		title: 'Eudora',
		tech: 'HTML5, CSS3, JavaScript',
		img: 'eudora_image.jpg',
		desc:
			'Projekt Ceoluso-Website został zaczerpnięty z darmowego szablonu na symu.co. Projekt Eudora miał na celu utrwalenie wiadomości przekazanych mi w kursach na udemy.com Cięcie szablonów, rozmieszczenie elementów oraz wprowadzenie ich na strone internetową.',
		linkToLive: 'https://vuzeta.github.io/Eudora_psd_to_html',
		linkToCode: 'https://github.com/Vuzeta/Eudora_psd_to_html',
		rootElement: document.querySelector('.projects__wrapper'),
	});
};

export default initProjects;
