export default [
    {
        name: 'Dashboard',
        url: {name: 'Dashboard'},
        icon: 'fa fa-home',
        active: false,
    },
    {
        name: 'User Management',
        url: false,
        icon: 'fa fa-users',
        active: false,
        children: [
            {
                name: 'List',
                url: {name: 'UsersList'},
                icon: 'nav-icon fas fa-chevron-right',
                active: false
            },
            {
                name: 'Roles',
                url: {name: 'UserRoles'},
                icon: 'nav-icon fas fa-chevron-right',
                active: false
            },
            {
                name: 'Permissions',
                url: {name: 'UserPermissions'},
                icon: 'nav-icon fas fa-chevron-right',
                active: false
            },
            {
                name: 'User Abilities',
                url: {name: 'UserAbilityTest'},
                icon: 'nav-icon fas fa-chevron-right',
                active: false
            },
            {
                name: 'Role Abilities',
                url: {name: 'RoleAbilityTest'},
                icon: 'nav-icon fas fa-chevron-right',
                active: false
            },
        ]
    },
    {
        name: 'Contacts',
        url: false,
        icon: 'fa fa-address-book',
        active: false,
        children: [
            {
                name: 'Suppliers',
                url: {name: 'ContactSuppliers'},
                icon: 'nav-icon fas fa-chevron-right',
                active: false
            },
            {
                name: 'Customers',
                url: {name: 'ContactCustomers'},
                icon: 'nav-icon fas fa-chevron-right',
                active: false
            }
        ]
    },
    {
        name: 'Main Inventory',
        url: false,
        icon: 'fa fa-warehouse',
        active: false,
        children: [
            {
                name: 'Products',
                url: {name: 'ProductList'},
                icon: 'nav-icon fas fa-chevron-right',
                active: false
            },
            {
                name: 'Check Ins',
                url: {name: 'CheckInsList'},
                icon: 'nav-icon fas fa-chevron-right',
                active: false
            },
            {
                name: 'Check Outs',
                url: {name: 'CheckOutsList'},
                icon: 'nav-icon fas fa-chevron-right',
                active: false
            },
            {
                name: 'Categories',
                url: {name: 'ProductCategories'},
                icon: 'nav-icon fas fa-chevron-right',
                active: false
            },
            {
                name: 'Sub Categories',
                url: {name: 'ProductSubcategories'},
                icon: 'nav-icon fas fa-chevron-right',
                active: false
            },
            {
                name: 'Brands',
                url: {name: 'ProductBrands'},
                icon: 'nav-icon fas fa-chevron-right',
                active: false
            },
            {
                name: 'Units',
                url: {name: 'ProductUnits'},
                icon: 'nav-icon fas fa-chevron-right',
                active: false
            }
        ]
    },

]
