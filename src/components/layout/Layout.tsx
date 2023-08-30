import {cn} from "../../../utils/cn";
import {css} from "glamor";
import {cva, type VariantProps} from "class-variance-authority";

const variants = cva(" rounded-3xl    dark:bg-neutral-900    ", {
  variants: {
    size: {
      categoryMain: " col-span-4 row-span-1 md:row-span-2 bg-red-300 h-fit",
      slider:
        " col-span-full  row-span-1  md:row-span-4 bg-blue-300 h-full w-full",
    },
  },
  defaultVariants: {
    size: "categoryMain",
  },
});

type GridItemProps = {children: React.ReactNode} & VariantProps<
  typeof variants
>;

const Layout = ({size, children}: GridItemProps) => {
  return <div className={cn(variants({size, className: ""}))}>{children}</div>;
};

export default Layout;
