import {cn} from "../../../utils/cn";
import {css} from "glamor";
import {cva, type VariantProps} from "class-variance-authority";

const variants = cva(" rounded-3xl    dark:bg-neutral-900    ", {
  variants: {
    size: {
      categoryMain: " col-span-4 row-span-1 md:row-span-2  h-fit bg-stone-300",
      slider:
        " col-span-full  row-span-1  md:row-span-4  h-full w-full bg-stone-300",
      banner: " p-2 col-span-full row-span-2   w-full",
      offer: "col-span-full  row-span-1  h-fit w-full bg-stone-200  p-2",
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
