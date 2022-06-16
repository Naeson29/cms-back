import { model } from '../model';

export default (t = () => {}) => ({
    ...model.list(),

    parameters: {
        params: {
            limit: 6,
            order: {
                column: 'created_at',
                desc: true,
            },
        },
        filters: [
            {
                label: t('publication:list.published'),
                value: 1,
            },
            {
                label: t('publication:list.notPublished'),
                value: 2,
            },
        ],
    },
    inputSearch: {
        columns: ['title', 'content'],
        placeholder: t('publication:list.inputSearch'),
    },
    selectOrder: [
        {
            label: t('publication:list.selectOrder.title'),
            value: 'title',
        },
        {
            label: t('publication:list.selectOrder.date'),
            value: 'created_at',
        },
    ],
    selectFilter: [
        {
            label: t('publication:list.published'),
            value: 1,
            filter: {
                column: 'published',
                operator: '=',
                value: 1,
            },
        },
        {
            label: t('publication:list.notPublished'),
            value: 2,
            filter: {
                column: 'published',
                operator: '=',
                value: 0,
            },
        },
    ],
    filter: true,
});
