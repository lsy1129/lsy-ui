# 客户端配置的使用方法

你可以直接在你的项目中使用 [客户端配置文件](../../guide/configuration.md#客户端配置文件) 。或者，在你的插件或者主题中，使用 [clientConfigFile](../../reference/plugin-api.md#clientconfigfile) Hook ：

在客户端配置文件中，`@vuepress/client` 包提供了一个 [defineClientConfig](../../reference/client-api.md#defineclientconfig) 函数来帮助你定义客户端配置：