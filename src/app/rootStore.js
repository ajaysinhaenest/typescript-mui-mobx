import { CountStore } from '../stores/countStore'
import { GithubUserStore } from '../stores/githubStore'
import { UserStore } from '../stores/User'
class RootStore {
    constructor() {
        this.countStore = new CountStore(this)
        this.githubStore = new GithubUserStore(this)
        this.userStore = new UserStore(this)
    }
}

export default RootStore
