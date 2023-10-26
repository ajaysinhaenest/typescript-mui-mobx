import { action, makeObservable, observable } from 'mobx'
// import { RootStore } from '../app/store'

export class UserStore {
    isLoggedIn = false
    rootStore

    constructor(rootStore) {
        makeObservable(this, {
            isLoggedIn: observable,
            handleLoggedIn: action,
            // handleLogOut: action,
        })
        this.rootStore = rootStore
    }

    handleLoggedIn = () => {
        this.isLoggedIn = !this.isLoggedIn
    }
    // handleLogOut = () => {
    //     this.isLoggedIn = false
    // }
    // increment = () => {
    //     this.count++
    // }
    // decrement = () => {
    //     console.log(this.rootStore)
    //     this.count--
    // }
    // get getCountValue() {
    //     return this.count
    // }
}
