function init(){
	const svg = d3.select("body").append("svg")
		.attr("width", 500)
		.attr("height", 500)
		.style("background-color", "#1d2326");
	
	const moon = svg.append("circle")
		.attr("cx", 70)
		.attr("cy", 70)
		.attr("r", 30)
		.attr("fill", "#f2efc9");
	
	const waterSurface = svg.append("rect")
		.attr("x", 0)
		.attr("y", 350)
		.attr("width", 500)
		.attr("height", 150)
		.attr("fill", "#214e6b");
	
	const island = svg.append("ellipse")
		.attr("cx", 400)
		.attr("cy", 450)
		.attr("rx", 150)
		.attr("ry", 80)
		.attr("fill", "#bdb591");
		
	
	const treeTrunk = svg.append("polygon")
		.attr("fill", "#4f2b28")
		.attr("points", "385,450  395,350  390,250  405,250  420,350  415,450");
	
	const fruit1 = svg.append("circle")
		.attr("cx", 390)
		.attr("cy", 250)
		.attr("r",10)
		.attr("fill", "#52a375")
	
	const fruit2 = svg.append("circle")
		.attr("cx", 405)
		.attr("cy", 250)
		.attr("r",10)
		.attr("fill", "#52a375")
	
	const fruit3 = svg.append("circle")
		.attr("cx", 400)
		.attr("cy", 260)
		.attr("r",10)
		.attr("fill", "#52a375")
	
	const leaf1 = svg.append("polygon")
		.attr("fill", "#0f4d29")
		.attr("points", "400,240  360,260  330,300  345,250");
	
	const leaf2 = svg.append("polygon")
		.attr("fill", "#0f4d29")
		.attr("points", "400,240  435,245  475,285  440,230");
	
	const leaf3 = svg.append("polygon")
		.attr("fill", "#0f4d29")
		.attr("points", "400,240  370,235  315,245  380,220");
	
	const leaf4 = svg.append("polygon")
		.attr("fill", "#0f4d29")
		.attr("points", "400,240  430,225  485,225  420,210");
	
	const leaf5 = svg.append("polygon")
		.attr("fill", "#0f4d29")
		.attr("points", "400,240  385,275  400,315  370,270");
		
	const leaf6 = svg.append("polygon")
		.attr("fill", "#0f4d29")
		.attr("points", "400,240  415,255  430,300  420,245");
	
	const textBox = svg.append("rect")
		.attr("x", 0)
		.attr("y", 470)
		.attr("width", 500)
		.attr("height", 30)
		.attr("fill", "white");
	
	const txt = svg.append("text")
    .attr("x", 200)
    .attr("y", 495)
    .attr("font-family", "sans-serif")
    .attr("font-size", "18px")
    .attr("fill", "black")
    .text("Reverse Oasis");
}