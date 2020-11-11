function init(elements) {


  let svg = d3.select("body").append("svg")
    .attr("width", 800)
    .attr("height", 800)
    .style("background-color", d3.color("rgba(255, 0, 0, 0.5)") )
    ;
  
  const title = svg.append("text")
	.attr("x", 400)
	.attr("y", 40)
	.attr("text-anchor","middle")
	.attr("font-family", "sans-serif")
	.attr("font-size", "24px")
	.attr("fill", "black")
	.text("Frequency of Pokemon Species as Leading Pokemon in Double Battles");
  
  const horizontalAxis = svg.append("line")
    .attr("x1", 80)
	.attr("y1", 750)
	.attr("x2", 720)
	.attr("y2", 750)
	.attr("stroke", "black");
	
  const hAxisLabel = svg.append("text")
	.attr("x", 400)
	.attr("y", 790)
	.attr("text-anchor", "middle")
	.attr("font-family", "sans-serif")
	.attr("font-size", "16px")
	.attr("fill", "black")
	.text("Frequency");
	
  const horizontalScale1 = svg.append("line")
	.attr("x1", 180)
	.attr("y1", 750)
	.attr("x2", 180)
	.attr("y2", 760)
	.attr("stroke", "black");

  const horizontalScale2 = svg.append("line")
	.attr("x1", 280)
	.attr("y1", 750)
	.attr("x2", 280)
	.attr("y2", 760)
	.attr("stroke", "black");
	
  const horizontalScale3 = svg.append("line")
	.attr("x1", 380)
	.attr("y1", 750)
	.attr("x2", 380)
	.attr("y2", 760)
	.attr("stroke", "black");
	
  const horizontalScale4 = svg.append("line")
	.attr("x1", 480)
	.attr("y1", 750)
	.attr("x2", 480)
	.attr("y2", 760)
	.attr("stroke", "black");

  const horizontalScale5 = svg.append("line")
	.attr("x1", 580)
	.attr("y1", 750)
	.attr("x2", 580)
	.attr("y2", 760)
	.attr("stroke", "black");
	
  const horizontalScale6 = svg.append("line")
	.attr("x1", 680)
	.attr("y1", 750)
	.attr("x2", 680)
	.attr("y2", 760)
	.attr("stroke", "black");
  
  for (let n = 1; n <= 6; n++){
	  let scalePoint = svg.append("text")
        .attr("x", 80 + n * 100)
		.attr("y", 770)
		.attr("text-anchor", "middle")
		.attr("font-family", "sans-serif")
		.attr("font-size", "12px")
		.attr("fill", "black")
		.text(n.toString());
  }
  let circleCounter = 0;
  
  let circles = svg.selectAll()
	.data(elements)
	.enter()
	  .append("circle")
	  .attr("fill", d3.color("rgba(59, 235, 223, 1)"))
	  .attr("cx", d => {return 80 + d.Frequency * 100;})
	  .attr("cy", d => {circleCounter++; return 80 + circleCounter * 20;})
	  .attr("r", 8)
	  .attr("stroke", d3.color("rgba(0, 0, 0, 0.5)"))
	  .attr("stroke-width", 2);
  
  let nameCounter = 0;
  
  let names = svg.selectAll()
    .data(elements)
	.enter()
	  .append("text")
      .attr("text-anchor","left")
      .attr("font-family", "sans-serif")
      .attr("font-size", "12px")
      .attr("fill", "black")
      .attr("x", d => {return d.Frequency * 100 + 95})
      .attr("y", d => {nameCounter++; return 85 + nameCounter * 20;})
      .text(d => {return d.Name});
	  

}