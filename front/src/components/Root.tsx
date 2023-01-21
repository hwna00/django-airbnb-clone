import {
  Box,
  VStack,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  ModalFooter,
} from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { FaAirbnb, FaLock, FaMoon, FaUserNinja } from 'react-icons/fa'

export default function Root() {
  const { isOpen, onClose, onOpen } = useDisclosure()
  return (
    <Box>
      <HStack
        py="5"
        px="10"
        borderBottomWidth={1}
        justifyContent="space-between"
      >
        <Box color={'red.500'}>
          <FaAirbnb size={'48'} />
        </Box>
        <HStack spacing={'2'}>
          <IconButton
            variant={'ghost'}
            icon={<FaMoon />}
            aria-label="Dark Mode Button"
          />
          <Button onClick={onOpen}>Log in</Button>
          <Button colorScheme={'red'}>Sign up</Button>
        </HStack>
        <Modal motionPreset="slideInRight" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log in</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <InputGroup>
                  <InputLeftElement>
                    <Box color={'gray.500'}>
                      <FaUserNinja />
                    </Box>
                  </InputLeftElement>
                  <Input placeholder="Username" variant={'filled'} />
                </InputGroup>

                <InputGroup>
                  <InputLeftElement>
                    <Box color={'gray.500'}>
                      <FaLock />
                    </Box>
                  </InputLeftElement>
                  <Input placeholder="Username" variant={'filled'} />
                </InputGroup>
              </VStack>
              <Button mt={4} w={'100%'} colorScheme="red">
                Log in
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HStack>
      <Outlet />
    </Box>
  )
}
