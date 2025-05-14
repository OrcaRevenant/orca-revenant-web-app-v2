import React, { ReactNode } from "react";
import { create } from "zustand";
import ConfirmDialogComponent from "../confirm-dialog";

interface ConfirmDialogOptions {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}

interface ConfirmDialogState extends ConfirmDialogOptions {
  isOpen: boolean;
  // Default implementations for onConfirm and onCancel if not provided
  onConfirm: () => void;
  onCancel: () => void;
}

interface ConfirmDialogStore extends ConfirmDialogState {
  show: (options: ConfirmDialogOptions) => void;
  hide: () => void;
}

const useStore = create<ConfirmDialogStore>((set) => ({
  isOpen: false,
  title: "Confirm",
  description: "Are you sure?",
  onConfirm: () => {},
  onCancel: () => set((state) => ({ ...state, isOpen: false })), // Default onCancel hides dialog
  confirmText: "Confirm",
  cancelText: "Cancel",
  show: (options) =>
    set((state) => ({
      ...state,
      isOpen: true,
      title: options.title,
      description: options.description,
      onConfirm: options.onConfirm,
      onCancel: options.onCancel
        ? () => {
            options.onCancel?.();
            set({ isOpen: false });
          }
        : () => set({ isOpen: false }),
      confirmText: options.confirmText || "Confirm",
      cancelText: options.cancelText || "Cancel",
    })),
  hide: () => set((state) => ({ ...state, isOpen: false })),
}));

export const useConfirmDialog = () => {
  const show = useStore((state) => state.show);
  return { confirm: show };
};

export const ConfirmDialogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const {
    isOpen,
    title,
    description,
    onConfirm,
    onCancel,
    confirmText,
    cancelText,
    hide,
  } = useStore();

  const handleConfirm = () => {
    onConfirm();
    hide();
  };

  const handleCancel = () => {
    onCancel(); // This will call the wrapped onCancel which includes hide()
  };

  return (
    <>
      {children}
      <ConfirmDialogComponent
        isOpen={isOpen}
        title={title}
        description={description}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        confirmText={confirmText}
        cancelText={cancelText}
      />
    </>
  );
};
