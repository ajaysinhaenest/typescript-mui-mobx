import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import { Box, Button } from '@mui/material'

const GithubUser = inject('githubStore')(
    observer(({ githubStore }) => {
        const [search, setSearch] = useState('')
        const [user, setUser] = useState('')
        console.log(toJS(githubStore.userDetails))
        console.log(search, user)

        useEffect(() => {
            console.log('hello world')
            githubStore.fetchUserDetails(user)
        }, [user, githubStore])
        return (
            <Box>
                <form
                    action=''
                    onSubmit={(e) => {
                        e.preventDefault()
                        setUser(search)
                    }}
                >
                    <TextField
                        id='outlined-basic'
                        size='small'
                        label='Outlined'
                        variant='outlined'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button>
                        <Button variant='contained'>Submit</Button>
                    </button>
                </form>
                <div>
                    {githubStore.userDetails.name && (
                        <p>Name: {githubStore.userDetails.name}</p>
                    )}
                    {githubStore.userDetails.bio && (
                        <p>Bio : {githubStore.userDetails.bio}</p>
                    )}

                    <img src={githubStore?.userDetails?.avatar_url} alt='' />
                </div>
            </Box>
        )
    }),
)

export default GithubUser
