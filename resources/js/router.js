import Vue from 'vue'
import VueRouter from "vue-router";
import startCase from "bootstrap-vue/esm/utils/startcase";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({y: 0}),
    base: '/',
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: () => import('@/components/Dashboard'),
            meta: {
                disable_breadcrumb: true
            }
        },
        {
            path: '/history/:model',
            name: 'ModelHistory',
            meta: {
                breadcrumb: 'History',
                title: 'History',
            },
            component: () => import('@/components/history/List')
        },
        {
            name: "Users",
            path: '/users',
            redirect: "/users/list",
            component: () => import(/* webpackChunkName: "UsersRouted" */ "@/../wovosoft/laravel-permissions/js/src/MainRouted"),
            children: [
                {
                    path: 'list',
                    name: 'UsersList',
                    meta: {breadcrumb: 'List'},
                    component: () => import("@/../wovosoft/laravel-permissions/js/src/components/users/List")
                },
                {
                    path: 'roles',
                    name: 'UserRoles',
                    meta: {breadcrumb: 'Roles'},
                    component: () => import("@/../wovosoft/laravel-permissions/js/src/components/roles/List")
                },
                {
                    path: 'permissions',
                    name: 'UserPermissions',
                    meta: {breadcrumb: 'Permissions'},
                    component: () => import("@/../wovosoft/laravel-permissions/js/src/components/permissions/List")
                },
                {
                    path: 'user-ability-test',
                    name: 'UserAbilityTest',
                    meta: {breadcrumb: 'User Abilities'},
                    component: () => import("@/../wovosoft/laravel-permissions/js/src/components/ability_test/UserAbility")
                },
                {
                    path: 'role-ability-test',
                    name: 'RoleAbilityTest',
                    meta: {breadcrumb: 'Role Abilities'},
                    component: () => import("@/../wovosoft/laravel-permissions/js/src/components/ability_test/RoleAbility")
                },

            ]
        },
        {
            name: "Contacts",
            path: '/contact',
            redirect: "/contact/suppliers",
            component: {
                render: (c) => c('router-view')
            },
            children: [
                {
                    path: 'suppliers',
                    name: 'ContactSuppliers',
                    meta: {breadcrumb: 'Suppliers'},
                    component: () => import("@/components/suppliers/List"),
                    children: [
                        {
                            path: 'add/:id?',
                            name: 'SuppliersAdd',
                            meta: {breadcrumb: 'Add'},
                            component: () => import("@/components/suppliers/Add")
                        },
                        {
                            path: 'view/:id?',
                            name: 'SuppliersView',
                            meta: {breadcrumb: 'View'},
                            component: () => import("@/components/suppliers/View")
                        },
                    ]
                },
                {
                    path: 'customers',
                    name: 'ContactCustomers',
                    meta: {breadcrumb: 'Customers'},
                    component: () => import("@/components/customers/List"),
                    children: [
                        {
                            path: 'add/:id?',
                            name: 'CustomersAdd',
                            meta: {breadcrumb: 'Add'},
                            component: () => import("@/components/customers/Add")
                        },
                        {
                            path: 'view/:id?',
                            name: 'CustomersView',
                            meta: {breadcrumb: 'View'},
                            component: () => import("@/components/customers/View")
                        },
                    ]
                },
            ]
        },
        {
            name: "Main Inventory",
            path: '/product',
            redirect: "/product/list",
            component: {
                render: (c) => c('router-view')
            },
            children: [
                {
                    path: 'list',
                    name: 'ProductList',
                    meta: {breadcrumb: 'Products'},
                    component: () => import("@/components/products/List"),
                    children: [
                        {
                            path: 'add',
                            name: 'ProductsAdd',
                            meta: {breadcrumb: 'Add'},
                            component: () => import("@/components/products/Add")
                        },
                        {
                            path: ':id/edit',
                            name: 'ProductsEdit',
                            meta: {breadcrumb: 'Edit'},
                            component: () => import("@/components/products/Add")
                        },
                        {
                            path: ':id/view',
                            name: 'ProductsView',
                            meta: {breadcrumb: 'View'},
                            component: () => import("@/components/products/View")
                        },
                    ]
                },
                {
                    path: 'check_ins',
                    name: 'CheckInsList',
                    meta: {breadcrumb: 'Check In'},
                    component: () => import("@/components/check_ins/List"),
                    children: [
                        {
                            path: 'add',
                            name: 'CheckInsAdd',
                            meta: {breadcrumb: 'Add'},
                            component: () => import("@/components/check_ins/Add")
                        },
                        {
                            path: ':id/edit',
                            name: 'CheckInsEdit',
                            meta: {breadcrumb: 'Edit'},
                            component: () => import("@/components/check_ins/Add")
                        },
                        {
                            path: ':id/view',
                            name: 'CheckInsView',
                            meta: {breadcrumb: 'View'},
                            component: () => import("@/components/check_ins/View")
                        },
                    ]
                },
                {
                    path: 'check_outs',
                    name: 'CheckOutsList',
                    meta: {breadcrumb: 'Check Out'},
                    component: () => import("@/components/check_outs/List"),
                    children: [
                        {
                            path: 'add',
                            name: 'CheckOutsAdd',
                            meta: {breadcrumb: 'Add'},
                            component: () => import("@/components/check_outs/Add")
                        },
                        {
                            path: ':id/edit',
                            name: 'CheckOutsEdit',
                            meta: {breadcrumb: 'Edit'},
                            component: () => import("@/components/check_outs/Add")
                        },
                        {
                            path: ':id/view',
                            name: 'CheckOutsView',
                            meta: {breadcrumb: 'View'},
                            component: () => import("@/components/check_outs/View")
                        },
                    ]
                },
                {
                    path: 'categories',
                    name: 'ProductCategories',
                    meta: {breadcrumb: 'Categories'},
                    component: () => import("@/components/categories/List"),
                    children: [
                        {
                            path: 'add/:id?',
                            name: 'CategoriesAdd',
                            meta: {breadcrumb: 'Add'},
                            component: () => import("@/components/categories/Add")
                        },
                        {
                            path: 'view/:id?',
                            name: 'CategoriesView',
                            meta: {breadcrumb: 'View'},
                            component: () => import("@/components/categories/View")
                        },
                    ]
                },
                {
                    path: 'brands',
                    name: 'ProductBrands',
                    meta: {breadcrumb: 'Brands'},
                    component: () => import("@/components/brands/List"),
                    children: [
                        {
                            path: 'add',
                            name: 'BrandsAdd',
                            meta: {breadcrumb: 'Add'},
                            component: () => import("@/components/brands/Add")
                        },
                        {
                            path: ':id/edit',
                            name: 'BrandsEdit',
                            meta: {breadcrumb: 'Edit'},
                            component: () => import("@/components/brands/Add")
                        },
                        {
                            path: ':id/view',
                            name: 'BrandsView',
                            meta: {breadcrumb: 'View'},
                            component: () => import("@/components/brands/View")
                        },
                    ]
                },
                {
                    path: 'subcategories',
                    name: 'ProductSubcategories',
                    meta: {breadcrumb: 'Sub Categories'},
                    component: () => import("@/components/subcategories/List"),
                    children: [
                        {
                            path: 'add',
                            name: 'SubcategoriesAdd',
                            meta: {breadcrumb: 'Add'},
                            component: () => import("@/components/subcategories/Add")
                        },
                        {
                            path: ':id/edit',
                            name: 'SubcategoriesEdit',
                            meta: {breadcrumb: 'Edit'},
                            component: () => import("@/components/subcategories/Add")
                        },
                        {
                            path: ':id/view',
                            name: 'SubcategoriesView',
                            meta: {breadcrumb: 'View'},
                            component: () => import("@/components/subcategories/View")
                        },
                    ]
                },
                {
                    path: 'units',
                    name: 'ProductUnits',
                    meta: {breadcrumb: 'Units'},
                    component: () => import("@/components/units/List"),
                    children: [
                        {
                            path: 'add/:id?',
                            name: 'UnitsAdd',
                            meta: {breadcrumb: 'Add'},
                            component: () => import("@/components/units/Add")
                        },
                        {
                            path: ':id/edit',
                            name: 'UnitsEdit',
                            meta: {breadcrumb: 'Edit'},
                            component: () => import("@/components/units/Add")
                        },
                        {
                            path: ':id/view',
                            name: 'UnitsView',
                            meta: {breadcrumb: 'View'},
                            component: () => import("@/components/units/View")
                        },
                    ]
                },
            ]
        },
    ]
});
