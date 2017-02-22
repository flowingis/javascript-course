import { observable, computed } from 'mobx';

export default class AppState {
    @observable loading = false;
    @observable todos = [];

    @computed get todoNumber() {
        return this.todos.length;
    }
}