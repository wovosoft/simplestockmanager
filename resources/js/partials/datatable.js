import j2FD from "@/partials/jsonToFormData";

/**
 * Remove null , undefined and empty elements from Array.
 * @param items Array
 * @returns {*}
 */


export function compact(items) {
    return items.filter(item => (item !== null && item !== undefined && "" !== (isString(item) ? item.trim() : item)));
}

/**
 * @example obj2Table(object, ['column1','column2'])
 * @param items Object of the Data
 * @param skip Array Columns to be skipped / rejected
 * @param as
 * @returns {Array}
 */
export function obj2Table(items, skip = [], as = {key: 'key', value: 'value'}) {
    let output = [];
    for (let x in items) {
        if (!skip.includes(x)) {
            let ret = {};
            ret[as['key']] = x;
            ret[as['value']] = items[x];
            output.push(ret);
        }
    }
    return output;
}

export function isValidURL(str) {
    let pattern = new RegExp('^((ft|htt)ps?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?' + // port
        '(\\/[-a-z\\d%@_.~+&:]*)*' + // path
        '(\\?[;&a-z\\d%@_.,~+&:=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
}

export function onSubmit() {
    if (this.$refs.theForm.reportValidity()) {
        this.form.getCreatedItem = !!this.getCreatedItem;
        axios.post(this.submit_url, j2FD(this.form))
            .then(res => {
                this.$root.msgBox(res.data);
                this.visible = false;
                this.$emit('refreshDatatable', true);
                if (this.getCreatedItem) {
                    this.$emit('created', res.data);
                }
            })
            .catch(err => {
                this.$emit('error', err.response);
                console.log(err.response);
                this.$root.msgBox(err.response.data);
            });
    }
}

export function initAddForm(context, callback = null) {
    if (!Object.keys(context.item).length && context.$route.params.id) {
        context.getItem(context.$route.params.id, context.$parent.$props.api_url).then(res => {
            context.form = res.data;
            if (typeof callback === "function") {
                callback();
            }
        }).catch(err => console.log(err.response));
    }
}

/**
 * Object to Array of Objects Convertion
 * @param items
 * @param skip Array , Objects fields that needs to be skipped from output object
 * @param callback (key,value)=>{return {key:key, value: value}}
 * @returns {[]}
 */
export function objToArrObj(items, skip = [], callback) {
    let output = [];
    for (let x in items) {
        if (!skip.includes(x)) {
            output.push(callback(x, items[x]));
        }
    }
    return output;
}

export function changeVisibility(field, index) {
    if (typeof (this.fields[index].thClass) !== "string") {
        this.fields[index].thClass = '';
    }
    if (typeof (this.fields[index].tdClass) !== "string") {
        this.fields[index].tdClass = '';
    }
    if (field.visible) {
        this.fields[index].thClass += ' d-none';
        this.fields[index].tdClass += ' d-none';

    } else {
        this.fields[index].thClass = this.fields[index].thClass.replace('d-none', '').trim();
        this.fields[index].tdClass = this.fields[index].tdClass.replace('d-none', '').trim();
    }
}

export function msgBox(data, duration, append) {
    this.$bvToast.toast(data.msg || data.message, {
        title: data.title,
        variant: data.type,
        autoHideDelay: duration || 3000,
        appendToast: append || false
    });
}

export function range(step = 10, quantity = 50) {
    return [...Array(quantity).keys()].map(i => i * step + step);
}


export function isBoolean(value) {
    return value === true || value === false;
}

export function isString(value) {
    return typeof value === "string";
}

export function uid(length = 36) {
    return (Date.now().toString(length) + Math.random().toString(length).substr(2, 5));
}

//https://eddmann.com/posts/cartesian-product-in-javascript/
export const cartesianProduct = (...sets) => sets.reduce((acc, set) => ((arr) => [].concat.apply([], arr))(acc.map(x => set.map(y => [...x, y]))), [[]]);

/**
 * Initializng Datatable Columns Visibilty Toggle Feature
 * @param scope
 */
export function iniDatatableVisibility(scope) {
    scope.fields.forEach(item => {
        if (!isBoolean(item.visible)) {
            scope.$set(item, 'visible', true);
        }

        if (isBoolean(item.visible) && !item.visible) {
            scope.$set(item, 'thClass', 'd-none');
            scope.$set(item, 'tdClass', 'd-none');
        }
    });
}

/**
 * What happens when dropdown hides
 * @param scope
 * @param callprev
 * @param prev_params
 * @param callback
 * @param params
 */
export function initDatatableModalEvents(scope, callprev, prev_params = [], callback, params = []) {
    if (typeof callprev === "function") {
        callprev(...prev_params);
    } else {
        scope.$root.$on('bv::modal::hidden', (bvEvent, modalId) => {
            if (modalId === 'addModal') {
                scope.form = {};
            } else if (modalId === 'viewModal') {
                scope.currentItem = {};
            }
            if (typeof callback === "function") {
                callback(...params);
            }
        })
    }
}

export function setColumns(scope) {
    return compact(scope.fields.map(item => {
        if (isBoolean(item.visible) && item.visible) {
            if (!isBoolean(item.searchable) || item.searchable) {
                return item.key;
            }
        }
    }));
}

export function isTrue(value) {
    return isBoolean(value) && value;
}

export function isArray(value) {
    return Array.isArray(value);
}

import startCase from "bootstrap-vue/esm/utils/startcase";
import {isObject} from "bootstrap-vue/esm/utils/object";

import {toInteger, toFixed, toFloat} from "bootstrap-vue/esm/utils/number";


export function truncate(str = "", length = 30, ending = '...') {
    return (str.length > length) ? str.substring(0, length - ending.length) + ending : str;
}

export function getItem(id, api_url) {
    // console.log(ctx)
    return axios.post(api_url, {id});
}

export function slugify(string = '') {
    if (!string.toString().trim()) {
        return '';
    }
    const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
    const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
    const p = new RegExp(a.split('').join('|'), 'g')

    return string.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word characters
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
}

export function stripTags(str = "") {
    return str.replace(/(<([^>]+)>)/ig, "");
}

export function objPhotoUrl(photo) {
    if (!photo) {
        return null;
    }
    return URL.createObjectURL(photo);
}

export {toInteger, toFixed, toFloat, startCase, isObject};
export default {
    data() {
        return {
            search: '',
            currentItem: {},
            datatable: {
                sortBy: 'id',
                sortDesc: true,
                per_page: 10,
                current_page: 1,
                total: 0,
                from: 0,
                to: 0
            },
            fields: [],
        };
    },
    mounted() {
        iniDatatableVisibility(this);
        initDatatableModalEvents(this);
    },
    methods: {
        getItems(ctx) {
            // console.log(ctx)
            return axios.post(this.api_url + "?page=" + (ctx.currentPage ? ctx.currentPage : 1), {
                per_page: this.datatable.per_page,
                orderBy: ctx.sortBy || 'id',
                order: isTrue(ctx.sortDesc) ? 'desc' : 'asc',
                // order: isTrue(ctx.sortDesc) && ctx.sortBy ? 'desc' : 'asc',
                filter: ctx.filter,
                columns: setColumns(this)
            }).then(res => {
                // console.log(res);
                this.datatable.total = res.data.total;
                this.datatable.from = res.data.from;
                this.datatable.to = res.data.to;
                this.datatable.current_page = res.data.current_page;
                return res.data.data;
            }).catch(err => {
                console.log(err.response);
                return [];
            });
        },
        onSubmit(callback = null, callback_params = []) {
            axios.post(this.submit_url, this.form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(res => {
                // console.log(res)
                this.$bvModal.hide('addModal');
                this.msgBox(res.data);
                this.$refs.datatable.refresh();
                if (callback) {
                    callback(...callback_params);
                }
            }).catch(err => {
                this.msgBox(err.response);
                console.log(err.response)
            });
        },
        trash(id, datatable = 'datatable', url = null) {
            this.$bvModal
                .msgBoxConfirm('Are you sure?',)
                .then(value => {
                    if (value) {
                        axios.post(url || this.trash_url, {
                            id: id,
                        }).then(res => {
                            this.msgBox(res.data);
                            this.$refs[datatable].refresh();
                        }).catch(err => {
                            this.msgBox(err.response);
                            console.log(err.response)
                        });
                    }
                })
                .catch(err => {
                    console.log(err)
                });
        },
        msgBox,
        obj2Table,
        startCase,
        truncate
    }
}
