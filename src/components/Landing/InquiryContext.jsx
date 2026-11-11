import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import InquiryDialog from "./InquiryDialog";

const InquiryContext = createContext(null);

export function InquiryProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openInquiry = useCallback(() => setOpen(true), []);
  const closeInquiry = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ openInquiry, closeInquiry }),
    [openInquiry, closeInquiry]
  );

  return (
    <InquiryContext.Provider value={value}>
      {children}
      <InquiryDialog open={open} onClose={closeInquiry} />
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const ctx = useContext(InquiryContext);
  if (!ctx) {
    throw new Error("useInquiry must be used within InquiryProvider");
  }
  return ctx;
}
