<template>
	<div id="iot-title" :class="[$style.iotTitle]">{{ title }}</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class IotTitle extends Vue {
	@Prop({ default: "title" })
	readonly title!: string;
}
</script>
<style module>
.iotTitle {
	text-align: left;
	color: white;
}
</style>
