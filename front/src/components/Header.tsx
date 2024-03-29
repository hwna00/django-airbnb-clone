import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  LightMode,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query'
import { FaAirbnb, FaMoon, FaSun } from 'react-icons/fa'
import { logOut } from '../api'
import useUser from '../lib/useUser'
import LoginModal from './LoginModal'
import SignUpModal from './SignUpModal'

export default function Header() {
  const { userLoading, isLoggedIn, user } = useUser()
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

  const { toggleColorMode } = useColorMode()
  const logoColor = useColorModeValue('red.500', 'red.200')
  const Icon = useColorModeValue(FaMoon, FaSun)
  const queryClient = useQueryClient()
  const toast = useToast()
  const onLogOut = async () => {
    const toastId = toast({
      title: 'Log out',
      description: 'Sad to see you go...',
      status: 'loading',
      duration: 2000,
    })

    await logOut()
    queryClient.refetchQueries(['me'])

    toast.update(toastId, {
      status: 'success',
      title: 'Done!',
      description: 'See you later',
    })
  }
  return (
    <Stack
      py="5"
      px="40"
      borderBottomWidth={1}
      justifyContent={'space-between'}
      alignItems={'center'}
      direction={{
        sm: 'column',
        md: 'row',
      }}
      spacing={{
        sm: 4,
        md: 0,
      }}
    >
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
        {!userLoading ? (
          !isLoggedIn ? (
            <>
              <Button onClick={onLoginOpen}>Log in</Button>
              <LightMode>
                <Button onClick={onSignUpOpen} colorScheme={'red'}>
                  Sign up
                </Button>
              </LightMode>
            </>
          ) : (
            <Menu>
              <MenuButton>
                <Avatar name={user?.name} src={user?.avatar} size={'md'} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onLogOut}>Log Out</MenuItem>
              </MenuList>
            </Menu>
          )
        ) : null}
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </Stack>
  )
}
