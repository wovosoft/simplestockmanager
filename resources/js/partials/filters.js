import dayjs from "dayjs";
import {truncate} from "@/partials/datatable";

export function date_format(date, format = "DD-MM-YYYY [at] hh:mm:ss A") {
    if (!date) {
        return "";
    }
    return dayjs(date).format(format);
}

export default {
    install(Vue) {
        Vue.prototype.dayjs = date_format;
        Vue.filter('dayjs', date_format);
        Vue.filter('currency', (value = 0, currency = "USD", locale = 'en-US') => new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency
        }).format(value));
        Vue.filter('truncate', (value = '', length = 30) => truncate(value || '', length))
    }
};
