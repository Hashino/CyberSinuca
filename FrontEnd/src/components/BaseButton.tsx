interface Props {
  text?: string;
  isPrimary?: boolean;
  Icon?: React.FC<{ size?: number }>;
  style?: string;
  iconSize?: number;
}

const BaseButton: React.FC<Props> = (props: Props) => {
  return (
    <button
      className={
        props.style +
        ' flex items-center gap-1 rounded-lg border px-2 py-2 font-bold text-gray-3 shadow-inner-custom shadow-gray-3 dark:text-gray-1 dark:shadow-gray-1'
      }
    >
      {props.Icon && (
        <div className="">
          <props.Icon size={props.iconSize} />
        </div>
      )}
      {props.text && <span className="">{props.text}</span>}
    </button>
  );
};

export default BaseButton;
