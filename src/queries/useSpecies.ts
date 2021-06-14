import { useQuery, UseQueryOptions } from "react-query";
import axios from "@/utils/request";

const getSpecies = async () => {
  const { data } = await axios.get("/api/species");
  return data;
};

export default function useSpecies(options?: UseQueryOptions<Species[], Error>) {
  return useQuery<Species[], Error>("species", getSpecies, options);
}
