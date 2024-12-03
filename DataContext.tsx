import React, { createContext, useState, useEffect, ReactNode } from 'react';
import Data from './assets/interface/interface';

interface DataContextType {
  data: Data | null;
  setData: React.Dispatch<React.SetStateAction<Data | null>>;
  userId: string;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<Data | null>(null);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // await new Promise(resolve => setTimeout(resolve, 2000));

        const response = await fetch('https://qa.corider.in/assignment/chat?page=0');
        const datas = await response.json();
        setData(datas);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && data.chats.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.chats.length);
      const randomUser = data.chats[randomIndex];
      
      setUserId(randomUser.sender.user_id);
    }
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData, userId }}>
      {children}
    </DataContext.Provider>
  );
};
