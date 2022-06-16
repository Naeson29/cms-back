import { model } from '../model';

export default (t = () => {}) => ({
    ...model.list(),

    parameters: {
        params: {
            limit: 6,
            order: {
                column: 'first_name',
            },
        },
    },
    inputSearch: {
        columns: [
            "concat(first_name, ' ', last_name)",
        ],
        placeholder: t('user:list.inputSearch'),
    },
    selectOrder: [
        {
            label: t('user:list.selectOrder.first_name'),
            value: 'first_name',
        },
        {
            label: t('user:list.selectOrder.last_name'),
            value: 'last_name',
        },
        {
            label: t('user:list.selectOrder.date'),
            value: 'created_at',
        },
    ],
});
