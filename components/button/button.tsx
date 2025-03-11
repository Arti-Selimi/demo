type Props = {
  text: string;
  background: string;
  color: string;
  paddingx: string;
  paddingy: string;
  className?: string;
};

export default function Button({
  text,
  background,
  color,
  paddingx,
  paddingy,
  className,
}: Props) {
  console.log(
    `bg-${background} rounded-[5px] px-${paddingx} py-${paddingy} text-${color}`
  );
  return (
      <button
        className={`${background} rounded-[5px] ${paddingx} ${paddingy} ${color} ${className} flex items-center justify-center 
        text-center font-extrabold`}
      >
        {text}
      </button>
  );
}
