<script setup lang="ts">
const navItems = [
    {
        title: 'Dashboard',
        icon: 'fa-solid fa-table-columns',
        link: '/admin/dashboard'
    },
    {
        title: 'Admins',
        icon: 'fa-solid fa-user-group',
        link: '/admin/admins'
    },
    {
        title: 'Customers',
        icone: 'fa-solid fa-clipboard',
        link: '/admin/customers'
    },
    {
        title: 'Products',
        icon: 'fa-solid fa-shirt',
        link: '/admin/products'
    },
    {
        title: 'Categories',
        icon: 'fa-solid fa-list',
        link: '/admin/category'
    },
    {
        title: 'Sales',
        icon: 'fa-solid fa-file-invoice-dollar',
        link: '/admin/sales'
    },
    {
        title: 'Inquiries',
        icon: 'fa-solid fa-message',
        link: '/admin/inquiries'
    },
    {
        title: 'Logout',
        icon: 'fa-solid fa-arrow-right-from-bracket',
        link: '/admin/logout'
    }


]
</script>
<template>
    <div class="grid grid-cols-12 gap-4">
        <section id="sidebar" class="col-span-4">
            <div class="sidebar">
                <div class="sidebar-brand-container">
                    <a href="/admin" class="d-flex justify-content-center">
                        <img src="/src/assets/images/Apex-logos_black.png" style="width: 70%; max-width: 200px"
                            alt="Logo">
                    </a>
                </div>

                <ul class="list-group nav-group">
                    <li v-for="item in navItems" :key="item.title" class="list-group-item">
                        <a class="py-2" :href="item.link">
                            <i :class=item.icon></i>
                            <span>{{ item.title }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="col-span-8 md:mx-3" id="right-container">
            <div class="greeting">
                <span class="fs-5">Hello, 👋</span>
                <img alt="profile picture" class="profile-img" src="" />
            </div>

            <RouterView></RouterView>
        </section>
    </div>

</template>

<style scoped>
*:not(class^="fa-") {
    font-family: 'Karta', sans-serif;
}

* {
    font-size: 16px;
}

body {
    background-color: #f7f7f7;
}

.sidebar {
    max-width: 300px;
    height: 100vh;
    margin-right: 1rem;
    margin-left: 2rem;
}

.sidebar-brand-container {
    width: 100%;
    height: 10vh;
    margin: 1rem 0;
}

.sidebar-brand-container i,
.sidebar-brand-container span {
    margin: 0.5rem;
    font-size: 2rem;
}

.sidebar ul {
    background-color: white;
    font-size: medium;
    border-radius: 10px;
    padding: 0;
}

.sidebar ul li {
    font-size: 1.5rem;
    padding: 0;
    height: 4rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.sidebar ul li i {
    margin-right: 10px;
    margin-left: 20px;
}

.sidebar ul li span a {
    text-decoration: none;
    color: black;
}

.sidebar ul li:hover,
.sidebar li.active {
    background-color: #FDDB8E;
    border-color: #FDDB8E;
    cursor: pointer;
}

.nav-group a {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: black;
}

.greeting {
    justify-content: space-between;
    display: flex;
    height: 10vh;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    margin: 1rem;
}

.greeting span {
    font-size: 2rem;
    font-weight: 300;
}

.profile-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>