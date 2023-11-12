import { u as useFetch, _ as _sfc_main$1 } from './Card-dbf07c5f.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
        _push(`<div><h1>\u0414\u0435\u0442\u0430\u043B\u0438 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438</h1>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          id: unref(item).id,
          title: unref(item).title,
          image: unref(item).image
        }, null, _parent));
        _push(`<p>ID \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438: ${ssrInterpolate(unref(cardId))}</p></div>`);
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
//# sourceMappingURL=_id_-37040293.mjs.map
