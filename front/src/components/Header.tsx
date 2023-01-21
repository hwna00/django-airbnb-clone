import {
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import { FaAirbnb, FaMoon, FaSun } from 'react-icons/fa'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'

export default function Header() {
  const {
    isOpen: isLoginOpen,
    onClose: onLoginClose,
    onOpen: onLoginOpen,
  } = useDisclosure()
  const {
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
    onOpen: onSignUpOpen,
  } = useDisclosure()

  const { colorMode, toggleColorMode } = useColorMode()
  const logoColor = useColorModeValue('red.500', 'red.200')
  const Icon = useColorModeValue(FaMoon, FaSun)
  return (
    <HStack py="5" px="10" borderBottomWidth={1} justifyContent="space-between">
      <Box color={logoColor}>
        <FaAirbnb size={'48'} />
      </Box>
      <HStack spacing={'2'}>
        <IconButton
          onClick={toggleColorMode}
          variant={'ghost'}
          icon={<Icon />}
          aria-label="Dark Mode Button"
        />
        <Button onClick={onLoginOpen}>Log in</Button>
        <LightMode>
          <Button onClick={onSignUpOpen} colorScheme={'red'}>
            Sign up
          </Button>
        </LightMode>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  )
}
