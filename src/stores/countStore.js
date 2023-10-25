import { action, computed, makeObservable, observable } from 'mobx'
// import { RootStore } from '../app/store'

export class CountStore {
    count = 0
    rootStore

    constructor(rootStore) {
        makeObservable(this, {
            count: observable,
            increment: action,
            decrement: action,
            getCountValue: computed,
        })
        this.rootStore = rootStore
    }

    increment = () => {
        this.count++
    }
    decrement = () => {
        console.log(this.rootStore)
        this.count--
    }
    get getCountValue() {
        return this.count
    }
}

// const countStor= new countStore()
