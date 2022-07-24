import { defineClientConfig } from '@vuepress/client'

import { syButton } from 'liusy-ui'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(syButton)
  },
  setup() {},
  rootComponents: [],
})