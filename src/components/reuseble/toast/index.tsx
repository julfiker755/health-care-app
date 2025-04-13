import Toast from "react-native-toast-message";

type ToastProps = {
  type: "success" | "error" | "info";
  title: string;
  text?: string;
};

export default function ShowToast({ type, title, text }: ToastProps) {
  Toast.show({
    type,
    text1: title,
    text2: text,
  });
}
