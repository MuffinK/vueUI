<template>
	<div>
		<a-layout id="components-layout-demo-responsive">
			<a-layout-sider
				breakpoint="lg"
				collapsed-width="0"
				@collapse="onCollapse"
				@breakpoint="onBreakpoint"
			>
				<a-menu
					style="width: 200px;height: 100vh;"
					:default-selected-keys="['1']"
					:open-keys.sync="openKeys"
					mode="inline"
					theme="dark"
					@click="handleClick"
				>
					<a-sub-menu key="sub1" @titleClick="titleClick">
						<span slot="title"
							><a-icon type="mail" /><span>Navigation One</span></span
						>
						<a-menu-item-group key="g1">
							<template slot="title">
								<a-icon type="qq" /><span>Item 1</span>
							</template>
							<a-menu-item key="1">
								Option 1
							</a-menu-item>
							<a-menu-item key="2">
								Option 2
							</a-menu-item>
						</a-menu-item-group>
						<a-menu-item-group key="g2" title="Item 2">
							<a-menu-item key="3">
								Option 3
							</a-menu-item>
							<a-menu-item key="4">
								车辆及路线信息
							</a-menu-item>
							<a-menu-item key="5">
								新增信息
							</a-menu-item>
						</a-menu-item-group>
					</a-sub-menu>
				</a-menu>
			</a-layout-sider>
			<a-layout-content :style="{ margin: '24px 16px 0' }">
				<div
					:style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
				>
					<MainContent />
				</div>
			</a-layout-content>
		</a-layout>

		<div />
	</div>
</template>
<script>
import debug from "debug";
import MainContent from "./MainContent.vue";
const log = debug("iot-MainLayout:log");
export default {
	name: "MainLayout",
	components: {
		MainContent
	},
	data() {
		return {
			current: ["mail"],
			openKeys: ["sub1"]
		};
	},
	watch: {
		openKeys(val) {
			log(val);
		}
	},
	methods: {
		handleClick(e) {
			switch (e.key) {
				case "1":
					this.$router.push("/");
					break;
				case "2":
					this.$router.push("/chart");
					break;
				case "3":
					this.$router.push("/table");
					break;
				case "4":
					this.$router.push("/carInfo");
					break;
			}
		},
		titleClick(e) {},
		onCollapse(collapsed, type) {
			log(collapsed, type);
		},
		onBreakpoint(broken) {
			log(broken);
		}
	}
};
</script>
