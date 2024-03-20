import React from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { MockChats } from '~/data/mockData';
import ChatCard from '~/src/components/ChatCard';

const Inbox = () => {
  return (
    <ScrollView className="h-full w-full bg-white ">
      <FlatList
        scrollEnabled={false}
        className='pb-[100]'
        data={MockChats}
        renderItem={({ item }) => (
          <ChatCard company={item.company} logo={item.logo} message={item.message} key={item.id} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

export default Inbox;
