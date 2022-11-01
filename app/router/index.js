import Vue from "vue";
import VueRouter from "vue-router";
import VuiDesign from "vui-design";
import routes from "app/routes";
import utils from "app/libs/utils";

Vue.use(VueRouter);

const env = process.env.NODE_ENV;
const router =  new VueRouter({
	mode: env === "production" ? "hash" : "history",
	scrollBehavior: () => ({ y: 0 }),
	routes
});

router.beforeEach((to, from, next) => {
	VuiDesign.loading.start();
	next();
});

router.afterEach((to, from) => {
	VuiDesign.loading.finish();
	utils.setPageTitle(to);
});

export default router;