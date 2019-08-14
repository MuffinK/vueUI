<template>
	<div id="background" :class="[$style.background]">
		<router-view />
	</div>
</template>
<script>
export default {
	name: "IotBackground"
};
</script>

<style module>
.background {
	width: 100%;
	height: 100%;
	/* z-index: -1; */
	background: #f3f3f7;
}
</style>
