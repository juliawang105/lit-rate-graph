# LitRate Graph
[Live Site](https://juliawang105.github.io/lit-rate-graph/)
![splash](https://i.pinimg.com/originals/0b/c8/9a/0bc89a6675872e3bda59f0ea43e9e451.gif)

## Background

Inspired by [New York Times reporting of South Korean schools enrolling illiterate grandmothers](https://www.nytimes.com/2019/04/27/world/asia/south-korea-school-grandmothers.html), LitRate Graph serves as a dynamic visualization to highlight the disparity between youth and elderly literacy rates in nations around world. With data pulled from World Bank, this interactive graph allows users to see the literacy rates over time and to choose specific years and regions to view. The circles represent countries with reported data; their sizes correlate to the population size for that year, and they are colored according to region. 

## Technologies Used

* D3.js to create the graph and corresponding data circles
* Vanilla JS for dynamic features 
* HTML5 to display content 
* CSS3 for styling 

## Key Features

### Display by Year and Region

#### Year:

* Each country's data is displayed according to year. 
* D3's exit() , remove() , enter() , and merge() methods are called to allow for correct data to display. 
```javascript
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
      .on("mouseover", tip.show)
      .on("mouseout", tip.hide);
   ```
   #### Region: 
   * D3's ordinal scale is utilized to allow for correct regional color rendering. 
``` javascript
export const regions = ["Europe", "Asia", "Americas", "Africa", "Oceania"];

    export const regionColor = d3.scaleOrdinal(d3.schemeTableau10);
    
    let legend = g
      .append("g")
      .attr(
        "transform",
        "translate(" + 810 + "," + (425) + ")"
      );

    export const regionLegend = regions.forEach(function(region, i) {
      let legendRow = legend
        .append("g")
        .attr("transform", "translate(0, " + i * 20 + ")");

      legendRow
        .append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", regionColor(region))
        .attr("opacity", "70%")
        
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
   ```
### Button Controls

* Users have the ability to play through all the years to see a general trend of literacy rates. 
* Users have the ability to pause on specific years or reset to start again from the beginning. 
* Features were created using Vanilla JS's setInterval and clearInterval functions to update and clear data rendering. 
![buttons](https://i.pinimg.com/originals/bf/d8/5d/bfd85d45435b44b25e7a93b56de6f44b.gif)

### Slider Control

* Users have the ability to choose specific years they want to view using the date slider. 
* As users pause on a specific years, data rendered in update via eventListeners. 
```  javascript let rangeslider = document.getElementById("sliderRange");
   let output = document.getElementById("demo");
   output.innerHTML = rangeslider.value;
   let year;

   export const slider = arr => {
     rangeslider.addEventListener('input', function(event){
         year = event.target.value - 2000;
         output.innerHTML = event.target.value;
         update(finalData[year], year)
     })
   };
   ```
#### D3 Tips 
* Users can hover over specific circles to see country specific data. 
* Dynamic displays were created via D3's mouseover and mouseout effects. 
![tips](https://i.pinimg.com/originals/20/9e/8d/209e8db91a1017b3be67f3e3e09edfee.gif)





