import { height, width, g } from "./chart_area.js";

export const regions = ["Europe", "Asia", "Americas", "Africa", "Oceania"];

export const regionColor = d3.scaleOrdinal(d3.schemeTableau10);

let legend = g
  .append("g")
  .attr("transform", "translate(" + 810 + "," + 425 + ")");

export const regionLegend = regions.forEach(function(region, i) {
  let legendRow = legend
    .append("g")
    .attr("transform", "translate(0, " + i * 20 + ")");

  legendRow
    .append("rect")
    .attr("width", 10)
    .attr("height", 10)
    .attr("fill", regionColor(region))
    .attr("opacity", "70%");

  legendRow
    .append("text")
    .attr("x", -10)
    .attr("y", 10)
    .attr("text-anchor", "end")
    .style("text-transform", "capitalize")
    .attr("font-family", "Karla")
    .text(region)
    .style("fill", "#545454")
    .attr("opacity", "0.8");
});

export const timeLabel = g
  .append("text")
  .attr("y", height)
  .attr("x", width - 20)
  .attr("font-size", "35px")
  .attr("opacity", "0.6")
  .attr("text-anchor", "middle")
  .attr("font-family", "Karla")
  .text("2000")
  .style("fill", "#545454");
