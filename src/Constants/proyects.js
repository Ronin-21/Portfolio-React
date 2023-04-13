import { Language, GitHub } from '@mui/icons-material';
import project1 from '../assets/TechLearn.png';
import project2 from '../assets/Ecommerce1.webp';
import project3 from '../assets/Encriptador1.webp';
import project4 from '../assets/Juego-ahorcado1.webp';

export const PROYECTS_DATA = [
	{
		title: 'TechLearn Website',
		description:
			'Proyecto grupal de una plataforma e-learning para No-Country. Desarrollado con React en el Frontend y Java en el Backend. Posee funcionalidades de Login y Registro, como así también una pasarela de pago con metodología de suscripción, y un Dashboard de usuario para visualizar los cursos.',
		imageUrl: project1,
		imageAlt: 'Project 1 Image',
		tags: ['React js', 'Tailwindcss', 'Redux Toolkit', 'RTK Query', 'Java'],
		links: [
			{
				icon: GitHub,
				href: 'https://github.com/Ronin-21/TechnoLearn-C9-27-T-JavaReact',
			},
			{
				icon: Language,
				href:
					'https://techno-learn-c9-27-t-java-react-mvci-n09o77qyh-technolearn.vercel.app/',
			},
		],
	},
	{
		title: 'Alura E-commerce',
		description:
			'Proyecto de un sitio tipo e-commerce diseñado con el framework	Bootstrap y con Sass para modificar los estilos de bootstrap. También tiene un sistema CRUD utilizando el local storage para mantener los cambios sin utilizar una base de datos.',
		imageUrl: project2,
		imageAlt: 'Project 2 Image',
		tags: ['HTML 5', 'CSS 3', 'JavaScript', 'Bootstrap', 'Sass'],
		links: [
			{
				icon: GitHub,
				href: 'https://github.com/Ronin-21/Ronin-21-Proyecto-Alura---E-commerce',
			},
			{
				icon: Language,
				href: 'https://ronin-21.github.io/Ronin-21-Proyecto-Alura---E-commerce/',
			},
		],
	},
	{
		title: 'Encriptador De Texto',
		description:
			'Proyecto de un encriptador de texto, posee la funcion de encriptado y desencriptado siguiendo un parámetro ya fijado. También tiene la funcionalidad de copiar el texto resultante al portapapeles.',
		imageUrl: project3,
		imageAlt: 'Project 3 Image',
		tags: ['HTML 5', 'CSS 3', 'JavaScript'],
		links: [
			{
				icon: GitHub,
				href: 'https://github.com/Ronin-21/Proyecto-Alura---Encriptador',
			},
			{
				icon: Language,
				href: 'https://ronin-21.github.io/Proyecto-Alura---Encriptador/',
			},
		],
	},
	{
		title: 'Juego del Ahorcado',
		description:
			'En el proyecto se utilizó canvas para la horca, la validacion y captura de las teclas al presionarse se hizo con Javascript.Las letras acertadas o erróneas se van mostrando en pantalla y	no pueden repetirse.También posee la función de agregar palabras, comenzar nuevo juego y rendirse.',
		imageUrl: project4,
		imageAlt: 'Project 4 Image',
		tags: ['HTML 5', 'CSS 3', 'JavaScript'],
		links: [
			{
				icon: GitHub,
				href: 'https://github.com/Ronin-21/Proyecto-Alura---Juego-Ahorcado',
			},
			{
				icon: Language,
				href: 'https://ronin-21.github.io/Proyecto-Alura---Juego-Ahorcado/',
			},
		],
	},
];
