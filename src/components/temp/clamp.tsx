import classNames from "classnames";
import * as React from "react";

const info = (information: string) => {
  console.info(
    `%c[INFO]: %c${information}`,
    "color:cyan; font-weight:800",
    "color: cyan;"
  );
};

const classToPx = (className: string) => {
  const [value] = className.split("-").slice(-1);
  const inherent = parseInt(value);

  if (isNaN(inherent)) return undefined;

  return inherent * 4;
};

interface BaseProps {
  overrideClasses?: string;
  overrideProps?: object;
}

type Props = React.PropsWithChildren<
  BaseProps & {
    width?: number | string;
    height?: number | string;
    preventGrowth?: boolean;
    truncate?: boolean;
  }
>;

/**
 * Prevents components from expanding past their boundaries
 *
 * @returns React Element that will not exceed it's boundaries
 */
export const Clamp = (props: Props) => {
  const clampRef = React.useRef<HTMLDivElement>(null);

  const trueWidth =
    typeof props.width === "string"
      ? classToPx(props.width)
      : props.width;

  const trueHeight =
    typeof props.height === "string"
      ? classToPx(props.height)
      : props.height;

  React.useEffect(() => {
    console.info("clamp activated")
  }, [])

  React.useEffect(() => {
    if (!clampRef.current || !trueWidth || !trueHeight) return;

    if (clampRef.current.scrollWidth > trueWidth)
      info(
        `CLAMP width exceeded by ${clampRef.current.scrollWidth -
        trueWidth} pixels`
      );

    if (clampRef.current.scrollHeight > trueHeight)
      info(
        `CLAMP width exceeded by ${clampRef.current.scrollHeight -
        trueHeight} pixels`
      );
  }, [trueHeight, trueWidth]);

  return (
    <div
      className="inline-flex overflow-hidden"
      style={{ width: trueWidth, height: trueHeight }}
      ref={clampRef}
    >
      {props.preventGrowth
        ? React.Children.map(props.children, child => {
          if (!child) return console.error("wtf");

          return React.cloneElement(child as React.ReactElement, {
            className: classNames(
              `${(child as React.ReactElement).props.className ?? ""}`,
              "truncate"
            )
          });
        })
        : props.children}
    </div>
  );
};