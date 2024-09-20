<template>
  <div>
    <div class="nav bg-white border-b-2">
      <div class="container flex justify-between items-center">
        <router-link to="/">
          <img width="130" height="16" src="../assets/images/logo.svg" alt="logo">
        </router-link>

        <div class="nav__menu flex gap-11 items-center ml-20">
          <router-link to="/" class="text-secondary">{{ $t('women') }}</router-link>
          <router-link to="/about" class="text-dark">{{ $t('men') }}</router-link>
          <div class="nav__search flex items-center gap-5">
            <label for="" class="text-secondary">{{ $t('search') }}</label>
            <input type="text">
          </div>
        </div> 

        <div class="nav__right flex items-center gap-[57px]">
          <ul class="nav__langs flex gap-5 items-center">
            <li @click="lang = 'ru'; $i18n.locale = 'ru'" :class="{ active: lang === 'ru' }">RU</li>
            <li @click="lang = 'en'; $i18n.locale = 'en'" :class="{ active: lang === 'en' }">EN</li>
            <li @click="lang = 'uz'; $i18n.locale = 'uz'" :class="{ active: lang === 'uz' }">UZ</li>            
          </ul>

          <div class="nav__icons flex gap-5">
            <router-link to="/personal-account">
              <UserIcon></UserIcon>
            </router-link>

            <router-link to="/wishlist">
              <WishListIcon></WishListIcon>
            </router-link>

            <router-link to="/cart">
              <CartIcon></CartIcon>
            </router-link>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import UserIcon from "../components/icons/UserIcon.vue";
import CartIcon from "../components/icons/CartIcon.vue";
import WishListIcon from "../components/icons/WishListIcon.vue";

let lang = ref("ru");
</script>

<style lang="scss" scoped>
</style>
