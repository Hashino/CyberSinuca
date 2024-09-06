import { Radio, RadioGroup } from '@headlessui/react';

interface MatchInfoSelectionProps {
  matchType: number | null;
  setMatchType: (n: number) => void;
  setMatchResult: (n: number | null) => void;
}

const matchTypeValues: number[] = [1, 3, 5];

const MatchInfoSelection: React.FC<MatchInfoSelectionProps> = ({
  matchType,
  setMatchType,
  setMatchResult,
}) => {
  const changeMatchType = (n: number) => {
    setMatchType(n);
    setMatchResult(null);
  };
  return (
    <div className="w-full">
      <RadioGroup value={matchType} onChange={changeMatchType} aria-label="Match type">
        <div className="flex gap-2">
          {matchTypeValues.map((n) => (
            <Radio value={n} className="group" key={n}>
              <div className="rounded-md bg-light p-2 px-4 py-2 text-xs font-semibold shadow-sm transition hover:cursor-pointer hover:brightness-90 group-data-[checked]:border group-data-[checked]:border-light-blue dark:bg-dark-3 dark:hover:bg-dark-2 dark:group-data-[checked]:border-pink">
                <span className="font-extralight group-data-[checked]:font-bold group-data-[checked]:text-dark-3 dark:group-data-[checked]:text-light">
                  MD{n}
                </span>
              </div>
            </Radio>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default MatchInfoSelection;
