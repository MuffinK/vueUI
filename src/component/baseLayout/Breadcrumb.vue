<template>
	<div :class="showTitle ? 'contener' : 'contener2'">
		<a :class="showTitle ? 'title' : 'titleSmall'" href="#/Operating/index">
			<h1>{{ titleArr[0] }}</h1></a
		>
		<div v-for="(value, index) in titleArr" :key="index">
			<div v-if="index != 0" class=" titleSmallShowUp">
				<h1>{{ `/  ${value}` }}</h1>
			</div>
		</div>
	</div>
</template>
<style scoped>
.title {
	color: #333;
	font-size: 29px;
	font-weight: bold;
	text-decoration: none;
	transition: font-size 0.5s, margin-left 0.5s, width 0.5s;
}
.titleSmall:hover {
	color: #333;
	text-decoration: none;
}
.titleSmall {
	font-size: 15px;
	margin-left: 10px;
	color: #333;
	transition: font-size 0.5s, margin-left 0.5s, width 0.5s;
}
.titleSmall > h1 {
	font-weight: 100;
}
.titleSmall:hover {
	color: #0f90cc;
}
.titleSmallShowUp {
	margin-left: 10px;
	font-size: 15px;
	animation: myfirst 0.5s 0.5s;
	opacity: 0;
	color: #333;
	animation: myfirst 0.5s 0.5s forwards;
}
@keyframes myfirst {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@-webkit-keyframes myfirst /* Safari and Chrome */ {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
.contener {
	display: flex;
	flex-direction: row;
	width: 1200px;
	margin: auto;
	-webkit-transition: font-size 0.5s, margin 0.5s, width 0.5s; /* For Safari 3.1 to 6.0 */
	transition: font-size 0.5s, margin 0.5s, width 0.5s;
}

.contener2 {
	display: flex;
	flex-direction: row;
	width: 100%;
	margin: auto;
	-webkit-transition: font-size 0.5s, margin 0.5s, width 0.5s; /* For Safari 3.1 to 6.0 */
	transition: font-size 0.5s, margin 0.5s, width 0.5s;
}
</style>
<script lang="ts">
import { mapGetters } from "vuex";

export default {
	name: "Breadcrumb",
	// mixins: [Style],
	data() {
		return {
			height: 175,
			padding: [10, 10, 10, 10]
		};
	},
	computed: {
		...mapGetters("breadcrumb", {
			showTitle: "isShow",
			titleArr: "renderTitleArr"
		})
	}
};
</script>
