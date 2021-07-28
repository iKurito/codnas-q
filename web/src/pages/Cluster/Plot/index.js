import PropTypes from 'prop-types'
import * as d3 from 'd3'
import { useEffect } from 'react'
import data from './data.json'

const Plot = ({ maxRmsdQuat, maxRmsdTert, w, h }) => {
  // set the dimensions and margins of the graph
  const margin = { top: 10, right: 30, bottom: 40, left: 60 }
  const width = w - margin.left - margin.right
  const height = h - margin.top - margin.bottom

  useEffect(() => {
    // append the svg object to the body of the page
    const svg = d3
      .select('#scatter')
      .append('svg')
      .attr('width', w)
      .attr('height', h)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    // Add X axis
    const x = d3.scaleLinear().domain([0, 8.15]).range([0, width])
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))

    // Add Y axis
    const y = d3.scaleLinear().domain([0, 2.7]).range([height, 0])
    svg.append('g').call(d3.axisLeft(y).tickValues([0, 1, 2]))

    // Label Y
    svg
      .append('text')
      .attr('text-anchor', 'end')
      .attr('transform', 'rotate(-90)')
      .attr('y', -margin.left + 20)
      .attr('x', -margin.top - height / 2 + 90)
      .style('font-size', '13px')
      .text('Max RMSD Tertiary (Å)')
    // Label X
    svg
      .append('text')
      .attr('text-anchor', 'end')
      .attr('x', width / 2 + margin.left + 20)
      .attr('y', height + margin.top + 25)
      .style('font-size', '13px')
      .text('Max RMSD Quaternary (Å)')

    // Load maximos
    const xPosRMSDQuat = maxRmsdQuat
    const yPosRMSDTert = maxRmsdTert

    // Tooltip
    const tooltip = d3
      .select('#scatter')
      .append('div')
      .style('opacity', 0)
      .attr('class', 'tooltip')
      .attr('style', 'position: absolute; opacity: 0;')
      .style('background-color', 'white')
      .style('border', 'solid')
      .style('border-width', '1px')
      .style('border-radius', '5px')
      .style('padding', '10px')

    // Tooltip functions
    const mouseover = function (d) {
      tooltip.style('opacity', 1)
    }

    const mousemove = function (event, d) {
      tooltip
        .html(`maxRMSD-Q: ${xPosRMSDQuat} Å <br> maxRMSD-T: ${yPosRMSDTert} Å `)
        .style('left', event.pageX + 'px')
        .style('top', event.pageY + 'px')
    }

    // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
    const mouseleave = function (d) {
      tooltip.transition().duration(200).style('opacity', 0)
    }

    // Read the data
    // Color scale: give me a specie name, I return a color
    const color = d3
      .scaleOrdinal()
      .domain(['MM', 'TD', 'RB'])
      .range(['#9EF35B', '#F35B5B', '#5B89FC'])
    // Add dots
    svg
      .append('g')
      .selectAll('dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', function (d) {
        return x(d.RMSD)
      })
      .attr('cy', function (d) {
        return y(d.maxRMSDT)
      })
      .attr('r', 5)
      .style('fill', function (d) {
        return color(d.Group)
      })
      .style('opacity', 0.1)

    svg
      .append('g')
      .selectAll('dot')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', x(xPosRMSDQuat))
      .attr('cy', y(yPosRMSDTert))
      .attr('r', 10)
      .style('fill', 'gray')
      .on('mouseover', mouseover)
      .on('mousemove', mousemove)
      .on('mouseleave', mouseleave)
  }, [])

  return <div id="scatter" />
}

Plot.propTypes = {
  maxRmsdQuat: PropTypes.number.isRequired,
  maxRmsdTert: PropTypes.number.isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
}

export default Plot
