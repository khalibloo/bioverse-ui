import { useMutation, UseMutationOptions } from "react-query";
import axios, { queryClient } from "@/utils/request";

const addFamily = async () => {
  const { data } = await axios.post("/api/family");
  return data;
};

export default function useAddFamily(
  options?: UseMutationOptions<Family, Error>,
) {
  return useMutation<Family, Error>(addFamily, {
    onSuccess: (...params) => {
      options?.onSuccess?.(...params);
      queryClient.invalidateQueries("families");
    },
    ...options,
  });
}
