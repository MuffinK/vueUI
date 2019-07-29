<template>
	<div>hello vue env: {{ env }}</div>
</template>
<script>
export default {
	name: "Hello",
	data() {
		return {
			env: process.env.NODE_ENV
		};
	}
};
</script>
