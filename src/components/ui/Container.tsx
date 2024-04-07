import { cn } from "@/lib/utils"


interface ContainerProps {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    className?: string;
    children: React.ReactNode;
  }

export function Container({ as: Component = 'div', className, children }: ContainerProps) {
  return (
    <Component className={cn('mx-auto max-w-7xl px-4 md:px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  )
}

export function GridContainer({ as: Component = 'div', children }: ContainerProps) {
  return (
    <Component className='max-w-none grid [grid-template-columns:min(100%,min(100%,50rem))_1fr] mt-8'>
      {children}
    </Component>
  )
}