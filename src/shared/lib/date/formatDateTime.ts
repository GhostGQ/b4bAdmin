import moment from 'moment';

export const formatDateTime = (value: string | Date) =>
  moment(value).format('DD.MM.YY HH:MM');
