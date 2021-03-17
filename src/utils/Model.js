const models = {
    user : 'user'
};

const getModel = (model) => (models[model]);

export {
    models,
    getModel
}