import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useGetReports = () => {
  const query = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const response = await axios.get(
        "http://localhost:3000/api/financial_reports",
      );
      return response.data;
    },
  });

  return {
    reports: query.data || [],
  };
};

export default useGetReports;
