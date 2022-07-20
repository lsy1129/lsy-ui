<template>
    <sy-button type="primary">Primary Button</sy-button>
    <sy-button>Default Button</sy-button>
    <sy-button type="dashed">Dashed Button</sy-button>
    <sy-button type="text">Text Button</sy-button>
    <sy-button type="link">Link Button</sy-button>

    <br>
    <br>

     <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
        <sy-button type="primary" ghost>Primary</sy-button>
        <sy-button ghost>Default</sy-button>
        <sy-button type="dashed" ghost>Dashed</sy-button>
        <sy-button type="primary" danger ghost>Danger</sy-button>
    </div>

    <br>
    <br>

    <sy-button type="primary">Primary</sy-button>
    <sy-button type="primary" disabled>Primary(disabled)</sy-button>
    <br />
    <sy-button>Default</sy-button>
    <sy-button disabled>Default(disabled)</sy-button>
    <br />
    <sy-button type="dashed">Dashed</sy-button>
    <sy-button type="dashed" disabled>Dashed(disabled)</sy-button>
    <br />
    <sy-button type="text">Text</sy-button>
    <sy-button type="text" disabled>Text(disabled)</sy-button>
    <br />
    <sy-button type="link">Link</sy-button>
    <sy-button type="link" disabled>Link(disabled)</sy-button>
    <br />
    <sy-button danger>Danger Default</sy-button>
    <sy-button danger disabled>Danger Default(disabled)</sy-button>
    <br />
    <sy-button type="text" danger>Danger Text</sy-button>
    <sy-button type="text" danger disabled>Danger Text(disabled)</sy-button>
    <br />
    <sy-button type="link" danger>Danger Link</sy-button>
    <sy-button type="link" danger disabled>Danger Link(disabled)</sy-button>
    <br />

    <div :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }">
        <sy-button ghost>Ghost</sy-button>
        <sy-button ghost disabled>Ghost(disabled)</sy-button>
    </div>

    <br />
    <div>
        <sy-button type="primary" danger>Primary</sy-button>
        <sy-button danger>Default</sy-button>
        <sy-button type="dashed" danger>Dashed</sy-button>
        <sy-button type="text" danger>Text</sy-button>
        <sy-button type="link" danger>Link</sy-button>
    </div>
</template>
<script lang="ts" setup>
import { syButton } from 'sy-ui'

</script>
<style lang="less">
.sy-button {
    margin-right: 8px;
    margin-bottom: 12px;
}
</style>