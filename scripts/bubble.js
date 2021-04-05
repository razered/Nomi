(function() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)  
    console.log(vw, vh)  
    var width = 800;
    var height = 750;

    var svg = d3.select(".chart")
                .append("svg")
                .attr("height", height)
                .attr("width", width)
                .append("g")
                .attr("transform", "translate(0,0)")


    var tooltip = d3.select(".label")
                  .style("opacity", 0)
                  .attr("class", "tooltip")
                //   .style("background-color", "black")
                //   .style("border-radius", "5px")
                //   .style("padding", "10px")
                  .style("color", "black")
                  .style("display", "inline")
                  .style("position", "absolute")

    var showTooltip = function(d) {
    tooltip
        .transition()
        .duration(200)
    tooltip
        .style("opacity", 1)
        .html("   " + d.name)
        // .style("left", (d3.mouse(this)[0]) + "px")
        // .style("top", (d3.mouse(this)[1]) + "px")
    }

    var moveTooltip = function(d) {
        tooltip
          .style("opacity", 1)
        //   .style("left", (d3.mouse(this)[0]) + "px")
        //   .style("top", (d3.mouse(this)[1]) + "px")
      }

    var hideTooltip = function(d) {
        tooltip
          .transition()
          .duration(100)
          .style("opacity", 0)
      }
            

    var defs = svg.append("defs");

    var radiusScale = d3.scaleSqrt().domain([1, 11]).range([10, 80])
    // console.log(svg)

    // the simulation is a collection of forces about where we want our circles to go and how we want our circles to interact
    var simulation = d3.forceSimulation()
                    .force("x", d3.forceX(width / 2).strength(0.05))
                    .force("y", d3.forceY(height / 2).strength(0.05))
                    .force("collide", d3.forceCollide(function(d) {
                        return radiusScale(d.size) + 4
                    }))

    d3.queue()
        .defer(d3.csv, "./skillset.csv")
        .await(ready)

    function ready (error, datapoints) {
        defs.selectAll(".skill-pattern")
            .data(datapoints)
            .enter().append("pattern")
            .attr("class", "skill-pattern")
            .attr("id", function(d) {
                return d.id
            })
            .attr("height", "100%")
            .attr("width", "100%")
            .attr("patternContentUnits", "objectBoundingBox")
            .append("image")
            .attr("width", 1)
            .attr("height", 1)
            .attr("preserveAspectRatio", "none")
            .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
            .attr("xlink:href", function(d){
                return d.img
            })


        var circles = svg.selectAll(".skills")
            .data(datapoints)
            .enter().append("circle")
            .attr("class", "skills")
            .attr("r", function(d){
                console.log(radiusScale(d.size))
                return radiusScale(d.size)
            })
            .attr("fill", function(d) {
                return "url(#" + d.id + ")"
            })
            .attr("stroke-width", "2px")
            .attr("stroke", "black")
            .on("click", function(d) {
                console.log(d.url)
                window.open(
                  d.url,
                  '_blank' 
                );
            })
            .on("mouseover", showTooltip)
            .on("mousemove", moveTooltip)
            .on("mouseout", hideTooltip)
            // .on("mouseover", function(d) {
            //     d3.select(this).attr("r", 1.2 * radiusScale(d.size))
            //     return showTooltip
            // })
            // .on("mousemove", moveTooltip )
            // .on("mouseout", function(d) {
            //     d3.select(this).attr("r", radiusScale(d.size))
            //     return hideTooltip
            // })


        simulation.nodes(datapoints)
            .on('tick', ticked)

        function ticked() {
            circles
                .attr("cx", function(d) {
                    return d.x
                })
                .attr("cy", function(d) {
                    return d.y
                })
        }
    }
})();