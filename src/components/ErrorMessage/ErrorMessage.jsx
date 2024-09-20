import { toast } from "react-hot-toast";
import { useEffect } from "react";
const ErrorMessage = ({ message, type }) => {
  const showToast = () => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    } else {
      toast(message);
    }
  };

  // Викликаємо тост лише один раз після рендерингу компонента
  useEffect(() => {
    showToast();
  }, []); // Порожній масив залежностей гарантує виклик лише один раз

  return null; // Компонент не потребує рендерингу HTML
};

export default ErrorMessage;
