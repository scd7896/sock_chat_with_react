import {Subject, BehaviorSubject} from 'rxjs'
import {scan} from 'rxjs/operators'

export default function createStore(rootReducer, initalState){
    const actionDispatcher = new Subject();
    const store = new BehaviorSubject(initalState)
    
    
    actionDispatcher
        .pipe(scan(rootReducer, initalState))
        .subscribe(store)

    return{
        dispatch : actionDispatcher.next.bind(actionDispatcher),
        subscribe : store.subscribe.bind(store),
        getState : store.getValue.bind(store),
    }
}