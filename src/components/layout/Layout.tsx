import {cn} from "../../../utils/cn";
import {css} from "glamor";
import {cva, type VariantProps} from "class-variance-authority";

const variants = cva(
  " rounded-3xl    dark:bg-neutral-900 flex flex-col justify-center   h-max ",
  {
    variants: {
      size: {
        categoryMain: "  bg-red-500 ",
        slider: "bg-blue-400",
      },
    },
    defaultVariants: {
      size: "categoryMain",
    },
  }
);

type GridItemProps = {children: React.ReactNode} & VariantProps<
  typeof variants
>;

const Layout = ({size, children}: GridItemProps) => {
  return <div className={cn(variants({size, className: ""}))}>{children}</div>;
};

export default Layout;
