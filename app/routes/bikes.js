import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      datapoints: fetch("https://data.somervillema.gov/resource/m99j-8gw8.json?$limit=3000").then(response => response.json()),
      highcharts: import('highcharts')
    });
  }
});
