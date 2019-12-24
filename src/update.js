import { regionColor, timeLabel } from "./legend.js";
import { g } from "./chart_area.js";
import { xScale, yScale, area } from "./scales.js";
import { tip } from "./tooltip.js";
import { selectColor } from "./button.js";

export const update = (arr, time) => {
  let t = d3.transition().duration(100);

  arr = selectColor(arr);

  let circles = g.selectAll("circle").data(arr, function(d) {
    return d.name;
  });

  circles.exit().remove();

  circles
    .enter()
    .append("circle")
    .attr("fill", function(d) {
      return regionColor(d.region);
    })
    .merge(circles)
    .attr("cy", function(d) {
      return yScale(d.Elderly);
    })
    .attr("cx", function(d) {
      return xScale(d.Youth);
    })
    .attr("r", function(d) {
      return area(d.Pop);
    })
    .attr("opacity", "70%")
    .style("cursor", "pointer")
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);

  timeLabel.text(+(time + 2000));
};
