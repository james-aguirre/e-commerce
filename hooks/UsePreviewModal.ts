import { create } from "zustand";
import { Product } from "@/types";

//This component is not used in this project, but am keeping it here for future reference in other projects.

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Product) => set({ isOpen: true, data: data }),
  onClose: () => set({ isOpen: false, data: undefined }),
}));

export default usePreviewModal;
