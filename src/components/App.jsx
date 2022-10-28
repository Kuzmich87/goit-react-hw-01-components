import Profile from './Profile/Profile';
import user from '../data/user.json';

import Statistics from './Statistics/Statistics';
import stats from '../data/statistics.json';

import FriendList from './Friends/FriendList/FriendList';
import friends from '../data/friends.json';

import { TransactionHistory } from './Transactions/TransactionHistory';
import transactions from '../data/transactions.json';

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
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />;
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
