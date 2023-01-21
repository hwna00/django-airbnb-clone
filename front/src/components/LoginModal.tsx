import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react'
import { FaLock, FaUserNinja } from 'react-icons/fa'
import SocialLogin from './SocialLogin'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
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
              <Input placeholder="Password" variant={'filled'} />
            </InputGroup>
          </VStack>
          <Button mt={4} w={'100%'} colorScheme="red">
            Log in
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
