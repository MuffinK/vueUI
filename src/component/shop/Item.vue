<template>
	<div class="item">
		<img class="itemImg" alt="sss" src="../../picture/pad.png" />
		<div class="detailArea">
			<div class="itemTitle">商品名称</div>
			<div class="itemPrice">¥99.99</div>
		</div>
	</div>
</template>
<script>
import Vue from "vue";
export default {
	name: "Item"
};
</script>
<style scoped>
.item {
	height: 200px;
	width: 300px;
	display: flex;
	flex-direction: row;
	border: 1px #c3c3c3 solid;
}

.detailArea {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.itemImg {
	width: 150px;
	height: 150px;
	margin-left: 20px;
	margin-top: auto;
	margin-bottom: auto;
}

.itemTitle {
	font-size: 26px;
}

.itemPrice {
	font-size: 20px;
	color: #fa5454;
}
</style>
