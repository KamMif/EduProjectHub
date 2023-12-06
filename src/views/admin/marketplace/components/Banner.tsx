// Chakra imports
import { Button, Flex, Text } from '@chakra-ui/react';

// Assets
import banner from 'assets/img/nfts/NftBanner1.png';
import { NavLink } from 'react-router-dom';

export default function Banner() {
	return (
		<Flex
			direction='column'
			bgImage={banner}
			bgSize='cover'
			py={{ base: '30px', md: '56px' }}
			px={{ base: '30px', md: '64px' }}
			borderRadius='30px'>
			<Text
				fontSize={{ base: '24px', md: '34px' }}
				color='white'
				mb='14px'
				maxW={{
					base: '100%',
					md: '64%',
					lg: '46%',
					xl: '70%',
					'2xl': '50%',
					'3xl': '42%'
				}}
				fontWeight='700'
				lineHeight={{ base: '32px', md: '42px' }}>
				Здесь ты можешь найти лучшие проекты
			</Text>
				<Text
					fontSize='md'
					color='#E3DAFF'
					maxW={{
						base: '100%',
						md: '64%',
						lg: '40%',
						xl: '56%',
						'2xl': '46%',
						'3xl': '34%'
					}}
					fontWeight='500'
					mb='40px'
					lineHeight='28px'>
					Заполни свой профиль и ты сможешь подать заявку в лучший проект
				</Text>
			<Flex align='center'>
				<NavLink to="/admin/profile">
					<Button
						bg='white'
						color='black'
						_hover={{ bg: 'whiteAlpha.900' }}
						_active={{ bg: 'white' }}
						_focus={{ bg: 'white' }}
						fontWeight='500'
						fontSize='14px'
						py='20px'
						px='27'
						me='38px'>
						Заполнить профиль
					</Button>
				</NavLink>
			</Flex>
		</Flex>
	);
}
