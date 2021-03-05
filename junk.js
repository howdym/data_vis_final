// junk code

function remakeGraph() { 
    for (var i = 0; i < 3; i++) { 
        remakeOneGraph(i);
    }
}

function remakeOneGraph(i) { 
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
        circles.merge(circles)
            .attr("r",	function(d) { return attr_info[group[2]]["scale"](+d[group[2]]); })
    } else if (i == 1) { 
        circles.merge(circles)
            .attr("fill", function(d) { return attr_info[group[2]]["scale"](d[group[2]]); })
            .attr("r",	5);
    } else if (i == 2) { 
        circles.merge(circles)
            .attr("r",	5);
    }

    circles.merge(circles)
        .attr("cx",	function(d)	{	return	attr_info[group[0]]["scale"](+d[group[0]]);	})
        .attr("cy",	function(d)	{	return	attr_info[group[1]]["scale"](+d[group[1]]);	})
}

function remakeGraph2() { 
    var circles = graphs[0].graph.selectAll("circle")	
        .data(cars);
	
    circles.exit().remove();

    circles = circles.enter().append("circle")	
        .attr("stroke", "black")
        .attr("fill", "white") 
        .attr("fill-opacity", 0)
        .on("mouseover", function(event, d, i) { 
            tooltip.transition() 
                .duration(200) 
                .style("opacity", .9); 
            updateTooltip(+d["ID"] - 1, event.pageX, event.pageY)
        })
        .on("mouseout", function(d) { 
            tooltip.transition() 
                .duration(200) 
                .style("opacity", 0); 
        })
    .merge(circles) 
        .attr("cx",	function(d)	{	return	attr_info[graphs[0].x]["scale"](+d[graphs[0].x]);	})
        .attr("cy",	function(d)	{	return	attr_info[graphs[0].y]["scale"](+d[graphs[0].y]);	})
        .attr("r",	function(d) { return attr_info[graphs[0].z]["scale"](+d[graphs[0].z]); });

    circles = graphs[1].graph.selectAll("circle")	
        .data(cars);
	
    circles.exit().remove();

    circles = circles.enter().append("circle")	
        .attr("opacity", 0.8)
        .attr("r",	5)
        .on("mouseover", function(event, d, i) { 
            tooltip.transition() 
                .duration(200) 
                .style("opacity", .9); 
            updateTooltip(+d["ID"] - 1, event.pageX, event.pageY)
        })
        .on("mouseout", function(d) { 
            tooltip.transition() 
                .duration(200) 
                .style("opacity", 0); 
        })
    .merge(circles) 
        .attr("cx",	function(d)	{	return	attr_info[graphs[1].x]["scale"](+d[graphs[1].x]);	})
        .attr("cy",	function(d)	{	return	attr_info[graphs[1].y]["scale"](+d[graphs[1].y]);	})
        .attr("fill",	function(d) { return attr_info[graphs[1].z]["scale"](+d[graphs[1].z]); });

    circles = graphs[2].graph.selectAll("circle")	
        .data(cars);
	
    circles.exit().remove();

    circles = circles.enter().append("circle")	
        .attr("stroke", "black")
        .attr("fill", "white") 
        .attr("fill-opacity", 0)
        .attr("r",	5)
        .on("mouseover", function(event, d, i) { 
            tooltip.transition() 
                .duration(200) 
                .style("opacity", .9); 
            updateTooltip(+d["ID"] - 1, event.pageX, event.pageY)
        })
        .on("mouseout", function(d) { 
            tooltip.transition() 
                .duration(200) 
                .style("opacity", 0); 
        })
    .merge(circles) 
        .attr("cx",	function(d)	{	return	attr_info[graphs[2].x]["scale"](+d[graphs[2].x]);	})
        .attr("cy",	function(d)	{	return	attr_info[graphs[2].y]["scale"](+d[graphs[2].y]);	});

  }