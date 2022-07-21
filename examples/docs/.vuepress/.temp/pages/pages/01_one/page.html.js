export const data = JSON.parse("{\"key\":\"v-10c562a7\",\"path\":\"/pages/01_one/page.html\",\"title\":\"组件一\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"组件一\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"pages/01_one/page.md\"}")

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
