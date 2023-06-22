import { Language, GitHub } from '@mui/icons-material';
import project1 from '../Assets/img/TechLearn.webp';
import project2 from '../Assets/img/Ecommerce1.webp';
import project4 from '../Assets/img/PeluqueriaLandingNext.webp';
import project3 from '../Assets/img/MyService.webp';

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
				title: 'Github',
				icon: GitHub,
				href: 'https://github.com/Ronin-21/TechnoLearn-C9-27-T-JavaReact',
			},
			{
				title: 'Ver Demo',
				icon: Language,
				href: 'https://www.youtube.com/watch?v=4RHPMM4r72E',
			},
		],
		direction: 'left',
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
				title: 'Github',
				icon: GitHub,
				href: 'https://github.com/Ronin-21/Ronin-21-Proyecto-Alura---E-commerce',
			},
			{
				title: 'Ver Demo',
				icon: Language,
				href: 'https://ronin-21.github.io/Ronin-21-Proyecto-Alura---E-commerce/',
			},
		],
		direction: 'right',
	},
	{
		title: 'My Service',
		description:
			'Proyecto grupal de No-Country, su principal objetivo es conectar los perfiles de profesionales con clientes que necesiten un servicio. Desarrollado con React en el Frontend y Java en el Backend, posee funcionalidades de Login y Registro, visualización de perfiles profesionales, modales con SweetAlert y animaciones con Framer Motion.',
		imageUrl: project3,
		imageAlt: 'Project 3 Image',
		tags: ['React Js', 'Tailwindcss', 'Redux Toolkit', 'Framer Motion', 'Java'],
		links: [
			{
				title: 'Github',
				icon: GitHub,
				href: 'https://github.com/Ronin-21/My-Service',
			},
			{
				title: 'Ver Demo',
				icon: Language,
				href: 'https://youtu.be/3Ngi0qKQg58',
			},
		],
		direction: 'left',
	},
	{
		title: 'Landing Page Peluqueria',
		description:
			'Landing Page para un salón de peluquería hecho con Next Js y Sass para dar estilos.',
		imageUrl: project4,
		imageAlt: 'Project 4 Image',
		tags: ['React', 'Next Js', 'Sass'],
		links: [
			{
				title: 'Github',
				icon: GitHub,
				href: 'https://github.com/Ronin-21/Landing-Peluqueria',
			},
			{
				title: 'Ver Demo',
				icon: Language,
				href: 'https://landing-peluqueria.vercel.app/',
			},
		],
		direction: 'right',
	},
];
