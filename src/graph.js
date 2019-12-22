import { g, margin, height, width } from './chart_area.js';
import { xScale, yScale } from './scales';
// //Diagonal Line 
export const line = g
  .append("line")
  .attr("x1", 560)
  .attr("y1", 0)
  .attr("x2", 0)
  .attr("y2", height)
  .attr("stroke", "silver")
  .attr("stroke-width", "1");

//   //X Label
export const xLabel = g
  .append("text")
  .attr("y", height + 50)
  .attr("x", width / 2)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .text("Youth Literacy Rate, Population 15-24 years(%)");

// //Y Label
export const yLabel = g
  .append("text")
  .attr("y", -40)
  .attr("x", -261)
  .attr("font-size", "20px")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90)")
  .text("Elderly Literacy Rate, Population 65+ years(%)");

const xAxis = d3
    .axisBottom(xScale)
    .ticks(10)
    .tickFormat(function(d) {
    return +d;
    });

let yAxis = d3
    .axisLeft(yScale)
    .ticks(10)
    .tickFormat(function(d) {
    return +d;
    });

g.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

g.append("g")
  .attr("class", "y axis")
  .call(yAxis);

