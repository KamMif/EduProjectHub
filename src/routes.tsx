import { Icon } from '@chakra-ui/react';
import { MdBarChart, MdPerson, MdOutlineShoppingCart } from 'react-icons/md';

// Admin Imports
import {TopProjectsPage} from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import DataTables from 'views/admin/dataTables';

const routes = [
	// {
	// 	name: 'Главная',
	// 	layout: '/admin',
	// 	path: '/default',
	// 	icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
	// 	component: MainDashboard
	// },
	{
		name: 'Топ проектов',
		layout: '/admin',
		path: '/top-projects',
		icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
		component: TopProjectsPage,
		secondary: true
	},
	{
		name: 'Все проекты',
		layout: '/admin',
		icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
		path: '/data-tables',
		component: DataTables
	},
	{
		name: 'Профиль',
		layout: '/admin',
		path: '/profile',
		icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
		component: Profile
	},
	// {
	// 	name: 'Sign In',
	// 	layout: '/auth',
	// 	path: '/sign-in',
	// 	icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
	// 	component: SignInCentered
	// },
];

export default routes;
