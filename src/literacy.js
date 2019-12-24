import { height, width, g } from "./chart_area.js";
import { line, xLabel, yLabel, xAxis, yAxis } from "./graph.js";
import { xScale, yScale, area } from "./scales.js";
import { regionLegend } from "./legend.js";
import { update } from "./update";
import { button, slider, selectRegion, resetButton } from "./button.js";

export let finalData;

export const Literacy = () => {
  button();
  slider();
  selectRegion();
  resetButton();

  //Parsing Data
  d3.csv("data/literacy.csv").then(data => {
    let sortedData = [
      { year: 2000, countries: [] },
      { year: 2001, countries: [] },
      { year: 2002, countries: [] },
      { year: 2003, countries: [] },
      { year: 2004, countries: [] },
      { year: 2005, countries: [] },
      { year: 2006, countries: [] },
      { year: 2007, countries: [] },
      { year: 2008, countries: [] },
      { year: 2009, countries: [] },
      { year: 2010, countries: [] },
      { year: 2011, countries: [] },
      { year: 2012, countries: [] },
      { year: 2013, countries: [] },
      { year: 2014, countries: [] },
      { year: 2015, countries: [] }
    ];

    for (let i = 0; i < data.length; i++) {
      let pojo = data[i];

      for (let j = 0; j < sortedData.length; j++) {
        if (parseInt(pojo.Year) === sortedData[j].year) {
          sortedData[j].countries.push(pojo);
        }
      }
    }

    finalData = sortedData.map(function(year) {
      return year["countries"]
        .filter(function(country) {
          let dataExists =
            country.Elderly !== "NA" && country.Youth !== "NA" && country.Pop;
          return dataExists;
        })
        .map(function(country) {
          country.Elderly = +country.Elderly;
          country.Youth = +country.Youth;
          country.Pop = +country.Pop;
          return country;
        });
    });

    //Updating data display
    update(finalData[0], 0);
  });
};
