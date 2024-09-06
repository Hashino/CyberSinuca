import { Radio, RadioGroup } from '@headlessui/react';

interface MatchInfoSelectionProps {
  matchType: number | null;
  matchResult: number | null;
  setMatchResult: (n: number) => void;
}

const MatchResultSelection: React.FC<MatchInfoSelectionProps> = ({
  matchResult,
  setMatchResult,
  matchType,
}) => {
  const possibleResults: number[] = [];

  if (matchType !== null) {
    for (let i = 0; i < matchType; i++) {
      possibleResults.push(i);
    }
  }

  return (
    <div className="w-full">
      <RadioGroup value={matchResult} onChange={setMatchResult} aria-label="Match type">
        <div className="flex flex-wrap gap-2">
          {possibleResults.map((n: number) => (
            <Radio value={n} key={n} className="group">
              <div className="rounded-md bg-light p-2 px-3 py-2 text-xs font-semibold shadow-sm transition hover:cursor-pointer hover:brightness-90 group-data-[checked]:border group-data-[checked]:border-light-blue dark:bg-dark-3 dark:hover:bg-dark-2 dark:group-data-[checked]:border-pink">
                <span className="font-extralight group-data-[checked]:font-bold group-data-[checked]:text-dark-3 dark:group-data-[checked]:text-light">
                  {matchType} - {n}
                </span>
              </div>
            </Radio>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default MatchResultSelection;
