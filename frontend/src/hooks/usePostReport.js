import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostReport = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(
        "http://localhost:3000/api/financial_report",
        data,
      );
      return response.data;
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ["reports"] });
    },
  });

  return {
    save: mutation.mutate,
    isPending: mutation.isPending,
  };
};

export default usePostReport;
