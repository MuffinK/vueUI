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
	background: #f5f8ff;
}
</style>
