/* eslint-disable react/prop-types */

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";


export default function ShapeBarChart({readData}) {
 

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  return (
    <>
      <div className="w-full bg-[#13131308] max-h-60 lg:max-h-fit rounded-xl py-2 flex justify-center items-center mb-5 mt-10 sm:w-auto  ">
        <BarChart
          width={1200}
          height={500}
          data={readData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className="inline-block"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" label={{ fontSize: "2px" }} />
          <YAxis />
          <Tooltip  />

          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {readData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % 20]}
                background={{ fill: "transparent" }}
              />
            ))}
          </Bar>
          
        </BarChart>
    
      </div>
    </>
  );
}
