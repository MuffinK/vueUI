<template>
	<div>{{ ddd }}</div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class TestTS extends Vue {
	ddd: string = "sag";
}
</script>
