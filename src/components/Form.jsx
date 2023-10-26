import { useMemo } from 'react'
import { inject, observer } from 'mobx-react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { fields } from '../common/config'
import LoginForm, {
    getMobxFormValidation,
} from '../validation/MobxSimpleValidation'

import { getReactFormValidation } from '../validation/CustomFormValidation'

const FormValidation = inject('userStore')(
    observer(({ userStore }) => {
        const LoginForm = useMemo(() => getReactFormValidation(fields), [])
        const handleLogIn = (e) => {
            e.preventDefault()

            LoginForm.submit({
                onSuccess: () => {
                    alert('successfully submitted')
                    LoginForm.clear()
                },
                onError: (error) => console.log(error),
            })
            console.log(LoginForm.values())
        }
        return (
            <Stack
                mx='auto'
                width='400px'
                spacing={2}
                sx={{ border: '1px solid blue' }}
                display='flex'
                justifyContent='center'
                alignItems='center'
                p={2}
            >
                <Typography>
                    {userStore.isLoggedIn ? 'Log In' : 'Sign UP'}
                </Typography>
                <form>
                    {!userStore.isLoggedIn && (
                        <>
                            <TextField
                                fullWidth
                                size='small'
                                variant='outlined'
                                sx={{ mb: 2 }}
                                {...LoginForm.$('name').bind()}
                            />

                            <Typography
                                variant='small'
                                color='error'
                                sx={{ mb: 2 }}
                            >
                                {LoginForm.$('name').error}
                            </Typography>
                        </>
                    )}
                    <TextField
                        fullWidth
                        size='small'
                        variant='outlined'
                        mb={2}
                        sx={{ mb: 2 }}
                        {...LoginForm.$('email').bind()}
                    />
                    <Typography variant='small' color='error' sx={{ mb: 2 }}>
                        {LoginForm.$('email').error}
                    </Typography>

                    <TextField
                        fullWidth
                        size='small'
                        variant='outlined'
                        {...LoginForm.$('password').bind()}
                        sx={{ mb: 2 }}
                    />

                    <Typography variant='small' color='error' sx={{ mb: 1 }}>
                        {LoginForm.$('password').error}
                    </Typography>
                    <Typography>
                        {userStore.isLoggedIn
                            ? 'Create Your Account? '
                            : 'Already have An Account? '}
                        <Button
                            variant='text'
                            size='small'
                            color='error'
                            onClick={() => userStore.handleLoggedIn()}
                        >
                            {userStore.isLoggedIn ? 'Sign UP' : 'Log In'}
                        </Button>
                    </Typography>
                    <Box display='flex' gap={2}>
                        <Button
                            variant='contained'
                            color='success'
                            size='smail'
                            type='submit'
                            onClick={(e) => handleLogIn(e)}
                        >
                            {userStore.isLoggedIn ? 'Log In' : 'Sign UP'}
                        </Button>
                        <Button
                            variant='contained'
                            size='smail'
                            color='secondary'
                            type='button'
                            onClick={LoginForm.onClear}
                        >
                            Clear
                        </Button>
                        <Button
                            variant='contained'
                            size='smail'
                            color='error'
                            type='button'
                            onClick={LoginForm.onReset}
                        >
                            Reset
                        </Button>
                    </Box>

                    <Typography color='success'>{LoginForm.error}</Typography>
                </form>
            </Stack>
        )
    }),
)

export default FormValidation
