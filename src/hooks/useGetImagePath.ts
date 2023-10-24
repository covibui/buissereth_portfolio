import { Image } from "@/types";
import { useRouter } from "next/router";

export default function useGetImagePath(image: Image) {
  const router = useRouter();
  return `/images${router.asPath}${image.file}`;
}
