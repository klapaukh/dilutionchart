let cards = d3.select("#cards")
              .selectAll("div")
              .data(full_data)
              .enter()
              .append("div")
              .attr("class", "card");

            let body = cards
              .append("div")
              .attr("role", "button")
              .style("background-color", function(d) {return d.colour;})
              .attr("aria-expanded", "false")
              .attr("data-bs-toggle", "collapse")
              .attr("data-bs-target", function(d,i) {return "#card-child-"+i;})
              .attr("class", "card-body individual-selector");

            // Add a title
            body.append("h4")
              .attr("class", "card-title")
              .text(function(d) {return d.Drug;});

            // Add Audience
            body.append("h5")
              .attr("class", "card-subtitle mb-2 text-muted")
              .text(function(d) {return d.Audience;});

            let sections = cards.append("ul")
              .attr("class", "list-group list-group-flush collapse")
              .attr("id", function(d,i) {return "card-child-" + i});

            // Add Preparation
            common_properties = ["Preparation", "Concentration", "Infusion Rate", "Total Dose / Volume", "Bolus", "Comments"];
            for (const prop of common_properties) {
                let prep = sections.append("li")
                    .attr("class", "list-group-item");

                prep.append("strong")
                    .text(prop);

                if (prop === "Bolus") {
                    prep.append("ul")
                        .html(function(d) { return d[prop].reduce((prev, cur) => prev + "<li>" + cur + "</li>", ""); });
                } else {
                    prep.append("div")
                        .html(function(d) {return d[prop]});
                }
            }