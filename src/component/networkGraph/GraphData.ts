import cytoscape from "cytoscape";
const networkElements:
	| cytoscape.ElementsDefinition
	| cytoscape.ElementDefinition[]
	| Promise<cytoscape.ElementsDefinition>
	| Promise<cytoscape.ElementDefinition[]>
	| undefined = {
	nodes: [
		{
			data: {
				id: "ActiveMQ",
				parent: "message"
			}
		},
		{
			data: {
				id: "emq",
				parent: "message"
			}
		},
		{
			data: {
				id: "socket",
				parent: "message"
			}
		},
		{
			data: {
				id: "http",
				parent: "message"
			}
		},
		{
			data: {
				id: "kafka",
				parent: "message"
			}
		},
		{
			data: {
				id: "message"
			}
		},
		{
			data: {
				id: "ActiveMQ-fileScan",
				parent: "fileScan"
			}
		},
		{
			data: {
				id: "fileScan"
			}
		},
		{
			data: {
				id: "ActiveMQ-keytrade",
				parent: "keytrade"
			}
		},
		{
			data: {
				id: "kafka-keytrade",
				parent: "keytrade"
			}
		},
		{
			data: {
				id: "keytrade"
			}
		},
		{
			data: {
				id: "dsf-POS",
				parent: "POS"
			}
		},
		{
			data: {
				id: "kafka-POS",
				parent: "POS"
			}
		},
		{
			data: {
				id: "POS"
			}
		},
		{
			data: {
				id: "kafka-MQ"
			}
		},
		{
			data: {
				id: "APP"
			}
		},
		{
			data: {
				id: "kafka-appbase",
				parent: "appbase"
			}
		},
		{
			data: {
				id: "appbase"
			}
		},
		{
			data: {
				id: "kafka-appts",
				parent: "appts"
			}
		},
		{
			data: {
				id: "appts"
			}
		},
		{
			data: {
				id: "kafka-event",
				parent: "Events"
			}
		},
		{
			data: {
				id: "Events"
			}
		},
		{
			data: {
				id: "kafka-web",
				parent: "web"
			}
		},
		{
			data: {
				id: "mysql-web",
				parent: "web"
			}
		},
		{
			data: {
				id: "web"
			}
		},
		{
			data: {
				id: "dsf-appdb",
				parent: "appdb"
			}
		},
		{
			data: {
				id: "mysql-appdb",
				parent: "appdb"
			}
		},
		{
			data: {
				id: "influxdb-appdb",
				parent: "appdb"
			}
		},
		{
			data: {
				id: "hbase-appdb",
				parent: "appdb"
			}
		},
		{
			data: {
				id: "appdb"
			}
		}
	],
	edges: [
		{
			data: {
				id: "ActiveMQ-kafka",
				source: "ActiveMQ",
				target: "kafka-MQ"
			}
		},
		{
			data: {
				id: "emq-kafka",
				source: "emq",
				target: "kafka-MQ"
			}
		},
		{
			data: {
				id: "socket-kafka",
				source: "socket",
				target: "kafka-MQ"
			}
		},
		{
			data: {
				id: "http-kafka",
				source: "http",
				target: "kafka-MQ"
			}
		},
		{
			data: {
				id: "http-app-kafka",
				source: "http",
				target: "APP"
			}
		},
		{
			data: {
				id: "kafka-kafka",
				source: "kafka",
				target: "kafka-MQ"
			}
		},
		{
			data: {
				id: "ActiveMQ-APP-fileScan",
				source: "ActiveMQ-fileScan",
				target: "APP"
			}
		},
		{
			data: {
				id: "AMQ-kafka-keytrade",
				source: "ActiveMQ-keytrade",
				target: "kafka-keytrade"
			}
		},
		{
			data: {
				id: "kafka-app-keytrade",
				source: "kafka-keytrade",
				target: "APP"
			}
		},
		{
			data: {
				id: "dsf-kafka-POS",
				source: "dsf-POS",
				target: "kafka-POS"
			}
		},
		{
			data: {
				id: "kafka-kafka-POS",
				source: "kafka-POS",
				target: "kafka"
			}
		},
		{
			data: {
				id: "kafka-kafka-appbase",
				source: "kafka-MQ",
				target: "kafka-appbase"
			}
		},
		{
			data: {
				id: "kafka-kafka-appts",
				source: "kafka-MQ",
				target: "kafka-appts"
			}
		},
		{
			data: {
				id: "kafka-dsf-appdb",
				source: "kafka-appts",
				target: "dsf-appdb"
			}
		},
		{
			data: {
				id: "kafka-dsf-apphbase",
				source: "appbase",
				target: "dsf-appdb"
			}
		},
		{
			data: {
				id: "kafka-kafka-event",
				source: "kafka-MQ",
				target: "kafka-event"
			}
		},
		{
			data: {
				id: "kafka-event-web",
				source: "kafka-event",
				target: "kafka-web"
			}
		},
		{
			data: {
				id: "web-kafka-mysql",
				source: "kafka-web",
				target: "mysql-web"
			}
		},
		{
			data: {
				id: "web-mysql-web",
				source: "mysql-web",
				target: "dsf-appdb"
			}
		},
		{
			data: {
				id: "appdb-mysql",
				source: "dsf-appdb",
				target: "mysql-appdb"
			}
		},
		{
			data: {
				id: "appdb-influxdb",
				source: "dsf-appdb",
				target: "influxdb-appdb"
			}
		},
		{
			data: {
				id: "appdb-hbase",
				source: "dsf-appdb",
				target: "hbase-appdb"
			}
		}
	]
};
const networkStyle: cytoscape.Stylesheet[] = [
	{
		selector: "node",
		css: {
			content: "data(id)",
			shape: "rectangle",
			backgroundColor: "#79bdff",
			"text-valign": "center",
			"text-halign": "center"
		}
	},
	{
		selector: ":parent",
		css: {
			backgroundColor: "white",
			"text-valign": "top",
			"text-halign": "center"
		}
	},
	{
		selector: "edge",
		css: {
			"curve-style": "unbundled-bezier",
			"target-arrow-shape": "triangle"
		}
	}
];
const networkLayout:
	| cytoscape.NullLayoutOptions
	| cytoscape.RandomLayoutOptions
	| cytoscape.BaseLayoutOptions
	| cytoscape.GridLayoutOptions
	| cytoscape.CircleLayoutOptions
	| cytoscape.ConcentricLayoutOptions
	| cytoscape.BreadthFirstLayoutOptions
	| cytoscape.CoseLayoutOptions
	| undefined = {
	name: "grid",
	rows: 1
};
export { networkElements, networkStyle, networkLayout };
