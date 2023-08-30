import { useMemo } from 'react';

const cache = new WeakMap<Document, number>();

interface UseScrollbarWidthOptions {
  /**
   * Reference document to measure the scrollbar width
   */
  targetDocument: Document | null | undefined;

  /**
   * Does not use the cache and recalculates the scrollbar width
   */
  force?: boolean;

  /**
   * CSS class to apply to the scrollable element.
   * Used for checking scrollbar width of an element with a styled scrollbar.
   */
  className?: string;
}

/**
 * @returns The width in pixels of the scrollbar in the user agent.
 * May be 0 for overlay scrollbars.
 */
export function useScrollbarWidth(options: UseScrollbarWidthOptions) {
  const { targetDocument, force, className } = options;
  return useMemo(() => {
    if (!targetDocument) {
      return 0;
    }

    if (!force && cache.has(targetDocument)) {
      return cache.get(targetDocument);
    }

    const outer = targetDocument.createElement('div');
    if (className) {
      outer.className = className;
    }
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';

    const inner = targetDocument.createElement('div');
    outer.appendChild(inner);

    targetDocument.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.remove();
    cache.set(targetDocument, scrollbarWidth);
    return scrollbarWidth;
  }, [targetDocument, force, className]);
}
