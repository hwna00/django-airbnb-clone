import {
  Avatar,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Skeleton,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { getRoom, getRoomReviews } from '../api'
import { IReview, IRoomDetail } from '../types'

export default function RoomDetail() {
  const { roomPk } = useParams()
  const { isLoading, data } = useQuery<IRoomDetail>([`rooms`, roomPk], getRoom)
  const { isLoading: isReviewsLoading, data: reviewsData } = useQuery<
    IReview[]
  >([`rooms`, roomPk, `reviews`], getRoomReviews)
  return (
    <Box mt={10} px={{ base: 10, lg: 40 }}>
      <Skeleton height={'45px'} width={'25%'} isLoaded={!isLoading}>
        <Heading>{data?.name}</Heading>
      </Skeleton>
      <Grid
        mt={4}
        rounded={8}
        overflow={'hidden'}
        templateColumns={'repeat(4, 1fr)'}
        templateRows={'1fr 1fr'}
        height={'60vh'}
        gap={2}
      >
        {[0, 1, 2, 3, 4].map((photo, index) => (
          <GridItem
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            overflow={'hidden'}
            key={index}
          >
            <Skeleton isLoaded={!isLoading} h={'100%'} w={'100%'}>
              <Image
                w={'100%'}
                h={'100%'}
                objectFit={'cover'}
                src={data?.photos[index].file}
              />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <HStack mt={10} justifyContent={'space-between'} w={'60%'}>
        <VStack alignItems={'flex-start'}>
          <Skeleton isLoaded={!isLoading} height={'30px'}>
            <Heading fontSize={'2xl'}>House host by {data?.owner.name}</Heading>
          </Skeleton>
          <Skeleton isLoaded={!isLoading} height={'30px'}>
            <HStack justifyContent={'flex-start'} w={'100%'}>
              <Text>
                {data?.toilets} toilet{data?.toilets === 1 ? '' : 's'}
              </Text>
              <Text>•</Text>
              <Text>
                {data?.rooms} room{data?.rooms === 1 ? '' : 's'}
              </Text>
            </HStack>
          </Skeleton>
        </VStack>
        <Avatar
          name={data?.owner.name}
          size={'lg'}
          src={data?.owner.avatar}
        ></Avatar>
      </HStack>
      <Box mt={'10'}>
        <Heading mb={'5'} fontSize={'2xl'}>
          <HStack>
            <FaStar /> <Text>{data?.rating}</Text>
            <Text>•</Text>
            <Text>
              {reviewsData?.length} review{reviewsData?.length === 1 ? '' : 's'}
            </Text>
          </HStack>
        </Heading>
        <Container mt={16} mx={'none'} maxW={'container.lg'}>
          <Grid gap={10} templateColumns={'1fr 1fr'}>
            {reviewsData?.map((review, index) => (
              <VStack alignItems={'flex-start'} key={index}>
                <HStack>
                  <Avatar
                    name={review.user.name}
                    src={review.user.avatar}
                    size={'md'}
                  />
                  <VStack spacing={0} alignItems={'flex-start'}>
                    <Heading fontSize={'md'}>{review.user.name}</Heading>
                    <HStack spacing={1}>
                      <FaStar size={'12px'} />
                      <Text>{review.rating}</Text>
                    </HStack>
                  </VStack>
                </HStack>
                <Text>{review.payload}</Text>
              </VStack>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
