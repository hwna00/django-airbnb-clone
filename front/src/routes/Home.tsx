import {
  Box,
  Grid,
  Heading,
  Image,
  VStack,
  Text,
  HStack,
} from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'

export default function Home() {
  return (
    <Grid
      mt={10}
      px={40}
      columnGap={4}
      rowGap={8}
      templateColumns={'repeat(3, 1fr)'}
    >
      <VStack alignItems={'flex-start'}>
        <Box overflow={'hidden'} mb={4} rounded={'2xl'}>
          <Image src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-553863823287705078/original/f2369864-c9eb-4222-a73a-018e55254aed.jpeg?im_w=720" />
        </Box>
        <Box>
          <Grid templateColumns={'5fr 1fr'} gap={2}>
            <Text as={'b'} fontSize={'md'} noOfLines={1}>
              Geoje-myeon, Geoje-si, 경상남도, 한국
            </Text>
            <HStack spacing={1}>
              <FaStar fontSize={'14px'} />
              <Text>5.0</Text>
            </HStack>
          </Grid>
          <Text fontSize={'sm'} color={'gray.600'}>
            Geoje-si, S.Korea
          </Text>
        </Box>
        <Text fontSize={'sm'} color={'gray.600'}>
          <Text as={'b'}>￦646,600 / 박</Text>
        </Text>
      </VStack>
    </Grid>
  )
}
