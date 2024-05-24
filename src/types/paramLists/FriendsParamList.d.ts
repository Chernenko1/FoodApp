type FriendsParamList = {
  MainPage: undefined;
  FriendsList: {friends: UserFriends[]};
  FriendRequests: {_id: string};
  FriendPage: {id: string};
  SearchUsers: undefined;
  Settings: SettingsParamList;
};
