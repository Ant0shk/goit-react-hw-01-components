import user from '../assets/user.json';
import stats from '../assets/data.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistics';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} title="Document type stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </div>
  );
};

