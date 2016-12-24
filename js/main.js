/*$(document).ready(function() { 

var data = [5, 8, 15, 16, 23, 42];

  d3.select(".chart")
      .selectAll("div")
          .data(data)
      .enter().append("div")
          .style("width", function(d) {return d * 10 + "px"; })
          .text (function(d) {return d; });

});




//Random valued bars
var h = 100;
var w = 500;
var barPadding = 1;

var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

var svg = d3.select ("body")
                      .append ("svg")
                      .attr ("height", h)
                      .attr ("width", w);


svg.selectAll ("rect")
      .data (dataset)
      .enter ( )
      .append ("rect")
      .attr ("x", function(d, i){
            return i * (w / dataset.length);
      })
      .attr ("y", function(d) {
            return h - d * 4;
      })
      .attr ( "width", w / dataset.length - barPadding)
      .attr ("height", function(d) {
            return d * 4;
      })
      .attr ("fill", function(d) {
              return "rgb(0,0, " + (d * 10) + ")";
      });

svg.selectAll ("text")
      .data (dataset)
      .enter ( )
      .append ("text")
      .text (function(d) {
            return d;
      })
      .attr ("x", function(d, i){
            return i * (w / dataset.length) + 5;
      })
      .attr ("y", function(d) {
            return h - (d * 4) + 15;
      })
      .attr ("fill", "white")
      .attr ("font-family", "sans-serif")
      .attr ("font-size", "11")
      .attr ("text-anchor", "middle");


//

var dataset = [ ];
for (var i = 0; i < 25; i++) {
  var newNumber = Math.random() * 30;
  dataset.push(newNumber);
}

d3.select ("body").selectAll ("div")
     .data (dataset)
     .enter ( )
     .append ("div")
     .attr ("class", "bar")
     .style ("height", function(d) {
          var barHeight = d * 5;
          return barHeight + "px";
     });
*/


// Few bars varying in color and size
  var dataArray = [20, 40, 50, 60];
  var width = 500;
  var height = 500;

  var widthScale = d3.scaleLinear ()
                                .domain([0, 60])
                                .range([0, width]);


  var color = d3.scaleLinear()
                          .domain([0, 60])
                          .range(["red", "blue"])

  var xAxis = d3.axisBottom(widthScale)
                          .ticks(25);
                

  var canvas = d3.select("body")
                        .append("svg")
                        .attr("width", width)
                        .attr("height", height)
                        .append("g")
                        .attr("transform", "translate(50, 50) ")
                        //.call(xAxis);

  var bars = canvas.selectAll("rect")
                      .data(dataArray)
                      .enter()
                              .append("rect")
                              .attr("width", function(d) {return widthScale(d);  })
                              .attr("height", 50)
                              .attr("fill", function(d) {return color(d); })
                              .attr("y", function(d, i) { return i * 100 });

      canvas.append("g")
                    .attr("transform", "translate(0, 400) ")
                    .call (xAxis);

                    

