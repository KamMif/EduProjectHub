// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import Information from 'views/admin/profile/components/Information';

// Assets
export default function GeneralInformation(props: { [x: string]: any }) {
	const { ...rest } = props;
	// Chakra Color Mode
	const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = 'gray.400';
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset');
	return (
		<Card mb={{ base: '0px', '2xl': '20px' }} {...rest}>
			<Text color={textColorPrimary} fontWeight='bold' fontSize='2xl' mt='10px' mb='4px'>
				Основная информация
			</Text>
			<Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
				Содержит информацию о студенте
			</Text>
			<SimpleGrid columns={2} gap='20px'>
				<Information boxShadow={cardShadow} title='Образование' value='Среднее' />
				<Information boxShadow={cardShadow} title='Языки' value='Английский, Русский' />
				<Information boxShadow={cardShadow} title='Город' value='Уфа' />
				<Information boxShadow={cardShadow} title='Специализация' value='Информатика' />
				<Information boxShadow={cardShadow} title='Место работы' value='Самокат' />
				<Information boxShadow={cardShadow} title='День рождения' value='08 Апреля 1990' />
			</SimpleGrid>
		</Card>
	);
}
