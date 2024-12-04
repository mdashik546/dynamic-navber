import {  MdKeyboardArrowRight } from "react-icons/md";

export const sidebarItems = [
    {
        section: "Main",
        items: [
            {
                title: "Dashboard",
                link: "/"
            },
            {
                title: "Sales",
                icon:<MdKeyboardArrowRight/>,
                children: [
                    {
                        title: "Add Sale",
                        link: "/add-sale"
                    },
                    {
                        title: "All Sales",
                        link: "/sales"
                    },
                    {
                        title: "Pending Sales",
                        link: "/pending-sales"
                    },
                    {
                        title: "Return Sales",
                        link: "/return-sales"
                    }
                ]
            },
            {
                title: "Purchase",
                icon:<MdKeyboardArrowRight/>,
                children: [
                    {
                        title: "Add Purchase",
                        link: "/add-purchase"
                    },
                    {
                        title: "All Purchases",
                        link: "/purchase"
                    },
                    {
                        title: "Pending Purchases",
                        link: "/pending-purchase"
                    },
                    {
                        title: "Return Purchases",
                        link: "/return-purchase"
                    }
                ]
            },

            {
                title: "Categories",
                icon:<MdKeyboardArrowRight/>,
                children: [
                    {
                        title: "Add Categories",
                        link: "/add-category"
                    },
                    {
                        title: "All Sub Categories",
                        link: "/sub-categories"
                    },
                    {
                        title: "Units",
                        link: "/units"
                    },
                ]
            },


            {
                title: "Products",
                icon:<MdKeyboardArrowRight/>,
                children: [
                    {
                        title: "All Products",
                        link: "/products"
                    },
                    {
                        title: "Add Products",
                        link: "/add-product"
                    },
                    {
                        title: "Expired Products",
                        link: "/expired-products"
                    },
                    {
                        title: "Stock Summery",
                        link: "/stock-summery"
                    },
                ]
            },



            {
                title: "Warranty",
                link: "/warranty"
            },

            {
                title: "Due",
                icon:<MdKeyboardArrowRight/>,
                children: [
                    {
                        title: "Sale Due",
                        link: "/sale-due"
                    },
                    {
                        title: "Purchase Due",
                        link: "/purchase-due"
                    },
                ]
            },

            {
                title: "Brands",
                link: "/brands"
            },
            {
                title: "Warehouse",
                link: "/warehouse"
            },

            {
                title: "Account & Expense",
                icon:<MdKeyboardArrowRight/>,
                children: [
                    {
                        title: "Cash Flow",
                        link: "/cash-flow"
                    },
                    {
                        title: "Expense",
                        link: "/expense"
                    },
                    {
                        title: "Categories",
                        link: "/expense"
                    },
                    {
                        title: "Contacts",
                        link: "/contacts"
                    },
                ]
            },


        ]
    },

    {
        section: "Peoples",
        items: [
            {
                title: "Suppliers",
                link: "/suppliers"
            },
            {
                title: "Customers",
                link: "/customers"
            },
            {
                title: "Users",
                icon:<MdKeyboardArrowRight/>,
                children: [
                    {
                        title: "Users",
                        link: "/users"
                    },
                    {
                        title: "Roles",
                        link: "/roles"
                    },
                ]
            },

        ]
    },


    {
        section: "Report",
        items: [
            {
                title: "Reports",
                icon:<MdKeyboardArrowRight/>,
                children: [
                    {
                        title: "All Report",
                        link: "/users"
                    },
                    {
                        title: "Sale Report",
                        link: "/roles"
                    },
                    {
                        title: "Purchase Report",
                        link: "/roles"
                    },
                    {
                        title: "Supplier Report",
                        link: "/roles"
                    },
                    {
                        title: "Customer Report",
                        link: "/roles"
                    },
                    {
                        title: "Product Quality Alert",
                        link: "/roles"
                    },
                    {
                        title: "Warehouse Stock",
                        link: "/roles"
                    },
                    {
                        title: "Best Selling Report",
                        link: "/roles"
                    },
                    {
                        title: "Profit & Loss",
                        link: "/roles"
                    },
                    {
                        title: "Tax Report",
                        link: "/roles"
                    },
                    {
                        title: "Expense Report",
                        link: "/roles"
                    },
                ]
            },

        ]
    },

    {
        section: "Settings",
        items: [
            {
                title: "Settings",
                icon:<MdKeyboardArrowRight/>,
                children: [
                    {
                        title: "System Settings",
                        link: "/users"
                    },
                    {
                        title: "SMS Settings",
                        link: "/roles"
                    },
                    {
                        title: "SMS Templates",
                        link: "/roles"
                    },
                    {
                        title: "Email Templates",
                        link: "/roles"
                    },
                    {
                        title: "Currency",
                        link: "/roles"
                    },
                    {
                        title: "Backup",
                        link: "/roles"
                    },
                ]
            },

        ]
    }

]