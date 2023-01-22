import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { FaRegHeart, FaStar } from 'react-icons/fa'

export default function Room() {
  const gray = useColorModeValue('gray.600', 'gray.300')
  return (
    <VStack alignItems={'flex-start'}>
      <Box position={'relative'} overflow={'hidden'} mb={4} rounded={'2xl'}>
        <Image
          minH={200}
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-553863823287705078/original/f2369864-c9eb-4222-a73a-018e55254aed.jpeg?im_w=720"
        />
        <Button
          variant={'unstyled'}
          position={'absolute'}
          top={0}
          right={0}
          color={'white'}
        >
          <FaRegHeart size={'20px'} />
        </Button>
      </Box>
      <Box>
        <Grid templateColumns={'5fr 1fr'} gap={2}>
          <Text as={'b'} fontSize={'md'} noOfLines={1}>
            Geoje-myeon, Geoje-si, 경상남도, 한국
          </Text>
          <HStack
            spacing={1}
            _hover={{
              color: 'yellow.400',
            }}
          >
            <FaStar fontSize={'14px'} />
            <Text>5.0</Text>
          </HStack>
        </Grid>
        <Text fontSize={'sm'} color={gray}>
          Geoje-si, S.Korea
        </Text>
      </Box>
      <Text fontSize={'sm'} color={gray}>
        <Text as={'b'}>￦646,600 / 박</Text>
      </Text>
    </VStack>
  )
}
