import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/layouts/DefaultLayout.vue";
import AuthLayout from "../components/layouts/AuthLayout.vue";
import GuestLayout from "../components/layouts/GuestLayout.vue";

import Index from "../views/Index.vue";
import Notifi from "../views/Notifi.vue";
import BuyConnect from "../views/BuyConnect.vue";
import Profile from "../views/Profile.vue";
import Circle from "../views/Circle.vue";
import Explore from "../views/Explore.vue";
import Connect from "../views/Connect.vue";
import Fleeks from "../views/Fleeks.vue";
import UserMatch from "../components/explore/UserMatch.vue";
import Favorite from "../components/explore/Favorite.vue";
import OngoingHook from "../components/hook/OngoingHook.vue";
import HookHistory from "../views/HookHistory.vue";
import UserView from "../components/explore/UserView.vue";

import HookerDetails from "../components/hook/HookerDetails.vue";
import HookieDetails from "../components/hook/HookieDetails.vue";

import Settings from "../views/Settings.vue";

import SearchComponent from "../components/core/SearchComponent.vue";
import SearchLocation from "../components/search/SearchByLocation.vue";
import SearchUser from "../components/search/SearchUser.vue";
import Search from "../views/Search.vue";

import NotFound from "../views/404.vue";

import Hook from "../views/Hook.vue";
import HookByArea from "../components/hook/HookByArea.vue";

import Privacy from "../views/Policy.vue";
import Terms from "../views/Terms.vue";

import uploadFleek from "../components/fleek/UploadFleek.vue";

import ChatIndex from "../components/chat/Index.vue";
import RespondChat from "../components/chat/RespondChat.vue";
import ChatGeneral from "../components/chat/ChatGeneral.vue";

import Paystack from "../components/connects/Paystack.vue";
import PurchaseHistory from "../components/connects/PurchaseHistory.vue";

import Verify from "../views/auth/Verify.vue";
import Register from "../views/auth/Register.vue";
import Login from "../views/auth/Login.vue";
import GetVerify from "../views/auth/GetVerify.vue";
import Success from "../views/auth/verify/Success.vue";
import Forgot from "../views/auth/Forgot.vue";
import CodeCheck from "../views/auth/CodeCheck.vue";
import Reset from "../views/auth/Reset.vue";

import store from "../store";

const routes = [
  {
    name: "DefaultLayout",
    path: "/",
    meta: { requiresAuth: true },
    component: DefaultLayout,
    children: [
      { name: "Home", path: "/index", component: Index },
      { name: "userView", path: "/view/user/:id", component: UserView },
      { name: "Profile", path: "/view/profile/", component: Profile },
      { name: "Circle", path: "/view/circle/", component: Circle },
      { name: "Explore", path: "/view/explore/", component: Explore },
      { name: "Fleeks", path: "/view/fleeks/", component: Fleeks },
      {
        name: "uploadFleek",
        path: "/view/upload/fleek/",
        component: uploadFleek,
      },
      { name: "Connect", path: "/view/user/connect/:id", component: Connect },
      { name: "Chat", path: "/hooker/chat-user/:id", component: ChatIndex },
      { name: "ChatGeneral", path: "/chat-user/:id", component: ChatGeneral },
      { name: "RespondChat", path: "/hookie/chat-user/:id", component: RespondChat },
      { name: "Hook", path: "/view/user/hook/:id", component: Hook },
      {
        name: "HookByArea",
        path: "/view/user-by-locations/",
        component: HookByArea,
      },
      { name: "Notifi", path: "/view/user/notifications/", component: Notifi },
      {
        name: "buyConnects",
        path: "/view/user/buy-connects/",
        component: BuyConnect,
      },
      {
        name: "PurchaseHistory",
        path: "/view/user/purchase-history/",
        component: PurchaseHistory,
      },
      { name: "Paystack", path: "pay-with-paystack/:id", component: Paystack },
      { name: "Favorite", path: "/user/favorite", component: Favorite },
      { name: "UserMatch", path: "/user/matches", component: UserMatch },
      { name: "Search", path: "/search", component: SearchComponent },
      { name: "Settings", path: "/settings", component: Settings },
      {
        name: "SearchUser",
        path: "search/users/search-user",
        component: SearchUser,
      },
      {
        name: "SearchLocation",
        path: "search/users/search-by-location",
        component: SearchLocation,
      },
      { name: "Search", path: "/search/users/index", component: Search },
      { name: "HookHistory", path: "/hook/history", component: HookHistory },
      { name: "OngoingHook", path: "/hook/ongoing", component: OngoingHook },
      { name: "UserView", path: "/user/view/:id", component: UserView },
      {
        name: "HookieDetails",
        path: "/user/hookie-details/:id",
        component: HookieDetails,
      },
      {
        name: "HookerDetails",
        path: "/user/hooker-details/:id",
        component: HookerDetails,
      },
    ],
  },

  {
    name: "AuthLayout",
    path: "/auth",
    meta: { isGuest: true },
    component: AuthLayout,
    children: [
      { name: "Register", path: "/register", component: Register },
      { name: "Login", path: "/login", component: Login },
      { name: "Verify", path: "/email/verify", component: Verify },
      {
        name: "GetVerify",
        path: "/email/getverify/:id/:hash",
        component: GetVerify,
      },
      {
        name: "VerificationSuccess",
        path: "/email/verify/success",
        component: Success,
      },
      { name: "ForgotPassword", path: "/forgot-password", component: Forgot },
      {
        name: "CodeCheck",
        path: "/forgot-password/code",
        component: CodeCheck,
      },
      { name: "Reset", path: "/reset-password/:code", component: Reset },
    ],
  },

  {
    name: "GuestLayout",
    path: "/guest",
    meta: { isGuest: true },
    component: GuestLayout,
    children: [
      {
        path: "/404",
        name: "NotFound",
        component: NotFound,
      },

      {
        path: "/privacy",
        name: "Privacy",
        component: Privacy,
      },

      {
        path: "/terms",
        name: "Terms",
        component: Terms,
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.auth.user.token) {
    next({ name: "Login" });
  } else if (store.state.auth.user.token && to.meta.isGuest) {
    next({ name: "ChatGeneral" });
  } else {
    next();
  }
});

export default router;
