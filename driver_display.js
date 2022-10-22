let driver_parent = d3.select("#driver-entries")
              .selectAll("li")
              .data(driver_entries)
              .enter();

let driver_bodies = driver_parent
    .append("li")
    .attr("class", "list-group-item")
    .attr("role", "button")
    .attr("aria-expanded", "false")
    .attr("data-bs-toggle", "collapse")
    .attr("data-bs-target", function(d,i) {return "#driver-child-"+i;});

// Add a title
driver_bodies.append("h5")
    .text(function(d) {return d.title;});

// Add Text
driver_bodies.append("div")
    .attr("class", "collapse")
    .attr("id", function(d,i) {return "driver-child-"+i;})
    .html(function(d) {return d.content;});
