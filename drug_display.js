let cards = d3.select("#cards")
              .selectAll("div")
              .data(full_data)
              .enter()
              .append("div")
              .attr("class", "card");

            let body = cards
              .append("div")
              .attr("class", "card-body");

            // Add a title
            body.append("h5")
              .attr("class", "card-title")
              .text(function(d) {return d.Drug;});

            // Add Audience
            body.append("h6")
              .attr("class", "card-subtitle mb-2 text-muted")
              .text(function(d) {return d.Audience;});

            let sections = cards.append("ul")
              .attr("class", "list-group list-group-flush collapse");

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
                        .text(function(d) {return d[prop]});
                }
            }