import { useQuery, UseQueryOptions } from "react-query";
import axios from "@/utils/request";

const getFamilies = async () => {
  const { data } = await axios.get("/api/family");
  return data;
};

export default function useFamilies(
  options?: UseQueryOptions<Family[], Error>,
) {
  return useQuery<Family[], Error>("families", getFamilies, options);
}
