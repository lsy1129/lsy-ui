export const data = JSON.parse("{\"key\":\"v-3d1edf0c\",\"path\":\"/pages/one/test.html\",\"title\":\"组件二\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"组件二\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"pages/one/test.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
