"use client";

import { useEffect } from "react";

export default function DisableInspect() {
  useEffect(() => {
    // ❌ Right Click Disable
    const handleContextMenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

  }, []);

  return null;
}