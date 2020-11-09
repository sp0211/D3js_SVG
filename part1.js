function init(){
	const svg = d3.select("body").append("svg")
		.attr("width", 500)
		.attr("height", 500)
		.style("background-color", "black");
	
	const moon = svg.append("circle")
		.attr("cx", 70)
		.attr("cy", 70)
		.attr("r", 30)
		.attr("fill", "white");
	
	const waterSurface = svg.append("rect")
		.attr("x", 0)
		.attr("y", 350)
		.attr("width", 500)
		.attr("height", 150)
		.attr("fill", "blue");
	
	const island = svg.append("ellipse")
		.attr("cx", 400)
		.attr("cy", 450)
		.attr("rx", 150)
		.attr("ry", 80)
		.attr("fill", "yellow");
		
	
	const treeTrunk = svg.append("polygon")
		.attr("fill", "brown")
		.attr("points", "385,450  395,350  390,250  405,250  420,350  415,450");
	
	const leaf1 = svg.append("circle")
		.attr("cx", 355)
		.attr("cy", 250)
		.attr("r", 45)
		.attr("fill", "green");
	
	const leaf2 = svg.append("circle")
		.attr("cx", 440)
		.attr("cy", 250)
		.attr("r", 45)
		.attr("fill", "green");
	
	const leaf3 = svg.append("circle")
		.attr("cx", 400)
		.attr("cy", 200)
		.attr("r", 45)
		.attr("fill", "green");
}