import { u as useFetch, _ as _sfc_main$1 } from './Card-44c8ec19.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
import './nuxt-link-52e762fb.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const cardId = route.params.id;
    const { pending, data: item } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `https://fakestoreapi.com/products/${cardId}`,
      "$4mBXb0llnQ"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen justify-center items-center" }, _attrs))}>`);
      if (unref(item)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          id: unref(item).id,
          title: unref(item).title,
          image: unref(item).image
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><p>\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430.</p></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-62b507da.mjs.map
