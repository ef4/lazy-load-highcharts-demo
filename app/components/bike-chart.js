import Component from '@ember/component';
import groupBy from 'lodash-es/groupBy';

export default Component.extend({
  bikeSeries() {
    let byYear = groupBy(this.datapoints, point => point.year);
    return Object.keys(byYear).map(year => {
      return {
        x: parseInt(year, 10),
        y: byYear[year].filter(point => point.bike != null).reduce((total, point) => total + parseInt(point.bike, 10), 0)
      }
    });
  },

  didInsertElement() {
    this.highcharts.chart(this.element, {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'Bikes',
        data: this.bikeSeries()
      }]
    });
  }
});
