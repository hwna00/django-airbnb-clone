import { Box, Grid, GridItem, Heading, Image, Skeleton } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getRoom } from '../api'
import { IRoomDetail } from '../types'

export default function RoomDetail() {
  const { roomPk } = useParams()
  const { isLoading, data } = useQuery<IRoomDetail>([`rooms`, roomPk], getRoom)
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
    </Box>
  )
}
