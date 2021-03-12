class ModalService {
    constructor() {
        this._register = this._register.bind(this);
        this._getComponentFromType = this._getComponentFromType.bind(this);

        this.registeredModal = { };
    }

    _register(json) {
        this.registeredModal = {
            ...this.registeredModal,
            ...json
        }
    }

    _getComponentFromType(type) {
        return this.registeredModal[type];
    }
}

export default ModalService;