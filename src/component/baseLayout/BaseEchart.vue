<template>
	<e-chart :options="options" theme="light" />
</template>
<style scoped>
.echarts {
	width: 100%;
	height: 250px;
}
</style>
<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class BaseEchart extends Vue {}
</script>
