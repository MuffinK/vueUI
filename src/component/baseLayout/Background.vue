<template>
	<div id="background" :class="[$style.background]">
		<IndexLayout />
	</div>
</template>
<script>
import IndexLayout from "../baseLayout/IndexLayout";
export default {
	name: "IotBackground",
	components: {
		IndexLayout
	}
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
