import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['کالای دیجیتال', 'لوازم خانگی', 'لباس و کفش', 'ابزار صنعتی'],
  datasets: [
    {
      label: 'میزان فروش به تفکیک دسته بندی',
      data: [45, 20, 25, 10],
      backgroundColor: ['blue', 'orange', 'yellow', 'red'],
    },
  ],
};

const ByCategory = () => {
  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'میزان فروش به تفکیک دسته بندی',
          },
        },
      }}
    />
  );
};

export default ByCategory;
