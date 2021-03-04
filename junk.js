// junk code

function remakeOneGraph1(i) { 
    //graphs[i].selectAll("*").remove();
    graphs[i].selectAll("circle").remove()

    var group = groups[i + 1];
    var circles = graphs[i].selectAll("circle")	
        .data(cars)
    
    circles.exit().remove();

    if (i == 0 || i == 2) { 
        circles = circles.enter().append("circle")	
            .attr("stroke", "black")
            .attr("fill", "white") 
            .attr("fill-opacity", 0)
    } else if (i == 1) {
        circles = circles.enter().append("circle")	
            .attr("opacity", 0.8)
    } 

    circles.on("mouseover", function(event, d, i) { 
            tooltip.transition() 
                .duration(200) 
                .style("opacity", .9); 
            updateTooltip(+d["ID"] - 1, event.pageX, event.pageY)
        })
        .on("mouseout", function(d) { 
            tooltip.transition() 
                .duration(200) 
                .style("opacity", 0); 
        });	

    if (i == 0) { 
        circles
            .attr("r",	function(d) { return attr_info[group[2]]["scale"](+d[group[2]]); })
    } else if (i == 1) { 
        circles
            .attr("fill", function(d) { return attr_info[group[2]]["scale"](d[group[2]]); })
            .attr("r",	5);
    } else if (i == 2) { 
        circles
            .attr("r",	5);
    }

    circles
        .attr("cx",	function(d)	{	return	attr_info[group[0]]["scale"](+d[group[0]]);	})
        .attr("cy",	function(d)	{	return	attr_info[group[1]]["scale"](+d[group[1]]);	})
}