import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'
import { useState, useEffect } from 'react'

const GithubUser = inject('githubStore')(
    observer(({ githubStore }) => {
        const [search, setSearch] = useState('')
        const [user, setUser] = useState('')
        console.log(toJS(githubStore.userDetails))
        useEffect(() => {
            githubStore.fetchUserDetails(user)
        }, [user])
        return (
            <div>
                <form
                    action=''
                    onSubmit={(e) => {
                        e.preventDefault()
                        setUser(search)
                    }}
                >
                    <input
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button>submit</button>
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
            </div>
        )
    }),
)

export default GithubUser
