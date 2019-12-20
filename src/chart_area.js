export const margin = { left: 80, right: 20, top: 50, bottom: 100 };
export const height = 800 - margin.top - margin.bottom;
export const width = 900 - margin.left - margin.right;

export const g = d3
         .select("#chart-area")
         .append("svg")
         .attr("width", width + margin.left + margin.right)
         .attr("height", height + margin.top + margin.bottom)
         .append("g")
         .attr(
           "transform",
           "translate(" + margin.left + ", " + margin.top + ")"
         );