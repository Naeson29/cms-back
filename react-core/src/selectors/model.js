import { createSelector } from 'reselect';

export const createModelSelector = model => state => state[model];

export const createModelIndexViewSelector = model => createSelector(
    createModelSelector(model),
    selectedModel => ({
        ...selectedModel?.views?.index,
        content: (selectedModel?.views?.index?.results || []).map(r => selectedModel?.data?.[r]),
    }),
);

export const createModelNewViewSelector = model => createSelector(
    createModelSelector(model),
    selectedModel => ({ ...selectedModel?.views?.new }),
);

export const createModelShowViewSelector = model => createSelector(
    createModelSelector(model),
    selectedModel => ({
        ...selectedModel?.views?.show,
        content: selectedModel.data[selectedModel?.views?.show?.result],
    }),
);

export const createModelEditViewSelector = model => createSelector(
    createModelSelector(model),
    selectedModel => ({
        ...selectedModel?.views?.edit,
        content: selectedModel.data[selectedModel?.views?.edit?.result],
    }),
);

export const createModelDestroyViewSelector = model => createSelector(
    createModelSelector(model),
    selectedModel => ({
        ...selectedModel?.views?.destroy,
        content: selectedModel.data[selectedModel?.views?.destroy?.result],
    }),
);
