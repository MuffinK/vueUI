<template>
	<e-chart :options="options" theme="light" :init-options="initOptions" />
</template>
<style scoped>
.echarts {
	width: 100%;
	height: 250px;
}
</style>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class BaseEchart extends Vue {
	initOptions = {};
}
</script>
