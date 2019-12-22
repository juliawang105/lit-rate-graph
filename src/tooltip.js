import { g } from './chart_area.js';

export const tip = d3
   .tip()
   .attr("class", "d3-tip")
   .html(function(d) {
     let text = d.name;
     // text += " " + d.region_name;
     text += " " + d.Elderly.toFixed(2);
     text += " " + d.Youth.toFixed(2);
     text += " " + d.region;
     text += " " + d.Pop
     return text;
   });

 g.call(tip);