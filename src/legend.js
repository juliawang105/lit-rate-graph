  import{ height, width, g } from './chart_area.js'
  
    export const regions = ["Europe", "Asia", "Americas", "Africa", "Oceania"];

    export const regionColor = d3.scaleOrdinal(d3.schemeTableau10);
    
    let legend = g
      .append("g")
      .attr(
        "transform",
        "translate(" + 80 + "," + (0) + ")"
      );

    export const regionLegend = regions.forEach(function(region, i) {
      let legendRow = legend
        .append("g")
        .attr("transform", "translate(0, " + i * 20 + ")");

      legendRow
        .append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", regionColor(region));

      legendRow
        .append("text")
        .attr("x", -10)
        .attr("y", 10)
        .attr("text-anchor", "end")
        .style("text-transform", "capitalize")
        .text(region);
    });
   
    export const timeLabel = g
             .append("text")
             .attr("y", height - 10)
             .attr("x", width - 40)
             .attr("font-size", "40px")
             .attr("opacity", "0.4")
             .attr("text-anchor", "middle")
             .text("2000");