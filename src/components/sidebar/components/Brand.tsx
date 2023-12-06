// Chakra imports
import { Flex, useColorModeValue, Text } from '@chakra-ui/react';

// Custom components
import { CompanyLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand() {
	//   Chakra color mode
	let logoColor = useColorModeValue('brand.400', 'white');

	return (
		<Flex alignItems='center' flexDirection='column'>
			<Flex alignItems="center" gap={1}>
				<CompanyLogo h='35px' my='32px' fontSize={44} color={logoColor} />
				<Text fontWeight="bold" color={logoColor} fontSize={24}>EduProjectHub</Text>
			</Flex>
			<HSeparator mb='20px' />
		</Flex>
	);
}

export default SidebarBrand;
