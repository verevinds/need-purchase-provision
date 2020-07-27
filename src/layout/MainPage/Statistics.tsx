import * as React from 'react';
import Chart from 'react-apexcharts';
import './Statistics.scss';

export interface IStatistics {}

const Statistics: React.FC<IStatistics> = () => {
  const options = {
    plotOptions: {
      pie: {
        startAngle: 0,
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,
        customScale: 1,
        dataLabels: {
          offset: 0,
          minAngleToShowLabel: 10,
        },
        donut: {
          size: '65%',
          background: 'transparent',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '22px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: undefined,
              offsetY: -10,
              formatter: function (val) {
                return val;
              },
            },
            value: {
              show: true,
              fontSize: '16px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 800,
              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                return val;
              },
            },
            total: {
              show: true,
              showAlways: true,
              label: 'поданых позиций',
              fontSize: '10px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              color: '#373d3f',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
    legend: {
      show: false,
      showForSingleSeries: true,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      floating: false,
      fontSize: '12px',
      textAnchor: 'start',
      useSeriesColors: false,
    },
    onItemClick: {
      toggleDataSeries: true,
    },
    onItemHover: {
      highlightDataSeries: true,
    },
    dataLabels: {
      enabled: true,
    },
    theme: {
      mode: 'light',
      palette: 'palette1',
    },
  };

  const [state, setState] = React.useState({
    options: {
      ...options,
      labels: ['включены в заявку', 'распределенных', 'необработаных'],
      theme: { ...options.theme, palette: 'palette2' },
    },
    series: [2161, 367, 125],
  });
  const [state2, setState2] = React.useState({
    options: { ...options, labels: ['в процессе', 'завершено', 'отменено'] },
    series: [2434, 1157, 348],
  });
  const [state3, setState3] = React.useState({
    options: {
      ...options,
      labels: ['распределены в срок', 'обработка > 10 дней'],
      theme: { ...options.theme, palette: 'palette3' },
    },
    series: [2923, 1016],
  });
  return (
    <div className='statistics'>
      <Chart options={state2.options} series={state2.series} type='donut' width='450' />
      <Chart options={state.options} series={state.series} type='donut' width='450' />
      <Chart options={state3.options} series={state3.series} type='donut' width='450' />
    </div>
  );
};

export default React.memo(Statistics);
