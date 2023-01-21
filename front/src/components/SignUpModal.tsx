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
import { FaEnvelope, FaLock, FaUserNinja, FaUserSecret } from 'react-icons/fa'
import SocialLogin from './SocialLogin'

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  return (
    <Modal motionPreset="slideInRight" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <InputGroup>
              <InputLeftElement>
                <Box color={'gray.500'}>
                  <FaUserSecret />
                </Box>
              </InputLeftElement>
              <Input placeholder="Name" variant={'filled'} />
            </InputGroup>

            <InputGroup>
              <InputLeftElement>
                <Box color={'gray.500'}>
                  <FaEnvelope />
                </Box>
              </InputLeftElement>
              <Input placeholder="Email" variant={'filled'} />
            </InputGroup>

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
