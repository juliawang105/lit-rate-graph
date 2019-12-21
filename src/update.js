import { regions, regionColor, regionLegend, timeLabel } from './legend.js'
import { g } from './chart_area.js';
import { xScale, yScale, area } from './scales.js';
import { tip } from './tooltip.js';

export const update = (arr, time) => {
        
    let t = d3.transition().duration(100);

    let continent = document.getElementById("continent-select");
    let value = continent.value;
    
    let data = arr.filter(function(d){
        if(value === 'all'){
            return true;
        } else {
            return d.region === value; 
        }
    })
//  console.log(continent)

    let circles = g.selectAll("circle").data(data, function(d) {
    return d.Entity;
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
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);

    timeLabel.text(+(time + 2000));

}