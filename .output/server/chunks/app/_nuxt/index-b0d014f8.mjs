import { u as useFetch, _ as _sfc_main$1 } from './Card-dbf07c5f.mjs';
import { defineComponent, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../server.mjs';
import 'unhead';
import '@unhead/shared';
import './index-6a088328.mjs';
import './nuxt-link-46d6823b.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRoute();
    const { pending, data: items } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "https://fakestoreapi.com/products",
      "$pqtWcjQkdb"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="container mx-auto bg-slate-300 h-full min-h-screen w-full flex flex-wrap gap-4 p-4">`);
      if (unref(pending)) {
        _push(`<div class="loading">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</div>`);
      } else {
        _push(`<div class="container mx-auto bg-slate-300 h-full min-h-screen w-full flex flex-wrap gap-4"><!--[-->`);
        ssrRenderList(unref(items), (item) => {
          _push(ssrRenderComponent(_sfc_main$1, {
            key: item.id,
            id: item.id,
            title: item.title,
            image: item.image
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-b0d014f8.mjs.map
