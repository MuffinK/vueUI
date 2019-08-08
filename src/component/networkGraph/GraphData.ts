import cytoscape from "cytoscape";
const networkElements:
	| cytoscape.ElementsDefinition
	| cytoscape.ElementDefinition[]
	| Promise<cytoscape.ElementsDefinition>
	| Promise<cytoscape.ElementDefinition[]>
	| undefined = {
	nodes: [
		{ data: { id: "a", parent: "b" } },
		{ data: { id: "b" } },
		{ data: { id: "c", parent: "b" } },
		{ data: { id: "d" } },
		// { data: { id: "e" } },
		{ data: { id: "f", parent: "e" } }
	],
	edges: [
		{ data: { id: "ad", source: "d", target: "f" } },
		{ data: { id: "eb", source: "d", target: "b" } }
	]
};
const networkStyle: cytoscape.Stylesheet[] = [
	{
		selector: "node",
		css: {
			content: "data(id)",
			shape: "rectangle",
			"text-valign": "center",
			"text-halign": "center"
		}
	},
	{
		selector: ":parent",
		css: {
			"text-valign": "top",
			"text-halign": "center"
		}
	},
	{
		selector: "edge",
		css: {
			"curve-style": "bezier",
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
