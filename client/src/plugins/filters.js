import dayjs from 'dayjs';
import Vue from 'vue';

const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

Vue.filter('formatDateString', (value) => {
  if (value) {
    return dayjs(value).format('MMMM D, YYYY');
  }
  return value;
});

Vue.filter('relativeDate', (value) => {
  if (value) {
    return dayjs().to(dayjs(value));
  }
  return value;
});

Vue.filter('toUpperCase', (value) => {
  if (!value) return '';
  return value.toUpperCase();
});
