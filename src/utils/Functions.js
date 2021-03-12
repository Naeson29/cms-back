import React  from "react";

/**
 * Find the value in object with array of keys
 * (ex: item[key1, key2] => item[key1][key2])
 *
 * @param item
 * @param keys
 * @returns string
 * @private
 */
export function parseField(item, keys) {
    if(!item[keys[0]]) { return ''; }

    if (keys.length > 1  && typeof item[keys[0]] !== 'undefined') {
        return parseField(item[keys[0]], keys.slice(1));
    } else {
        return item[keys[0]];
    }
}

/**
 *  Validation
 *
 * @param string
 * @returns {boolean}
 */
export function minCharacter(string)  {
    if (string) {
        return string.length > 5
    } else {
        return true
    }
}

export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function formatSearchLimit(data){
    if (data.params.limit === undefined){
        data.params = {
            ...data.params,
            limit: 40,
        }
    }

    return data;
}

export function getPaginationFormatted(pagination, goTo, t){
    return { paginate: {
            ...pagination,
            numberByPage: [20,40,60,80,100,250,500,1000],
            labelNumberItems: t('Default:pagination')
        },
        actions: goTo }
}
