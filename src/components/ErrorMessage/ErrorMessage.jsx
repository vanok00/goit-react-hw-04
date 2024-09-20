import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ErrorMessage() {
  useEffect(() => {
    toast.error("Something went wrong!");
  }, []);

  return null;
}
