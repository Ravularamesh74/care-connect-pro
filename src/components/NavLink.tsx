"use client";

import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "navbar" | "sidebar" | "mobile";

interface NavLinkPropsExtended
  extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;

  variant?: Variant;
  icon?: React.ReactNode;
  badge?: string | number;
}

const baseStyles =
  "flex items-center gap-2 transition-all duration-200";

const variantStyles: Record<Variant, string> = {
  default: "text-sm text-muted-foreground hover:text-primary",
  navbar:
    "text-sm text-muted-foreground hover:text-primary px-2 py-1",
  sidebar:
    "px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-primary",
  mobile:
    "block w-full text-left text-base py-2 text-muted-foreground hover:text-primary",
};

const activeStyles: Record<Variant, string> = {
  default: "text-primary font-medium",
  navbar: "text-primary font-semibold border-b-2 border-primary",
  sidebar: "bg-primary/10 text-primary font-medium",
  mobile: "text-primary font-semibold",
};

const pendingStyles =
  "opacity-60 pointer-events-none";

const NavLink = forwardRef<HTMLAnchorElement, NavLinkPropsExtended>(
  (
    {
      className,
      activeClassName,
      pendingClassName,
      variant = "default",
      icon,
      badge,
      children,
      to,
      ...props
    },
    ref
  ) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            baseStyles,
            variantStyles[variant],
            className,

            isActive &&
              (activeClassName || activeStyles[variant]),

            isPending &&
              (pendingClassName || pendingStyles)
          )
        }
        {...props}
      >
        {/* ICON */}
        {icon && <span className="w-4 h-4">{icon}</span>}

        {/* TEXT */}
        <span>{children}</span>

        {/* BADGE */}
        {badge && (
          <span className="ml-auto text-xs bg-primary text-white px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </RouterNavLink>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };