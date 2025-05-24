import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  useEffect(() => {
    document.title = "Gadget Heaven | Statistics";
  }, []);
  const productData = useLoaderData();

  return (
    <div className="bg-purple-600 text-white text-center py-6 md:py-10 rounded-xl px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">Statistics</h1>
      <p className="text-xs md:text-sm max-w-2xl mx-auto mb-4 md:mb-6">
        Explore the latest gadgets that will take your experience to the next
        level.
      </p>

      <div className="w-full lg:w-4/5 mx-auto bg-white p-2 md:p-4 rounded-md">
        <div className="h-[300px] sm:h-[350px] md:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={productData}
              margin={{
                top: 20,
                right: 10,
                left: 10,
                bottom: productData.length > 5 ? 100 : 50,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="product_title"
                angle={productData.length > 5 ? -45 : 0}
                textAnchor="end"
                interval={0}
                tick={{ fontSize: 10 }}
                height={productData.length > 5 ? 70 : 40}
              />
              <YAxis tick={{ fontSize: 10 }} width={40} />
              <Tooltip
                contentStyle={{
                  fontSize: 12,
                  borderRadius: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  color: "#000",
                }}
              />
              <Bar dataKey="price" fill="#9333ea" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
