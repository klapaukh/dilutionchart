let troubleshooting_parent = d3.select("#troubleshooting-entries")
              .selectAll("li")
              .data(troubleshooting_entries)
              .enter();

let troubleshooting_bodies = troubleshooting_parent
    .append("li")
    .attr("class", "list-group-item individual-selector")
    .attr("role", "button")
    .attr("aria-expanded", "false")
    .attr("data-bs-toggle", "collapse")
    .attr("data-bs-target", function(d,i) {return "#troubleshooting-child-"+i;});

// Add a title
troubleshooting_bodies.append("h5")
    .text(function(d) {return d.title;});

// Add Text
troubleshooting_bodies.append("div")
    .attr("class", "collapse")
    .attr("id", function(d,i) {return "troubleshooting-child-"+i;})
    .html(function(d) {return d.content;});
