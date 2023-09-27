"use client";

import usePreviewModal from "@/hooks/UsePreviewModal";
import Gallery from "./gallery";
import Modal from "./ui/Modal";
import Info from "./ui/Info";

const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) return null;

  const images = [
    {
      id: "1",
      src: product.image1,
    },
    {
      id: "2",
      src: product.image2,
    },
  ];

  return (
    <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
      <div
        className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8
    sm:grid-cols-12 lg:gap-x-8
    "
      >
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
