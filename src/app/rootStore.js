import { CountStore } from '../stores/countStore'
import { GithubUserStore } from '../stores/githubStore'

class RootStore {
    constructor() {
        this.countStore = new CountStore(this)
        this.githubStore = new GithubUserStore(this)
    }
}

export default RootStore
