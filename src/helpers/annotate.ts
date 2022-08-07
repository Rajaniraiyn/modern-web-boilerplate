import { annotate as roughAnnotate } from "rough-notation";
import type {
  RoughAnnotationConfigBase,
  RoughAnnotationType,
} from "rough-notation/lib/model";

interface AnnotateOptions extends RoughAnnotationConfigBase {
  type?: RoughAnnotationType;
  multiline?: boolean;
  rtl?: boolean;
}
function annotate(element: HTMLElement, options?: AnnotateOptions) {
  const annotation = roughAnnotate(element, { type: "underline", ...options });
  annotation.show();
  return {
    update() {
      annotation.hide();
      annotation.show();
    },
    destroy() {
      annotation.hide();
      annotation.remove();
    },
  };
}

export { annotate };
