export default class Service{
    constructor(data) {
        this.init(data)
    }

    init({ id = '', name = '', during = '', cost = '', color , created_at = '', updated_at = ''}) {
        this.id = id
        this.name = name
        this.during = during
        this.cost = cost
        this.color = color
        this.created_at = created_at
        this.updated_at = updated_at
        this._user = null
    }
    clear() {
        this.id = ''
        this.name = ''
        this.email = ''
        this.secondName = ''
        this.phone = ''
        this.patronymic = ''
        this.birthday = ''
        this.address = {}
        this.centers = []
    }

    set user(user){
        debugger
        this._user = user
        alert(`На занятии ${this.name} записан user ${user.name}`)
    }

    get user(){
        debugger
        return this._user
    }

}
