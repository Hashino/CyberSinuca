import { UserType } from '../../types/user';

interface RankingTableProps {
  players: UserType[] | undefined;
}

const RankingTable: React.FC<RankingTableProps> = ({ players }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left text-sm font-bold text-gray-1">
        <thead className="bg-gray-2 text-gray-1 dark:bg-dark-3">
          <tr>
            <th className="py-2 pl-4">#</th>
            <th className="py-2 pl-4">JOGADOR</th>
            <th className="py-2 pl-4">RATING</th>
          </tr>
        </thead>
        <tbody className="text-dark-1 dark:text-gray-1">
          {players?.map((player, index) => (
            <tr key={index} className="border-b border-gray-2 last:border-none dark:border-gray-3">
              <th className="py-3 pl-4">{player?.position}°</th>
              <th className="py-3 pl-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-sm">
                    <img src={player?.imgUrl} className="object-cover" alt="userpic" />
                  </span>
                  <span>{player?.username}</span>
                </div>
              </th>
              <th className="py-3 pl-4">{player?.rating}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankingTable;
