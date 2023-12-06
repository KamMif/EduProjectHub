type RowObj = {
	name: string;
	status: string;
	date: string;
	progress: number;
};

const tableDataComplex: RowObj[] = [
	{
		name: 'Проект 1',
		progress: 75.5,
		status: 'Создан',
		date: '12 Jan 2021'
	},
	{
		name: 'Проект 2',
		progress: 25.5,
		status: 'На паузе',
		date: '21 Feb 2021'
	},
	{
		name: 'Проект 3',
		progress: 90,
		status: 'В работе',
		date: '13 Mar 2021'
	},
	{
		name: 'Проект 4',
		progress: 50.5,
		status: 'На проверке',
		date: '24 Oct 2022'
	},
	{
		name: 'Проект 5',
		progress: 100,
		status: 'Завершен',
		date: '24 Oct 2022'
	}
];
export default tableDataComplex;
