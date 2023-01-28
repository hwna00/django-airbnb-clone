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

interface RoomsProps {
  imageURL: string
  name: string
  rating: number
  city: string
  country: string
  price: number
}

export default function Room({
  imageURL,
  name,
  rating,
  city,
  country,
  price,
}: RoomsProps) {
  const gray = useColorModeValue('gray.600', 'gray.300')
  return (
    <VStack alignItems={'flex-start'}>
      <Box position={'relative'} overflow={'hidden'} mb={4} rounded={'2xl'}>
        <Image minH={200} src={imageURL} />
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
            {name}
          </Text>
          <HStack
            spacing={1}
            _hover={{
              color: 'yellow.400',
            }}
          >
            <FaStar fontSize={'14px'} />
            <Text>{rating}</Text>
          </HStack>
        </Grid>
        <Text fontSize={'sm'} color={gray}>
          {city}, {country}
        </Text>
      </Box>
      <Text fontSize={'sm'} color={gray}>
        <Text as={'b'}>${price}</Text> / 박
      </Text>
    </VStack>
  )
}
