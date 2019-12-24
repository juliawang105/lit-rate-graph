import { height, width } from "./chart_area.js";

export const xScale = d3
  .scaleLinear()
  .range([0, width - 110])
  .domain([1, 100]);

export const yScale = d3
  .scaleLinear()
  //   .base(10)
  .range([height, 0])
  .domain([0, 100]);

export const area = d3
  .scaleLinear()
  .range([3 * Math.PI, 30 * Math.PI])
  .domain([1, 1400000000]);
