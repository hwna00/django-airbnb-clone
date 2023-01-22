import {
  Box,
  Grid,
  Heading,
  Image,
  VStack,
  Text,
  HStack,
  Button,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import Room from '../components/Room'

export default function Home() {
  return (
    <Grid
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: '1fr',
        md: '1fr 1fr',
        lg: 'repeat(3, 1fr)',
        xl: 'repeat(4, 1fr)',
        '2xl': 'repeat(5, 1fr)',
      }}
    >
      <Box>
        <Skeleton rounded={'2xl'} mb={8} height={200} />
        <SkeletonText w={'70%'} noOfLines={2} mb={7} />
        <SkeletonText w={'40%'} noOfLines={1} />
      </Box>
      <Room></Room>
      <Box>
        <Skeleton rounded={'2xl'} mb={3} height={200} />
        <SkeletonText w={'70%'} noOfLines={3} />
      </Box>
      <Box>
        <Skeleton rounded={'2xl'} mb={3} height={200} />
        <SkeletonText w={'70%'} noOfLines={3} />
      </Box>
      <Box>
        <Skeleton rounded={'2xl'} mb={3} height={200} />
        <SkeletonText w={'70%'} noOfLines={3} />
      </Box>
      <Box>
        <Skeleton rounded={'2xl'} mb={3} height={200} />
        <SkeletonText w={'70%'} noOfLines={3} />
      </Box>
      <Box>
        <Skeleton rounded={'2xl'} mb={3} height={200} />
        <SkeletonText w={'70%'} noOfLines={3} />
      </Box>
    </Grid>
  )
}
