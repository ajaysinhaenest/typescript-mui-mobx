import { action, computed, makeObservable, observable } from 'mobx'
import RootStore from '../app/rootStore'

export class GithubUserStore {
    userDetails = {}
    rootStore

    constructor(rootStore) {
        makeObservable(this, {
            userDetails: observable,
            fetchUserDetails: action,
            getUserDetails: computed,
        })
        this.rootStore = RootStore
    }
    async fetchUserDetails(userName) {
        if (userName) {
            const data = await fetch('https://api.github.com/users/' + userName)
            const json = await data.json()
            console.log(json)
            this.userDetails = json
        }
    }

    get getUserDetails() {
        return this.userDetails
    }
}

// const countStor= new GithubUserStore()
