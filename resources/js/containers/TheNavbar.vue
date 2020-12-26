<template>
    <b-navbar toggleable="lg" type="dark" variant="primary" fixed="top" style="z-index: 1039">
        <div class="navbar-brand" style="width: 210px;">
            <router-link class="text-white" :to="{name:'Dashboard'}"
                         style="text-decoration: none;vertical-align: middle">
                {{siteName}}
            </router-link>
            <button type="button"
                    class="navbar-toggler d-inline-block py-0 float-md-right float-left"
                    @click="$emit('toggleMobileSidebar')"
                    size="sm">
                <i class="navbar-toggler-icon"></i>
            </button>
        </div>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-nav align="center" id="main-loader" class="d-none"
                      style="position: absolute;left: 50%;transform: translateX(-50%);">
            <div class="spinner-border text-white" style="z-index: 99999;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </b-navbar-nav>
        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->

            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown text="Lang" right>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                        <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item @click.prevent="logout">
                        Sign Out
                    </b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "TheNavbar",
        props: {
            siteName: {
                type: String,
                default: 'WovoSoft'
            }
        },
        methods: {
            logout() {
                document.getElementById("logout-form").submit();
            }
        }
    }
</script>

<style scoped>

</style>
