export const data = JSON.parse("{\"key\":\"v-16950d5e\",\"path\":\"/pages/component/test.html\",\"title\":\"组件二\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"组件二\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"pages/component/test.md\"}")

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
