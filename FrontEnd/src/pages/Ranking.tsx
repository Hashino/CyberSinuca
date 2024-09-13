import RankingTable from '../components/tables/RankingTable';
import BasicLayout from '../layout/BasicLayout';
import { Search } from 'lucide-react';
import { Input } from '@headlessui/react';
import { UserType } from '../types/user';
import { useState, useEffect } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../components/tables/Pagination';
import React from 'react';

interface ResponseProps {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: UserType[];
}

const Ranking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('_page') ? Number(searchParams.get('_page')) : 1;

  const [filter, setFilter] = useState('');

  //useEffect que atualiza a requisição de acordo com o filter
  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const { data: apiResponse, isLoading } = useQuery<ResponseProps>({
    queryKey: ['history', page],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:8888/usersByRating?_page=${page}&_per_page=10`
      );
      const data = await response.json();

      return data;
    },
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return null;
    // return <LoadingTable />;
  }

  return (
    <BasicLayout>
      <div className="flex h-full w-full flex-col px-4">
        <div className="py-4">
          <h1 className="px-4 py-2 text-2xl font-bold text-gray-3 dark:text-gray-1">RANKING</h1>
          <div className="h-fit w-full rounded-md bg-gray-1 shadow-md dark:bg-dark-2">
            <div className="flex w-full flex-wrap justify-between gap-4 p-4">
              <div className="group flex w-40 items-center gap-1 rounded-md bg-light px-2 text-gray-3 shadow-md outline-[1.5px] outline-pink focus-within:outline dark:bg-dark-3 dark:text-light">
                <Search size={16} />
                <Input
                  className="h-full w-full border-none bg-light p-2 text-sm focus:outline-none dark:bg-dark-3"
                  onChange={(event) => setFilter(event.target.value)}
                  placeholder="Busca"
                />
              </div>
              {apiResponse && (
                <Pagination page={page} items={apiResponse?.items} pages={apiResponse?.pages} />
              )}
            </div>
            <div className="w-full">
              <RankingTable players={apiResponse?.data} />
            </div>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Ranking;
