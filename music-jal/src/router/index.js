import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home"
import Login from "../views/Login";
import Cadastrar from "../views/Cadastrar";
import Audios from "../views/Audios";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "LoginItem", component: Login },
  { path: "/cadastro", name: "CadastrarItem", component: Cadastrar },
  { path: "/audios", name: "AudiosItem", component: Audios },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
