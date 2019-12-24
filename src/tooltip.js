import { g } from "./chart_area.js";

export const tip = d3
  .tip()
  .attr("class", "d3-tip")
  .html(function(d) {
    let text = "<strong>Country:</strong> <span >" + d.name + "</span><br>";
    text += "<strong>Region:</strong> <span>" + d.region + "</span><br>";
    text +=
      "<strong>Eldery Literacy Rate:</strong> <span>" +
      d3.format(".0%")(d.Elderly / 100) +
      "</span><br>";
    text +=
      "<strong>Youth Literacy Rate:</strong> <span>" +
      d3.format(".0%")(d.Youth / 100) +
      "</span><br>";
    text +=
      "<strong>Population:</strong> <span>" +
      d3.format(",.0f")(d.Pop) +
      "</span><br>";
    return text;
  });

g.call(tip);
