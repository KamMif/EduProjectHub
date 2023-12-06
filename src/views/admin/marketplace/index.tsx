/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _|
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|

=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react';

// Chakra imports
import { Box, Button, Flex, Grid, Text, useColorModeValue, SimpleGrid } from '@chakra-ui/react';

// Custom components
import Banner from 'views/admin/marketplace/components/Banner';
import HistoryItem from 'views/admin/marketplace/components/HistoryItem';
import NFT from 'components/card/NFT';
import Card from 'components/card/Card';

// Assets
import Nft1 from 'assets/img/nfts/Nft1.png';
import Nft2 from 'assets/img/nfts/Nft2.png';
import Nft3 from 'assets/img/nfts/Nft3.png';
import Nft4 from 'assets/img/nfts/Nft4.png';
import Nft5 from 'assets/img/nfts/Nft5.png';
import Nft6 from 'assets/img/nfts/Nft6.png';
import Avatar1 from 'assets/img/avatars/avatar1.png';
import Avatar2 from 'assets/img/avatars/avatar2.png';
import Avatar3 from 'assets/img/avatars/avatar3.png';
import Avatar4 from 'assets/img/avatars/avatar4.png';

const TOP_PROJECTS = [
	{name: 'Проект', bidders: [ Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1 ], image: Nft1, author: 'Студент' },
	{name: 'Проект', bidders: [ Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1 ], image: Nft2, author: 'Студент' },
	{name: 'Проект', bidders: [ Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1 ], image: Nft3, author: 'Студент' },
	{name: 'Проект', bidders: [ Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1 ], image: Nft4, author: 'Студент' },
	{name: 'Проект', bidders: [ Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1 ], image: Nft5, author: 'Студент' },
	{name: 'Проект', bidders: [ Avatar1, Avatar2, Avatar3, Avatar4, Avatar1, Avatar1, Avatar1, Avatar1 ], image: Nft6, author: 'Студент' }
]

export function TopProjectsPage() {
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorBrand = useColorModeValue('brand.500', 'white');
	return (
		<Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
			{/* Main Fields */}
			<Grid
				mb='20px'
				gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
				gap={{ base: '20px', xl: '20px' }}
				display={{ base: 'block', xl: 'grid' }}>
				<Flex flexDirection='column' gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
					<Banner />
					<Flex direction='column'>
						<Flex
							mt='45px'
							mb='20px'
							justifyContent='space-between'
							direction={{ base: 'column', md: 'row' }}
							align={{ base: 'start', md: 'center' }}>
							<Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
								Лучшие проекты
							</Text>
						</Flex>
						<SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
							{TOP_PROJECTS.map(({name, author, image, bidders}, index) => <NFT
								key={index}
								name={`${name}-${index+1}`}
								author={`${author}-${index+1}`}
								bidders={bidders}
								image={image}
								download='#'
							/>)}
						</SimpleGrid>
					</Flex>
				</Flex>
				<Flex flexDirection='column' gridArea={{ xl: '1 / 3 / 2 / 4', '2xl': '1 / 2 / 2 / 3' }}>
					<Card p='0px'>
						<Flex
							align={{ sm: 'flex-start', lg: 'center' }}
							justify='space-between'
							w='100%'
							px='22px'
							py='18px'>
							<Text color={textColor} fontSize='xl' fontWeight='600'>
								Последние проекты
							</Text>
							<Button variant='action'>Все</Button>
						</Flex>

						<HistoryItem
							name='Проект 90'
							author='Студент'
							date='30сек назад'
							image={Nft5}
						/>
						<HistoryItem
							name='Проект 90'
							author='Студент'
							date='58сек назад'
							image={Nft1}
						/>
						<HistoryItem
							name='Проект 90'
							author='Студент'
							date='1мин назад'
							image={Nft2}
						/>
						<HistoryItem
							name='Проект 90'
							author='Студент'
							date='1мин назад'
							image={Nft4}
						/>
						<HistoryItem
							name='Проект 90'
							author='Студент'
							date='2мин назад'
							image={Nft3}
						/>
						<HistoryItem
							name='Проект 90'
							author='Студент'
							date='3мин назад'
							image={Nft6}
						/>
						<HistoryItem
							name='Проект 90'
							author='Студент'
							date='3мин назад'
							image={Nft6}
						/>
					</Card>
				</Flex>
			</Grid>
		</Box>
	);
}
