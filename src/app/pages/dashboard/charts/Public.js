import { Line } from 'react-chartjs-2';

const mounth = {
  one: 'فروردین',
  two: 'اردیبهشت',
  three: 'خرداد',
  four: 'تیر',
  // five: 'مرداد',
  // six: 'شهریور',
  // seven: 'مهر',
};

const data = {
  labels: Object.values(mounth),
  datasets: [
    {
      label: 'میزان فروش',
      data: [10, 44, 35, 58],
      borderColor: 'blue',
      backgroundColor: 'blue',
    },
  ],
};

const Public = () => {
  return (
    <Line
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'نمودار فروش کلی',
          },
        },
      }}
    />
  );
};

export default Public;
