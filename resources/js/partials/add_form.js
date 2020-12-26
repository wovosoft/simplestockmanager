import {getItem, initAddForm, onSubmit} from "@/partials/datatable";

export default {
    props: {
        getCreatedItem: {
            type: Boolean,
            default: false
        },
        item: {
            type: Object,
            default: () => {
                return {}
            }
        }
    },
    mounted() {
        this.form = this.item;
        initAddForm(this, () => {

        });
    },
    data() {
        return {
            form: {},
            visible: true
        }
    },
    methods: {
        getItem,
        onSubmit,
        hitSubmit() {
            this.$refs.submitBtn.click();
        }
    }
}
