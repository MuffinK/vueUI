<template>
	<div id="background" :class="[$style.background]" />
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
	background: #101214;
	position: absolute;
	z-index: -1;
}
</style>
