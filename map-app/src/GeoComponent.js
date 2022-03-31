import React, { useState, useRef, useEffect } from "react";
import { select, geoPath, geoMercator, min, max, scaleLinear } from "d3";
import useResizeObserver from "./useResizeObserver";

function GeoComponent({ data, property }) {

    const svgRef = useRef();
    const wrapperRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    const [selectedRegion, setSelectedRegion] = useState(null);

    useEffect(() => {
        const svg = select(svgRef.current);
        const minProp = min(data.features, feature => feature.properties[property]);
        const maxProp = max(data.features, feature => feature.properties[property]);
        const colorScale = scaleLinear().domain([minProp, maxProp]).range(["red", "green"]);
        const { width, height } = dimensions || wrapperRef.current.getBoundingClientRect();

        const projection = geoMercator().fitSize([width, height], selectedRegion || data);
        const pathGenerator = geoPath().projection(projection);

        svg
            .selectAll(".region")
            .data(data.features)
            .join("path")
            .on("click", (event, feature) => setSelectedRegion(selectedRegion === feature ? null : feature))
            .attr("class", "region")
            .transition()
            .attr("fill", feature => colorScale(feature.properties[property]))
            .attr("d", feature => pathGenerator(feature));
        svg
            .selectAll(".label")
            .data([selectedRegion])
            .join("text")
            .attr("class", "label")
            .text(feature => feature && feature.properties.sec_neigh + ' : ' + feature.properties[property])
            .attr("x", 10)
            .attr("y", 25);

    }, [data, dimensions, property, selectedRegion]);



    return (
        <div ref={wrapperRef}>
            <svg ref={svgRef}></svg>
        </div>

    );
}

export default GeoComponent;