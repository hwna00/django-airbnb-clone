import { Button, Heading, Link, Text, VStack } from '@chakra-ui/react'

export default function NotFound() {
  return (
    <VStack bg="gray.100" justifyContent={'center'} minH="100vh">
      <Heading>Page Not Found</Heading>
      <Text>It seems that youre lost.</Text>
      <Link href="/">
        <Button variant={'link'} colorScheme={'red'}>
          GO HOME &rarr;
        </Button>
      </Link>
    </VStack>
  )
}
