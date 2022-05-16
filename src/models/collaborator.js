export default class Collaborator {
    constructor(data) {
        this.init(data)
    }

    init({ id = '', name = '', birth = '', bio = '',  created_at = '', updated_at = '', show = false }) {
        this.id = id
        this.name = name
        this.bitrh = birth
        this.bio = bio
        this.show = show
        this.created_at = created_at
        this.updated_at = updated_at
    }
    clear() {
        this.id = ''
        this.name = ''
        this.birth = ''
        this.bio = ''
    }

    setShow(show) {
        this.show = show
    }
}